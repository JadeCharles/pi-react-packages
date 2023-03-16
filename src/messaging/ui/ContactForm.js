import React, {useRef, useState} from 'react';
import FormButton from "../../common/ui/buttons/FormButton";
import FormValidator from "../../common/ui/form-validator/FormValidator";

const ContactForm = (props) => {
    const {id, onClick, onComplete, onError, requiredFields, subjectOptions, className } = props;
    const formValidator = useState(new FormValidator())[0];
    const [formState, setFormState] = useState({ state: 0 });
    const [errors, setErrors] = useState({});
    
    const nameMessage = "Name is required";
    const messageMessage = "Message is required";
    const emailMessage = "Email is required";

    const req = typeof requiredFields === "object" && !!requiredFields ?
        requiredFields :
        { name: nameMessage, email: emailMessage, message: messageMessage };
    
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
    
    formValidator.addRef(nameRef, "name", req?.name || nameMessage, "Name");
    
    if (!!req?.email)
        formValidator.addRef(emailRef, "email", req?.email || emailMessage, "Email");
    
    formValidator.addRef(messageRef, "message", req?.message || messageMessage, "Message");
    
    const handleError = (ex) => {
        console.log("Handling error...");
        console.error(ex);
        
        if (typeof onError === "function") onError(ex);
        
        setErrors({ general: ex.message || ex.toString() });

        return new Error(ex.general);
    };

    const viewError = (errorFieldKey) => {
        if (!errors || typeof errors[errorFieldKey] !== "string")
            return null;

        return (
            <aside className={"error"}>
                {errors[errorFieldKey]}
            </aside>
        );
    };
    
    const createJson = () => {
        return {
            name: nameRef.current?.value || null,
            email: emailRef.current?.value || null,
            phone: phoneRef.current?.value || null,
            subject: subjectRef.current?.value || null,
            message: messageRef.current?.value || null,
        }
    };
    
    const sendMessageAsync = async (event) => {
        if (typeof onClick !== "function") throw new Error("onClick was not passed to ContactForm element");

        const isValid = formValidator.validate();
        
        if (!isValid) {
            console.error("No good");
            setErrors(formValidator.createErrorJson());
            return;
        }
        
        const data = createJson();
        const rsp = onClick(data, event);
        const isAsync = typeof rsp.then === "function";

        if (isAsync) setFormState({ state: 1 });
        const result = isAsync ? await rsp.catch((ex) => handleError(ex)) : rsp;

        if (result !== false && typeof onComplete === "function" && !(result instanceof Error))
            onComplete(data, event);
        
        setFormState({ state: 0 });
        
    };

    const subjectOptionList = Array.isArray(subjectOptions) ? subjectOptions.map((option) => {
        let text = option?.toString() || "";
        let value = null;

        if (typeof option === "object") { 
            text = (option?.text || option?.label) || (option?.caption || (option?.desc || option?.description));
            value = (option?.value || option?.val) || (option?.payload || text);
        }

        return {
            text: text,
            value: value
        };
    }) : [];

    const subjectElement = subjectOptionList.length > 0 ? (<fieldset>
        <label htmlFor={"subject"}>Subject</label>
        <select id={"subject"} name={"subject"} ref={subjectRef}>
            {subjectOptionList.map((option) => (<option value={option.value}>{option.text}</option>))}
        </select>

    </fieldset>) : null;

    const cn = typeof className === "string" ? " " + className : "";
    const formStateClassName = formState.state === 1 ? "working state-1" : "state-" + (formState.state || 0).toString();

    const elementId = id || "contact-form";
    const buttonId = elementId + "-form-button";
    const body = !!props.children ? (<div className={"pad"}>
            { props.children }
        </div>): null;

    return (<section id={elementId} className={("form " + formStateClassName + cn).trim()}>
        { body }
        <div className={"pad"}>
            <fieldset>
                <label htmlFor={"name"}>Name { viewError("name")}</label>
                <input type={"text"} id={"name"} name={"name"} ref={nameRef} />
                { viewError("name") }
            </fieldset>
            <fieldset>
                <label htmlFor={"email"}>Email { viewError("email") }</label>
                <input type={"email"} id={"email"} name={"email"} ref={emailRef} />
                { viewError("email") }
            </fieldset>
            <fieldset>
                <label htmlFor={"phone"}>(Optional) Mobile Phone { viewError("phone") }</label>
                <input type={"tel"} id={"phone"} name={"phone"} ref={phoneRef} />
                { viewError("phone") }
            </fieldset>

            {subjectElement}

            <fieldset>
                <label htmlFor={"message"}>Message { viewError("message") }</label>
                <textarea id={"message"} name={"message"} ref={messageRef} />
                { viewError("message") }
            </fieldset>
        </div>

        <div className={"buttons pad continue mobile-stacked"}>
            {viewError("general")}
            <FormButton id={buttonId} onClick={sendMessageAsync}>Send Message</FormButton>
        </div>
    </section>);
};

export default ContactForm;
