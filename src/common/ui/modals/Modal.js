
export class ModalSize { 
    static create = (source, useNull = false) => {
        if (typeof source === "number") source = { width: source, height: source };
        else if (typeof source !== "object") source = {};

        if (typeof source?.width === "number" && typeof source?.height === "number")
            return new ModalSize(source.width, source.height);
        
        return useNull === true ? null : new ModalSize(0, 0);
     };
    /**
     * Simple class to represent the size of a thing
     * @param {number} width - The width of the thing
     * @param {number} height - The height of the thing
     */
    constructor(width = 0, height = 0) { 
        this.width = width;
        this.height = height;
    }
}

export class ModalPosition { 
    static create = (source, useNull = false) => {
        const defaultSourceType = typeof source === "undefined" ?
            "dialog" :
            typeof source === "string" ? source : (typeof source).toString().toLowerCase();

        if (typeof source === "number") source = { x: source, y: source, type: "number" };
        else if (typeof source !== "object") source = {};

        if (!source.type) source.type = defaultSourceType;

        if (typeof source.x === "number" && typeof source.y === "number")
            return new ModalPosition(source.x, source.y, source.type);
        
        return useNull === true ? null : new ModalPosition(0, 0, source.type);
    };
    
    /**
     * Simple class to represent the position of a thing
     * @param {number} x - The x position of the thing
     * @param {number} y - The y position of the thing
     * @param {string} source - Type of position: mouse (spawns from mouse position), anchored (spawns from HTMLElement), dialog (floats, likely centered)
     */
    constructor(x = 0, y = 0, source = "default") {
        this.x = x;
        this.y = y;
        this.source = source;
    }
}

class Modal {
    static classes = {
        background: "pi-modal-background",
        container: "pi-modal-container",
        title: "pi-modal-title",
        body: "pi-modal-body",
        button: "pi-modal-button",
    };

    static transitionDurations = {
        background: 100,
        container: 300,
        containerBody: 300,
        tick: 10,
    }

    static globalClassName = "";

    static states = {
        background: 0,
        backgroundClickId: null,
    };

    static clickTime = 0;
    static clickDifference = 0;

    static modalStack = [];

    static backgroundElementId = "pi-modal-background";
    static backgroundElement = null;

    static debugElementId = "modal-background-debug";
    static debugElement = null;
    static debugMessages = [];

    /**
     * @param {object} json - The JSON object to use to create the modal
     * @param {string} json.id - The id of the modal
     * @param {ModalPosition|object {x: number, y: number }|undefined} json.position - The position of the modal
     * @param {ModalSize|object {width: number, height: number }|undefined} json.size - The size of the modal
     */
    constructor(json) { 
        if (typeof json !== "object") json = {};

        this.hasId = typeof json.id === "string" && json.id.length > 0;
        this.id = this.hasId ? json.id : "pi-modal-" + Math.floor(Math.random() * 1000000);
        this.containerId = this.id + "-container";
        this.container = null;

        this.state = 0;
        this.bodyElementId = typeof json.bodyElementId === "string" ? json.bodyElementId : null;
        this.userClassName = typeof json.className === "string" ? json.className : "";
        this.backgroundClassName = json?.backgroundClassName || null;
        this.backgroundCloses = json?.backgroundCloses !== false;

        this.verticalPlacement = "";
        this.horizontalPlacement = "";

        this.onPreOpen = null;
        this.targetRect = null;

        /** The anchor position of the modal. Use style.transform.translateX/Y to move it from there */
        this.position = json.position instanceof ModalPosition ?
            json.position :
            ModalPosition.create(json.position);

        this.modalType = json.modalType || this.position.source;
        this.size = json.size instanceof ModalSize ?
            json.size :
            ModalSize.create(json.size);
        
        if (typeof this.userClassName !== "string") this.userClassName = "";
        
        console.log("Created '" + this.modalType + "' Modal: " + this.id);
    }

