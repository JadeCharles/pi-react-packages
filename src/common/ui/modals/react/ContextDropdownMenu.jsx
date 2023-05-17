import React, { useEffect, useState } from 'react';
import ReactMenuModal from './ReactMenuModal';
import MenuController from '../MenuController';

const ContextDropdownMenu = (props) => {
    const { items, offset, children, isOpen, id, className, modalClassName, controller, tagName, onClick } = props;
    const [menuItems, setMenuItems] = useState(Array.isArray(items) ? items : []);
    const reactModal = useState(new ReactMenuModal())[0];

    useEffect(() => {
        if (controller instanceof MenuController) {
            controller.close = closeMenu;
            controller.open = openMenu;
            
            const key = (typeof id !== "string" || id.length < 30) ? "ContextDropdownMenu" : id;

            controller.onMenuItemAdded[key] = (item) => {
                const newItems = [...menuItems, item];
                setMenuItems(newItems);
                return true;
            };
    
            if (isOpen === true) controller.setState(1);
        }

        if (isOpen === true) openMenu();

    }, []);

    const closeMenu = (e) => {
        reactModal.close(e);
    };

    const openMenu = async (e) => {
        const rsp = typeof onClick === "function" ? onClick({ offset: offset, items: items }, e) : null;
        const result = (typeof rsp?.then === "function") ? await rsp : rsp;
        if (result === false) return;
        const menuElements = reactModal.createReactMenuItems(menuItems);
        const options = { className: typeof modalClassName === "string" ? className : null };
        
        reactModal.openContextAsync(e, menuElements, options);
    };

    const cn = typeof className === "string" ? className : "";
    const elementId = typeof id === "string" ? id : undefined;

    return React.createElement(tagName || "span", { id: elementId, className: (cn + " context-menu-container").trim(), onClick: openMenu }, children);
    //return (<div onClick={openMenu} style={{ border: "red 1px solid"}}>{children}</div>);
};

export default ContextDropdownMenu;
