class SetterFunction { 
    /**
     * Lightweight, generic setter class. Used to set a value from a component, form, or other source. Like a FormController, except more limited and generic
     * @param {function} onSet - function to be called when the value is set by a component, form, or other source.
     */
    constructor(onSet = null) {
        this.onSet = null;
        this.setFunction(onSet);
    }

    set(value) { 
        if (typeof this.onSet === "function") { 
            const result = this.onSet(value);
            return typeof result === "undefined" ? null : result;
        }

        throw new Error("SetterFunction.set() failed: onSet is not a function");
    }

    setFunction(onSet) {
        this.onSet = typeof onSet === "function" ? onSet : null;
    }
    
    isMounted() { 
        return typeof this.onSet === "function";
    }
}

export default SetterFunction;
