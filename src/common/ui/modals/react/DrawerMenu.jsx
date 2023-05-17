import React, { useEffect, useState } from 'react';
import Controller from "../../controllers/Controller";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DrawerMenu = (props) => {
    const { controller, title, className, id, onClick, onOpen, onClose, placement, type, children, homeLink } = props;

    const createClassNames = () => {
        const classNames = ["pi-drawer"];
        const ps = ((typeof placement !== "string" || placement.length === 0) ? "" : placement).split(" ").map((p) => p.trim().toLowerCase());
        const placementClassNames = ["enter-from"];

        if (ps.includes("top")) placementClassNames.push("top");
        else if (ps.includes("bottom")) placementClassNames.push("bottom");

        if (ps.includes("left")) placementClassNames.push("left");
        else if (ps.includes("right")) placementClassNames.push("right");

        if (placementClassNames.length < 2) placementClassNames.push("left");

        classNames.push(placementClassNames.join("-"));

        if (typeof className === "string" && className.length > 0)
            classNames.push(className);

        return classNames.join(" ");
    };
    
    const [drawerState, setDrawerState] = useState(0);  // 0=Closed, 1=Open, 2=Opening, 3=Closing
    const [elementId, setElementId] = useState(typeof id === "string" ? id : "pi-drawer-main");
    const [baseClassName, setBaseClassName] = useState(createClassNames());
    const [stateClassName, setStateClassName] = useState("");

    let currentState = drawerState;

    const getStateClassName = (st = null) => {
        if (typeof st !== "number") st = currentState;

        switch (st) {
            case 1: return "open";
            case 2: return "opening";
            case 3: return "closing";
            default: return "";
        }
    };

    const getDiv = () => { 
        if (typeof document === "undefined") return null;
        const div = document.getElementById(elementId);

        if (!div) throw new Error("DrawerMenu: Unable to find element with id '" + elementId + "'");

        return div;
    };

    const changeStateAsync = async (div, newState, delay = 200) => {
        if (newState >= 0) { 
            const currentClassName = getStateClassName(newState);
            currentState = newState;
            div.className = baseClassName + " " + currentClassName;
        }

        if (delay > 0) await new Promise((resolve) => setTimeout(() => resolve(), delay));
    }

    const openAsync = async () => { 
        if (drawerState !== 0) return false;

        console.log("OpenAsync From Drawer");

        const div = getDiv();
        
        await changeStateAsync(div, 2); // Opening state
        await changeStateAsync(div, 1, 10);  // Opened state

        setDrawerState(1);

        return true;
    };

    const closeAsync = async () => {
        if (drawerState !== 1) { 
            console.warn("DrawerState is not (" + drawerState + "). Aborting close.");
            return false;
        }

        console.log("CloseAsync From Drawer");

        const div = getDiv();
        
        await changeStateAsync(div, 3); // Closing state
        await changeStateAsync(div, 0, 10);  // Closed state

        setDrawerState(0);

        return true;
    };

    const toggleAsync = async () => { 
        console.log("Toggle: " + currentState);

        if (drawerState === 0) return openAsync();
        else if (drawerState === 1) return closeAsync();

        console.warn("Toggle skipped with state: " + currentState);

        return false;
    };

    useEffect(() => {
        if (controller instanceof Controller) {
            if (controller.state === 0)
                controller.setState(drawerState);

            controller.open = () => {
                console.log("Open from controller");
                openAsync();
            };
            controller.close = async () => {
                console.log("Close from controller");
                await closeAsync();
            };
            controller.toggle = () => {
                console.log("Toggle from controller");
                toggleAsync();
            };
        }

    }, [drawerState]);

    const body = !!children ? children :
        (<div className="pi-drawer-body">
            <div>
                <p>Drawer Body</p>
            </div>
        </div>);

    console.log("Rendered with state: " + currentState + " (" + drawerState + ")");

    const headerTitle = typeof title === "string" ? title : null;

    return (<div id={elementId} className={baseClassName}>
        <h2>
            <span>{headerTitle}</span>
            <span onClick={toggleAsync}>
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </h2>

        { body }
    </div>);
};

export default DrawerMenu;
