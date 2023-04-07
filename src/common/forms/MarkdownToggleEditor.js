import React, {useRef, useEffect, useState} from 'react';
import {marked} from "marked";

const MarkdownToggleEditor = (props) => {
    const { onComplete, onChange, controller, onToggle, onClick, defaultValue, defaultMode, submitOnBlur, children, ignoreTags } = props;
    
    let [editMode, setEditMode] = useState(defaultMode || false);
    let [text, setText] = useState(defaultValue || "");
    
    let editDescriptionRef = useRef();

    const toggleEditMode = (e) => {
        const tagName = e.target?.tagName?.toLowerCase() || "";
        const tags = !!ignoreTags && Array.isArray(ignoreTags) ? ignoreTags : ["a", "select"];
        
        if (tags.includes(tagName)) {
            console.warn("Ignoring tag: " + tagName);
            return false;
        }

        e.preventDefault();

        if (editMode && document.activeElement) {
            let hasFocus = (document.activeElement === editDescriptionRef.current);
            if (hasFocus) return false;
        }

        setEditMode(!editMode);
        
        return true;
    };

    const onBlur = (e) => { 
        if (!submitOnBlur === false) return;
        textCompleteAsync(e);
    };
    
    const textCompleteAsync = async (e) => {
        e.preventDefault();
        let newText = e.target?.value;
        
        if (newText === text) {
            console.warn("No change. Exiting.");
            toggleEditMode(e);
            return false;
        }
        
        if (typeof onComplete === "function") {
            let isAsync = (onComplete.constructor?.name === 'AsyncFunction');
            
            if (isAsync) return await onComplete(newText, e).then((x) => { 
                return setText(newText);
            });
            
            onComplete(newText, e);
            return setText(newText);
        }
        
        return setText(newText);
    };
    
    const textChanged = (e) => {
        if (!!editDescriptionRef?.current && !!e?.target){
            console.log("Changed: " + e.target.value);
            editDescriptionRef.current.value = e.target.value;
        } else { 
            console.warn("Ref is no good");
        }
        
        if (typeof onChange === "function") onChange(e);
    };

    useEffect(() => {
        setEditMode(false);
    }, [text]);
    
    useEffect(() => {
        if (editMode) editDescriptionRef?.current?.focus();
    }, [editMode]);

    useEffect(() => {
        if (typeof controller?.setSubmit === "function")
            controller.setSubmit(textCompleteAsync);
     }, []);

    return editMode ?
        (<p className={"form medium project-item"} onClick={toggleEditMode}><textarea onChange={textChanged} ref={editDescriptionRef} onBlur={onBlur} defaultValue={text} /></p>) :
        (<p className={"markdown has-details"} onClick={toggleEditMode}>
            { children }
            <span dangerouslySetInnerHTML={{ __html: marked.parse(text || "")}}></span>
        </p>);
};

export default MarkdownToggleEditor;

