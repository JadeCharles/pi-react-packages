class Controller { 
    
    constructor(props) {
        if (typeof props === 'function') { 
            props = { onClick: props };
        }
        
        this.id = props?.id || 'controller-' + Math.floor(Math.random() * 1000000).toString();
        this.userData = {};

        // Callbacks/Events
        this.onClick = (typeof props?.onClick === 'function') ? props.onClick : (e) => false;
        this.onChange = (typeof props?.onChange === 'function') ? props.onChange : (e) => false;
        this.onKeyPress = (typeof props?.onKeyPress === 'function') ? props.onKeyPress : (e) => false;
        this.onSubmit = (typeof props?.onSubmit === 'function') ? props.onSubmit : (e) => false;

        // Methods
        this.open = (typeof props?.open === 'function') ? props.open : (e) => true;
        this.close = (typeof props?.close === 'function') ? props.close : (e) => true;
        this.cancel = (typeof props?.cancel === 'function') ? props.cancel : (e) => true;
        this.submit = (typeof props?.submit === 'function') ? props.submit : (e) => false;
        
        this.refresh = (typeof props?.refresh === 'function') ? props.refresh : (e) => false;
        this.delete = (typeof props?.refresh === 'function') ? props.refresh : (e) => false;

        this.getData = (typeof props?.getData === 'function') ? props.getData : (options) => null;
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
