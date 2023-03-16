import ValidationResult from "./ValidationResult";

class ValidateModel { 
    constructor(options, ...args) {
        if (typeof options !== "object")
            throw new Error("ValidatedModel.constructor: options must be an object");
        
        if (!options) options = {};
        
        // Ref items
        this.ref = options.ref || null;
        this.name = options.name || null;
        this.isDisabled = false;
        this.result = null;
        this.elementId = options.id || (options.elementId || null);
        this.errorMessage = options.error_message || (options.errorMessage || null);
        this.scrollAnchor = options.scroll_anchor || (options.scrollAnchor || null);
        this.messages = [];
        
        // Validation Rules
        this.validateFunction = typeof options.validate === "function" ?
            options.validate :
            this.validateEmpty;
        
        // ...
        if (!this.ref || typeof this.ref !== "object") this.ref = null;
        if (!this.name || typeof this.name !== "string") this.name = null;
        if (!this.elementId || typeof this.elementId !== "string") this.elementId = "";
        if (!this.errorMessage || typeof this.errorMessage !== "string") this.errorMessage = "Invalid value for {0}";
        if (!this.scrollAnchor || typeof this.scrollAnchor !== "string") this.scrollAnchor = null;
        
        if (this.name === null) this.name = "Field";
        if (!this.scrollAnchor) this.scrollAnchor = (this.elementId || "").toString();
        
        this.onValidate = typeof options.onValidate === "function" ? options.onValidate : null;
        if (this.onValidate === null && options.onValidated === "function") this.onValidate = options.onValidated;
        
        if (this.onValidate === null) this.onValidate = (result) => {
            if (result?.isValid === true) console.log(this.name + " is valid");
            else console.warn(this.name + " is invalid: " + (result?.errorMessage || "No error message available"));
        };
    }

    getErrorMessage() { 
        if (this.result?.isValid === false) 
            return this.result.errorMessage;
        
        return null;
    }
    
    isValid() {
        return this.result?.isValid === true || this.isDisabled;
    }
    
    validate(...args) {
        if (this.isDisabled === true) { 
            this.messages.push("Field is disabled: " + this.name);
            return this.toResultOptions(this.getValue());
        }
        
        this.messages.push("Calling Validate on " + this.name);
        this.result = this.validateFunction(args);
        
        return this.result;
    }

    reset() { 
        this.result = null;
        this.isDisabled = false;
        return true;
    }
    
    getValue(nullValue = null) {
        let value = this.ref?.current?.value;

        if (typeof value !== "string" && typeof value !== "number") {
            const element = typeof document !== "undefined" ? document.getElementById(this.elementId || "") : null;
            if (element !== null) value = element.value ?? (element.innerHTML || nullValue);
            else value = nullValue;
        }

        return value?.trim();
    }
    
    scrollToAnchor() {
        const element = document.getElementById(this.scrollAnchor || "");
        const formField = document.getElementById(this.elementId || "");

        element?.scrollIntoView({ behavior: "smooth", block: "start" });

        if (!!formField) {
            setTimeout(() => {
                formField.focus();
            }, 500);
        }
    }

    toResultOptions(value = null, isValid = true) {
        if (typeof isValid === "string") {
            const tmp = value;

            value = isValid;

            if (typeof tmp === "boolean") isValid = tmp;
            else isValid = true;
        }

        return {
            isValid: isValid,
            value: value,
            elementId: this.elementId,
            originalValue: value,
            errorMessage: this.errorMessage,
            scrollAnchor: this.scrollAnchor,
        };
    }
    
    validateEmpty(minLength = 1) {
        let nm = (this.name || "").toLowerCase();
        if (nm.startsWith("email")) return this.validateEmail();

        let value = this.getValue();
        let options = this.toResultOptions(value);
        
        if (typeof minLength !== "number") minLength = 1;
        
        if (value === null || value.length < minLength) {
            options.isValid = false;
            options.errorMessage = this.errorMessage.replace("{0}", this.name);
        }

        return new ValidationResult(options);
    }
    
    validateEmail() {
        let value = this.getValue() || "";
        let options = this.toResultOptions(value);
        
        options.originalValue = value;
        value = value.toLowerCase();
        
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        /* check if 'value' is a valid email address */
        if (!pattern.test(String(value).toLowerCase())) {
            options.isValid = false;
            options.errorMessage = this.errorMessage.replace("{0}", this.name);
        }
        
        return new ValidationResult(options);
    }
    
    validatePhoneNumber() {
    }
    
}

export default ValidateModel;
