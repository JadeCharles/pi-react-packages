import React, {useEffect, useState} from 'react';
import './DropTarget.css';
import '../../../content/ui/Content.css';

const DropTarget = (props) => {
    const { children, className, elementType, onDrop, id, dragOverClassName, onPaste, onPasteText } = props;

    let [overClass, setOverClass] = useState('');
    
    const ovc = dragOverClassName ? " " + dragOverClassName : " over";
    
    const initOnPaste = () => {
        if (typeof onPaste !== 'function' && typeof onPasteText !== 'function') return
        
        window.addEventListener("paste", async (e) => {
            e.preventDefault();
            e.stopPropagation();

            const clipFiles = e.clipboardData?.files;
            const textData = e.clipboardData?.getData("text");

            if (typeof onPasteText === 'function' && !!textData) onPasteText(textData);
            if (typeof onPaste == 'function' && !!clipFiles && clipFiles.length > 0) onPaste(clipFiles);
        });
        console.log("Paste Clipboard Initialized");
    };        
    
    useEffect(() => { 
        initOnPaste();
    }, []);
    
    const onItemDrop = (e) => {
        if (typeof onDrop !== 'function') {
            console.warn("No onDrop function defined");
            return;
        }
        
        e.preventDefault();
        
        let fileItems = e.dataTransfer.files;
        if (!fileItems || fileItems.length < 1) fileItems = [];
        
        let otherItems = e.dataTransfer.items;
        if (!otherItems || otherItems.length < 1) otherItems = [];
        
        onDrop(fileItems, otherItems);
    };

    const onDrag = (e) => {
        e.preventDefault();
    };
    
    const onDragEnter = (e) => {
        e.preventDefault();
        setOverClass(ovc);
    };
    
    const onDragExit = (e) => {
        e.preventDefault();
        //console.log("Drag Exit");
        setOverClass('');
    }

    const onDragOver = (e) => {
        e.preventDefault();
    };

    let elementId = id || ("drop-target-" + Math.random().toString(36).substring(7));
    //document.getElementById(elementId)?.addEventListener('drop', onDrop);
    
    let containerType = elementType || 'div';
    
    // is there a better way to do this?
    if (containerType === 'li') return (<li id={elementId} className={(className || "drop-target") + overClass} onDragLeave={onDragExit} onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onItemDrop} onDrag={onDrag}>
        {children || (<>Drop files here</>)}
    </li>);

    return (<div id={elementId} className={(className || "drop-target") + overClass} onDragLeave={onDragExit} onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onItemDrop} onDrag={onDrag}>
        {children || (<>Drop files here</>)}
    </div>);
};

export default DropTarget;