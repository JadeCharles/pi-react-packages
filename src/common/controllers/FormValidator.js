import PasswordPolicy from "./PasswordPolicy";

class FormValidator { 
    static isDebug = false;

    static validateExistance = (value) => { 
        if (typeof value === "number")
            return value.toString().length > 0;
        
        return !!value && value.toString().length > 0;
    };

    /**
     * Uses regex to validate the format of an email address
     * @param {string} email - An email address to validate
     * @returns {boolean}
     */
    static validateEmail = (email) => { 
        if (typeof email !== "string") return false;
        return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    };

    /**
     * Uses regex to validate the format of a phone number
     * @param {string} phone - A phone number to validate
     * @returns {boolean} - True if the phone number is valid, false otherwise
     */
    static validatePhone = (phone) => {
        if (typeof phone !== "string") return false;
        return phone.match(/^(\d{3})\D*(\d{3})\D*(\d{4})$/);
    };

    /**
     * Validates a password choice based on a policy. Default policy properties are:
     * - minLength: 6
     * - maxLength: 256
     * @param {string} password - The password to validate
     * @param {any|null} policy - The password policy to validate against
     */
    static validatePassword = (password, policy = null) => { 
        if (!(policy instanceof PasswordPolicy))
            policy = new PasswordPolicy(policy);
        
        const success = policy.validate(password);

        return {
            success: success,
            errors: policy.messages,
            policy: policy,
            valueOf: () => success,
            toString: () => (policy.messages?.length > 0 ? policy.messages.join(", ") : "Password Valid: " + success.toString()),
        }
    };

    static validatePasswords = (password, confirmationPassword) => { 
        return (typeof confirmationPassword === "string" && password === confirmationPassword);
    };

    /**
     * Validates a form based on a set of required fields.
     * @param {object} requiredFields - An object of field names and their validation rules. For each field name, the value can be:
     * - A string: The error message to display if the field is empty
     * - An object: The object can have the following properties:
     *      - message: The error message to display if the field is empty
     *      - validator: A function that takes a value and returns true if the value is valid, and either false or a result object if the value is invalid. The result object can have the following properties:
     *          - success: True if the value is valid, false otherwise
     *          - message: The description of why it did not pass validation
     *      - type: The type of validation to perform. Can be one of the following:
     *      - email: Validates that the value is a valid email address
     *      - phone: Validates that the value is a valid phone number
     *      - password: Validates that the value is a valid password
     */
    constructor(requiredFields) { 
        if (!requiredFields) requiredFields = {};

        this.validators = {};
        this.messages = requiredFields;

        for (let fieldId in requiredFields) {
            if (typeof requiredFields[fieldId] === "string") {
                this.messages[fieldId] = requiredFields[fieldId] || "'" + fieldId + "' field is required";
            } else if (typeof requiredFields[fieldId] === "object") {
                this.messages[fieldId] = (requiredFields[fieldId].message || requiredFields[fieldId].text) ||
                    (requiredFields[fieldId].msg || "'" + fieldId + "' field is required");
                
                if (typeof requiredFields[fieldId].validator === "function") { 
                    this.validators[fieldId] = requiredFields[fieldId].validator;
                    continue;
                }

                switch (requiredFields[fieldId].type) {
                    case "email":
                        this.validators[fieldId] = FormValidator.validateEmail;
                        break;
                    case "phone":
                        this.validators[fieldId] = FormValidator.validatePhone;
                        break;
                    default:
                        // Will default to FormValidator.validateExistance when it is invoked
                        break;
                }
                
            } else {
                console.warn("FormValidator: Invalid validator object value for field: " + fieldId);
            }
        }
    }

    validate(fieldId, value) {
        if (!fieldId) throw new Error("FormValidator: Invalid fieldId: " + fieldId);

        if (typeof fieldId === "object") {
            return this.validateJson(fieldId);
        }
        
        const _isValid = (typeof this.validators[fieldId] === "function") ?
            this.validators[fieldId] :
            FormValidator.validateExistance;
        
        const rsp = _isValid(value);
        const success = typeof rsp === "boolean" ? rsp : (rsp?.success === true);
        
        if (success === true) return true;

        if (typeof rsp === "boolean") {
            if (!this.messages[fieldId])
                this.messages[fieldId] = "Invalid value for field: " + fieldId;
            
            return false;
        }

        if (!this.messages[fieldId])
            this.messages[fieldId] = rsp.message || "Invalid value for field: " + fieldId;

        if (FormValidator.isDebug) {
            if (!success) console.warn("FormValidator: Field '" + fieldId + "' failed validation. Value: " + value);
            else console.log("FormValidator: Field '" + fieldId + "' passed validation. Value: " + value);
        }

        return false;
    }

    validateJson(json) {
        let errs = {};

        for (let fieldId in json) { 
            if (typeof json[fieldId]=== "string" || typeof json[fieldId] === "number" || json[fieldId] === null) { 
                if (!this.validate(fieldId, json[fieldId]))
                    errs[fieldId] = this.messages[fieldId] || "'" + fieldId + "' field is invalid.";
            } else if (typeof json[fieldId] === "object") {
                const fieldErrs = this.validateJson(json[fieldId]);
                if (Object.keys(fieldErrs).length > 0) errs[fieldId] = fieldErrs;
            }
        }

        return errs;
    }
}

export default FormValidator;
