import React from "react";
import ModalMenuItem from "../ModalMenuItem";

class ReactModalMenuItem extends ModalMenuItem { 
    constructor(json) { 
        super(json);

        this.reactComponent = json?.reactComponent || null;
    }

    toElement(owner, options = {}) {
        const onClickWrapper = (onClick, e) => { 
            console.warn("Click Wrap: " + e.target?.tagName);

            const hasClose = typeof owner?.closeAsync === "function";

            if (typeof onClick !== "function") { 
                if (hasClose) owner.closeAsync(e);
                return;
            }

            const result = onClick(this, e);

            if (result !== false) {
                // close menu
                if (hasClose) owner.closeAsync(e);
            }
        };
        
        if (!!this.reactComponent) {
            if (typeof this.reactComponent.type !== "undefined") { 
                let elementType = this.reactComponent.type;

                const props = { ...this.reactComponent.props };
                const sourceOnClick = props?.onClick;
                const href = props.href || props.to;

                if (typeof href === "string" && elementType !== "a" && elementType !== "Link" && elementType !== "TransitionLink") { 
                    elementType = "a";
                    props.href = href;
                    delete props.to;
                }

                if (typeof props?.onClick === "function" && !href)
                    props.onClick = (e) => onClickWrapper(sourceOnClick, e);

                return React.createElement(elementType, props, this.reactComponent.props.children);
            } else {
                console.warn("React Component Type is undefined");
            }

            return this.reactComponent;
            // let props = { ...this.reactComponent.props };
            // const hasOnClick = typeof props?.onClick === "function";

            // const originalOnClick = hasOnClick ? props?.onClick : (e) => {
            //     console.log("Toast");
            //     owner.closeAsync(e);
            //     return true;
            // };

            // const body = props.children;
            // const elementType = body.type;

            // delete props.onClick;

            // props.onClick = (e) => onClickWrapper(originalOnClick, e);

            // const hasHref = typeof props?.href === "string";
            // console.warn("HasHref: " + hasHref + " | " + (typeof body.props?.href === "string"));

            // return React.createElement(elementType, props, body);

            //return React.cloneElement(this.reactComponent, { ...props });
        }
        
        const key = "menu-item-" + this.id;
        const cn = this.label === null ? " separator" : "";
        const className = "menu-item" + cn;

        const label = this.label === null ?
            (<>&nbsp;</>) :
            (<a href={this.href} onClick={(e) => onClickWrapper(this.onClick, e)}>{this.label}!</a>);

        return (<div title="Non-React" className={className} key={key}>{label}</div>);
    }
}

export default ReactModalMenuItem;