    async openAsync(content, buttons = []) {
        const clickTime = new Date().getTime();
        let summary = "Opening with state: " + this.state;

        if (this.hasId) {
            const div = document.getElementById(this.id);
            if (!!div) { 
                throw new Error("Modal with id '" + this.id + "' already exists.");
                //return;
            } else { 
                console.warn("HasId: " + this.id + " but no element found. Good.");
            }
        }

        // Open the background
        if (this.state !== 0) { 
            console.warn("State: " + this.state);
            throw new Error("Modal is in an invalid state to open: " + this.state);
        }

        this.state = 2; // Opening...
        const bg = Modal.getOrCreateBackgroundElement();

        // Async function called syncronously
        // The background takes the lowest transition duration, so it's always opened first (or at least tied for first)
        if (!!bg) Modal.openBackgroundAsync(bg, this);
        
        const durations = Modal.transitionDurations;

        // Create the container, which has the content appended to it
        this.container = this.createContainerWithContent(content, buttons);

        Modal.modalStack.push(this);    // <--- This needs to happen IMMEDIATELY after setting this.container
        Modal.addDebugMessage("Modal Added to Stack (SetState: 2, ActualState: " + this.state + "): " + this.id);

        bg.appendChild(this.container);

        this.setContainerClassName("");
        
        const containerRect = await this.getContainerMeasurementAsync();
        const offset = this.getOptionsOffset();
        const scrollOffset = this.getScrollOffset();

        this.size = new ModalSize(containerRect.width, containerRect.height);

        if (this.position?.x >= 0) { 
            //if (this?.anchor?.width > 0) this.position.x += (this.anchor.width / 2.0) - (this.size.width / 2.0); // Centers horizontally
            const x = this.position.x + offset.x + scrollOffset.x;
            this.container.style.left = Math.round(x) + "px";
        }

        if (this.position?.y >= 0) {
            let y = this.position.y + (offset.y + scrollOffset.y);

            if (!this.verticalPlacement && this?.anchor?.height > 0)
                y += (this.anchor.height / 2.0) - (this.size.height / 2.0);
            else if (this.verticalPlacement === "top") {
                y -= (containerRect.height - this.anchor.height);
            }

            this.container.style.top = Math.round(y) + "px";
        }

        if (typeof this.onPreOpen === "function") this.onPreOpen(this, containerRect);

        const containerDuration = typeof this.options?.duration === "number" ?
            this.options.duration :
            durations.container;

        this.container.style.transitionDuration = containerDuration + "ms";
        this.setContainerClassName("opening");
        this.setBodyClassName("pi-open");

        summary += ", DURATION: " + containerDuration;
        
        await Modal.delay(containerDuration);

        // This is the phase where the content body is transitioning into view

        if (this.state > 2 || this.state === 0) {   // 3=closing, 0=closed/dead
            console.warn("Dialog did not open because the state is: " + this.state);
            if (this.state === 0) return this;

            const clickDiff = Modal.clickDifference;
            Modal.addDebugMessage("Modal was closed before it fully opened (ClickDiff: " + clickDiff + ", ExpetedState: 2, CurrentState: " + this.state + "): " + this.id, 2);

            this.state = 1;
            this.closeAsync(null, { duration: 200 });

            return this;
        }

        summary += ", Changing state from " + this.state + " to 1";
        this.state = 1; // Opened state.

        this.setContainerClassName("open");

        if (!this.backgroundCloses) {
            Modal.addDebugMessage("No Event: onBackgroundClick: " + this.id);
            return this;
        }
        
        console.warn("Supposedly opened fine: " + summary);
        return this;    // TODO: new Promise<Modal>...
    }

    async closeContainerAsync(options, state = null) {
        if (typeof options !== "object")
            options = {};
        
        const durations = Modal.transitionDurations;
        const containerDuration = typeof options.duration === "number" && options.duration > 0 ?
            options.duration :
            durations.container;
        
        this.container.style.transitionDuration = containerDuration + "ms";
        this.setContainerClassName("closing");

        await Modal.delay(containerDuration);

        this.setContainerClassName("closed");
        await Modal.delay(durations.tick);

        const bodyElement = this.getBodyElement();
        if (!!bodyElement?.parentNode) bodyElement.remove();

        if (!!this.container) { 
            if (!!this.container.parentNode) this.container.remove();
            this.container = null;
        }

        if (typeof state === "number") this.state = state;
    }

