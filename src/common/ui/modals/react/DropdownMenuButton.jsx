import React, { useEffect, useState } from 'react';
import ReactMenuModal from './ReactMenuModal';
import MenuController from '../MenuController';

const DropdownMenuButton = (props) => {
     const { id, offset, items, tagName, useButton, onClick, arrow, children, isOpen, containerClassName, className, menuPlacement, controller } = props;
    const [menuItems, setMenuItems] = useState(Array.isArray(items) ? items : []);
    const reactModal = useState(new ReactMenuModal())[0];

    const elementId = typeof id === "string" ? id : "floater-button";

    const setContainerHtmlPosition = () => { 
        if (typeof document === "undefined") return;

        //const container = document.getElementById(elementId);
    };

    useEffect(() => {
        if (controller instanceof MenuController) {
            controller.close = closeMenu;
            controller.open = openMenu;
            
            if (isOpen === true) controller.setState(1);
        }

        if (isOpen === true) openMenu();
        
        setContainerHtmlPosition();

    }, []);

    const closeMenu = (e) => {
        reactModal.close(e);
    };

    const openMenu = async (e) => {
        const rsp = typeof onClick === "function" ? onClick({ offset: offset, items: items }, e) : null;
        const result = (typeof rsp?.then === "function") ? await rsp : rsp;
        
        if (result === false) return;

        const menuElements = reactModal.createReactMenuItems(menuItems);
        const idClassName = typeof id === "string" ? id : null;
        const ccn = typeof containerClassName === "string" ? containerClassName : idClassName;
        const options = {
            className: ccn,
            offsetX: offset?.x,
            offsetY: offset?.y,
        };
        
        reactModal.openDropdownAsync(e, menuElements, options);
    };
    
    const buttonClassName = (typeof className === "string") ? className : "";
    const body = useButton !== false ?
        (<button onClick={openMenu} className={("floating-button " + buttonClassName).trim()}>{children || " X "}</button>) :
        (<span onClick={openMenu} className={("floating-button " + buttonClassName).trim()}>{children || " X "}</span>);

    const elementType = typeof tagName === "string" && tagName.length > 0 ? tagName : "span";
    const cn = typeof className === "string" ? className : "";

    return React.createElement(elementType, { id: elementId, className: ("pi-modal-dropdown-button-container " + cn).trim() }, body);

    // return (<div id={elementId} className={"pi-menu-button-container"}>
    //     {body}
        
    // </div>);
}

export default DropdownMenuButton;
