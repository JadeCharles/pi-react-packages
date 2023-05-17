import React from 'react';
import ReactModal from "./ReactModal";
import ReactModalMenuItem from "./ReactModalMenuItem";

class ReactMenuModal extends ReactModal { 
    static dialogBackgroundClassName = "pi-modal-background menu ";

    constructor(json) {
        if (!json) json = {};
        json.modalType = "menu";
        json.position = { x: 0, y: 0, type: "menu" };

        super(json);

        this.options = null;
        this.anchor = null;

        this.defaultBackgroundClassName = (ReactMenuModal.dialogBackgroundClassName + " " + this.userClassName).trim();
        this.backgroundClassName = this.defaultBackgroundClassName;
    }

    openAsync(content, buttons = []) {
        return super.openAsync(content, buttons);
    };

    /**
     * Opens a context menu based on the mouse position
     * @param {HTMLEvent} mouseEvent - The click event 'e' from the mouse click
     * @param {[any]} items - An array of items to display in the menu. Each item can be a string or a React component (we will try to detive them from the type)
     * @param {object} options - An object with options for the menu
     * @returns {Promise}
     */
    openContextAsync(mouseEvent, items = [], options = {}) { 
        if (!Array.isArray(items)) throw new Error("MenuModal.openContexAsync: items must be an array");

        if (!options) options = {};
        options.offset = "mouse";

        return this.openDropdownAsync(mouseEvent, items, options);
    };
    
    async openFloaterAsync(sender, items = [], options = {}) { 
        if (typeof options !== "object") options = {}
        options.className = "menu floater";

        const content = (<div>{this.createMenuItems(items)}</div>);

        return await this.openExpandableAsync(sender, content, options);
    }

    async openDropdownAsync(sender, items = [], options = {}) {
        if (typeof options !== "object") options = {}
        
        const cn = typeof options?.className === "string" ? options.className : "";
        options.className = ("menu context " + cn).trim();
        options.placement = "bottom";

        if (!options.offsetY) options.offsetY = "bottom";

        if (!Array.isArray(items)) throw new Error("MenuModal.openContexAsync: items must be an array");

        const content = (<div>{this.createMenuItems(items)}</div>);

        return await this.openExpandableAsync(sender, content, options);
    }

    async openExpandableAsync(sender, content, options = {}) {
        if (this.hasTargetEvent(sender)) return this;

        if (typeof sender?.stopPropagation === "function") sender.stopPropagation();
        if (typeof sender?.preventDefault === "function") sender.preventDefault();

        this.setPlacement(options?.placement);
        const placementClassName = this.getPlacementClassName();

        this.userClassName = ((options?.className || "") + " " + placementClassName).trim();
        const anchorElement = sender?.currentTarget;  //
        const anchorRect = typeof anchorElement?.getBoundingClientRect === "function" ?
            sender?.currentTarget?.getBoundingClientRect() :
            null;

        if (!anchorRect) throw new Error("No anchor rectangle");
        
        this.options = options;
        this.anchor = anchorRect;

        if (this.options?.offset === "mouse") {
            if (typeof sender?.clientX === "number") this.position.x = sender.clientX;
            if (typeof sender?.clientY === "number") this.position.y = sender.clientY;
        } else {
            // These positions get used in base.openAsync(), right before onPreOpen
            // ... This is because we may need to re-position the menu based on the size of the measured container
            this.position.x = anchorRect.left;
            this.position.y = anchorRect.top;
        }

        return this.openAsync(content, []);
    };

    /**
     * This is for context menus or floater menus. The offset returned positions the container x/y relative to the anchor
     * @returns {{x: number, y: number}} - The offset to apply to the menu container
     */
    getPlacementOffset() {
        const offset = { x: 0, y: 0 };
        const me = this;

        if (!!me.options) {
            const placement = me.options.placement || "bottom left";
            const placementParts = placement.split(" ");

            if (typeof this.anchor?.width === "number") {
                if (placementParts.includes("right")) offset.x += this.anchor.width;
                else if (placementParts.includes("centered") || placementParts.includes("center")) offset.x += (this.anchor.width / 2.0) - (me.size.width / 2.0);

                if (!placementParts.includes("top")) offset.y += this.anchor?.height;  // Default to bottom
                else if (placementParts.includes("centered") || placementParts.includes("middle")) offset.y += (this.anchor.height / 2.0) - (me.size.height / 2.0);
            }

        } else { 
            me.options = {};
        }

        if (typeof me.options.offsetX === "number") offset.x += me.options.offsetX;
        else me.options.offsetX = 0;

        if (typeof me.options.offsetY === "number") offset.y += me.options.offsetY;
        else me.options.offsetY = 0;

        if (typeof document !== "undefined") {
            const documentWidth = document.body.clientWidth;
            const documentHeight = document.body.clientHeight;

            let overflow = (me.position.x + offset.x) - documentWidth;
            if (overflow > 0) offset.x -= overflow;

            overflow = (me.position.y + me.size.height + offset.y) - documentHeight;
            if (overflow > 0) offset.y -= overflow;

            overflow = -(me.position.x + offset.x);
            if (overflow > 0) offset.x += overflow;

            overflow = -(me.position.y + offset.y);
            if (overflow > 0) offset.y += overflow;
        }
        
        return offset;
    }