    async closeAsync(sender, options = null) {
        if (!options) options = {};

        if (this.state === 0) { 
            Modal.addDebugMessage("closeAsync: Modal is already closed (state: 0): " + this.id);
        } else if (this.state === 3) { 
            Modal.addDebugMessage("closeAsync: Modal is already closing (state: 3)... " + this.id);
            return;
        }
        
        const bgStillOpening = (this.state === 2);
        
        if (bgStillOpening) { // Opening still...
            // Background is currently opening, so since we tried to close the modal, nothing really needs to change except perhaps the closing duration.
            // Does it make sense to shorten the closing duration if it was initiated "quickly" (before it fully opens)...?
            //Modal.addDebugMessage("closeAsync: Modal is still opening... " + this.id, 1);
            console.error("Still Opening: " + options.duration);
        }

        this.state = 3; // Closing...

        if (!this.container) { 
            Modal.addDebugMessage("closeAsync: No Container element for modal: " + this.id, 3);
            return false;
        }

        await this.closeContainerAsync(options);

        this.state = 4;

        // Async function called syncronously
        if (!bgStillOpening) Modal.closeBackgroundAsync(sender, this);

        this.state = 0; // Closed => Idle

        this.setContainerClassName("");

        const popIndex = Modal.modalStack.indexOf(this);
        if (popIndex >= 0) Modal.modalStack.splice(popIndex, 1);

        if (Modal.modalStack.length === 0)
            this.removeBodyClassName("pi-open");

        return true;
    }

    getScrollOffset(scrollElement = null) { 
        const offset = { x: 0, y: 0 };
        if (typeof document === "undefined") return offset;

        if (!scrollElement) scrollElement = document.documentElement || document.body;
        if (!scrollElement) return offset;

        offset.x = scrollElement.scrollLeft;
        offset.y = scrollElement.scrollTop;

        if (typeof offset.x !== "number") offset.x = 0;
        if (typeof offset.y !== "number") offset.y = 0;

        return offset;
    }

    getOptionsOffset() { 
        const offset = {
            x: typeof this.options?.offsetX === "number" ? this.options.offsetX : 0,
            y: typeof this.options?.offsetY === "number" ? this.options.offsetY : 0
        };

        if (!this.options || this.options.offset === "mouse")
            return offset;

        if (typeof this.anchor?.height === "number") { 
            if (this.options.offsetY === "bottom") {
                offset.y = this.anchor.height;
            } else if (this.options.offsetY === "top") { 
                offset.y = -this.anchor.height;
            }
        }

        if (typeof this.anchor?.width === "number") { 
            if (this.options.offsetX === "right") {
                offset.x = this.anchor.width;
            } else if (this.options.offsetX === "left") { 
                offset.x = -this.anchor.width;
            }
        }

        if (typeof offset.x !== "number") offset.x = 0;
        if (typeof offset.y !== "number") offset.y = 0;

        return offset;
    }

    removeBodyClassName(className) { 
        const bodyElement = document.querySelector("html") || document.querySelector("body");
        if (!bodyElement || !className || typeof className !== "string") return false;

        if (!bodyElement.classList.contains(className)) { 
            return true;
        }

        //delete bodyElement.style.transform;

        bodyElement.className = (bodyElement.className || "").replace(className, "").trim();
        if (bodyElement.className === "") bodyElement.removeAttribute("class");

        return true;
    }

    setBodyClassName(className) { 
        const bodyElement = document.querySelector("html") || document.querySelector("body");
        if (!bodyElement || !className || typeof className !== "string") return false;

        const top = bodyElement.scrollTop;
        if (bodyElement.classList.contains(className)) { 
            return true;
        }
        
        bodyElement.className = ((bodyElement.className || "") + " " + className).trim();
        //bodyElement.style.transform = "translateY(-" + top + "px)";

        return true;
    }

