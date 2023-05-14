import React, { ReactDOMServer } from "react";
import ReactDOM from "react-dom/client";
import DialogModal, { ButtonData } from "./DialogModal";
import FormButton from "../../forms/FormButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircleQuestion, faCompass, faHandsClapping, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

export class ReactDialogConfig { 
    static transitionType = "ease";
    static transitionDuration = 200;
    static exitTransition = "ease";
    static enterTransition = "ease";
    static backgroundDuraction = 50;
    static backgroundColor = "rgba(0,0,0,0.8)";
}

class ReactDialog {
    static defaultActivityIcon = faCompass; //faGear;    //faCrosshairs, fa
    static defaultErrorIcon = faTriangleExclamation;
    static defaultConfirmIcon = faCircleQuestion;
    static defaultCompleteIcon = faHandsClapping;
    static defaultToastTimeout = 4;

    static toastQueue = [];

    /**
     * Used for confirmation dialogs. When the okayButton is pressed it performs the action. Otherwise, it cancels out.
     * @param message {string}
     * @param title {string}
     * @param okayButtonData { ButtonData|function }
     * @param cancelButtonData { ButtonData|function }
     * @param otherButtonDataArray { [ButtonData] }
     * @param icon { object|null } - The icon to display in the dialog. Default is hand sparkle
     * @returns {Promise<DialogModal>}
     */
    static async confirmAsync(message, title = "Confirm?", okayButtonData = null, cancelButtonData = null, otherButtonDataArray = [], icon = null) {
        if (typeof title === "function") { 
            if (!okayButtonData) okayButtonData = title;
            else if (!cancelButtonData) {
                cancelButtonData = okayButtonData;
                okayButtonData = title;
            } else if (!Array.isArray(otherButtonDataArray)) {
                otherButtonDataArray = cancelButtonData;
                cancelButtonData = okayButtonData;
                okayButtonData = title;
            } else if (!icon) {
                icon = otherButtonDataArray;
                otherButtonDataArray = cancelButtonData;
                cancelButtonData = okayButtonData;
                okayButtonData = title;
            }

            title = "Confirm?";
        }

        if (!okayButtonData)
            throw new Error("Button data or callback missing. Either include a callback function (preferably with an async method) or use getConfirmationAsync()");
        
        const key = (new Date()).getTime().toString();
        
        if (typeof okayButtonData === 'function') {
            const id = "dialog-confirm-okay-button-" + key;
            okayButtonData = new ButtonData("Yes, Do it", "dialog-button confirm-dialog", id, okayButtonData);
        }
        
        if (typeof cancelButtonData === 'function' || !cancelButtonData) {
            const id = "dialog-confirm-cancel-button-" + key;
            cancelButtonData = new ButtonData("Cancel", "dialog-button cancel confirm-dialog", id, cancelButtonData);
        }
        
        const buttonData = [okayButtonData, cancelButtonData];
        if (otherButtonDataArray?.length > 0) buttonData.push(...otherButtonDataArray);
        
        return await ReactDialog.open(message, title, buttonData, "confirm", icon || ReactDialog.defaultConfirmIcon);
    }

    static async getConfirmationAsync(message, title = "Confirm?", icon = null, okCaption = "Okay", cancelCaption = "Cancel") {
        const id = Math.floor(Math.random() * 999999).toString(16);
        const okayButtonData = new ButtonData(okCaption || "Okay", "complete-dialog-button", "complete-button-" + id, () => true);
        const cancelButtonData = new ButtonData(cancelCaption || "Cancel", "cancel-dialog-button", "cancel-button-" + id, () => true);

        const dialog = await ReactDialog.open(message, title, [okayButtonData, cancelButtonData], "confirm", icon || ReactDialog.defaultConfirmIcon);

        return await new Promise((resolve) => {
            dialog.onClose = (duration, sender) => {
                resolve(sender !== "cancel");
            };
        });
    }

    static async completeAsync(message, title = "Complete!", buttonData = null, bodyClassName = null, icon = null) {
        if (title === false) { 
            title = "Complete!";
            buttonData = false;
        }

        if (buttonData === false) buttonData = null;
        else if (buttonData instanceof DialogModal) { 

        }
        else if (!buttonData) buttonData = () => true;

        return await ReactDialog.openAsync(message, title, buttonData, bodyClassName || "completed", icon || ReactDialog.defaultCompleteIcon);
    };

