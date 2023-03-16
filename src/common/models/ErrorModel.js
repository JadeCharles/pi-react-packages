class ErrorModel {
    /**
     *
     * @param err {Error|object|string|null} - Any sort of error. Form or otherwise.
     * @param isFormError {boolean|null} - If null, will be determined by the absence of "data" and "response" properties.
     */
    constructor(err, isFormError = null) {
        if (!err) err = {};
        else if (typeof err !== "object") {
            err = { message: err?.toString() || ErrorModel.createDefaultMessage(err) };

            if (isFormError !== false) {
                err.general = err.message;
                delete err.message;
                isFormError = true;
            }
        }

        this.error = {...err};  // Save raw error
        this.isFormError = isFormError || false;
        this.requiredFields = (err.required_fields || err.requiredFields) || null;

        if (typeof this.requiredFields !== "object" || !this.requiredFields)
            this.requiredFields = {};

        isFormError = isFormError === true ||
            err.isFormError === true ||
            err.is_form_error === true ||
            typeof err.general === "string" ||
            (typeof err.data === "undefined" && typeof err.response === "undefined");

        this.formError = isFormError ?
            {...err} :
            {...(err.formError || err.form_error)} || {};

        this.message = err?.message || (this.formError?.general || "");
        this.messages = Array.isArray(err?.messages) ? err.messages : [];

        if (!!this.message && this.messages.length === 0)
            this.messages.push(this.message);

        this.parse(err);
    }

    /**
     * Parses the error and returns true if there is an error message.
     * @param {object|Error|null} err 
     * @returns 
     */
    parse(err = null) {
        if (!err) err = this.error || (this.isFormError ? this.formError : null);

        if (!err?.message) {
            err = err?.response?.data || err?.data || {};

            this.message = err?.message || ErrorModel.createDefaultMessage(err instanceof ErrorModel);
            this.messages = err?.messages || [];

            if (this.messages.length === 0) this.messages.push(this.message);
        }

        const switched = !this.isFormError;
        this.isFormError = this.isFormError || (!!this.formError && Object.keys(this.formError).length > 0);

        if (this.isFormError && switched) {
            if (!this.formError) this.formError = {};

            if (this.messages.length > (this.formError.messages?.length || 0))
                this.formError.messages = [...this.messages];

            if (this.message !== this.formError.message) {
                this.formError.message = this.message;
            }
        }

        return (this.message?.length > 0 || this.isFormError);
    }

    hasFormErrors() {
        return Object.keys(this.formError || {}).length > 0;
    }

    focus(prefix = "", delay = 200) {
        return ErrorModel.focusInput(this.formError, prefix, delay);
    }

    /**
     * Typically used for server exceptions. Creates an object with form field names as keys (field), and error messages as values (message).
     * @param ex { object|object[]|string|string[]|null} - Usually an error that came from an API call.
     * @param formElementIdPrefix {string|null} - If included, it will call try to find the element with the given ID and focus it.
     * @param defaultError {string} - If no error message is found, this will be used.
     * @param defaultField {string} = If no field name is found, this will be used.
     * @returns {object} - A raw JSON object to be used to display form errors. The keys are the field ids, and the values are the error messages. For example: { "email": "Email is missing"}
     */
    static createFormError(ex, formElementIdPrefix = null, defaultError = "An unknown error happened. Check logs for details.", defaultField = "general") {
        let data = ex?.response?.data || (ex?.data || ex);

        if (typeof data === "string" && ex?.response?.status >= 300 && data.includes("<!DOCTYPE")) { 
            return { general: "An error with status " + ex.response.status.toString() + " occurred. Please try again later." };
        }
        
        let er = {};

        if (Array.isArray(ex) && ex?.length > 0) {
            const items = typeof ex[0] === "string" ?
                ex.map((x) => { return { message: x, field: defaultField }; }) :
                ex;

            data = { objects: items };

        } else if (typeof ex === "string") {
            data = { objects: [{ message: ex, field: defaultField }] };
        } else if (typeof data === "string") {
            data = { objects: [{ message: data, field: defaultField }] };
        }

        if (!data) er.general = ex?.message || defaultError;
        else {
            const objects = data?.objects;

            if (Array.isArray(objects) && objects.length > 0) {
                for(let i = 0; i < objects.length; i++) {
                    let f = objects[i];

                    if (typeof f === "string") {
                        f = { message: f, field: defaultField };
                    } else if (typeof f === "object") {
                        if (!f.message) f.message = f?.error || defaultError;
                        if (!f.field) f.field = (f.field_name || f.fieldId) || ((f.field_id || defaultField) || (f.field_key || f.key));
                    } else {
                        console.warn("Error parser: unknown object type: " + (typeof f).toString() + " (" + f?.toString() + "). Skipping");
                        continue;
                    }

                    if (f.message && f.field) {
                        let existing = !!er[f.field] ? er[f.field] + ". " : "";
                        er[f.field] = existing + f.message;
                    }
                }
            } else er.general = data?.message || defaultError;

            if (Object.keys(er).length === 0)
                er.general = data?.message || defaultError;
        }

        if (typeof formElementIdPrefix === "string" && formElementIdPrefix.length > 0) {
            ErrorModel.focusInput(er, formElementIdPrefix);
        }

        return er;
    }

    /**
     * Focuses the cursor on the first input with an error.
     * @param errorsObject {object|null} - If null, will return null.
     * @param prefixOptions {string|object|null} - If null, will ignore the elementId prefix. For example: If the elementId is "company-name", the prefix is "company-" and the error key is "name", then the elementId will be "company-name".
     * @param delay {number} - The delay in milliseconds before focusing the input. Default is 200ms. Maximum is 3000ms.
     * @returns {*}
     */
    static focusInput(errorsObject, prefixOptions = null, delay = 200) {
        const errorKeys = Object.keys(errorsObject);

        if (errorKeys.length > 0 && typeof errorKeys[0] === "string") {
            const prefix = typeof prefixOptions === "string" ?
                prefixOptions :
                (typeof prefixOptions === "object" ? (prefixOptions.prefix || prefixOptions[errorKeys[0]]) : "");

            if (typeof delay !== "number" || delay < 0 || delay > 3000) delay = 200;
            setTimeout(() => {
                const key = (prefix + errorKeys[0]).trim();

                let div = document.getElementById(key);

                if (!div && key.indexOf("_") > 0)
                    div = document.getElementById(key.replaceAll("_", "-"));

                div?.focus();

            }, delay);
        }

        return errorsObject;
    }

    static createDefaultMessage(metaMessage) {
        const metaType = typeof metaMessage;
        const suffix = metaType === "string" || metaType === "number" || metaType === "boolean" ?
            "(" + metaMessage.toString() + ")" :
            (metaType === "object" ? ("(" + JSON.stringify(metaMessage) + ")") : "");

        return "An unknown error occurred" + (" " + suffix).trim();
    }    
}

export default ErrorModel;
