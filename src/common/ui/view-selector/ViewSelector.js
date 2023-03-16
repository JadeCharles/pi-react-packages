import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faList} from "@fortawesome/free-solid-svg-icons";
import './ViewSelector.css';
import ViewSelectionModel from "./ViewSelectionModel";
import {Tooltip} from "@mui/material";

const ViewSelector = (props) => {
    const { index, value, items, onChange, id } = props;
    const selectionItems = ViewSelectionModel.cleanItems(items, 2);
    const [selection, setSelection] = useState(ViewSelectionModel.cleanIndex(index, items));
    let _;

    const onClick = (item, index, e) => {
        setSelection(index);
    };
    
    const onItemSelected = async (item, index) => {
        if (typeof onChange === "function") {
            if (onChange.constructor.name === "AsyncFunction") await onChange(item, index);
            else onChange(item, index);
        }
    };

    useEffect(() => {
        if (typeof selection === 'number') { 
            if (selection >= 0 && selection < selectionItems.length) {
                // Do something.
                _ = onItemSelected(selectionItems[selection], selection);
            }
        } else if (typeof selection === 'string') {
            //
        }
        
    }, [selection]);

    const itemElements = selectionItems.map((item, i) => {
        const cn = i === selection ? " selected" : "";
        
        return (
            <Tooltip title={item.name} placement={"top"} key={"view-selection-" + i}>
            <a className={"view-selection view-selection-" + i.toString() + cn} onClick={(e) => onClick(item, i, e)}>
            <FontAwesomeIcon icon={item.icon} />
            </a></Tooltip>);
    });
    
    return (<span className={"view-selector"} id={id || ""}>
            <span>{ itemElements }</span>
        </span>
    );
};

export default ViewSelector;