    static async toastAsync(message, options = {}) {
        if (!message && message !== 0) return;

        if (typeof options === "number") {
            options = { timeout: options };
        } else if (typeof options === "string") {
            options = { title: options, timeout: 0 };
        }

        if (!options) options = {};
        if (!(options.timeout > 0)) options.timeout = ReactDialog.defaultToastTimeout;

        const buttonData = options?.buttonData;
        const title = options?.title || null;

        const d = await ReactDialog.openAsync(message, title, buttonData, options?.className || "", options?.icon || null, "toast");

        ReactDialog.toastQueue.push(d);

        if (options.timeout < 120) options.timeout *= 1000;

        setTimeout(() => {
            ReactDialog.toastQueue = ReactDialog.toastQueue.filter(x => x !== d);
            d.close(200, d);
        }, options.timeout);
    };

    static async errorAsync(message, title = "Oops.", okayButtonData = null, icon = null) {
        if (!okayButtonData) okayButtonData = () => true;
        return await ReactDialog.openAsync(message, title, okayButtonData, "dialog-error", icon || ReactDialog.defaultErrorIcon, "error");
    }

    static async activityAsync(message, title = "Processing...", options = {}) {
        if (typeof message == "object") { 
            if (typeof options !== "object") options = message;
            else options = { ...message, ...options };
            
            if (typeof title !== "string") title = options.title || "Processing...";
            message = options.message || options.text || options.description || "Please wait...";
        }

        const otherButtonDataArray = Array.isArray(options?.otherButtonData) ? options.otherButtonData : [];
        const icon = options?.icon || null;
        const backgroundDismiss = (options?.backgroundDismiss === true) || (options?.bgDismiss === true);

        let cancelButtonData = options?.cancelButtonData || null;
        const optionsType = typeof options;

        if (optionsType === "function" || optionsType === "string") { 
            cancelButtonData = options;
            options = {};
        } else if (optionsType === "number") { 
            options = { timeout: options };
        }

        if (!!cancelButtonData) {
            if (typeof cancelButtonData === "function") cancelButtonData = new ButtonData("Cancel", "dialog-button cancel", "dialog-activity-cancel-button", cancelButtonData);
            else if (typeof cancelButtonData === "string") cancelButtonData = new ButtonData(cancelButtonData, "dialog-button cancel", "dialog-activity-cancel-button", () => true);
            else cancelButtonData = null;

            if (!!cancelButtonData) otherButtonDataArray.push(cancelButtonData);
        }

        const d = await ReactDialog.openAsync(message, title, otherButtonDataArray, "dialog-activity", icon || ReactDialog.defaultActivityIcon, "activity", false);
        if (backgroundDismiss) return d;

        const onBgDismiss = (dialog) => {
            //
        };

        if (typeof d.onBackgroundDismiss !== "function") d.onBackgroundDismiss = onBgDismiss;
        else { 
            const oldOnBgDismiss = d.onBackgroundDismiss;
            d.onBackgroundDismiss = (dialog) => {
                if (oldOnBgDismiss(dialog) === false) return false;
                return onBgDismiss(dialog);
            };
        }
        
        if (typeof options?.timeout === "number" && options.timeout > 0) {
            const timeOut = ReactDialog.getMilisecondsTimeout(options);

            setTimeout(() => {
                if (d.isComplete) return;

                const result = (typeof options?.onTimeout === "function") ? options.onTimeout(d) : true;
                const timeoutOptions = options?.timeoutOptions ||
                {
                    message: options?.timeoutMessage || "The operation timed out",
                    title: options?.timeoutTitle || "Error",
                    icon: options?.timeoutIcon || ReactDialog.defaultErrorIcon,
                    caption: options?.timeoutCaption || "Okay",
                };

                if (result !== false) d.toError(d, timeoutOptions);
            }, timeOut);
        }

        return d;
    }