    setContainerClassName(className) {
        if (!this.container) return null;
        
        if (!className) className = "";
        const newClassName = ((Modal.classes.container + " " + this.userClassName).trim() + " " + className.trim()).trim();

        if (newClassName !== this.container.className) { 
            this.container.className = newClassName;
            //console.warn("CLASSNAME Set (" + this.container.className + ") : " + this.container.className);
            //if (isTheThing) throw new Error("Toast - Check the style properties");
        }

        return this.container.className || null;
    }

    async getContainerMeasurementAsync(force = false) {
        const size = { width: 0, height: 0, x: -1, y: -1 };
        
        let rect = this.targetRect;

        if (!!rect && !force) {
            size.width = rect.width;
            size.height = rect.height;
            size.x = rect.left;
            size.y = rect.top;
            return size;
        }

        if (!this.container) return size;

        const restoreTransition = this.container.style.transitionDuration;
        const restoreProperty = this.container.style.transitionProperty;

        this.container.style.transitionDuration = 0;
        this.container.style.transitionProperty = "none !important";

        this.setContainerClassName("measure");

        await Modal.delay(1);

        rect = this.container.getBoundingClientRect();

        size.width = rect.width;
        size.height = rect.height;
        size.x = rect.left;
        size.y = rect.top;
        
        this.setContainerClassName("");

        await Modal.delay(Modal.transitionDurations.tick);

        this.container.style.transitionDuration = restoreTransition;
        this.container.style.transitionProperty = restoreProperty;

        return size;
    }

    getContainerElement(createdIfNotExistant = true) { 
        if (!this.container) { 
            this.container = document.getElementById(this.containerId);

            if (!this.container) {
                if (!createdIfNotExistant) return null;
                this.container = document.createElement("div");
                this.container.id = this.containerId;
            }

            this.container.className = Modal.classes.container;
        }

        return this.container;
    }
    
    /**
     *  The first child of the container that has a visual component.
     *  There can be zero or more child elements at any given time, but it's almost always only one.
     *  If there is more than one child element, the bodyElement should always be the first one (but that could change)
     * @returns {HtmlElement|null} */
    getBodyElement() { 
        if (!this.bodyElementId || typeof document === "undefined") { 
            console.warn("No body element: " + this.bodyElementId);
            return null;
        }

        //console.log("BodyElementId: " + this.bodyElementId);
        return document.getElementById(this.bodyElementId);
    }

    /**
     * Gets (or creates) the HTML element that is the invisible container for the modal body, and appends the given content to it.
     * It does NOT append it to the background, so you must do that after you make this call.
     * It needs to be display:block so we can accurately measure the size of the modal with all its contents in order to properly center/position it
     * @param {string|HtmlElement|null} content - The content to display in the modal
     * @param {Array} buttons - The buttons to display in the modal
     * @returns HtmlElement
     */
    createContainerWithContent(content, buttons = []) { 
        const container = this.getContainerElement();
        content = Modal.createHtmlContent(content);

        if (!content.id) content.id = this.bodyElementId = this.id + "-body";
        this.bodyElementId = content.id;
        
        while (container.hasChildNodes())
            container.removeChild(container.firstChild);
    
        if (!container.parentNode) { 
            const duration = Math.min(Modal.transitionDurations.container, Modal.transitionDurations.containerBody);
            content.style.transitionDuration = duration + "ms";
            container.appendChild(content);
        }

        return container;
    };

    /** Static Methods */

    /**
     * Creates a new HtmlElement with the given content. Does NOT append to document.body.
     * If the given content is null, an empty div is returned. If the given content is an HTMLElement, it is returned as is.
     * @param {string|number|object|null} content - The content to create
     * @returns HtmlElement
     */
    static createHtmlContent(content) { 
        if (content === null || typeof content === "undefined") { 
            const div = document.createElement("div");
            div.innerHTML = "";
            div.className = Modal.classes.body;
            return div;
        }

        if (content instanceof HTMLElement) {
            if (!!content.className) content.className = (content.className + " " + Modal.classes.body).trim();
            else content.className = Modal.classes.body;

            return content;
        }

        const contentType = typeof content;
        const div = document.createElement("div");

        div.className = Modal.classes.body;
        
        if (contentType !== "object" || (content instanceof Date)) {
            div.innerHTML = content?.toString() ?? "";
        } else {
            div.innerHTML = JSON.stringify(content, null, 4);
            div.content = content;
        }

        return div;
    }

