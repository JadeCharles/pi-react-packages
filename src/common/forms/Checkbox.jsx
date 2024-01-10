import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareCheck, faSquare} from "@fortawesome/free-regular-svg-icons";
import SetterFunction from '../controllers/SetterFunction';
import FormController from '../controllers/FormController';

const Checkbox = (props) => {
    const {
        children,
        onChange,
        onCheck,
        isDebug,
        controller,
        setter,
        onIcon,
        offIcon,
        size,
        onElement,
        offElement,
        value,
        isChecked,
        checked,
        label,
        id,
        preventDefault,
        controllerKey
    } = props;

    const [checkedState, setCheckedState] = useState(value === true || isChecked === true || checked === true);

    const toggleCheckbox = (value = null, fromController = false, e) => {
        if (preventDefault !== false) { 
            if (typeof e?.preventDefault === "function") e.preventDefault();
            if (typeof e?.stopPropagation === "function") e.stopPropagation();
        }

        const newValue = typeof value === "boolean" ? value : !checkedState;
        const onCheckbox = typeof onChange === "function" ? onChange : onCheck;

        if (typeof onCheckbox === "function") {
            if (typeof e === "object") e.fromController = fromController;
            else e = { fromController: fromController };
            
            if (onCheckbox(newValue, e) === false) {
                if (isDebug === true) console.log("Suppressing onCheck re-render");
                return;
            }

            if (isDebug === true) console.log("onCheck(" + newValue + ", " + fromController + ")");
        }

        setCheckedState(newValue);
    };
    
    const setSetterFunction = () => { 
        if (setter instanceof SetterFunction) {
            setter.setFunction((checked, e) => {
                toggleCheckbox(checked, true, e);
            });
            
            if (isDebug === true) console.log("Setter function set for checkbox: " + setter);
            return true;
        }

        if (isDebug === true) console.warn("No setter function set for checkbox");
        return false;
    };

    const setControllers = () => {
        const ckey = typeof controllerKey === "string" && controllerKey.length > 0 ?
            controllerKey :
            "checkbox";
        
        if (typeof controller?.setCallback === "function") {
            controller.setCallback(ckey, () => checkedState);
        }

        if (typeof controller?.addEventListener === "function") {
            controller.addEventListener("update", (checked, e) => {
                toggleCheckbox(checked, true, e);
            }, ckey);
        }
        
        return true;
    };
    
    useEffect(() => { 
        if (setter?.isMounted() === false)
            setSetterFunction();
        
        setControllers();
    }, []);

    const iconSize = typeof size === "string" ? size : (typeof size === "number") ? size + "x" : "2x";
    const onStateElement = onElement || (<FontAwesomeIcon icon={onIcon || faSquareCheck} size={iconSize} />);
    const offStateElement = offElement || (<FontAwesomeIcon icon={offIcon || faSquare} size={iconSize} />);

    const elementId = typeof id === "string" ? id : null;
    const labelContent = label || children;
    const labelElement = !!labelContent ? (<label className="checkbox-label">{labelContent}</label>) : null;
    const element = checkedState ? onStateElement : offStateElement;

    return (<span id={elementId} className={("checkbox " + (checkedState ? "checked" : "")).trim()} onClick={(e) => toggleCheckbox(checkedState === false, false, e)}>
        <span className="checkbox-icon">{element}</span>
        { labelElement }
    </span>);
};

Checkbox.getObjectByPathName = (obj, path) => {
    let fieldKey = "";
    let prevKey = "";
    let cur = obj;

    const tokens = path.split(".");
    fieldKey = tokens.shift();

    while (tokens.length > 0) {
        prevKey = fieldKey;
        fieldKey = tokens.shift();
        if (typeof cur[prevKey] !== "object") cur[prevKey] = {};
        cur = cur[prevKey];
    }
        
    cur.____key = fieldKey;

    return cur;
};

Checkbox.defaultDataKey = "checkbox";

export default Checkbox;

