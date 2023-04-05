import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareCheck, faSquare} from "@fortawesome/free-solid-svg-icons";
import SetterFunction from '../controllers/SetterFunction';
import FormController from '../controllers/FormController';

const Checkbox = (props) => {
    const {
        children,
        onChange,
        onCheck,
        controller,
        setter,
        onIcon,
        offIcon,
        size,
        onElement,
        id,
        offElement,
        defaultValue,
        value,
        isChecked,
        checked,
        label,
        controllerKey
    } = props;

    const [checkedState, setCheckedState] = useState(defaultValue === true || value === true || isChecked === true || checked === true);

    const toggleCheckbox = (value = null, fromController = false) => {
        const newValue = typeof value === "boolean" ? value : !checkedState;
        const onCheckbox = typeof onChange === "function" ? onChange : onCheck;

        if (typeof onCheckbox === "function") { 
            if (onCheckbox(newValue) === false) {
                console.log("Suppressing onCheck re-render");
                return;
            }
        }

        setCheckedState(newValue);
    };
    
    const setSetterFunction = () => { 
        if (setter instanceof SetterFunction) {
            setter.setFunction((checked) => {
                toggleCheckbox(checked, true);
            });
            
            console.log("Setter function set for checkbox: " + setter);
            return true;
        }

        console.warn("No setter function set for checkbox");
        return false;
    };

    const setControllerCallback = () => {
        if (!controller || !(controller instanceof FormController)) {
            //console.warn("setControllerCallback failed: No FormController was provided to checkbox");
            return false;
        }

        const ckey = typeof controllerKey === "string" && controllerKey.length > 0 ?
            controllerKey :
            "checkbox";
        
        controller.setCallback(ckey, () => checkedState);
        
        return true;
    };
    
    useEffect(() => { 
        if (setter?.isMounted() === false)
            setSetterFunction();
        
        setControllerCallback();
    }, []);

    const iconSize = typeof size === "string" ? size : (typeof size === "number") ? size + "x" : "2x";
    const onStateElement = onElement || (<FontAwesomeIcon icon={onIcon || faSquareCheck} size={iconSize} />);
    const offStateElement = offElement || (<FontAwesomeIcon icon={offIcon || faSquare} size={iconSize} />);

    const elementId = typeof id === "string" ? id : null;
    const labelContent = label || children;
    const labelElement = !!labelContent ? (<label className="checkbox-label">{labelContent}</label>) : null;
    const element = checkedState ? onStateElement : offStateElement;

    return (<span id={elementId} className={("checkbox " + (checkedState ? "checked" : "")).trim()} onClick={toggleCheckbox}>
        <span className="checkbox-icon">{element}</span>
        { labelElement }
    </span>);
};

Checkbox.defaultDataKey = "checkbox";

export default Checkbox;