    static async showAsync(body, buttonData = () => true, options = {}) {
        let title = null;
        let icon = null;
        let buttonClassName = null;
        let bodyClassName = null;

        if (typeof buttonData === "object") {
            if (typeof buttonData.title === "string") title = buttonData.title;
            
            if (typeof buttonData.buttonClassName === "string") buttonClassName = buttonData.buttonClassName;
            else if (typeof buttonData.className === "string") buttonClassName = buttonData.className;

            if (typeof buttonData.icon === "object") icon = buttonData.icon;
            if (typeof buttonData.bodyClassName === "string") bodyClassName = buttonData.bodyClassName;
        }

        buttonData = ButtonData.create(buttonData);

        if (typeof options === "string") options = { bodyClassName: options };
        if (typeof options !== "object") options = {};

        options.bodyClassName = bodyClassName;
        options.buttonClassName = buttonClassName;
        options.icon = icon;

        return await ReactDialog.openAsync(body, title, buttonData, options);
    }

    static async completeActivityAsync(activityDialog, message, title, options) { 
        const result = await activityDialog.completeAsync(message, options);
        if (result === false) return false;

        if (typeof title === "object") { 
            if (!options) options = {...title};
            else options = { ...title, ...options };

            title = options?.title;
        }

        const buttonData = !!options?.buttonData ? options.buttonData : () => true;

        const d = await this.completeAsync(message, title = "Complete!", buttonData, options?.className || "complete", options?.icon || ReactDialog.defaultCompleteIcon);

        if (typeof options?.duration === "number") { 
            setTimeout(() => {
                d.close(200, {});
            }, options.duration);
        }

        return d;
    };

    /**
     * Opens a dialog with a position anchored to an element
     * @param {object|string} body - The body of the dialog
     * @param {HTMLElenet|HTMLEvent} anchorElement - The element to anchor the dialog to
     * @param {[ButtonData]|object} buttonData - The button data to use, or the options parameter
     * @param {object|null} options - The options to use { title, bodyClass, buttonClass, icon, placement, etc }
     * @returns 
     */
    static async contextMenuAsync(body, anchorElement, options = {}, buttonData = []) {
        let event = null;

        if (typeof options === "string") options = { placement: options, message: "(options is a string) " };
        else if (typeof options !== "object") options = { message: "(Options Type is: " + (typeof options) + ") "};

        options.scrollId = new Date().getTime().toString(16).toUpperCase();
        options.initialScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        options.initialScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        
        options.onScroll = (scrollData, e) => {
            const container = scrollData?.container;
            if (!container) {
                console.error("No element found during onScrell event");
                return false;
            }

            const scrollId = scrollData?.scrollId;
            const initialScrollTop = scrollData?.initialScrollTop;
            const initialScrollLeft = scrollData?.initialScrollLeft;

            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

            const topDiff = initialScrollTop - scrollTop;
            const leftDiff = initialScrollLeft - scrollLeft;

            scrollData.initialScrollTop = scrollTop;
            scrollData.initialScrollLeft = scrollLeft;

            let transform = (container.style.transform || "").trim();
            const pattern = /translate\(((-)*\d+)px, ((-)*\d+)px\)/;

            // Handle scrolling
            const newTransform = transform.replace(pattern, (match, x, sign, y) => {
                let oy = y;
                if (typeof oy !== "number" && isNaN(parseInt(oy))) oy = sign;
                if (typeof oy !== "number" && isNaN(parseInt(oy))) return match;

                return "translate(" + x + "px,   " + Math.round(parseInt(oy) + topDiff) + "px)";
            });

            container.style.transform = newTransform;
        };

        const explicitMouse = options?.placement?.startsWith("mouse") === true;

        if (typeof anchorElement?.target === "object") {
            event = anchorElement;

            const isMouseClick = explicitMouse ||
                (event?._reactName === "onClick" && typeof event?.movementX === "number" && typeof event?.clientX === "number");

            if (isMouseClick) {
                options.x = Math.max(event.clientX, 0);
                options.y = Math.max(event.clientY, 0);
                options.isMouseClick = explicitMouse;
                options.clientY = event.clientY;
                options.width = 0;
                options.height = 0;

                if (typeof options.placement === "string") {
                    if (explicitMouse) {
                        const placements = options.placement.split(" ");
                        if (placements.includes("left")) { 
                            options.mouseHorizontalAlign = "left";
                        }

                        if (placements.includes("bottom")) { 
                            options.mouseVerticalAlign = "bottom";
                        }
                    } else {
                        const rect = typeof anchorElement.target?.getBoundingClientRect === "function" ?
                            event.target.getBoundingClientRect() :
                            { x: 0, y: 0, width: 0, height: 0 };

                        if (options.placement?.indexOf("bottom")) {
                            options.height = rect.height;
                        } else {
                            options.height = 0;
                        }
                    }


                }
            }

            anchorElement = event.target;
        }

        if (!anchorElement) throw new Error("Context menu dialog is missing an anchor element.");

        if (typeof buttonData === "object" && !Array.isArray(buttonData)) {
            if (options === {}) options = { ...buttonData };
            else options = { ...buttonData, ...options };

            options.message = "Created options from non-array buttonData";

            buttonData = [];
        } else if (typeof buttonData === "function") { 
            buttonData = [buttonData];
        } else { 
            buttonData = [];
        }

        if (typeof options === "string") options = { placement: options };
        else if (typeof options !== "object") options = {};

        const title = typeof options.title === "string" ? options.title : null;

        options.anchorElement = explicitMouse ? null : anchorElement;
        options.bodyClass = "dialog-context-menu";

        return await ReactDialog.openAsync(body, title, buttonData, options);
    }

