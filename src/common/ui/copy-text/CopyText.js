import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";

const CopyText = (props) => {
    const {children, label, text, copiedLabel, onCopy, onError, icon } = props;
    let _;

    const [copyState, setCopyState] = useState(0);
    
    const copyText = async (textToCopy) => {
        _ = CopyText.copy(textToCopy).then(() => { 
            if (typeof onCopy === 'function') onCopy(textToCopy);
            setCopyState(1);
        }).catch((ex) => {
            if (typeof onError === 'function') onError(ex);
            setCopyState(0);
        });
    };
    
    useEffect(() => {
        if (copyState === 1) { 
            setTimeout(() => setCopyState(0), 3000);
        }
    }, [copyState]);
    
    const contentToCopy =
        (typeof text === 'string') ? text :
            ((typeof children === 'string') ? children : (ReactDOMServer.renderToString(children)));
    
    const actionLabel = copyState === 1 ? (copiedLabel || "Copied!") : (label || "Copy");
    const body = children || (<><span>{actionLabel}</span><FontAwesomeIcon icon={icon || faCopy} /></>);
    const cn = copyState === 1 ? "copy-text copied" : "copy-text";
    
    return (<span onClick={(e) => copyText(contentToCopy)} className={cn}>{ body }</span>);
};

CopyText.copy = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Page Text: ' + text);
        return true;
    } catch (err) {
        console.error('Failed to copy: ', err);
        throw err;
    }
};

export default CopyText;

