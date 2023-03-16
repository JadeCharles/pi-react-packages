import React from 'react';
import './LoadingPanel.css';

const LoadingPanel = (props) => {
    const {children, size} = props;

    let sz = (size || 0).toString();
    
    if (["24", "32", "48", "64", "128"].includes(sz))
        sz = "";
    
    return (
        <span className={"loading-box spinner size" + sz}>
            <label className={"spinner-label"}>{ children || "Loading"}</label>
            <span><label className={"spinning"}></label></span>
        </span>);
};

export default LoadingPanel;
