import React, { useEffect, useRef, useState } from 'react';

const InlineEditor = (props) => {
    const { id, onComplete, value, defaultValue, isEditing, onError, onChange, onOpen, onClose, cancelKeys } = props;
    const [editMode, setEditMode] = useState(isEditing === true ? 1 : 0);
    const [textValue, setTextValue] = useState(value || defaultValue || "");

    const elementId = typeof id === "string" ? id : "inline-editor-" + Math.floor(Math.random() * 1000000).toString(16).toLowerCase();
    const textRef = useRef();

    const completeEditorAsync = async (e) => {
        console.log("onCompleted");

        const text = textRef?.current.value || e.target.value || "";
        const rsp = (typeof onComplete === "function") ? onComplete(text) : null;
        
        if (typeof rsp?.then === "function") {
            setEditMode(2);

            const result = await rsp.catch((ex) => { 
                if (typeof onError === "function") onError(ex);
                setEditMode(1);

                return -1;
            });

            if (result === false) return;
        }

        setTextValue(text);
        setEditMode(0);
    };

    const cancelEditor = (doBlur = true) => { 
        setEditMode(-1);
    };

    const onBlur = (e) => { 
        if (!e) return;

        console.log("Blur[" + editMode + "]: " + e);

        if (editMode === 1)
            completeEditorAsync(e);
    };

    const cancels = Array.isArray(cancelKeys) ? cancelKeys : ["escape", "esc"];

    const onKeypress = (e) => {
        console.log(e.currentTarget?.value || "NULL");
        if (e.key === "Enter") {
            onBlur(e);
        } else if (cancels.includes(e.key.toLowerCase())) {
            cancelEditor();
        }
    };

    useEffect(() => {
        if (editMode === 1)
            setTimeout(() => { textRef?.current?.focus(); }, 100);
        else if (editMode === -1 && !!textRef?.current)
            textRef.current.value = textValue;
        
    }, [editMode]);

    const editClassName = editMode === 1 ? "inline-editing" : (editMode === 2 ? "inline-editing completing" : "");

    return (<span className={("inline-editor " + editClassName).trim()}>
        <span className="inline-editor-content" onClick={() => setEditMode(1)}>{textValue}...</span>
        <span className="inline-editor-input">
            <input type="text" defaultValue={textValue} onBlur={onBlur} id={elementId} ref={textRef} onKeyUpCapture={onKeypress} />
        </span>
    </span>);
}

export default InlineEditor;
