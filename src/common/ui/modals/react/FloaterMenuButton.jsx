import React, { useEffect, useState } from 'react';
import ReactMenuModal from './ReactMenuModal';
import MenuController from '../MenuController';

const FloaterMenuButton = (props) => {
    const { id, items, isLocked, position, children, isOpen, className, menuPlacement, menuOffset, controller, onClick } = props;
    const [menuItems, setMenuItems] = useState(Array.isArray(items) ? items : []);
    const [anchorElement, setAnchorElement] = useState(null);
    const reactModal = useState(new ReactMenuModal())[0];

    const elementId = typeof id === "string" ? id : "floater-button";

    const setContainerHtmlPosition = () => { 
        if (typeof document === "undefined") return false;
        if (isLocked === true) return false;
        if (!anchorElement) return false;

        const parentNode = anchorElement.parentNode;

        if (!!parentNode) {
            if (parentNode !== document.body) return false;
            anchorElement.remove();
        }

        const left = typeof position?.x === "number" ? position.x : 0;
        const top = typeof position?.y === "number" ? position.y : 0;

        if (left > 0) anchorElement.style.left = Math.round(left) + "px";
        if (top > 0) anchorElement.style.top = Math.round(top) + "px";

        if (!anchorElement?.parentNode) {
            document.body.appendChild(anchorElement);
            console.log("Added Anchor Element to Body.");
        }
        
        return true;
    };

    useEffect(() => {
        if (controller instanceof MenuController) {
            controller.close = closeMenu;
            controller.open = openMenu;
            
            if (isOpen === true) controller.setState(1);
        }

        if (isOpen === true) openMenu();
        if (typeof document !== "undefined" && !anchorElement)
            setAnchorElement(document.getElementById(elementId));

    }, []);

    useEffect(() => { 
        if (!!anchorElement && isLocked !== true) {
            setContainerHtmlPosition();
        }

    }, [anchorElement]);

    const closeMenu = (e) => {
        reactModal.close(e);
    };

    const openMenu = async (e) => {
        const rsp = typeof onClick === "function" ? onClick({ items: items }, e) : null;
        const result = (typeof rsp?.then === "function") ? await rsp : rsp;

        if (result === false) return;

        const menuElements = reactModal.createReactMenuItems(menuItems);

        const pl = typeof menuPlacement === "string" && menuPlacement.length > 0 ? menuPlacement : "bottom";
        const offsetX = typeof menuOffset?.x === "number" ? menuOffset.x : 0;
        const offsetY = typeof menuOffset?.y === "number" ? menuOffset.y : 0;
        
        const options = {
            className: typeof modalClassName === "string" ? className : null,
            placement: pl,
            offsetX: offsetX,
            offsetY: offsetY
        };

        reactModal.openFloaterAsync(e, menuElements, options);
    };

    const buttonClassName = (typeof className === "string") ? className : "";

    return (<div id={elementId} className={"pi-floater-button-container" + (isLocked === true ? " locked" : "")}>
        <button onClick={openMenu} className={("floating-button " + buttonClassName).trim()}>
            {children || " X "}
        </button>
        
    </div>);
}

export default FloaterMenuButton;