    /**
     * Intended to dismiss the current activity dialog, and display an error message without closing the background
     * @param {DialogModal} activityDialog - The activity dialog to dismiss (usually because of timeout or server error)
     * @param {object|null} options - Options for the activity dialog.
     */
    static async activityErrorAsync(activityDialog, message, options) { 
        if (DialogModal.dialogs.length === 0) {
            console.warn("You tried to call an activity error after all dialogs have been closed. This is likely because the dialog completed successfully before the timeout.");
            return;
        }

        if (typeof message === "object") { 
            if (!options) options = {...message};
            else options = { ...message, ...options };

            message = options?.message;
        }

        if (!options) options = {};
        else if (typeof options === "string") options = { message: options };
        else if (typeof options === "function") options = { buttonData: options };
        
        if (typeof options?.timeoutMessage === "string" && !options.message) options.message = options.timeoutMessage;
        if (typeof options?.timeoutCaption === "string" && !options.caption) options.caption = options.timeoutCaption;
        if (typeof options?.timeoutTitle === "string" && !options.title) options.title = options.timeoutTitle;

        const okayButtonData = (options.buttonData instanceof ButtonData) ?
            options.buttonData :
            new ButtonData(options.caption || options.label || options.buttonCaption || "Okay",
                "dialog-button cancel",
                "dialog-activity-error-okay-button",
                typeof options.buttonData === "function" ? options.buttonData : () => true);
        
        if (!message) message = message || "Operation timed out";

        const title = options?.title || "Oops";
        
        activityDialog.close(-1, { removeBackground: false });
        
        const d = await ReactDialog.openAsync(message, title, okayButtonData, "dialog-error", options?.icon || ReactDialog.defaultErrorIcon, "error");

        return d;
    }

    static getMilisecondsTimeout(options) {
        if (options?.timeout > 0) return options.timeout * (options.timeout < 1000 ? 1000 : 1);
        if (options?.timeout <= 0) options.timeout = null;

        if (typeof options?.timeout !== "number") {
            if (typeof options?.timeoutSeconds === "number" && typeof options?.timeoutSeconds > 0) {
                options.timeout = options.timeoutSeconds * 1000;
            } else if (typeof options?.timeoutMinutes === "number" && typeof options?.timeoutMinutes > 0) {
                options.timeout = options.timeoutMinutes * 1000 * 60;
            } else if (typeof options?.timeoutMilliseconds === "number" && typeof options?.timeoutMilliseconds > 0) {
                options.timeout = options.timeoutMilliseconds;
                return options.timeout; // return early - no need to convert to milliseconds
            }
        }

        if (typeof options?.onTimeout === "function" && typeof options.timeout !== "number")
            options.timeout = 60;

        // Final fixing calculation
        if (options.timeout < 1000) options.timeout = options.timeout * 1000;

        return options?.timeout;
    }

