import ConfigModel from "../models/ConfigModel";

class FormController {
    static isDebug = !ConfigModel.isProduction();

    constructor(prefix = "", id = null) {
        this.id = id || (Math.floor(Math.random() * 999999999)).toString(16) + "-" + (new Date()).getTime().toString(16);
        this.prefix = prefix;
        this.errors = {};
        this.callbacks = {};
        this.onClick = null;
        this.userData = {};
        this.callbacks["main"] = (options) => {
            return {};
        };

        if (typeof prefix !== "string") prefix = "";
    }

    getData(key, options = null) { 
        if (typeof key !== "string") key = "main";
        return typeof this.callbacks[key] === "function" ? this.callbacks[key](options) : null;
    }

    getErrors(key) {
        if (typeof key !== "string") key = "main";
        return typeof this.errors[key] === "object" ? this.errors[key] : null;
    }

    setUserData(key, value) {
        this.userData[key] = value;
    }

    getUserData(key, defaultValue = undefined) { 
        const val = this.userData[key];
        if (typeof val === 'undefined') return defaultValue;

        return val;
    }

    async submit(e) { 
        if (typeof this.onClick !== "function") throw new Error("FormController.submit: onClick callback is not a function");
        
        const result = this.onClick(e);
        return (typeof result?.then === "function") ? await result : result;
    }

    setSubmit(submitFunction) {
        if (typeof submitFunction !== "function") throw new Error("FormController.setSubmit: submitFunction must be a function");

        if (typeof this.onClick === "function" && FormController.isDebug) { 
            console.warn("Overwriting onClick callback for FormController with id: " + this.id);
        }

        this.onClick = submitFunction;
        return true;
    }
    
    setErrors(errorJson) { 
        if (typeof errorJson !== "object") throw new Error("FormController.setErrors: errorJson must be a valid error json object");

        let setCount = 0;
        
        for (let p in errorJson) { 
            if (typeof p !== "string" || p.length === 0) continue;
            this.setError(p, errorJson[p] || "An unknown error occurred");
            setCount++;
        }

        return setCount > 0;
    }

    setError(key, message) { 
        if (typeof key !== "string" || key.length === 0)
            throw new Error("Missing error key");
        
        if (typeof message !== "string")
            throw new Error("Error message must be a string");
        
        if (!!this.prefix) key = this.prefix + key;
        
        this.errors[key] = message || "An unknown error occurred";
    }

    hasErrors() { 
        return Object.keys(this.errors).length > 0;
    }

    focusError(delay = 250) {
        let field = null;

        for (let p in this.errors) {
            if (typeof p !== "string" || p.length === 0) continue;

            let element = document.getElementById(p);
            if (!element) element = document.querySelector('[name="' + p + '"]');

            if (!!element) { 
                field = element;
                break;
            }
        }

        if (!field) return false;

        if (delay > 0) { 
            setTimeout(() => {
                field.focus();
            }, delay);
            
            return true;
        }

        field.focus();
        
        return true;
    }

    /**
     * Sets the getData callback for the given key
     * @param {string} key - The key to use for the callback
     * @param {function} callback - The callback function to use
     * @param {boolean} overwrite - Whether to overwrite an existing callback for the given key
     */
    setCallback(key, callback, overwrite = false) { 
        if (typeof key !== "string" || key.length === 0)
            throw new Error("Missing callback key");
        
        if (typeof callback !== "function")
            throw new Error("Callback must be a function");
        
        const exists = (typeof this.callbacks[key] === "function");
        
        if (exists && !overwrite) {
            const message = "Callback already exists for FormController key: " + key + ". ";
            console.warn(message + "Set overwrite to true to overwrite the existing callback for FormController with id: " + this.id);
            return;
        }

        const action = exists ? "Updated" : "Added";
        this.callbacks[key] = callback;

        if (FormController.isDebug)
            console.log("FormController" + this.id + ": Callback " + action + " for key: " + key);
    }

    removeCallback(key) { 
        if (typeof key !== "string" || key.length === 0)
            return false;
        
        const success = (typeof this.callbacks[key] === "function");
        
        delete this.callbacks[key];

        return success;
    }

    clearErrors(key = null) { 
        if (typeof key !== "string") { 
            this.errors = {};
            return true;
        }

        if (key.length === 0) return false;

        if (!!this.prefix) key = this.prefix + key;
        delete this.errors[key];

        return true;
    };
}

export default FormController;
