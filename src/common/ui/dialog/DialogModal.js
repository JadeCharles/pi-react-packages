
class DialogModal {
    static backgroundId = "main-dialog-background";
    static containerClassName = "dialog-container-element";
    static isDebug = process.env.NODE_ENV !== "production";
    static dialogs = [];
    static onScrollEvents = {};

    static instanceCount = 0;
    /**
     * Pops up, etc.
     * @param title - Title of the dialog
     * @param body - Body element or string of the dialog
     * @param buttons - Buttons to add to the dialog
     */
    constructor(title, body, buttons) {
        let id = "dialog-" + (Math.random() * 99999999).toString(16);
        this.containerId = "dialog-container-" + id;
        this.bodyId = body?.id || ("dialog-body-" + id);
        this.width = null;
        
        this.title = title;
        this.body = body;
        
        this.isComplete = false;
        this.buttons = buttons;
        this.onNotify = null;

        if (typeof title === "object") { 
            const options = title;

            if (typeof options.id === "string" && options.id.length > 0) {
                id = options.id;
                this.id = id;
                this.containerId = "dialog-container-" + id;
            }

            this.title = options.title || null;

            if (!this.body || !!options.body) { 
                this.body = options.body;
                this.bodyId = this.body?.id || ("dialog-body-" + id);
            }

            if (!this.buttons) this.buttons = options.buttons || null;

            if (typeof this.onNotify !== "function" && typeof options.onNotify === "function")
                this.onNotify = options.onNotify;
        }

        this.container = document.createElement("div"); 
        this.container.className = DialogModal.containerClassName;
        this.container.id = this.containerId;
        this.onBackgroundDismiss = null;

        DialogModal.dialogs.push(this);

        if (DialogModal.isDebug) {
            if (DialogModal.isDebug)
                console.log("Created Dialog with ID: " + this.containerId);
        }

        this.onClose = (sender) => { 
            if (DialogModal.isDebug)
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

    async notify(notification) {
        if (typeof this.onNotify !== "function") return false;
        const rsp = this.onNotify(notification);
        return (typeof rsp?.then === "function") ? await rsp : rsp;
    }

    async completeAsync(message, title = "Complete!", duration = 2000) {
        if (this.isComplete) return true;

        this.isComplete = true;
        return await this.close(200, { removeBackground: false });
    }
    
    async open(onRender, ...args) {
        let options = typeof onRender === "object" ? onRender : null;
        let duration = typeof onRender === "number" ? onRender : 200;
        let dialogClassName = "";

        if (!!args) {
            if (args.length > 0) duration = args[0];
            if (args.length > 1) options = args[1];
            if (args.length > 2) dialogClassName = args[2];

            if (typeof duration === "object") {
                if (!options) options = { duration: 200, ...duration };
                else options = { ...duration, ...options };
            }

            if (typeof dialogClassName !== "string") dialogClassName = (options.className || options.class_name || "");
            if (typeof duration !== "number") duration = options.duration;
        }

        if (typeof options !== "object") options = {};
        if (typeof duration !== "number" || duration < 0) duration = 0;
        if (typeof dialogClassName !== "string") dialogClassName = "";

        const anchorRect = typeof options?.anchorElement?.getBoundingClientRect === "function" ?
            options.anchorElement.getBoundingClientRect() :
            { x: options?.x, y: options?.y, width: options?.width, height: options?.height };
        
        let x = options?.x || (anchorRect?.x || -1);
        let y = options?.y || (anchorRect?.y || -1);
        let pos = options?.pos || {};

        if (typeof pos !== "object") {
            pos = {};
        }

        if (!pos.x) pos.x = options?.completeX || "-50%";
        if (!pos.y) pos.y = options?.completeY || "-50%";
        
        const hasAnchor = (x >= 0 || y >= 0);

        if (hasAnchor) {
            pos.x = x.toFixed(1) + "px"; // - (containerRect.width / 2);
            pos.y = y.toFixed(1) + "px";
        }
        
        await this.delay(10);    // Allow for any DOM updates happening at the moment...

        if (typeof onRender !== "function") onRender = null;

        const bg = DialogModal.getBackground(this);
        const me = this;

        DialogModal.addBackgroundListener((e) => {
            e.stopPropagation();
            const rsp = (typeof me.onBackgroundDismiss === 'function') ? me.onBackgroundDismiss(this) : true;
            if (rsp !== false) me.close(200, "cancel");
        });

        // Add background blocker
        if (bg.parentElement === null) {
            if (DialogModal.isDebug)
                console.log("Attaching background");
            
            document.body.appendChild(bg);

            await this.delay(10);
        }

        if (hasAnchor) bg.className = "anchored";
        else bg.className = "open";
        
        // Attach container to the background blocker
        if (this.container.parentElement === null) {
            if (DialogModal.isDebug)
                console.log("Attaching Container");
            
            bg.appendChild(this.container);
            await this.delay(10);   // Allow for any DOM updates to happen
        }
        
        const firstClassName = hasAnchor ? "-anchor" : "";
        const transitionClassName = firstClassName + " open ";

        if (options?.isMouseClick === true) { 
            const crect = this.container.getBoundingClientRect();
            
            if (options.mouseHorizontalAlign === "left") { 
                pos.x =(x - crect.width/2.0).toFixed(1) + "px"; // - (containerRect.width / 2);
            }

            if (options.mouseVerticalAlign === "bottom") {
                pos.y =(y + crect.height).toFixed(1) + "px"; // - (containerRect.width / 2);
            }

        } else if (hasAnchor) { 
            pos.y = (y + anchorRect.height).toFixed(1) + "px";
        }

        if (typeof options?.onScroll === "function" && typeof options.scrollId === "string") { 
            const scrollData = {
                container: this.container,
                scrollId: options.scrollId,
                initialScrollTop: options.initialScrollTop || 0,
            }

            const scrollFunction = (e) => options.onScroll(scrollData, e);
            DialogModal.onScrollEvents[options.scrollId] = scrollFunction;
            this.scrollId = options.scrollId;

            document.addEventListener("scroll", scrollFunction);

            console.log("Added event: scroll");
        }

        this.container.style.transform = "translate(" + pos.x + ", " + pos.y + ")";
        this.container.style.heght = "0px";
        this.container.className = (DialogModal.containerClassName + firstClassName + (dialogClassName || "")).trim();

        await this.delay(10);

        this.container.className = (DialogModal.containerClassName + transitionClassName + (dialogClassName || "")).trim();
        //const containerRect = this.container.getBoundingClientRect();
        //this.container.style.height = (containerRect.height + 24).toFixed(1) + "px";

        if (typeof onRender === "function") onRender(this);

        return this.container;
    }
    
    async close(duration = 200, sender = null) {
        if (!this.container?.parentElement) return true;
        
        if (typeof this.scrollId === "string") {
            if (typeof DialogModal.onScrollEvents[this.scrollId] === "function") { 
                document.removeEventListener("scroll", DialogModal.onScrollEvents[this.scrollId]);
                delete DialogModal.onScrollEvents[this.scrollId];
                console.warn("Removed onScroll handler");
            }
        }

        let onCloseResult = null;

        if (typeof this.onClose === "function") {
            onCloseResult = this.onClose(duration, sender || this);
            if (onCloseResult === false) return false;
        }

        DialogModal.dialogs = DialogModal.dialogs.filter((x) => x !== this);
        const noBackgroundRemoval = sender?.removeBackground === false;

        // Fade out the container
        this.container.className = onCloseResult?.closingClassName ||
            ((this.container.className || "").replace(" open", "") + " closed").trim();

        if (DialogModal.isDebug)
            console.log("Container Class: " + this.container.className);
        
        if (duration > 0) await this.delay(duration * (noBackgroundRemoval ? 0.5 : 1));
        
        this.container.className = onCloseResult?.className || DialogModal.containerClassName;
        this.container.remove();

        if (noBackgroundRemoval) {
            if (DialogModal.isDebug) console.log("Not removing background.");
            DialogModal.addBackgroundListener(null);
            return true;
        }
        
        if (DialogModal.dialogs.length > 0) {
            if (DialogModal.isDebug) { 
                const s = DialogModal.dialogs.length === 1 ? "" : "s";
                console.log("There are still " + DialogModal.dialogs.length + " dialog" + s + " open. Not closing background.");
            }

            return true;
        }

        // Then fade out the background
        const bg = DialogModal.getBackground(this);
        DialogModal.addBackgroundListener(null);

        bg.className = onCloseResult?.closedClassName || "closed";

        await this.delay(onCloseResult?.duration || duration);
        
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
            if (DialogModal.isDebug)
                console.log("Removing existing listener...");
            DialogModal.background?.removeEventListener("click", DialogModal.backgroundListener);
        }

        if (typeof onClick === "function") { 
            DialogModal.background.addEventListener("click", onClick);
            DialogModal.backgroundListener = onClick;
            return;
        }

        DialogModal.backgroundListener = null;
        if (DialogModal.isDebug) console.log("Removed background listener"); 
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

        if (Array.isArray(options)) {
            options.reverse();
            return options.map((o) => ButtonData.create(o));
        }

        if (options instanceof ButtonData) return options;
        if (typeof options === "function") return new ButtonData("Okay", "dialog-button", "dialog-show-button", options);
        else if (typeof options === "string") return new ButtonData(options, "dialog-button", "dialog-show-button", () => true);

        if (typeof options !== "object") {
            throw new Error("Invalid options for button data: " + (typeof options));
        }

        if (typeof options.buttonData === "object") return ButtonData.create(options.buttonData);

        const caption = typeof options.caption === "string" ? options.caption : "Okay";
        const className = typeof options.className === "string" ? options.className : "dialog-button";
        const id = typeof options.id === "string" ? options.id : "dialog-show-button";
        const onClick = typeof options.onClick === "function" ? options.onClick : (() => console.log("No onClick function for button"));
        const payload = options.key || (options.payload || null);

        return new ButtonData(caption, className, id, onClick, payload);
    }
}

export default DialogModal;
