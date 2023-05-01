class Controller { 
    constructor(props) {
        if (typeof props === 'function') { 
            props = { onClick: props };
        }
        
        this.id = props?.id || 'controller-' + Math.floor(Math.random() * 1000000).toString();
        this.userData = {};

        /**
         * @type {number}
         * @default 0
         * @public
         * @readonly
         * @description The current state of the controller (0=Default/Closed/No-Activity, 1=Open/Active/ActiveState, 2=Opening/Transitioning-to-active, 3=Closing/Transitioning-to-non-active, -1=Deleted, -2=Deleting, -3=Cancelling/Aborting Action)
         */
        this.state = 0;

        // Callbacks/Events
        this.onClick = (typeof props?.onClick === 'function') ? props.onClick : (e) => false;
        this.onChange = (typeof props?.onChange === 'function') ? props.onChange : (e) => false;
        this.onKeyPress = (typeof props?.onKeyPress === 'function') ? props.onKeyPress : (e) => false;
        this.onSubmit = (typeof props?.onSubmit === 'function') ? props.onSubmit : (e) => false;

        // Methods
        this.open = (typeof props?.open === 'function') ? props.open : (e) => this.setState(1);
        this.close = (typeof props?.close === 'function') ? props.close : (e) => this.setState(0);
        this.cancel = (typeof props?.cancel === 'function') ? props.cancel : (e) => this.setState(0);
        this.submit = (typeof props?.submit === 'function') ? props.submit : (e) => false;
        this.update = (typeof props?.update === 'function') ? props.update : (e) => false;
        
        this.refresh = (typeof props?.refresh === 'function') ? props.refresh : (e) => false;
        this.delete = (typeof props?.refresh === 'function') ? props.refresh : (e) => this.setState(-1);

        this.getData = (typeof props?.getData === 'function') ? props.getData : (options) => null;
    }

    setState(state) {
        if (typeof state !== "number") throw new Error("Invalid state: " + state + ". Expected number.");

        let ret = true;
        if (state < -3 || state > 3) {
            ret = null;
            console.warn("Non-standard state passed to Controller.setState(" + state + ") (" + this.id + ")");
        }

        this.state = state;

        return ret;
    }

    setUserData(key, value) {
        this.userData[key] = value;
    }

    getUserData(key, defaultValue = undefined) { 
        const val = this.userData[key];
        if (typeof val === 'undefined') return defaultValue;

        return val;
    }

    setOpenCallback(callback) {
        this.open = callback;
    };
    
    setCloseCallback(callback) {
        this.close = callback;
    }
    
    /**
     * Copies text to the clipboard
     * @param text {string} - The text to copy
     * @returns {Promise<boolean>}
     */
    static async copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Page Text: ' + text);
            return true;
        } catch (err) {
            console.error('Failed to copy: ', err);
            throw err;
        }
    }

}

export default Controller;
