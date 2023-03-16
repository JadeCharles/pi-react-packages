import React, {useEffect, useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogBoxController from "./DialogBoxController";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import './Dialog.css';

const DialogBox = (props) => {
    let {
        title,
        controller,
        options,
        onCancel,
        onConfirm,
        onOpen,
        onOkay,
        okayButton,
        cancelCaption,
        okCaption,
        loadingCaption,
        bodyId,
        successButtonCaption,
        failButtonCaption,
        hasCancelButton,
        hasOkayButton,
        actionPanel,
        className,
        fullScreen,
        id
    } = props;
    
    if (!options) options = { title: "" };

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogState, setDialogState] = useState(0);
    
    // TODO: Add the ability to change the title, body, and buttons with the controller
    let [data, setData] = useState({title: "", body: null, open: false});
    
    if (!loadingCaption) loadingCaption = options.loadingCaption;
    if (!loadingCaption) loadingCaption = "Working";
    if (!okCaption) okCaption = (options.okCaption || 'Okay');

    if (!controller) {
        controller = new DialogBoxController();
        console.warn("Controller not provided, using default");
    }

    controller.setOpenCallback((payload, title = null, body = null) => {
        const contentBody = body || props.children;
        controller.setPayload(payload);
        controller.setBody(contentBody);
        controller.setTitle(title);

        let newData = {...data, body: contentBody, open: true };
        newData.title = title;

        if (typeof onOpen === 'function') onOpen();

        setData(newData);
    }, true);

    controller.setCloseCallback(() => {
        setDialogState(0);
    });
    
    useEffect(() => {
        if (data?.open === true)
            setIsDialogOpen(true);
    }, [data]);

    useEffect(() => {
        //console.log("Dialog Open: " + isDialogOpen);
    }, [isDialogOpen]);

    useEffect(() => {
        //console.log("Dialog State Updated: " + dialogState);
        if (dialogState === 0) setIsDialogOpen(false);
    }, [dialogState]);

    useEffect(() => {
        //
    }, []);
    
    let confirmCancel = typeof onCancel === 'function' ? onCancel : (e) => { 
        return true;
    };

    let onCancelClick = (e) => {
        let result = confirmCancel(e);
        if (result !== false) {
            setIsDialogOpen(false);
        }
    };
    
    let isConfirm = typeof onConfirm === 'function';
    let isOkay = typeof onOkay === 'function';
    
    let buttonClassName = "";
    if (!!className && typeof className === 'string') buttonClassName = " " + className;

    const onButtonPressAsync = async (e) => {
        if (dialogState >= 1) return;
        let result = null;
        
        if (isConfirm) {
            console.log('Calling onConfirm() because isConfirm is ' + isConfirm.toString());
            let isConfirmAsync = onConfirm?.constructor?.name === 'AsyncFunction';
            
            if (isConfirmAsync) {
                setDialogState(dialogState + 1);
                result = await onConfirm(e);
            } else result = onConfirm(e);
            
        } else if (isOkay) {
            console.log("IsOkay...");
            const rsp = onOkay(e);
            
            if (typeof rsp?.then === 'function') {
                setDialogState(dialogState + 1);
                result = await onOkay(e);
            } else result = rsp;
        }

        console.log('Dialog Result: ' + result);
        
        if (typeof result === 'number') {
            console.log('Result is number: ' + result);
            setDialogState(2);
            
            setTimeout(() => {
                controller.close();
            }, result);
        } else if (result !== false) {
            console.log("Result is: " + result);
            setIsDialogOpen(false);
        } else {
            console.log("Result Fallout: " + result);
            setDialogState(0);
        }
    };

    const getLoadingButton = () => {
        if (hasOkayButton === false) return null;
        
        let isSpinning = (dialogState === 1);
        if (!!okayButton && !isSpinning) return okayButton;
        
        let cn = '';
        let icon = null;
        let buttonCaption = (okCaption || options.buttonCaption) || 'Okay';
        
        if (isSpinning) {
            buttonCaption = isSpinning ? (loadingCaption || 'Working') : (successButtonCaption || 'Success');
            cn = !!isSpinning ? 'spinning' : 'done';
            icon = isSpinning ? (<label></label>) : (<FontAwesomeIcon icon={faCheckCircle}/>);
        }

        return (<Button onClick={onButtonPressAsync}>{buttonCaption} <span className={cn}>{ icon }</span></Button>);
    };
    
    let confirmButton = getLoadingButton();
    let body = props.children || (<>No data</>);
    let defaultTitle = (typeof onConfirm === 'function') ? 'Confirm' : 'Alert';
    
    let cancelButton = (hasCancelButton !== false) ? (<Button autoFocus color="inherit" onClick={onCancelClick}>
        { cancelCaption || "Cancel" }
    </Button>) : null;
    
    return (
        <Dialog open={isDialogOpen} className={"dialog-state-" + dialogState.toString()} fullScreen={fullScreen === true}>
            <DialogTitle id={"confirm-dialog-title"}>{ data?.title || defaultTitle }</DialogTitle>
            <DialogContent>
                <DialogContentText id={bodyId || "dialog-body"} className={"dialog-body"}>
                    {data?.body}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <span className={"dialog-buttons" + buttonClassName}>
                    <span className={"dialog-action-panel"}>{actionPanel}</span>
                    {cancelButton}
                    {confirmButton}
                </span>
            </DialogActions>

        </Dialog>
        
    );
};

export default DialogBox;
