import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";

const DeleteButton = (props) => {
    const getDeleteType = () => {
        if (typeof type !== "string") type = type?.toString() || "";

        switch (type) {
            case "prompt":
            case "confirm":
            case "1":
                return 1;
            case "undo":
            case "delay":
            case "count":
            case "countdown":
            case "2":
                return 2;
            default:
                return 0;
        }
    }

    const { children, onClick, className, type, activity, promptText, countDown } = props;
    const [countDownValue, setCountDownValue] = useState(countDown || 8);
    const deleteType = useState(getDeleteType())[0];
    const [deleteState, setDeleteState] = useState(0);  // 0=ready, 1=prompted, 2=deleting, 3=deleted, string=error
    const deleteRef = useRef();
    let didClick = false;

    const getDeleteClassName = () => {
        if (deleteState === 1) return "confirm";
        if (deleteState === 2) return "deleting";
        if (deleteState === 3) return "deleted";

        return "";
    };

    const onDeleteAsync = async (e) => {
        if (typeof onClick !== 'function')
            throw new Error("No onClick function was given to the DeleteButton component.");
        
        console.log("onDeleteAsync: " + deleteState);
        const rsp = onClick(deleteState, e);
        const result = (typeof rsp?.then === 'function') ? await rsp.then((v) => v) : rsp;

        if (result === false) return;

        if (typeof result === "number" && result >= 0 && result < 4) {
            setDeleteState(result);
            return;
        }

        setDeleteState(0);
    }

    const onClickAsync = async (e) => {
        didClick = true;
        
        console.log("OnDelete: " + deleteType);
        if (deleteType === 0) return onDeleteAsync(e);

        if (deleteState === 1) setDeleteState(2);
        else if (deleteState === 0) setDeleteState(1);
    };

    const onBlur = (e) => {
        console.log("Blur: " + deleteState);
    }


    useEffect(() => {
        if (deleteState === 0) return;
        if (deleteState === 1) {
            if (!!deleteRef.current) {
                console.log("Focus: " + deleteState);
                deleteRef.current.focus();
                setTimeout(() => {
                    if (!didClick) setDeleteState(2);
                }, 5000);
            } else {
                console.log("No ref: " + deleteState);
            }
            return;
        }

        if (deleteState === 2) {
            onDeleteAsync();
            return
        }

        if (deleteState === 3) {
            setTimeout(() => setDeleteState(0), 3000);
        }
        
    }, [deleteState]);

    const cn = typeof className === 'string' ? className : "";

    let body = typeof deleteState === "string" ? deleteState : children;

    switch (deleteState) {
        case 1:
            body = promptText || DeleteButton.standardPrompt;
            break;
        case 2:
            body = activity || "Deleting...";
            break;
        case 3:
            body = "Deleted";
            break;
        default:
            break;
    }

    const c = deleteState === 2 ? 0 : (typeof countDown === "number" && countDown > 0) ? countDown : 8;
    const confirmClass = deleteState === 1 ? "countdown" : (deleteState === 2 ? "deleting" : "");
    const st = { animationDuration: (c + 0.2).toFixed(1) + "s" };

    return (<a ref={deleteRef} onBlur={onBlur} className={("delete-button " + cn + " " + getDeleteClassName()).trim()} onClick={onClickAsync}>
        <span className={"delete-button-content"}>{body}</span>
        <span style={st} className={("delete-timer " + confirmClass).trim()}>{countDownValue}</span>
    </a>);
};

DeleteButton.standardPrompt = (<><FontAwesomeIcon icon={faSkullCrossbones} />Deleted: Undo x</>);

export default DeleteButton;