    /**
     * Opens a dialog with the given properties and displays it
     * @param {string|object} message - The message to display in the dialog
     * @param {string} title - The title of the dialog
     * @param {ButtonData|[ButtonData]} buttonData - The button data to display in the dialog. Can be a single ButtonData object or an array of ButtonData objects. If this value is null or empty array, no buttons will appear
     * @param {string} bodyClassName - The class name to apply to the dialog body
     * @param {FontAwesomeIcon} icon - The icon to display in the dialog
     * @param {string} buttonClassName - The class name to apply to the Button Data
     * @param {boolean} backgroundDismissable - Whether or not the dialog can be dismissed by clicking the background
     * @returns 
     */
    static async openAsync(message, title = "Alert", buttonData = null, options = {}, ...args) {
        if (typeof options === "string" || !options) options = { bodyClassName: options };
        
        const bodyClassName = options.bodyClassName || null;
        const icon = args.length > 0 ? args[0] : options.icon || null;
        const buttonClassName = args.length > 1 ? args[1] : options.buttonClassName || "";
        const backgroundDismissable = args.length > 2 ? args[2] : options.backgroundDismissable !== false;
        
        const content = [];
        const dialog = new DialogModal();
        
        if (!!title) {
            if (!DialogModal.isReact(title)) title = (<h3 key="content-key-title">{title}</h3>);
            else title = (<React.Fragment key="">{title}</React.Fragment>);

            content.push(title);
        }
        
        let otherButtonData = [];
        let cancelButtonData = null;
        
        if (Array.isArray(buttonData)) {
            buttonData = buttonData.filter((b) => !!b);

            if (buttonData.length === 0) buttonData = null;
            else if (buttonData.length === 1) buttonData = buttonData[0];
            else {
                const okayButtonData = buttonData[0];
                cancelButtonData = buttonData[1];
                buttonData.splice(0, 2);
                otherButtonData = buttonData;

                buttonData = okayButtonData;
            }
        }
        
        content.push(<React.Fragment key="content-key-body">{message}</React.Fragment>);
        content.push(<React.Fragment key="content-key-buttons">{ReactDialog.createButtonPanel(dialog, buttonData, cancelButtonData, otherButtonData)}</React.Fragment>);
        
        dialog.body = (<div className={("dialog-container-body " + bodyClassName || "").trim()}>{ content }</div>);
        dialog.icon = icon;
        dialog.toError = (message, options) => ReactDialog.activityErrorAsync(dialog, message, options);
        dialog.toCompleted = (message, options) => ReactDialog.activityCompletedAsync(dialog, message, options);
        
        if (!backgroundDismissable) { 
            dialog.onBackgroundDismiss = (d) => false;
        }

        options.duration = 200;
        options.className = bodyClassName;

        await dialog.open((d) => {
            if (!d.container || !d.body) {
                const message = "Failed to open dialog because no container or body was specified.";
                console.warn(message);
                throw new Error(message)
            }

            const root = ReactDOM.createRoot(d.container);
            root.render(ReactDialog.toReactBody(d.body));
        }, options);
        
        return dialog;
    }

    static createBody(content, className = null, icon = null) { 
        if (DialogModal.isReact(content)) return content;

        const cn = className || "";

        return (<div className={("dialog-content " + cn).trim()}>
            <span key="dialog-badge" className={"dialog-content-badge"}><span><FontAwesomeIcon icon={icon || faCheckCircle} /></span></span>
            <span key="dialog-content" className={"dialog-content-message"}>{ content?.toString() }</span>
        </div>);        
    }

    /**
     * Creates a button panel with a default button and optional cancel button
     * @param dialogModal { DialogModal } - The dialog modal to close when the button is clicked
     * @param okayButtonData { ButtonData|[ButtonData]|null }
     * @param cancelButtonData { ButtonData|null }
     * @param otherButtonDataArray { [ButtonData] | null } - Additional buttons, positioned on the left, running from left to right
     */
    static createButtonPanel(dialogModal, okayButtonData = null, cancelButtonData = null, otherButtonDataArray = [], renderer = null) {
        if (!okayButtonData) {
            //const id = "dialog-complete-okay-button-" + (new Date()).getTime().toString();
            //okayButtonData = new ButtonData("Okay", "complete-dialog-button", id, null);
        }
        
        if (typeof renderer !== "function") renderer = ReactDialog.renderButton;
        if (!!okayButtonData) okayButtonData.key = "ok";
        if (!!cancelButtonData) cancelButtonData.key = "cancel";

        const cancelButton = !!cancelButtonData ? renderer(dialogModal, cancelButtonData, "cancel-" + (Math.random() * 1000000).toString(36)) : null;
        const otherButtons = (otherButtonDataArray?.length > 0) ?
            otherButtonDataArray.map((buttonData, i) => (<React.Fragment key={"other-button-" + i}>{renderer(dialogModal, buttonData, "dialog-buttons-" + i)}</React.Fragment>)) : null;
        
        return (<div className={"buttons dialog-button-panel complete-dialog-button-panel"}>
            { otherButtons }
            { cancelButton }
            { renderer(dialogModal, okayButtonData) }
        </div>);
    }
     
