import React from 'react';
import DragController from "./DragController";

const DropBox = (props) => {
    const { onDrop, onEnter, onExit, onMove, onCancel, children, className, id, ignore, data } = props;
    const [overClassName, setOverClassName] = React.useState("");
    
    const ignoreIds = (!!ignore ? (Array.isArray(ignore) ? ignore : [ignore]) : []).map((i) => i.toString());

    let didDrop = false;
    
    const onItemDrop = (e) => {
        e.preventDefault();
        
        didDrop = true;
        
        const data = DragController.instance.getData();
        if (typeof onDrop === 'function') onDrop(e, data);
        
        setOverClassName("dropped");
    }

    const onDragEnter = (e) => {
        e.preventDefault();

        const data = DragController.instance.getData();
        if (typeof onEnter === 'function') onEnter(e, data);
        
        setOverClassName("over");
    };

    const onDragOver = (e) => {
        e.preventDefault()

        const data = DragController.instance.getData();
        if (typeof onMove === 'function') onMove(e, data);
        
        setOverClassName("over");
    };
    
    const onDragLeave = (e) => {
        e.preventDefault();

        const data = DragController.instance.getData();
        if (typeof onExit === 'function') onExit(e, data);
        
        setOverClassName("");
    };

    const onDragEnd = (e) => {
        e.preventDefault();
        
        if (didDrop) {
            didDrop = false;
            return;
        }
        
        if (typeof onCancel === 'function') onCancel(e);
    };

    return (<div className={("dropper " + (className || "") + " " + overClassName).trim()} id={id} onDragEnd={onDragEnd} onDragEnter={onDragEnter} onDrop={onItemDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}>{children}</div>);
};

export default DropBox;

