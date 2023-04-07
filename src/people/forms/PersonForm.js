import React, {useEffect, useRef} from 'react';
import FormButton from "../../common/forms/FormButton";
import FormController from '../../common/controllers/FormController';
import FormValidator from '../../common/controllers/FormValidator';

const PersonForm = (props) => {
    const { onClick, onError, labels, useButton, onComplete, value, controller, controllerKey, requiredFields, prefix } = props;
    const [errors, setErrors] = React.useState({});

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const idPrefix = (typeof prefix === "string" && prefix.length > 0) ? prefix : "";

    const createJson = () => { 
        return {
            first_name: firstNameRef.current?.value || null,
            last_name: lastNameRef.current?.value || null,
            email: emailRef.current?.value || null,
            phone: phoneRef.current?.value || null,
        };
    };

    const getControllerKey = () => { 
        return typeof controllerKey === "string" && controllerKey.length > 0 ?
            controllerKey :
            "person-form";
    }

    const setControllerCallback = () => { 
        if (!controller || !(controller instanceof FormController)) {
            console.warn("setControllerCallback failed: No FormController was provided to PersonForm.")
            return false;
        }

        const ckey = getControllerKey();
        
        controller.setCallback(ckey, () => { 
            const json = createJson();
            if (!validateForm(json)) return null;

            return json;
        });
        
        return true;
    }

    useEffect(() => {
        setControllerCallback();
    }, [])

    const hasErrors = () => Object.keys(errors).length > 0;

    const handleError = (ex) => {
        const handleResult = typeof onError === 'function' ? onError(ex) : null;
        if (handleResult === false) return;

        setErrors({ general: ex });
    }
    
    const createValidator = () => { 
        let v = (!!requiredFields && typeof requiredFields === "object" && !Array.isArray(requiredFields)) ?
            requiredFields :
            null;
    
        const firstNameMessage = "First name is reqiured";
        const lastNameMessage = "Last name is required";
        const emailMessage = "Valid email is required";
        
        if (v == null && typeof requiredFields === "string") { 
            switch (requiredFields) { 
                case "all":
                    v = { first_name: firstNameMessage, last_name: lastNameMessage, email: emailMessage, phone: "Phone is required" };
                    break;
                case "contact":
                case "signup":
                case "register":
                    v = { first_name: firstNameMessage, last_name: lastNameMessage, email: emailMessage };
                    break;
                case "name":
                case "names":
                    v = { first_name: firstNameMessage, last_name: lastNameMessage };
                    break;
                default:
                    break;
            }
            
        }

        if (v === null) v = { first_name: firstNameMessage };

        return new FormValidator(v);
    }

    const validateForm = (json) => {
        if (!json) json = createJson();

        const validator = createValidator();
        const ex = validator.validateJson(json);

        setErrors(ex);
        
        const hasErrors = Object.keys(ex).length === 0;
        controller?.setErrors(ex);

        if (hasErrors && typeof onError === 'function')
            onError(hasErrors);

        return hasErrors;
    };
    
    const onClickAsync = async (e) => {
        if (typeof onClick !== 'function') {
            throw new Error("PersonForm.onClick function was not set");
        }

        const json = createJson();

        if (!validateForm(json)) {
            return;
        }

        const rsp = onClick(json, e);

        const result = (typeof rsp.then === 'function') ?
            await rsp.then((user) => {
                if (typeof onComplete === 'function')
                    onComplete(user);

                return user;
            }).catch((ex) => {
                handleError(ex);
            }) :
            rsp;

        if (result === false) alert("Word");

        return result;
    };
    
    const clearErrors = (key) => {
        if (!!errors[key]) {
            let newErrors = { ...errors };
            delete newErrors[key];
            setErrors(newErrors);
        }
    };

    const viewError = (key) => errors?.[key] || null;

    const buttonElement = useButton !== false ?
        (<div className={"button"}>
                <div className={"form-error"}>{viewError("general")}</div>
                <FormButton onClick={onClickAsync}>Continue</FormButton>
            </div>) : null;

    const phoneElement = requiredFields?.phone !== false ? (<div className={"form-group"}>
        <label htmlFor={idPrefix + "phone"}>{labels?.phone || "Mobile Phone:"}</label>
        <input id={idPrefix + "phone"} type={"tel"} defaultValue={value?.phone} ref={phoneRef} onBlur={(e) => clearErrors("phone")} />
        <div className={"form-error"}>{viewError("phone")}</div>
    </div>) : null;

    return (
        <div className={"form large"}>
            <div className={"form-group double spaced"}>
                <div className={"half"}>
                    <label htmlFor={idPrefix + "first_name"}>{labels?.firstName || "First Name"}</label>
                    <input id={idPrefix + "first_name"} type={"text"} defaultValue={value?.first_name || value?.firstName} ref={firstNameRef} onBlur={(e) => clearErrors("first_name")} />
                    <div className={"form-error"}>{viewError("first_name")}</div>
                </div>
                <div className={"half"}>
                    <label htmlFor={idPrefix + "last_name"}>{ labels?.lastName || "Last Name" }:</label>
                    <input id={idPrefix + "last_name"} type={"text"} defaultValue={value?.first_name || value?.firstName} ref={lastNameRef} onBlur={(e) => clearErrors("last_name")} />
                    <div className={"form-error"}>{viewError("last_name")}</div>
                </div>
            </div>

            <div className={"form-group"}>
                <label htmlFor={idPrefix + "email"}>{ labels?.email || "Email" }:</label>
                <input id={idPrefix + "email"} type={"email"} defaultValue={value?.email} ref={emailRef} onBlur={(e) => clearErrors("email")} />
                <div className={"form-error"}>{viewError("email")}</div>
            </div>

            { phoneElement }
            
            { buttonElement }

        </div>
    );
};

PersonForm.defaultDataKey = "person-form";

export default PersonForm;
