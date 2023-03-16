import React, {useEffect, useState} from 'react';
import Dialog from "@mui/material/Dialog/Dialog";
import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const ConfirmDialogBox = (props) => {
    const {
        onCancel,
        onOkay,
        text,
        title,
        id,
        className,
        controller,
        buttonClass,
        activityCaption,
        successButtonCaption,
        okCaption,
        cancelCaption,
        isOpen,
        bodyId,
        icon
    } = props;

    let _;
    let [isDialogOpen, setIsDialogOpen] = useState(isOpen || false);
    let [dialogState, setDialogState] = useState(0);
    
    const onOkayAsync = async (e) => {
        if (typeof onOkay === 'function')
            return await onOkay(e);
        return false;
    };
    
    useEffect(() => { 
        console.log("isDialog open effect: " + isDialogOpen);
        if (!isDialogOpen && typeof onCancel === 'function') onCancel();
    }, [isDialogOpen]);
    
    useEffect(() => {
        if (dialogState === 1) _ = onOkayAsync();

    }, [dialogState]);
    
    const onButtonPressAsync = async (e) => {
        setDialogState(1);
        return false;
    };
    
    const cancel = (e) => {
        setIsDialogOpen(false);
    };
    
    const getLoadingButton = () => {
        let isSpinning = (dialogState === 1);

        let cn = '';
        let icon = null;
        let buttonCaption = okCaption || 'Okay';

        if (dialogState > 0) {
            buttonCaption = isSpinning ? (activityCaption || 'Working') : (successButtonCaption || 'Success');
            cn = !!isSpinning ? 'spinning' : 'done';
            icon = isSpinning ? (<label></label>) : (<FontAwesomeIcon icon={faCheckCircle}/>);
        }

        return (<Button onClick={onButtonPressAsync}>{buttonCaption} <span className={cn}>{ icon }</span></Button>);
    }

    controller.setOpenCallback((f) => {
        console.log("Open " + f);
        console.log("isOpen: " + isDialogOpen);
        setIsDialogOpen(true);
    });
    
    controller.setCloseCallback(() => {
        setIsDialogOpen(false);
    });
    
    //console.warn("ConfirmDialogBox: " + (typeof controller?.open).toString());
    
    const body = controller.body || ((typeof text === 'string') ? <DialogContentText>{text}</DialogContentText> : text);
    const buttonClassName = !!buttonClass ? " " + buttonClass : "";
    
    return (
        <Dialog open={isDialogOpen} className={"confirm-dialog" + (" " + (className || "").trim())}>
            <DialogTitle id={"confirm-dialog-title"}>{ title || "Are you sure?" }</DialogTitle>
            <DialogContent>
                <DialogContentText id={bodyId || "dialog-body"} className={"dialog-body"}>
                    {body}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <span className={"dialog-buttons" + buttonClassName}>
                    <Button onClick={(e) => cancel(e)}>{cancelCaption || "Cancel"}</Button>
                    {getLoadingButton()}
                </span>
            </DialogActions>

        </Dialog>

    );
};

export default ConfirmDialogBox;