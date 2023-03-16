import React, { useState, useEffect } from 'react';
import {DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import CompletedPanel from "../CompletedPanel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import FormButton from "../FormButton";
import Dialog from "@mui/material/Dialog/Dialog";

const CompleteDialog = (props) => {
    const { icon, title, text, completed, controller, buttonCaption, onClick, onError } = props;
    const [isComplete, setIsComplete] = useState(completed === true);
    const [message, setMessage] = useState({ title: title || "Success", text: text || "" });
    
    const closeCompleteDialog = async () => {
        if (typeof onClick === 'function') {
            const rsp = onClick();
            
            if (typeof rsp.then === 'function') { 
                return await rsp.then((x) => { 
                    return x;
                }).catch((ex) => {
                    if (typeof onError === 'function') onError(ex);
                    return new Error(ex);
                });
            }
            
            return rsp;
        }
        
        setIsComplete(false);
    };
    
    useEffect(() => { 
        if (!!controller) {
            controller.close = closeCompleteDialog;
            controller.open = (title, text) => {
                setMessage({ title: title || null, text: text || null });
                setIsComplete(true);
            };
        }
        
    }, [isComplete]);
    
    const textElement = !!message?.text ? (<span className={"dialog-center dialog-text center"}>{ message?.text }</span>) : null;
    
    return (
        <Dialog open={isComplete} fullScreen={false}>
            <DialogTitle className={"completed-title"}>{ message?.title || "Complete" }</DialogTitle>
            <DialogContent>
                <DialogContentText className={"dialog-body"}>
                    <CompletedPanel>
                        <FontAwesomeIcon icon={icon || faCheckCircle} />
                    </CompletedPanel>
                    { textElement }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                    <span className={"dialog-buttons completed"}>
                        <FormButton onClick={closeCompleteDialog}>{ buttonCaption || "Okay" }</FormButton>
                    </span>
            </DialogActions>

        </Dialog>
    );
};

export default CompleteDialog;