    /** Checks (recursively) to see if a given HTMLEvent has a target + target.onclick event. If one is found, then we typically don't want to open the menu.
     *  If returns true, then we want to generally abord the open behavior. */
    hasTargetEvent(e, recursive = true) {
        // if this is a direct click on the target, then we want to open the menu
        if (!!e?.currentTarget && e.currentTarget === e?.target) return false;

        // If we clicked on a form element, then we don't want to open the menu
        if (["input", "textarea", "select", "button"].includes(e?.target?.tagName.toLowerCase()))
            return true;

        // if this is a direct has a click event, then we don't want to open the menu
        if (typeof e.nativeEvent?.target?.onclick === "function") return true;

        if (!recursive) return false;

        let cur = e.target;

        while (!!cur && cur !== e.currentTarget) {
            if (typeof cur?.onclick === "function" || !!e.target?.href) return true;
            cur = cur?.parentNode;
        }

        return false;
    }

    createMenuItems(items) {
        if (!Array.isArray(items)) throw new Error("MenuModal.createMenuItems: items must be an array");

        const me = this;
        const menuItems = items.map((item, i) => {
            const json = ReactModal.isReact(item) ? { reactComponent: item } : item;
            const menuItem = new ReactModalMenuItem(json);
            const element = menuItem.toElement(me, { index: i });

            return element;
        });

        return menuItems;
    }

    createReactMenuItems(items, options = {}) {
        if (typeof options !== "object") throw new Error("Options must be an object");
        if (typeof options.defaultClassName !== "string") options.defaultClassName = "menu-item";

        if (options.persist !== true) options.onClick = (e) => { 
            super.closeAsync(e);
        }

        return items?.map((item, index) => ReactMenuModal.createReactMenuItem(item, options.defaultClassName, "menu-" + index, options)) || [];
    }

    static createReactMenuItem(item, defaultClassName = "menu-item", key = null, options = {}) {
        if (typeof key !== "string" || key.length === 0)
            key = "menu-item-key-" + Math.floor(Math.random() * 99999999).toString(16).toLowerCase();
        
        if (item == null) return (<div className="menu-separator" key={key}></div>);
        
        if (ReactMenuModal.isReact(item)) {
            const newProps = { ...item.props };

            if (typeof options?.onClick === "function") {
                if (typeof newProps.className === "string")
                    defaultClassName = (newProps.className + " " + defaultClassName).trim();
                
                newProps.className = defaultClassName;
                
                if (typeof newProps.onClick === "function") {
                    const existing = newProps.onClick;
                    newProps.onClick = (e) => { 
                        const r = existing(e);
                        options.onClick(e);

                        return r;
                    }
                } else { 
                    newProps.onClick = options.onClick;
                }
            }
            
            const newItem = React.cloneElement(item, newProps);
            return (<React.Fragment key={key}>{newItem}</React.Fragment>);
        }

        const caption = item.name || item.caption || item.text || item.title || item.label || item.value || item?.toString();
        const onClickHandler = typeof item.onClick === "function" ? item.onClick : undefined;
        const href = (item.href || item.to) || undefined;

        const props = {
            className: ((typeof item.className === "string" ? item.className : "") + " " + defaultClassName).trim(),
            href: href,
            onClick: onClickHandler,
            id: typeof item.id === "string" ? item.id : undefined,
        };

        if (typeof item.elementType === "string") {
            props.key = key;
            return React.createElement(item.elementType, props, caption);
        }

        props.title = "Href: " + (href || "NULL");

        const elementType = "a";
        const a = React.createElement(elementType, { key: "menu-a-" + key, href: href }, caption);
        delete props.href;

        return (<span key={key} {...props}>{a}</span>);
    }
}

export default ReactMenuModal;
