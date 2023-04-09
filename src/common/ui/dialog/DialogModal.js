
class DialogModal {
    static backgroundId = "main-dialog-background";
    static containerClassName = "dialog-container-element";
    static isDebug = process.env.NODE_ENV !== "production";
    static dialogs = [];

    static instanceCount = 0;
    /**
     * Pops up, etc.
     * @param title - Title of the dialog
     * @param body - Body element or string of the dialog
     * @param buttons - Buttons to add to the dialog
     */
    constructor(title, body, buttons) {
        const id = (Math.random() * 1000000).toString(36);
        this.continerId = "dialog-container-" + id;
        this.bodyId = body?.id || ("dialog-body-" + id);
        this.width = null;
        
        this.title = title || "Alert";
        this.body = body || "Dialog v0.1";
        
        this.isComplete = false;
        this.buttons = buttons;
        
        this.container = document.createElement("div"); 
        this.container.className = DialogModal.containerClassName;
        this.container.id = this.continerId;
        this.onBackgroundDismiss = null;

        DialogModal.dialogs.push(this);

        if (DialogModal.isDebug) { 
            console.log("Created Dialog with ID: " + this.continerId);
        }

        const me = this;
        let _;
        
        this.onClose = (sender) => { 
            console.log("Dialog closed (default).");
        }

        DialogModal.instanceCount++;

        this.container.addEventListener("click", (e) => {
            e.stopPropagation();
            return false;
        });
        
        DialogModal.getBackground();
    }

    setWidth(width) {
        if (typeof width === "number") width = width.toString() + "px";
        if (typeof width !== "string") width = null;
        
        this.width = width;
        this.container.style.width = width;
    }

    async completeAsync(message, title = "Complete!", duration = 2000) {
        if (this.isComplete) return true;

        this.isComplete = true;
        return await this.close(200, { removeBackground: false });
    }
    
    async open(onRender, duration = 200, dialogClassName = "") {
        await this.delay(1);

        if (typeof onRender === "number") {
            let d = onRender;
            if (typeof duration === "function") {
                onRender = duration;
                duration = d;
            } else if (duration === 200 || typeof duration !== "number") { 
                duration = onRender;
            }

            onRender = null;
        }

        const bg = DialogModal.getBackground(this);
        const me = this;

        DialogModal.addBackgroundListener((e) => {
            e.stopPropagation();
            const rsp = (typeof me.onBackgroundDismiss === 'function') ? me.onBackgroundDismiss(this) : true;
            if (rsp !== false) me.close(200, "cancel");
        });

        if (bg.parentElement === null) {
            if (DialogModal.isDebug)
                console.log("Attaching background");
            
            document.body.appendChild(bg);
            await this.delay(20);

            bg.className = "open";
        }
        
        if (this.container.parentElement === null) {
            if (DialogModal.isDebug)
                console.log("Attaching Container");
            
            bg.appendChild(this.container);
            await this.delay(50);
        }
        
        this.container.className = (DialogModal.containerClassName + " open " + dialogClassName).trim();

        if (typeof onRender === "function") onRender(this);

        return this.container;
    }
    
    async close(duration = 200, sender = null) {
        if (!this.container?.parentElement) return true;
        
        if (typeof this.onClose === "function") {
            const x = this.onClose(duration, sender || this);
            if (x === false) return false;
        }

        DialogModal.dialogs = DialogModal.dialogs.filter((x) => x !== this);
        const noBackgroundRemoval = sender?.removeBackground === false;

        // Fade out the container
        //this.container.className = DialogModal.containerClassName + " closed"
        this.container.className = ((this.container.className || "").replace(" open", "") + " closed").trim();

        if (DialogModal.isDebug)
            console.log("Container Class: " + this.container.className);
        
        if (duration > 0) await this.delay(duration * (noBackgroundRemoval ? 0.5 : 1));
        
        this.container.className = DialogModal.containerClassName;
        this.container.remove();

        if (noBackgroundRemoval) {
            console.warn("Not removing background.");
            DialogModal.addBackgroundListener(null);
            return true;
        } else { 
            console.warn("Removing BG: " + duration);
        }
        
        if (DialogModal.dialogs.length > 0) { 
            const s = DialogModal.dialogs.length === 1 ? "" : "s";
            console.warn("There are still " + DialogModal.dialogs.length + " dialog" + s + " open. Not closing background.");
            return true;
        }

        // Then fade out the background
        const bg = DialogModal.getBackground(this);
        DialogModal.addBackgroundListener(null);

        bg.className = "closed";
        await this.delay(duration);
        
        bg.className = "";
        bg.remove();

        return true;
    }
    
