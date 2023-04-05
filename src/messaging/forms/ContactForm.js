import React, { useEffect, useRef, useState } from "react";
import FormController from "../../common/controllers/FormController";
import FormValidator from "../../common/controllers/FormValidator";
import FormButton from "../../common/forms/FormButton";

const ContactForm = (props) => {
    const { value, onClick, onError, onComplete, useButton, options, controller, controllerKey, requiredFields, prefix } = props;
    const [errors, setErrors] = useState({});

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const websiteRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
    
    const displayPhone = options === "all" || options === "phone" || !!options?.phone;
    const displayWeb = options === "all" || options === "website" || !!options?.website;
    const idPrefix = (typeof prefix === "string" && prefix.length > 0) ? prefix : "";

    const createJson = () => { 
        return {
            name: nameRef.current?.value || null,
            email: emailRef.current?.value || null,
            phone: phoneRef.current?.value || null,
            website: websiteRef.current?.value || null,
            subject: subjectRef.current?.value || null,
            message: messageRef.current?.value || null,
        };
    }

    const createValidator = () => { 
        let v = (!!requiredFields && typeof requiredFields === "object" && !Array.isArray(requiredFields)) ?
            requiredFields :
            null;
    
        // Validation defaults
        if (v === null) v = {
            name: "Name is required",
            message: "Message is missing",
            email: "An valid email address is required"
        };

        if (!!v.website && !displayWeb) delete v.website;
        if (!!v.phone && !displayPhone) delete v.phone;

        return new FormValidator(v, idPrefix);
    }

    const validateForm = (json) => {
        const validator = createValidator();
        const ex = validator.validateJson(json);

        setErrors(ex);
        controller?.setErrors(ex);

        console.warn(JSON.stringify(ex, null, 4));
        console.log(JSON.stringify(json, null, 4));

        if (Object.keys(ex).length > 0)
            return null;

        return nameRef.current.value;
    };

    const setControllerCallback = () => {
        if (!controller || !(controller instanceof FormController)) {
            console.warn("setControllerCallback failed: No FormController was provided to PersonForm.")
            return false;
        }

        const ckey = typeof controllerKey === "string" && controllerKey.length > 0 ?
            controllerKey :
            "contactform";
        
        controller.setCallback(ckey, () => {
            const json = createJson();
            if (!validateForm(json)) return null;

            return json;
        });
        
        return true;
    };
    

    const handleError = (ex) => {
        const handleResult = typeof onError === 'function' ? onError(ex) : null;
        if (handleResult === false) return;

        let newError = {};
        newError[idPrefix + "general"] = ex;

        setErrors(newError);
        throw ex;
    }

    const onClickAsync = async (e) => {
        if (typeof onClick !== 'function')
            throw new Error("ContactForm.onClick function was not set");

        const json = createJson();

        if (!validateForm(json)) return;

        const rsp = onClick(json, e);

        const result = (typeof rsp.then === 'function') ?
            await rsp.then((model) => {
                if (typeof onComplete === 'function')
                    onComplete(model);

                return model;
            }).catch((ex) => {
                handleError(ex);
            }) :
            rsp;

        return result;
    };

    useEffect(() => {
        setControllerCallback();
     }, []);

    const clearErrors = (key) => {
        key = idPrefix + key;

        if (!!errors[key]) {
            let newErrors = { ...errors };
            delete newErrors[key];
            setErrors(newErrors);
        }
    };

    const createSubjectOption = (s, i) => { 
        const text = typeof s === "string" ? s : (s.text || s.caption || s?.toString());
        const value = typeof s === "string" ? s : (s.value || text);

        return (<option key={"subject-" + i} value={value}>{text}</option>);
    };
    
    const viewError = (key) => { 
        key = idPrefix + key;
        return errors?.[key]?.toString() || null;
    }
   
    const phoneElement = displayPhone ? (<div className="form-group"><label>Phone:</label>
        <input id={idPrefix + "phone"} defaultValue={value?.phone} type={"tel"} ref={phoneRef} onBlur={(e) => clearErrors("phone")} />
        <div className={"form-error"}>{viewError("phone")}</div></div>) : null;
   
    const websiteElement = displayWeb ? (<div className="form-group"><label>Website:</label>
        <input id={idPrefix + "website"} defaultValue={value?.website} type={"text"} placeholder="https://" ref={websiteRef} onBlur={(e) => clearErrors("website")} />
        <div className={"form-error"}>{viewError("website")}</div></div>) : null;
    
    const subjectElement = Array.isArray(options?.subjectSelections) && options.subjectSelections.length > 0 ?
        (<div className="form-group"><label>{options?.labels?.subject?.toString() || "Subject:"}</label>
            <select id={idPrefix + "subject"} defaultValue={value?.subject} ref={subjectRef} onBlur={(e) => clearErrors("subject")}>
                {options.subjectSelections.map((s, i) => createSubjectOption(s, i))}
            </select>
            <div className={"form-error"}>{viewError("subject")}</div></div>) :
        (options.useSubject === true || typeof options?.labels?.subject === "string" ? (
            <div className="form-group">
                <label>{options?.labels?.subject?.toString() || "Subject:"}</label>
                <input id={idPrefix + "subject"} defaultValue={value?.website} type={"text"} ref={websiteRef} onBlur={(e) => clearErrors("subject")} />
                <div className={"form-error"}>{viewError("subject")}</div>
            </div>) : null);
    
    const buttonElement = useButton !== false || typeof options?.labels?.button === "string" ?
        (<div className={"button"}>
                <div className={"form-error"}>{viewError("general")}</div>
            <FormButton onClick={onClickAsync}>{options?.labels?.button || "Submit"}</FormButton>
            </div>) : null;
   
    return (
        <div className={"form"}>
            <div className={"form-group"}>
                <label>Name:</label>
                <input id={idPrefix + "name"} defaultValue={value?.name} type={"text"} ref={nameRef} onBlur={(e) => clearErrors("name")} />
                <div className={"form-error"}>{viewError("name")}</div>
            </div>

            <div className={"form-group"}>
                <label>Email:</label>
                <input id={idPrefix + "email"} defaultValue={value?.email} type={"text"} ref={emailRef} onBlur={(e) => clearErrors("email")} />
                <div className={"form-error"}>{viewError("email")}</div>
            </div>

            { phoneElement }
            { websiteElement }
            { subjectElement }
            
            <div className={"form-group"}>
                <label>Message:</label>
                <textarea id={idPrefix + "message"} defaultValue={value?.message} ref={messageRef} onBlur={(e) => clearErrors("message")} />
                <div className={"form-error"}>{viewError("message")}</div>
            </div>

            <div className="form-error general">{viewError("general")}</div>
            
           {buttonElement}
 
        </div>
    );
};

ContactForm.defaultDataKey = "contactform";

export default ContactForm
