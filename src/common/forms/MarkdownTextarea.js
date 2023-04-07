import React, { useState } from 'react';
import {Tooltip, createTheme} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {marked} from "marked";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {piMarkdown} from "../ui/svgs/LogoSvgs";

const MarkdownTextarea = (props) => {
    const { label, icon, className, onChange, fieldName, children } = props;
    const [viewer, setViewer] = useState({text: children, textarea: "", preview: "none"});
    
    let cn = className ? " " + className : "";
    let text = children || "";
    
    const onTextChange = (e) => {
        text = e.target.value;
        console.log(text);
        
        if (typeof onChange === 'function') { 
            if (typeof fieldName !== 'undefined') onChange(fieldName, e);
            else onChange(e);
        }
    };
    
    const togglePreview = (e) => {
        let isHidden = viewer.textarea === "none";
        let p = {
            preview: "",
            textarea: "",
            text: text || ""
        };
        
        if (isHidden) p.preview = "none";
        else p.textarea = "none";
        
        setViewer(p);
    };

    const toolTipTheme = createTheme({
        backgroundColor: "black"
    });

    const tooltipClasses = { 
        tooltipArrow: "dark-arrow",
        tooltip: "dark-body",
        tooltipPlacementRight: "dark-right",
    };
    
    let markdownReferenceElement = (<span className={"markdown-tooltip-body"}>
        <h1>Markdown encoded description</h1>
        <p>
            Markdown is a lightweight markup language with plain text formatting syntax.<br/>
            <a href={"https://www.markdownguide.org/basic-syntax/"}>Basic Markdown Syntax <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </p>
    </span>)
    
    return (
        <>
        <label>
            {label || "Description"}
            <Tooltip placement={"right"} arrow={true} className={"markdown-tooltip" + cn} theme={toolTipTheme} classes={tooltipClasses} title={markdownReferenceElement}>
                <FontAwesomeIcon onClick={togglePreview} icon={icon || piMarkdown} />
            </Tooltip>
        </label>
        <textarea className={"markdown-textarea" + cn} style={{display: viewer.textarea}} onChange={onTextChange} defaultValue={children} />
        <span style={{display: viewer.preview}} id={"preview-id"} className={"markdown-preview markdown"}>
            <span dangerouslySetInnerHTML={{ __html: marked.parse(viewer.text || "")}}></span>
        </span>
        </>
    );
};

export default MarkdownTextarea;
