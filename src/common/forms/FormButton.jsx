import React, {useRef, useEffect, useState} from 'react';

const FormButton = (props) => {
    const notSpinning = '';
    const spinning = ' spinning';

    let { id, onClick, label, active, children, disabled, controller, continueActivity } = props;
    let buttonId = typeof id === 'string' ? id : 'dark-button';
    let [buttonClassName, setButtonClassName] = useState(active === true ? spinning : notSpinning);
    let buttonRef = useRef(null);

    const eventId = typeof id === "string" && !!id ? "form-button-event-" + id : "form-button-" + buttonId + (new Date().getTime()).toString(16).toLowerCase();

    const onButtonClick = async (e) => {
        if (buttonClassName !== "") {
            console.warn("Double Click. Ignoring");
            return;
        }
        
        if (typeof onClick === 'function') {
            setButtonClassName(spinning);
            
            let rsp = onClick(e);

            if (!rsp || typeof rsp.then !== 'function') {
                setButtonClassName(notSpinning);
                return;
            }

            rsp = await rsp.then(function (x) {
                if (continueActivity !== true) setButtonClassName(notSpinning);
                return x;
            }).catch((err) => {
                console.error(err);
                setButtonClassName(notSpinning);
            });
            
            // We may have handled an error within the onClick (not on server side), if so, be sure to return false or 0 upon that error handle
            if (rsp === false || rsp === 0) setButtonClassName(notSpinning);
            
            return rsp;
        } else {
            console.warn('Button with id ' + buttonId + ' was clicked but no onClick handler was provided.');
        }
    };

    useEffect(() => {
        if (!!controller) {
            if (typeof onClick === 'function') {
                console.log("Controller Click Set");
                controller.setSubmit(onButtonClick);
            }

            if (typeof controller.addEventListener === "function") {
                controller.addEventListener("update", (options) => {
                    if (options?.refreshing === false || options.stop === true) {
                        setButtonClassName(notSpinning);
                    } else if (options?.refreshing === true || options.active === true) {
                        setButtonClassName(spinning);
                    }
                 }, eventId);

                controller.addEventListener("refresh", (options) => {
                    setButtonClassName(spinning);
                 }, eventId);

                console.log("Fresh Button " + eventId + " Event Listener Set");
            }
        }
    }, []);

    const body = label || (children || 'Okay');
    const isDisabled = buttonClassName === spinning;

    return (
        <button id={buttonId} disabled={isDisabled} className={"form-button" + buttonClassName} ref={buttonRef} onClick={onButtonClick}>
            <div>
                <span></span>
                <span>
                    {body}
                </span>
                <span><label className={"spinner"}></label></span>
            </div>
        </button>
    );
};

export default FormButton;

