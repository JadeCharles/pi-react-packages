import React, {useRef, useEffect, useState} from 'react';
import {ClickAwayListener, Tooltip} from "@mui/material";
import "./FormButton.css";

const FormButton = (props) => {
    const notSpinning = '';
    const spinning = ' spinning';

    const { id, onClick, label, isWorking, children, disabled, confirmPrompt, cancel, placement, className } = props;
    const buttonId = id || 'dark-button-' + Math.floor(Math.random() * 1000000).toString();
    const [buttonClassName, setButtonClassName] = useState(notSpinning);
    const [confirmState, setConfirmState] = useState(0);
    const [tempButtonCaption, setTempButtonCaption] = useState("");
    
    const buttonRef = useRef(null);

    const hasConfirmPrompt = !!confirmPrompt;
    const confirmClasses = {
        tooltipArrow: "dark-button-tooltip-arrow",
        tooltip: "dark-button-tooltip",
    };

    const onButtonClick = async (e) => {
        if (typeof onClick !== 'function') {
            console.warn('Button with id ' + buttonId + ' was clicked but no onClick handler was provided.');
            return;
        }
        
        if (hasConfirmPrompt && confirmState === 0) {
            setConfirmState(1);
            return;
        }
        
        if (confirmState === 1) {
            setConfirmState(0);
            return;
        }
        
        await confirmClick(e);
    };
    
    const confirmClick = async (e) => {
        setConfirmState(0);
        setButtonClassName(spinning);

        const rsp = onClick(e);

        if (!rsp || typeof rsp.then !== 'function') {
            setButtonClassName(notSpinning);
            return;
        }

        await rsp.then(function (x) {
            console.log("Form Button X: " + x);
            setButtonClassName(notSpinning);
            
            if (!!x && typeof x === 'string') {
                setTempButtonCaption(x);
                return;
            }
            
            setConfirmState(0);
        }, function (err) {
            setButtonClassName(notSpinning);
            setConfirmState(0);
        });
        
    };

    useEffect(() => {
        if (confirmState === 2) { 
            setTimeout(() => {
                setConfirmState(0);
            }, 2000);
        }
    }, [confirmState]);
    
    useEffect(() => {
        if (!!tempButtonCaption) {
            setTimeout(() => {
                setTempButtonCaption(null);
            }, 2000);
            
        } else setConfirmState(0);
        
    }, [tempButtonCaption]);
    
    const body = confirmState === 1 ? (cancel || "Cancel") : (tempButtonCaption || (label || (children || 'Okay')));
    const cn = typeof className === 'string' ? " " + className : "";
    
    const button = (<button id={buttonId} className={("dark-button" + cn + buttonClassName).trim()} ref={buttonRef} onClick={onButtonClick}>
            <div>
                <span></span>
                <span>
                    {body}
                </span>
                <span><label className={"spinner"}></label></span>
            </div>
        </button>);
    
    if (hasConfirmPrompt) {
        const confirmElement = (<a onClick={confirmClick}>{confirmPrompt}</a>);
        return (
            <ClickAwayListener onClickAway={() => setConfirmState(0)}>
            <Tooltip arrow={true} classes={confirmClasses} open={confirmState === 1} placement={placement || "left"} title={confirmElement}>{ button }</Tooltip>
            </ClickAwayListener>
        );
    }
    
    return button;
};

export default FormButton;

