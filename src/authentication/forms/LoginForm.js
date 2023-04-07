import React, { useEffect, useRef, useState } from "react";
import FormController from "../../common/controllers/FormController";
import FormButton from "../../common/forms/FormButton";

const LoginForm = (props) => { 
    const { onClick, value, labels, defaultError, onComplete, isEmail, onError } = props;
    const [error, setError] = useState(null);
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const hasWindow = (typeof window !== 'undefined');
    const currentLocation = hasWindow ? window.location.pathname : "";
    const buttonController = useState(new FormController())[0];
    let _;
    
    const defaultErrorMessage = typeof defaultError === "string" && defaultError.trim().length > 0 ?
        defaultError :
        "Authentication Failed";

    const onKeyUpAsync = async (e) => {
        const keyName = e.key.toString();
        
        if (keyName === "Enter") {
            console.log("Enter!");

            const rsp = buttonController.onClick(e);
            
            if (typeof rsp.then === 'function') { 
                await rsp.then((result) => {
                    console.log("Result: " + result);
                });
            }
        }
    };

    const handleError = (ex) => { 
        //const result = (typeof onError === 'function') ? onError(ex) : null;
        if (typeof onError === 'function') onError(ex);
        
        const msg = ex?.response?.data?.message || defaultErrorMessage;

        setError(msg);
        
        return msg;
    }
    
    useEffect(() => { 
        //setCallback();
    }, []);

    const authenticateAsync = async (e) => {
        if (typeof onClick !== "function") throw new Error("LoginForm: onClick function was not set");

        const username = usernameRef.current?.value || "";
        const password = passwordRef.current?.value || "";
        
        if (!username) { 
            console.log("No username");
            return false;
        }

        if (!password || password.length === 0) {
            setError("Missing password");

            if (typeof document !== "undefined") { 
                const element = document.getElementById("password");
                if (!!element) setTimeout(() => element.focus(), 100);
            }
                
            return false;
        }

        const rsp = onClick(username, password);
        
        const session = typeof rsp.then === "function" ? await rsp.catch ((ex) => { 
            handleError(ex);
            return null;
        }) : rsp;

        if (!session?.id) return false;
        
        const completeRsp = (typeof onComplete === 'function') ? onComplete(session) : null;
        if (completeRsp === false) return;

        let red = currentLocation;
        
        if (red.indexOf("?") > 0) red += "&";
        else red += "?";
        
        window.location.href = red + "signed-in=" + (new Date()).getTime().toString();
        
        return true;
    };

    return (
        <div className={"form large"}>
            <div className={"form-group"}>
                <label htmlFor={"username"}>{labels?.login || labels?.username || (isEmail === true ? "Email Address" : "Username")}</label>
                <input type={isEmail === true ? "email" : "text"} id={"username"} name={"username"} ref={usernameRef} />
            </div>
            <div className={"form-group"}>
                <label htmlFor={"password"}>Password</label>
                <input type={"password"} id={"password"} name={"password"} ref={passwordRef} onKeyUp={onKeyUpAsync} />
            </div>
            <div className={"button"}>
                <div className={"form-error"}>{ error }</div>
                <FormButton continueActivity={true} controller={buttonController} onClick={authenticateAsync}>{labels?.button || "Sign in"}</FormButton>
            </div>
        </div>
    );
};

LoginForm.defaultDataKey = "loginform";

export default LoginForm