    /**
     * Utility/Helper function to sleep a thread
     * @param {number} duration How long to delay in milliseconds
     * @returns A delayed promise
     */
    async delay(duration = 200) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    }

    /**
     * Checks to see if a given variable is that of a React component (function class or JSX)
     * @param {object|any} component - The object in question
     * @returns {boolean}
     */
    static isReact(component) {
        return (typeof component?.key === 'object' && typeof component.ref === 'object' && typeof component.props === 'object');
    }
    
    /**
     * Gets the background HTMLElement for the dialog. Creates it if it doesn't exist (assuming 'createIfEmpty' is true)
     * @param {boolean} createIfEmpty - Whether to create the background element if it doesn't exist
     * @returns {HTMLElement} The background element
     */
    static getBackground(createIfEmpty = true) {
        if (!DialogModal.background) {
            if (createIfEmpty === false) return null;
            
            DialogModal.background = document.createElement("div");
        }

        DialogModal.background.id = DialogModal.backgroundId;

        return DialogModal.background;
    }

    static addBackgroundListener(onClick) {
        if (!DialogModal.background) throw new Error("No background to add a listener to");
        if (typeof DialogModal.backgroundListener === "function") { 
            console.log("Removing existing listener...");
            DialogModal.background?.removeEventListener("click", DialogModal.backgroundListener);
        }

        if (typeof onClick === "function") { 
            DialogModal.background.addEventListener("click", onClick);
            DialogModal.backgroundListener = onClick;
            return;
        }

        DialogModal.backgroundListener = null;
        console.log("Removed background listener"); 
    }

    /**
     * Checks to see if the background element is attached to the document (parent element)
     * @returns {boolean} Whether the background element is attached to the document
     */
    static isBackgroundAttached() {
        return DialogModal.getBackground(false)?.parentElement !== null;
    }

    /**
     * 
     * @param {string|object} caption - Caption of the button, or a React component
     * @param {string} id - Html Element id of the button
     * @param {function} onClick - Function to call when the button is clicked
     * @returns 
     */
    static createButton(caption, id, onClick) {
        if (typeof id === "function") {
            onClick = id;
            id = null;
        }
        
        if (!id || typeof id !== "string") id = "dialog-button-" + (Math.random() * 1000000).toString(36);
        
        const button = document.createElement("button");
        button.id = id;
        button.innerHTML = caption;
        button.className = "dialog-button";
        button.off();
        button.addEventListener("click", (e) => {
            if (typeof e.stopPropagation === "function") e.stopPropagation();
            if (typeof e.preventDefault === "function") e.preventDefault();

            if (typeof onClick === 'function') return onClick(e);
        });
        
        return button;
    }

}

export class ButtonData {
    /**
     * Button metadata used to render a button in whatever way
     * @param caption {string|object} - Caption of the button, or a React component
     * @param className {string|null} - Html Element class name of the button
     * @param id { string|null } - Html Element Id of the button
     * @param onClick { function|null } - Function to call when the button is clicked. Can (should) be async
     * @param options { object|null } - Options for the button
     */
    constructor(caption, className = null, id = null, onClick = null, options = null) {
        this.id = id;
        this.className = className;
        this.caption = caption;
        this.onClick = onClick;
        this.key = options?.key || null;
        this.payload = options || null;
    }

    static create(...args) {
        if (!args) return new ButtonData("Okay", "dialog-button", "dialog-show-button", () => true);

        const isList = typeof args?.length === "number";
        let options = isList ? args[0] : args;

        console.log("Creating Button Data:");
        console.log(" > isList: " + isList);
        console.log(" > options: " + (typeof options));
        console.log(" > options.buttonData: " + (typeof options?.buttonData));

        if (options instanceof ButtonData) return options;
        if (typeof options === "function") return new ButtonData("Okay", "dialog-button", "dialog-show-button", options);
        else if (typeof options === "string") return new ButtonData(options.buttonData, "dialog-button", "dialog-show-button", () => true);

        if (typeof options !== "object") {
            throw new Error("Invalid options for button data: " + (typeof options));
        }

        const caption = typeof options.caption === "string" ? options.caption : "Okay";
        const className = typeof options.className === "string" ? options.className : "dialog-button";
        const id = typeof options.id === "string" ? options.id : "dialog-show-button";
        const onClick = typeof options.onClick === "function" ? options.onClick : (() => console.log("No onClick function for button"));
        const key = options.key?.toString() || null;

        return new ButtonData(caption, className, id, onClick, key);
    }
}

export default DialogModal;
