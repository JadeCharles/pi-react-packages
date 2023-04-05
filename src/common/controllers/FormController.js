class FormController {
    static isDebug = process.env.NODE_ENV !== "production";

    constructor(prefix = "", id = null) {
        this.id = id || (Math.floor(Math.random() * 999999999)).toString(16) + "-" + (new Date()).getTime().toString(16);
        this.prefix = prefix;
        this.errors = {};
        this.callbacks = {};
        this.callbacks["main"] = (options) => {
            return {};
        };

        if (typeof prefix !== "string") prefix = "";
    }

    getData(key) { 
        if (typeof key !== "string") key = "main";
        return typeof this.callbacks[key] === "function" ? this.callbacks[key]() : null;
    }

    getErrors(key) {
        if (typeof key !== "string") key = "main";
        return typeof this.errors[key] === "object" ? this.errors[key] : null;
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