    /**
     * Creates a react-rendered button from meta data
     * @param dialogModal { DialogModal } - The dialog modal to close when the button is clicked
     * @param buttonData { ButtonData } - The button data
     * @param key { string|null } - The key to use for the button array rendering
     */
    static renderButton(dialogModal, buttonData, key = null) {
        if (!dialogModal || !buttonData) return null;
        
        const onClick = async (e) => { 
            const rsp = (typeof buttonData.onClick === 'function') ? buttonData.onClick(e) : null;
            const result = (typeof rsp?.then === 'function') ? await rsp : rsp;
            
            if (result === false) return result;
            
            if (dialogModal) { 
                await dialogModal.close(200, buttonData.key || key);
            }
            
            return result;
        }
        
        if (key?.startsWith("cancel-") === true)
            return (<button key={key || "random-key-" + (Math.random() * 1000000).toString(36)} className={("dialog-button " + buttonData.className || "").trim()} id={buttonData.id || ""} onClick={onClick}>{buttonData.caption}</button>);
        
        return (<FormButton key={key || "random-key-" + (Math.random() * 1000000).toString(36)} className={("dialog-button " + buttonData.className || "").trim()} id={buttonData.id || ""} onClick={onClick}>{buttonData.caption}</FormButton>);
    }
    

    /**
     * Converts a class to string or HTMLElement
     * @param {any} component - The component to convert to HTML
     * @returns {HTMLElement|string} the HTML string of the component
     */
    static toHtml(component) {
        if (typeof component === 'string') return component;
        if (component instanceof HTMLElement) return component;
        if (DialogModal.isReact(component)) return ReactDOMServer.renderToString(component);

        return (component?.toString() || "");
    }
    
    /**
     * Converts a class to a React component
     * @param {any} body - The component to convert to React
     * @returns {React.Component} the React component
     */
    static toReactBody(body) {
        if (body !== 0 && !body) return null;
        if (DialogModal.isReact(body)) return body;
        
        return (<>{ body?.toString() }</>);
    }
    
    
    /**
     * Creates a DialogModal with the specified content and buttons. Then returns the dialog for later closing
     * @param message {string|object|null} - The message to display in the dialog. Can be a string or a React component
     * @param title {string|object|null} - Title of the dialog, or a React component
     * @param buttonData {ButtonData|[ButtonData]|null}
     * @param className {string|null} - The class name to apply to the dialog default body element
     * @param icon { object|null } - The icon to display in the dialog. Default is green checkmark
     * @returns {Promise<DialogModal>}
     */
    static async open(message, title = "Alert", buttonData = null, className = null, icon = null) {
        const content = [];
        const dialog = new DialogModal();
        
        if (!!title) {
            if (!DialogModal.isReact(title)) title = (<h3>{ title }</h3>);
            content.push(title);
        }
        
        let otherButtonData = [];
        let cancelButtonData = null;
        
        if (Array.isArray(buttonData)) {
            if (buttonData.length === 0) buttonData = null;
            else if (buttonData.length === 1) buttonData = buttonData[0];
            else {
                const okayButtonData = buttonData[0];
                cancelButtonData = buttonData[1];
                buttonData.splice(0, 2);
                otherButtonData = buttonData;
                buttonData = okayButtonData;
            }
        }
        
        content.push(ReactDialog.createBody(message, className, icon));
        content.push(ReactDialog.createButtonPanel(dialog, buttonData, cancelButtonData, otherButtonData));
        
        dialog.body = (<div className={"complete-body"}>{ content }</div>);
        dialog.icon = icon;
        
        await dialog.open((d) => {
            if (!d.container || !d.body) {
                console.warn("Failed to open dialog because no container or body was specified.");
                return;
            }

            const root = ReactDOM.createRoot(d.container);
            root.render(ReactDialog.toReactBody(d.body));
        });
        
        return dialog;
    }
    
    static delay(duration = 1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    }
}

export default ReactDialog;
