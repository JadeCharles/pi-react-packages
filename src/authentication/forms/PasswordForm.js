import React, { useEffect, useRef, useState } from "react";
import FormController from "../../common/controllers/FormController";
import FormValidator from "../../common/controllers/FormValidator";

const PasswordForm = ({ policy, controller, controllerKey, prefix }) => { 
    const [errors, setErrors] = useState({});
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const createJson = () => { 
        return {
            password: passwordRef.current?.value || null,
            password_confirm: passwordConfirmRef.current?.value || null,
        };
    }

    const validateForm = (json) => {
        let errs = {};
        const result = FormValidator.validatePassword(passwordRef.current?.value, policy);

        if (!result.success) { 
            errs.password = result.toString();
            controller?.setError("password", errs.password);
        }

        if (!FormValidator.validatePasswords(passwordRef.current?.value, passwordConfirmRef.current?.value)) { 
            errs.password_confirm = "Passwords do not match.";
            controller?.setError("password_confirm", errs.password);
        }

        setErrors(errs);
        controller?.setErrors(errs);

        if (Object.keys(errs).length > 0)
            return null;

        return passwordConfirmRef.current.value;
    };

    const setControllerCallback = () => {
        if (!controller || !(controller instanceof FormController)) {
            console.warn("setControllerCallback failed: No FormController was provided to PersonForm.")
            return false;
        }

        const ckey = typeof controllerKey === "string" && controllerKey.length > 0 ?
            controllerKey :
            "passwords";
        
        controller.setCallback(ckey, () => {
            const json = createJson();
            if (!validateForm(json)) return null;

            return json;
        });
        
        return true;
    };
    
    useEffect(() => {
        setControllerCallback();
     }, []);

    const clearErrors = (key) => {
        if (!!errors[key]) {
            let newErrors = { ...errors };
            delete newErrors[key];
            setErrors(newErrors);
        }
    };
    
    const viewError = (key) => errors?.[key] || null;
    const idPrefix = (typeof prefix === "string" && prefix.length > 0) ? prefix : "";

    return (
        <>
            <div className={"form-group"}>
                <label>Password:</label>
                <input id={idPrefix + "password"} type={"password"} ref={passwordRef} onBlur={(e) => clearErrors("password")} />
                <div className={"form-error"}>{viewError(idPrefix + "password")}</div>
            </div>

            <div className={"form-group"}>
                <label>Confirm Password:</label>
                <input id={idPrefix + "password_confirm"} type={"password"} ref={passwordConfirmRef} onBlur={(e) => clearErrors("password_confirm")} />
                <div className={"form-error"}>{viewError(idPrefix + "password_confirm")}</div>
            </div>
        </>
    );
};

PasswordForm.defaultDataKey = "passwords";

export default PasswordForm;
