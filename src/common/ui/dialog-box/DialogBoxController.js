import React from 'react';

class DialogBoxController { 
    constructor(title, body) {
        this.title = title || "";
        this.body = body || (<></>);
        this.id = Math.random().toString(36).substr(2, 9);
        this.payload = null;
        
        const me = this;
        
        this.open = null;
        this.close = (keepPayload = false) => {
            if (keepPayload !== true)
                me.payload = null;
        };
        
        this.onSubmit = (item) => {
            if (!!item) console.warn('Item was included, but the DialogBoxController.onSubmit(item) has not been implemented');
            else console.warn('The DialogBoxController.onSubmit(item) has not been implemented');
        };
    }
    
    setBody(body) {
        this.body = body;
    };
    
    setTitle(title) {
        this.title = title;
    }
    
    setPayload(payload) {
        this.payload = payload;
    }
    
    setOpenCallback(callback, force = false) {
        if (!this.open || force === true) {
            this.open = callback;
        }
    }
    
    setCloseCallback(callback) {
        this.close = callback;
    }
    
    setSubmitCallback(callback) {
        this.onSubmit = callback;
    }
}

export default DialogBoxController;
