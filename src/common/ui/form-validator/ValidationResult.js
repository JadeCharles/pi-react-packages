/**
 * Object that is returned from a validation function
 * */
 class ValidationResult {
    /**
     * Object that is returned from a validation function
     * @param options {object} { isValid: true, errorMessage: null, elementId: null, scrollAnchor: null, originalValue: null, value: null}
     * @param args {array} [errorMessage, elementId, scrollAnchor, originalValue, value]
     */
    constructor(options, ...args) {
        const t = typeof options;

        switch(t) { 
            case "object":
                break;
            case "boolean":
                options = {
                    isValid: options,
                    errorMessage: options === false && !!args[1] ? args[1].toString() : null 
                };
                break;
            case "string":
                options = { isValid: false, errorMessage: options };
                break;
            default:
                options = { isValid: true };
                break;
        }
        
        this.isValid = typeof options.isValid === "boolean" ? options.isValid : false;
        this.errorMessage = typeof options.errorMessage === "string" && options.errorMessage.length > 0 ? options.errorMessage : null;
        this.elementId = typeof options.elementId === "string" && options.elementId.length > 0 ? options.elementId : null;
        this.scrollAnchor = typeof options.scrollAnchor === "string" && options.scrollAnchor.length > 0 ? options.scrollAnchor : null;
        this.originalValue = (typeof options.originalValue === "string" || typeof options.originalValue === "number") ? options.originalValue : null;
        this.value = (typeof options.value === "string" || typeof options.value === "number") ? options.value.toString() : null;
        
        if (this.value === "null") this.value = this.originalValue;
    }
}

export default ValidationResult;
