import React, {useRef, useEffect, useState} from 'react';
import style from "./FormButton.module.css";

const FormButton = (props) => {
    const notSpinning = '';
    const spinning = ' spinning';

    let { id, onClick, label, isWorking, children, disabled, controller, continueActivity } = props;
    let buttonId = typeof id === 'string' ? id : 'dark-button';
    let [buttonClassName, setButtonClassName] = useState(notSpinning);
    let buttonRef = useRef(null);
    
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
            
            console.log("RSP: " + rsp);
            
            return rsp;
        } else {
            console.warn('Button with id ' + buttonId + ' was clicked but no onClick handler was provided.');
        }
    };

    useEffect(() => {
        if (!!controller && typeof onClick === 'function') {
            console.log("Controller Click Set");
            controller.setSubmit(onButtonClick);
        }
    }, []);

    const body = label || (children || 'Okay');
    const isDisabled = buttonClassName === spinning;

    return (
        <button id={buttonId} disabled={isDisabled} className={"form-button" + buttonClassName} ref={buttonRef} onClick={onButtonClick}>
            <div className={style.mainButton}>
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

