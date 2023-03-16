import React, { useEffect, useState } from 'react';
import "./ActivityLink.css";

const ActivityLink = (props) => {
    const { children, onClick, className, activity, completed, onComplete, onError } = props;
    
    const initState = { state: 0, activity: activity };
    const [itemState, setItemState] = useState(initState);

    const onItemClick = async (e) => {
        if (itemState.state !== 0) return;
        
        const data = {...itemState, state: 1};
        setItemState(data);
    };

    const handleActivity = async (e) => {
        switch (itemState.state) {
            case 0:
                // Nada.
                break;
            case 1:
                const rsp = onClick();
                
                if (typeof rsp.then === 'function') {
                    await rsp.then((x) => {
                        if (typeof onComplete === 'function') onComplete(x);
                        setItemState({ state: 2, activity: completed || "Good" })
                    }).catch((ex) => {
                        const errorMessage = (ex?.response?.data?.message || ex?.data?.message) || (ex?.message || JSON.stringify(ex || "Error!"));
                        if (typeof onError === 'function') onError(ex);
                        setItemState({ state: -1, activity: errorMessage })
                    });
                    
                    return;
                }
                break;
            default:
                setTimeout(() => {
                    setItemState(initState);
                }, 1500);
                break;
        }
        
    };
    
    useEffect(() => {
        if (typeof onClick !== 'function') return;
        let _ = handleActivity();
    }, [itemState]);

    const body = (children || (<>Press Here</>));
    const cn = itemState.state === 1 ? " activity" : "";
    const content = itemState.state === 1 ? (activity || body) : body;
    
    return (<a className={("activity-link " + (className || "") + " " + cn).trim()} onClick={onItemClick}>
        <label>x</label>
        <span className={"activity-link-content"}>
            <span>{content}</span>
        </span>
    </a>);
};

export default ActivityLink;