    static async openBackgroundAsync(backgroundElement, senderModal) {
        const bg = (backgroundElement instanceof HTMLElement) ?
            backgroundElement :
            Modal.getOrCreateBackgroundElement();

        if (!bg) throw new Error("Unable to get background element");

        if (Modal.states.background > 0 || (bg.classList?.contains("open") || bg.classList?.contains("opening"))) { 
            console.warn("BG is already open or opening");

            // TODO: Fix this. Check for specific classNames
            if (senderModal.backgroundClassName?.toString().length > 0 && senderModal.defaultBackgroundClassName !== senderModal.backgroundClassName) {
                // console.log("Setting background class name: " + senderModal.backgroundClassName);
                // console.log(" > This: " + senderModal.backgroundClassName);
                // console.log(" > CurrentBG: " + bg.className);

                bg.className = typeof bg.className === "string" ?
                    bg.className.replace(senderModal.defaultBackgroundClassName, senderModal.backgroundClassName) :
                    senderModal.backgroundClassName;
            }

            return bg;
        }

        Modal.states.background = 2;

        const classes = Modal.classes;
        const durations = Modal.transitionDurations;
        const bgDuration = Math.min(durations.background, Math.min(Modal.transitionDurations.containerBody, Modal.transitionDurations.container));
        const bgClassName = senderModal?.backgroundClassName || classes.background;

        //bg.style.display = "block";
        bg.style.transitionDuration = bgDuration + "ms";
        await Modal.delay(durations.tick);

        bg.className = bgClassName + " opening";
        await Modal.delay(bgDuration);

        bg.className = bgClassName + " open";
        await Modal.delay(durations.tick);

        Modal.states.background = 1;

        return bg;
    };

    static async closeBackgroundAsync(e, senderModal, durationOverride = null) {
        console.log("closeBackgroundAsync(e, senderModel) [" + (!!e) + ", " + (!!senderModal) + "]");

        if (Modal.states.background === 0) { 
            console.warn("Background state is 0 when trying to close it. Aborting");
            return false;
        }
        
        if (Modal.states.background !== 1) {
            Modal.addDebugMessage("closeBackgroundAsync: Background state is not open: " + Modal.states.background, 3);
            return false;
        }

        const activeModals = Modal.modalStack.filter(m => m.state === 1);

        if (activeModals.length > 0) { 
            Modal.addDebugMessage("closeBackgroundAsync: Modal stack still contains active modals. Top Modal is: " + activeModals[activeModals.length - 1].id, 2);
            console.log("Total Modals: " + Modal.modalStack.length);
            return false;
        }

        const bg = Modal.getOrCreateBackgroundElement(false);
        if (!bg) { 
            console.warn("No bg element found when trying to close it.");
            return false;
        }

        const classes = Modal.classes;
        const durations = Modal.transitionDurations;
        const bgDuration = typeof durationOverride === "number" ?
            durationOverride :
            Math.min(durations.background, Math.max(Modal.transitionDurations.containerBody, Modal.transitionDurations.container));

        bg.style.transitionDuration = bgDuration + "ms";
        bg.className = classes.background + " closing";

        await Modal.delay(bgDuration);

        bg.className = classes.background + " closed";
        await Modal.delay(durations.tick);

        bg.className = classes.background;
        bg.style.display = null;

        Modal.states.background = 0;

        bg.remove();

        console.log("Background closed gracefully and fully.");

        return true;
    }

    static async delay(duration = 200) {
        if (duration <= 0 || typeof duration !== "number")
            return;

        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    }

