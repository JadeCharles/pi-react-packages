import PasswordPolicy from "./PasswordPolicy";

class FormValidator { 
    static isDebug = false;

    static validateExistance = (value) => { 
        if (typeof value === "number")
            return value.toString().length > 0;
        
        return !!value && value.toString().length > 0;
    };

    static validateEmail = (email) => { 
        if (typeof email !== "string") return false;
        return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    };

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
                
                switch (requiredFields[fieldId].type) {
                    case "email":
                        this.validators = FormValidator.validateEmail;
                        break;
                    case "phone":
                        this.validators = FormValidator.validatePhone;
                        break;
                    default:
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
        
        if (!this.messages[fieldId]) return true;

        const _isValid = (typeof this.validators[fieldId] === "function") ?
            this.validators[fieldId] :
            FormValidator.validateExistance;
        
        const success = _isValid(value);
    
        if (FormValidator.isDebug) {
            if (!success) console.warn("FormValidator: Field '" + fieldId + "' failed validation. Value: " + value);
            else console.log("FormValidator: Field '" + fieldId + "' passed validation. Value: " + value);
        }

        return success;
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
