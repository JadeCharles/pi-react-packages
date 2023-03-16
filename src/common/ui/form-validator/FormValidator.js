import ValidateModel from "./ValidateModel";

class FormValidator { 
    constructor(...args) {
        this.map = {};
        this.fields = [];
        this.scrollAnchorPrefix = (args["0"]?.scrollAnchorPrefix || args["0"]) || "";
        this.scrollAnchorSuffix = (args["0"]?.scrollAnchorSuffix || args["1"]) || "";
        this.onValidate = FormValidator.onDefaultValidate;
        this.isSet = false;
    }
    
    validate() {
        let isValid = true;
        
        if (this.fields.length === 0) { 
            console.log("No fields to validate. Validation success.");
            return isValid;
        }
        
        for(let i = 0; i < this.fields.length; i++) {
            const field = this.fields[i];
            if (!field.validate()) isValid = false;
        }
        
        return isValid;
    }

    addRef(fieldRef, elementId, errorMessage = null, name = null, scrollAnchor = null) {
        //if (typeof document === "undefined") return fieldRef;
        if (typeof fieldRef !== "object" || fieldRef === null)
            throw new Error("Invalid field type added: " + (typeof fieldRef).toString());

        if (!elementId && (typeof fieldRef.current === "string"))
            elementId = FormValidator.createElementName(fieldRef.current);

        if (typeof name !== "string" || name.length === 0)
            name = FormValidator.createNameFromElementId(elementId);

        if (typeof errorMessage !== "string" || errorMessage.length === 0)
            errorMessage = name + " is invalid";

        const fieldJson = {
            name: name,
            ref: fieldRef,
            elementId: elementId?.toString(),
            scrollAnchor: scrollAnchor,
            errorMessage: errorMessage,
        };

        return this.add(new ValidateModel(fieldJson));
    }

    add(field, overwrite = true) {
        if (typeof document === "undefined") return field;
        if (!(field instanceof ValidateModel)) throw new Error("Invalid field type added: " + (typeof field).toString());

        if (typeof field !== "object") {
            throw new Error("Invalid field type added: " + (typeof field).toString());
        }

        if (!!this.map[field.elementId]) {
            if (overwrite === true) {
                delete this.map[field.elementId];
            }
            else return this.map[field.elementId];
        }

        if (typeof field.elementId !== "string" || field.elementId.length === 0)
            throw new Error("Could not add field " + field.name + ": elementId is invalid: " + field.elementId);

        const hasSuffix = (this.scrollAnchorSuffix.length > 0);
        const hasPrefix = (this.scrollAnchorPrefix.length > 0);

        if (hasPrefix && !field.scrollAnchor.startsWith(this.scrollAnchorPrefix))
            field.scrollAnchor = this.scrollAnchorPrefix + field.scrollAnchor;

        if (hasSuffix && !field.scrollAnchor.endsWith(this.scrollAnchorSuffix))
            field.scrollAnchor += this.scrollAnchorSuffix;

        this.map[field.elementId] = field;
        this.fields.push(field);
        this.isSet = true;

        return field;
    }

    createErrorJson() {
        let errorJson = {};
        
        for(let i = 0; i < this.fields.length; i++) {
            const field = this.fields[i];
            if (field.result?.isValid !== true) {
                errorJson[field.elementId] = field.errorMessage;
            }
        }
        
        return errorJson;
    }
    
    setDisabledById(elementId, isDisabled = true) { 
        const target = this.getFieldByTarget(elementId);
        if (!target) return false;
        
        target.isDisabled = isDisabled;
        
        return true;
    }

    setEnabledById(elementId, isEnabled = true) {
        return this.setDisabledById(elementId, !isEnabled);
    }
    
    reset() { 
        for(let i = 0; i < this.fields.length; i++) {
            if (typeof this.fields[i].reset === "function")
                this.fields[i].reset();
        }
    }
    
    resetError(elementId) { 
        if (!elementId || typeof elementId !== "string") return false;
        return this.getFieldByTarget(elementId)?.reset() === true;
    }

    getFirstInvalidField() { 
        return this.fields.find((field) => field.result?.isValid === false);
    }
    
    getFieldByTarget(target) {
        const t = (typeof target);

        if (t === "string") target = this.map[target];
        else if (t === "object" && typeof target?.elementId === "string") target = this.map[target.elementId];
        else if (t === "number" && target >= 0 && target < this.fields.length) target = this.fields[target];
        
        return target;
    }
    
    scrollToAnchor(target) {
        target = this.getFieldByTarget(target);
        
        if (typeof target?.scrollToAnchor === "function" && target !== this) {
            target.scrollToAnchor();
            return true;
        }
        
        return false;
    }

    getValidator(elementId) { 
        if (typeof elementId !== "string" || elementId.length === 0) {
            return null;
        }
        
        const field = this.map[elementId];
        
        if (typeof field !== "object" || field === null) {
            return null;
        }
        
        return field;
    }
    
    static createElementName(camelCaseName) { 
        if (!camelCaseName) return "";
        
        return camelCaseName.replace(/([A-Z])/g, ($1) => {
            return "_" + $1.toLowerCase();
        });
    }
    
    static createNameFromElementId(elementId) {
        if (!elementId) return "";
        
        let name = elementId.replace(/_([a-z])/g, ($1) => {
            return $1.toUpperCase().replace('_', ' ');
        });
        
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    static onDefaultValidate(fields, isValid) {
        if (isValid === true) console.log("All fields are valid.");
        else {
            // Print out all invalid fields, if any -- Debug for now
            for(let i = 0; i < fields.length; i++) {
                const field = fields[i];
                if (!field.isValid()) console.warn("Field " + field.name + " is invalid: " + field.errorMessage);
            }
        }
    }
}

export default FormValidator;