    /**
     * Gets the existing background HTMLElement, or creates it with a click EventListener (and appends it to document.body) if it doesn't exist.
     * @param {boolean} appendIfNotExistant - If true, and the background element hasn't already been created, it will create it and append it to the document.body
     * @returns HTMLDivElement
     */
    static getOrCreateBackgroundElement(appendIfNotExistant = true) {
        if (!Modal.backgroundElement) {
            if (!appendIfNotExistant) return null;

            const c = Modal.classes;
            const background = document.createElement("div");
            const globalClassName = typeof Modal.globalClassName === "string" ? Modal.globalClassName : "";
            const bgcn = (c.background + " " + globalClassName).trim();

            background.id = Modal.backgroundElementId;
            background.className = bgcn;

            Modal.backgroundElement = background;
            
            if (typeof Modal.onModalBackgroundClick === "function") {
                Modal.backgroundElement.removeEventListener("click", Modal.onModalBackgroundClick);
            }

            Modal.backgroundElement.addEventListener("click", Modal.onModalBackgroundClick);
        }

        if (!Modal.backgroundElement.parentElement && appendIfNotExistant === true && typeof document !== "undefined") {
            // Add a debug element to the background HTML Element so we can print to it later
            if (!this.debugElement) {
                this.debugElement = document.createElement("div");
                this.debugElement.id = Modal.debugElementId;
                Modal.addDebugMessage("Modal Debug Element Created.");
                Modal.backgroundElement.appendChild(this.debugElement);
            }

            document.body.appendChild(Modal.backgroundElement);
            Modal.updateDebugElement();
        }

        return Modal.backgroundElement;
    }

    static onModalBackgroundClick(e) {
        const clickId = (Math.random() * 99999999).toString(16);
        const stackSize = Modal.modalStack.length;

        if (stackSize === 0) return;

        const targetIsBackground = e?.target?.id === Modal.backgroundElementId;
        
        if (!targetIsBackground) {
            // Body of the modal was clicked, not the background
            // console.log("< " + clickId + " : Body clicked. Ignored.");
            // Modal.addDebugMessage("Body clicked: " + e?.target?.id + " | " + e?.target?.className);
            return false;
        }

        console.log("onModalBackgroundClick(e) : " + clickId + " with stack size: " + stackSize);

        if (typeof e?.preventDefault === "function") e.preventDefault();
        if (typeof e?.stopPropagation === "function") e.stopPropagation();

        const modal = stackSize > 0 ? Modal.modalStack[stackSize - 1] : null;

        if (!(modal?.state === 1)) {
            if (!!modal.container) modal.container.style.transitionDuration = "200ms";

            if (modal.backgroundClassName !== modal.defaultBackgroundClassName) {
                modal.backgroundClassName = modal.defaultBackgroundClassName;
                const bge = Modal.getOrCreateBackgroundElement(false);
                if (bge) bge.className = modal.defaultBackgroundClassName;
            }

            return;
        }

        if (typeof modal?.onBackgroundClick === "function") { 
            const rsp = modal.onBackgroundClick(e);

            if (rsp === false) { 
                console.log("< " + clickId + " : onClick is not true (", rsp, ")");
                Modal.addDebugMessage("modal.onBackgroundClick returned false: " + this.id);
                return false;
            }
        }

        modal.closeAsync(e)
        Modal.addDebugMessage("Modal Removed from Stack: " + this.id);

        return true;
    };

    static suppressBackgroundClick() { 
        return false;
    }

    static getGlobalPosition(element) {
        const rect = element.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return { 
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft,
            width: rect.width,
            height: rect.height,
        };
    };

    static addDebugMessage(message, level = 0) {
        const date = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", second: "numeric"})
        Modal.debugMessages.push(date + ": " + message);
        
        if (level === 1) console.warn(date + ": " + message);
        else if (level === 2) console.warn(date + ": " + message);
        else if (level >= 3) console.error(date + ": " + message);
        else console.log(date + " LOG :: " + message);

        Modal.updateDebugElement();
    }

    static clearDebugMessages() { 
        Modal.debugMessages = [];
        Modal.updateDebugElement();
    }

    static updateDebugElement() { 
        if (!Modal.debugElement) return false;
        Modal.debugElement.innerHTML = Modal.debugMessages.join("<br />");
        return true;
    }
}

export default Modal;
