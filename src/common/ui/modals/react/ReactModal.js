import React from "react";
import Modal from '../Modal';
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck, faFaceSurprise, faGear, faSkull } from "@fortawesome/free-solid-svg-icons";

class ReactModal extends Modal { 
    static dialogBackgroundClassName = "pi-modal-background";
    
    constructor(json) {
        if (!json) json = {};
        if (!json.modalType) json.modalType = "dialog";

        super(json);

        this.reactBody = null;

        this.defaultBackgroundClassName = (ReactModal.dialogBackgroundClassName + " " + this.userClassName).trim();
        this.backgroundClassName = this.defaultBackgroundClassName;

        this.onPreOpen = (me, containerRect) => {
            //
            return true;
        };
    };

    getToastPositionClassName(options) { 
        if (typeof options?.positionClassName === "string")
            return options.positionClassName;
        
        if (typeof options?.placement !== "string") { 
            return "";
        }

        const placements = options.placement.trim().toLowerCase().split(" ");
        let cn = "";

        if (placements.includes("top")) cn += "top ";
        else if (placements.includes("bottom")) cn += "bottom ";
        else cn += "center ";

        return cn.trim();
    }

    async openToastDialogAsync(content, options = {}) {
        if (typeof options === "number") {
            options = { duration: options };
        } else if (typeof options === "string") {
            options = { placement: options };
        } else if (typeof options === "function") { 
            options = { onClose: options };
        } else if (typeof options !== "object") {
            options = {};
        }

        if (typeof options.duration !== "number" || options.duration <= 0 || isNaN(options.duration))
            options.duration = 13000;

        const duration = options.duration;
        const closeDuration = typeof options.closeDuration === "number" && options.closeDuration > 0 ?
            options.closeDuration :
            1200;

        const positionClassName = this.getToastPositionClassName(options);
        options.userClassName = ((options.userClassName || "") + " dialog toast " + positionClassName).trim();

        await this.openDialogAsync(content, options);

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, duration);
        });

        if (typeof options.onBackgroundClick === "function") { 
            this.onBackgroundClick = options.onBackgroundClick;
        } else { 
            this.onBackgroundClick = null;
        }

        const rsp = typeof options.onClose === "function" ? options.onClose() : null;
        const result = typeof rsp?.then === "function" ? await rsp : rsp;

        if (result === false) return false;

        await this.closeAsync(options?.e, { duration: closeDuration });

        return true;
    }

    async toAlertAsync(content, options = {}) { 
        await this.closeContainerAsync(options, 0);

        if (typeof content === "string")
            content = (<div className="pi-dialog-alert-content">{content}</div>);
        
        if (typeof options === "function") { 
            options = { onClick: options };
        } else if (typeof options !== "object") { 
            options = {};
        }

        options.icon = faBell;

        return await this.openAlertDialogAsync(content, options);
    }

    async toCompletedAsync(content, options = {}) {
        await this.closeContainerAsync(options, 0);
        // if (typeof content === "string")
        //     content = (<div className="pi-dialog-alert-content">{content}</div>);
        if (typeof options === "function") {
            options = { onClick: options };
        } else if (typeof options !== "object") { 
            options = {};
        }

        options.icon = faCircleCheck;

        if (typeof content === "string") {
            options.iconClassName = "complete";
            content = this.createRectIconContent(content, options, faBell);
        }

        if (this.onBackgroundClick === Modal.suppressBackgroundClick) {
            this.onBackgroundClick = null;
        }

        return await this.openAlertDialogAsync(content, options);
    }

    async toErrorAsync(content, options = {}) { 
        await this.closeContainerAsync(options, 0);

        if (typeof content === "string")
            content = (<div className="pi-dialog-error-content">{content}</div>);
        
        if (typeof options === "function") { 

        } else if (typeof options !== "object") { 
            options = {};
        }

        options.icon = faSkull;
        if (!options.title) options.title = "Oops...";

        return await this.openAlertDialogAsync(content, options);
    }

    async openActivityAsync(content, options = {}) {
        if (typeof options === "function") {
            options = { onClick: options };
        } else if (typeof options === "string") {
            options = { title: options };
        } else if (typeof options !== "object") {
            options = {};
        }
        
        if (typeof options === "function") {
            options = { onClick: options };
        } else if (typeof options !== "object") {
            options = {};
        }

        if (!options.title) options.title = "Working...";
        if (!options.iconClassName) options.iconClassName = "pi-dialog-activity-icon";
        if (!options.icon) options.icon = faGear;

        options.userClassName = "dialog working";

        this.onBackgroundClick = Modal.suppressBackgroundClick;

        if (typeof content === "string") {
            options.iconClassName = "activity";
            content = this.createRectIconContent(content, options, faBell);
        }

        this.onBackgroundClick = Modal.suppressBackgroundClick;

        return await this.openDialogAsync(content, options, []);
    }

    async openAlertDialogAsync(content, options = {}, ...args) {
        if (typeof options === "function") {
        } else if (typeof options === "string") {
            options = { title: options };
        } else if (typeof options !== "object") {
            options = {};
        }

        if (args?.length > 0) {
            let argType = typeof args[0];

            if (argType === "function") {
                options.onClick = args[0];
            } else if (argType === "object" && typeof args[0].onClick === "function") { 
                options.onClick = args[0].onClick;
            }
        }

        const okCaption = options.buttonCaption || "Okay";

        const buttons = [
            {
                caption: okCaption,
                onClick: async (e) => {
                    const rsp = typeof options?.onClick === "function" ? options.onClick(e) : null;
                    const isAsync = typeof rsp?.then === "function";
                    const result = (isAsync) ? await rsp : rsp;

                    if (result === false) return false;

                    if (isAsync) await this.closeAsync(e);
                    else this.closeAsync(e);

                    return true;
                },
            },
        ];

        options.userClassName = "dialog alert";

        if (typeof content === "string") {
            options.iconClassName = "alert";
            content = this.createRectIconContent(content, options, faBell);
        }

        return await this.openDialogAsync(content, options, options.useButtons === false ? [] : buttons);
    }

    async openConfirmDialogAsync(content, onClick, options = {}) { 
        // Ensure params
        if (typeof options === "function" && typeof onClick !== "function") { 
            const tmp = onClick;
            onClick = options;
            options = tmp;
        }

        if (typeof options === "string") { 
            options = { title: options };
        }

        const okCaption = options.buttonCaption || "Okay";
        const cancelCaption = options.cancelButtonCaption || "Cancel";

        const buttons = [
            {
                caption: cancelCaption,
                onClick: async (e) => await this.closeAsync(e),
                isCancel: true,
            },
            {
                caption: okCaption,
                onClick: async (e) => {
                    const rsp = typeof onClick === "function" ? onClick(e) : null;
                    const result = (typeof rsp?.then === "function") ? await rsp : rsp;

                    if (result === false) return false;

                    return this.closeAsync(e);
                },
            },
        ];

        options.userClassName = "dialog confirm";

        if (typeof content === "string") {
            options.frameClassName = "confirm";
            content = this.createRectIconContent(content, options, faFaceSurprise);
        }

        return await this.openDialogAsync(content, options, buttons);
    }

    async openFormDialogAsync(formElement, onClick, options = {}) {
        if (typeof onClick !== "function") throw new Error("Invalid onClick function passed to openFormDialogAsync");
        if (!ReactModal.isReact(formElement)) throw new Error("Invalid formElement passed to openFormDialogAsync. Must be a react component.");

        if (typeof options === "string") {
            options = { title: options };
        } else if (typeof options !== "object") { 
            options = {};
        }

        options.userClassName = ("dialog form " + (options.userClassName || "")).trim();

        if (options.close === null || options.close === undefined) options.close = true;

        if (options.backgroundCloses !== true) {
            this.onBackgroundClick = Modal.suppressBackgroundClick;
        }
        
        const buttons = Array.isArray(options.buttons) ? options.buttons : [];

        if (typeof options.buttons === "object" & !!options.buttons && !Array.isArray(options.buttons)) { 
            buttons.push(options.buttons);
        }

        //const cancelClassName = "pi-modal-cancel-button";
        buttons.push(<button onClick={() => this.closeAsync()} className="react-modal-button pi-modal-cancel-button cancel" key="cancel-button">Cancel</button>);

        const buttonText = typeof options?.buttonCaption === "string" ? options.buttonCaption : "Submit";
        const buttonClassName = "pi-modal-button";
        const buttonElementId = "pi-modal-submit-button-" + (new Date()).getTime().toString(16);
        const labelElementId = "pi-model-submit-button-label-" + (new Date()).getTime().toString(16);

        const submitButtonLabel = !options?.buttonCaption || typeof options?.buttonCaption === "string" ?
            (<><span id={labelElementId}>{buttonText}</span><span className="activity"><label></label></span></>) :
            options?.buttonCaption;

        const setButtonWorkingClass = (cn, workingLabel = null) => {
            const buttonElement = document.getElementById(buttonElementId);
            const buttonLabel = document.getElementById(labelElementId);

            if (!buttonElement) return;

            if (typeof cn !== "string") cn = "";
            buttonElement.className = (buttonClassName + " " + cn).trim();

            if (!!buttonLabel) buttonLabel.innerText = workingLabel;
        };
        
        buttons.push(<button id={buttonElementId} className="react-modal-button submit-button" key="onClick-button" onClick={async (e) => { 
            console.log("Modal Button onClick:");

            const rsp = onClick(e);
            const isAsync = (typeof rsp?.then === "function");

            if (isAsync) setButtonWorkingClass("working", options?.workingCaption || "Processing");

            const result = isAsync ? await rsp : rsp;

            if (isAsync) setButtonWorkingClass("", buttonText);

            return result;
        }}>{ submitButtonLabel }</button>);

        return await this.openDialogAsync(formElement, options, buttons);
    }

    async openDialogAsync(content, options = {}, buttons = []) {
        content = (<div className="pi-modal-content">{content}</div>);
        
        if (!Array.isArray(buttons) && Array.isArray(options)) {
            const tmp = buttons;
            buttons = options;
            options = tmp || {};
        } else if (options === "function") {
            const tmp = options;
            options = buttons;
            buttons = tmp || [];
        }

        if (typeof options.userClassName === "string") this.userClassName = options.userClassName;
        if (!this.userClassName) this.userClassName = "dialog";

        if (typeof buttons === "function" || (!Array.isArray(buttons) && typeof buttons === "object"))
            buttons = [buttons];

        if (!Array.isArray(buttons)) buttons = [buttons].filter((b) => !!b);
        if (Array.isArray(options.buttons)) {
            buttons.append(...options.buttons);
        }

        if (!options) options = {};

        options.duration = 175;

        this.position = null;
        this.options = options;

        const sections = [];

        if (options.close === true) { 
            sections.push((<span onClick={(e) => this.closeAsync(e)} className="close-panel">x</span>));
        } else if (ReactModal.isReact(options.close) || (typeof options.close === "string" && options.close.length > 0)) {
            sections.push((<span onClick={(e) => this.closeAsync(e)} className="close-panel">{options.close}</span>));
        }

        if (typeof options.title === "string" || ReactModal.isReact(options.title))
            sections.push((<h2 className="pi-modal-dialog-title">{options.title}</h2>));

        sections.push((<React.Fragment key={"body-key"}>{content}</React.Fragment>));

        const reactButtons = buttons.map((button, index) => this.createReactButton(button, "button-" + index));
        if (reactButtons.length > 0) sections.push((<div key={"buttons-key"} className="pi-modal-buttons">{reactButtons}</div>));

        const body = (<div className="pi-modal-body">{sections}</div>);
        
        await super.openAsync(body, buttons);
    };

    createRectIconContent(content, options, defaultIcon) { 
        if (!options) options = {};

        const icon = ReactModal.isReact(options?.icon) ? options.icon : (<FontAwesomeIcon icon={options.icon || defaultIcon} />);
        const frameClassName = typeof options.iconClassName === "string" ? options.iconClassName : "";

        return (<div className={("pi-modal-dialog-frame " + frameClassName).trim()}>
            <div className="pi-modal-dialog-icon">{icon}</div>
            <div className="pi-modal-dialog-pp-content">{content}</div>
        </div>);
    }

    createReactButton(button, key, caption = "Okay") { 
        if (ReactModal.isReact(button)) return (<React.Fragment key={key}>{button}</React.Fragment>);

        const isCancelButton = button?.isCancel === true;
        const cancelClassName = "pi-modal-cancel-button";
        const buttonClassName = "pi-modal-button";
        const buttonId = button?.id || "pi-modal-button-" + (Math.floor(Math.random() * 99999999).toString(16));

        const setButtonWorkingClass = (buttonElementId, cn, workingLabel = null) => {
            const buttonElement = document.getElementById(buttonElementId);
            if (!buttonElement) return;

            if (typeof cn !== "string") cn = "";

            const ccn = isCancelButton ? " " + cancelClassName : "";
            buttonElement.className = (buttonClassName + ccn + " " + cn).trim();
            if (!!workingLabel) buttonElement.innerText = workingLabel;
        }

        if (typeof button === "object") {
            const props = { ...button };
            
            if (typeof props.className !== "string") props.className = "";
            props.className = (buttonClassName + " " + props.className).trim();

            if (isCancelButton === true) {
                props.className += " " + cancelClassName;
                delete props.isCancel;
            }

            const buttonCaption = (props.children || props.caption) || (props.body || props.text) || (props.label || caption) || "Okay";
            const workingCaption = !!props.workingCaption ? props.workingCaption : "Working...";

            delete props?.workingCaption;

            if (props.id !== buttonId) props.id = buttonId;

            const clicker = async (e) => {
                const rsp = typeof props.onClick === "function" ? props.onClick(e) : null;
                const isAsync = typeof rsp?.then === "function";
                if (isAsync && !isCancelButton) setButtonWorkingClass(buttonId, "working", workingCaption);

                const result = isAsync ? await rsp : rsp;

                if (isAsync && !isCancelButton)
                    setButtonWorkingClass(buttonId, "", !!workingCaption ? buttonCaption : null);

                if (result === false) return;

                await this.closeAsync();
            };

            return (<button key={key} {...props} onClick={clicker}>{buttonCaption}</button>);
        }

        if (typeof button === "function") { 
            const clicker = async (e) => {
                const rsp = button(e);
                const isAsync = typeof rsp?.then === "function";

                if (isAsync) setButtonWorkingClass(buttonId, "working");

                const result = isAsync ? await rsp : rsp;
                if (result === false) return;
                
                await this.closeAsync();
            };

            return (<button key={key} onClick={clicker}>{caption || "Okay"}</button>);
        }

        return (<button key={key} onClick={this.closeAsync}>{button}</button>);
    }

    setPlacement(placement, emptyOk = true) {
        const placementTokens = typeof placement === "string" && placement.trim().length > 0 ?
            placement.split(" ").map((tok) => tok.toLowerCase()) : [];
        
        if (placementTokens.includes("top")) this.verticalPlacement = "top";
        else if (placementTokens.includes("bottom")) this.verticalPlacement = "bottom";
        else if (emptyOk) this.verticalPlacement = "";

        if (placementTokens.includes("left")) this.horizontalPlacement = "left";
        else if (placementTokens.includes("right")) this.horizontalPlacement = "right";
        else if (emptyOk) this.horizontalPlacement = "";
    }

    getPlacementClassName() { 
        let className = "";
        if (this.verticalPlacement.length > 0) className += " " + this.verticalPlacement;
        if (this.horizontalPlacement.length > 0) className += " " + this.horizontalPlacement;

        return className.trim();
    }

    createContainerWithContent(content, buttons) {
        if (!!this.reactRoot) return;

        this.reactRoot = this.container;

        const container = this.getContainerElement();
        const defaultId = this.id + "-body";
        const durationStyle = { transitionDuration: Modal.transitionDurations.containerBody + "ms" };

        this.reactBody = ReactModal.toReactBody(content, defaultId, durationStyle);
        this.bodyElementId = this.reactBody.props.id;

        while (container.hasChildNodes())
            container.removeChild(container.firstChild);

        const root = ReactDOM.createRoot(this.container);
        root.render(this.reactBody);
        
        return this.container;
    }

    async openAsync(content, buttons = []) {
        await super.openAsync(content, buttons);
    }

    /**
     * Checks to see if a given variable is that of a React component (function class or JSX)
     * @param {object|any} component - The object in question
     * @returns {boolean}
     */
    static isReact(component) {
        if (!component) return false;
        return (typeof component.ref !== 'undefined' && typeof component.props === 'object');
    }

    /**
     * Converts a class to a React component
     * @param {any} body - The component to convert to React
     * @returns {React.Component} the React component 
     */
    static toReactBody(body, elementId, style = null, className = null) {
        if (body !== 0 && !body) return null;

        let elementType = "div";
        let props = {};

        if (ReactModal.isReact(body)) {
            props = { ...body.props };
            if (props.id?.length > 0) elementId = props.id;

            elementType = body.type;
            body = props.children;

            delete props.children;
            delete props.id;
        }

        if (typeof className !== "string") className = Modal.classes.body;
        
        props.id = elementId;
        props.className = ((props.className || "") + " " + className).trim();
        if (!!style) props.style = { ...props.style, ...style };

        return React.createElement(elementType, props, body);
    }
}

export default ReactModal;
