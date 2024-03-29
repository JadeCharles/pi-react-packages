import React, { useEffect, useRef, useState } from "react";
import FormController from "../../common/controllers/FormController";
import FormValidator from "../../common/controllers/FormValidator";
import FormButton from "../../common/forms/FormButton";
import CreditCardModel from "../models/CreditCardModel";
import ErrorModel from "../../common/models/ErrorModel";

const CreditCardForm = (props) => { 
    const { value, labels, zipMaxLen, onClick, onChange, onCancel, onError, onComplete, useButton, useZip, controller, controllerKey, requiredFields, prefix } = props;
    const initConstraints = { cvvLen: 3, numberLen: 16, cardType: 0 };
    const [constraints, setConstraints] = useState(initConstraints);
    const [errors, setErrors] = useState({});

    const nameRef = useRef();
    const numberRef = useRef();
    const expireMonthRef = useRef();
    const expireYearRef = useRef();
    const cvvRef = useRef();
    const zipRef = useRef();
    
    const createJson = () => { 
        return {
            name: nameRef.current?.value || null,
            number: numberRef.current?.value || null,
            expiration_month: expireMonthRef.current?.value || null,
            expiration_year: expireYearRef.current?.value || null,
            cvv: cvvRef.current?.value || null,
            zip: zipRef.current?.value || null
        };
    }

    const createValidator = () => { 
        let v = (!!requiredFields && typeof requiredFields === "object" && !Array.isArray(requiredFields)) ?
            requiredFields :
            null;
    
        // Extra validation goes here...
    
        // Validation defaults
        if (v === null) v = {
            name: "Cardholder Name is required",
            number: { 
                message: "Card Number is required",
                validator: (value) => {
                    console.warn("Custom validation...");
                    const result = { success: false, message: "" };

                    if (typeof value !== "string" || value.length === 0) return result;

                    if (value.length !== constraints.numberLen)
                        result.message = "Invalid card number length. Expected: " + constraints.numberLen + " Actual: " + value.length;

                    if (!result.message) result.success = true;

                    return result;
                }
            },
            expiration_month: { message: "Expiration Month is required", validator: (value) => { return { success: parseInt(value) > 0 && parseInt(value) < 13 }; } },
            expiration_year: { message: "Expiration Year is required", validator: (value) => { return parseInt(value) > (new Date()).getFullYear(); } },
            cvv: {
                message: "CVV Number is required",
                validator: (value) => {
                    console.warn("Custom validation...");
                    const result = { success: false, message: "" };

                    if (typeof value !== "string" || value.length === 0) return result;

                    if (value.length !== constraints.cvvLen)
                        result.message = "Invalid CVV length. Expected: " + constraints.cvvLen + " Actual: " + value.length;
                    else if (isNaN(parseInt(value)))
                        result.message = "Invalid CVV";
                    
                    if (!result.message) result.success = true;

                    return result;
                }
            }
        };

        if (useZip !== false && !v.zip) v.zip = {
            message: "A valid billing zip code is required",
            validator: (value) => (typeof value === "string" && value.length > 4),
        };

        return new FormValidator(v);
    }

    const validateForm = (json) => {
        const validator = createValidator();
        const ex = validator.validateJson(json);

        if (typeof controller?.setErrors !== "function" || controller?.setErrors(ex) !== false)
            setErrors(ex);

        const errorKeys = Object.keys(ex);

        if (errorKeys.length > 0) {
            // TODO: Is there code in FormValidator that already does this...?
            setTimeout(() => {
                const focusFieldKey = errorKeys[0];
                const focusField = document.getElementById(focusFieldKey);

                if (!!focusField) {
                    focusField.focus();
                    focusField.scrollIntoView();
                }
            }, 500);

            return false;
        }

        return true;  //nameRef.current.value;
    };

    const setControllerCallback = () => {
        if (!controller || !(controller instanceof FormController)) {
            console.warn("setControllerCallback failed: No FormController was provided to CreditCardForm.")
            return false;
        }

        const ckey = typeof controllerKey === "string" && controllerKey.length > 0 ?
            controllerKey :
            "creditcardform";
        
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

        setErrors({ general: ErrorModel.getMessage(ex) });
    }

    const onClickAsync = async (e) => {
        if (typeof onClick !== 'function') {
            throw new Error("CreditCardForm.onClick function was not set");
        }

        const json = createJson();

        if (!validateForm(json)) {
            return;
        }

        const rsp = onClick(json, e);

        const result = (typeof rsp.then === 'function') ?
            await rsp.then((model) => {
                if (typeof onComplete === 'function')
                    onComplete(model);

                return model;
            }).catch((ex) => {
                handleError(ex);
            }) : rsp;

        return result;
    };

    const onFormChange = (e) => {
        checkConstraints();
        if (typeof onChange !== 'function') return;
        onChange(createJson(), e);
    };

    /**
     * Checks the card type, then sets the maxlengths accordingly.
     * Aborts if anything is unavailable
     */
    const checkConstraints = () => {
        let n = numberRef.current?.value || null;
        
        const c = CreditCardModel.getConstraints(n, constraints);
        if (!!c) setConstraints(c);
    };
        
    useEffect(() => {
        setControllerCallback();
     }, []);

    const clearErrors = (key, e) => {
        if (key === "expiration") { 
            let newErrors = { ...errors };
            delete newErrors.expiration_month;
            delete newErrors.expiration_year;
            setErrors(newErrors);
            
            return;
        }

        if (!!errors[key]) {
            let newErrors = { ...errors };
            delete newErrors[key];
            setErrors(newErrors);
        }
    };
    
    const viewError = (key) => errors?.[key] || null;
    const y = new Date().getFullYear();
    const yearElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
        return (<option key={"exp-year-" + n} value={(y + n).toString()}>{(y + n).toString()}</option>);
    });
    
    const monthElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
        return (<option key={"exp-month-" + n} value={n.toString()}>{(n.toString()).padStart(2, "0")}</option>);
    });

    const cancelElement = typeof onCancel === 'function' ? (<a onClick={onCancel} className="cancel">{labels?.cancel || "Cancel"}</a>) : null;
    const idPrefix = (typeof prefix === "string" && prefix.length > 0) ? prefix : "";

    const zipElement = useZip !== false ? (<div className={"form-group"}>
        <label htmlFor={ idPrefix + "billing-zip" }>Billing Zip Code:</label>
        <input tabIndex={6} id={idPrefix + "billing-zip"} ref={zipRef} type={"text"} onChange={onFormChange} defaultValue={value?.billing_zip || value?.zip || value?.billingZip || value?.address?.zip} onBlur={clearErrors.bind(this, "zip")} maxLength={typeof zipMaxLen === "number" && zipMaxLen >= 4 ? zipMaxLen : 12} />
        <div className={"form-error"}>{errors?.zip}</div>
    </div>) : null;

    const buttonElement = useButton !== false ? 
        (<div className={"button"}>
                <div className={"form-error"}>{errors?.general}</div>
                <FormButton onClick={onClickAsync}>{ labels?.button || "Update Credit Card"}</FormButton>
                { cancelElement }
            </div>) : null;
    
    const getLabel = (key, defaultLabel) => { 
        if (!!labels && typeof labels[key] === "string") { 
            if (labels[key] === " ") return (<>&nbsp;</>);
            return labels[key];
        }
        return defaultLabel;
    }

    return (
        <div className={"form"}>
            <div className={"form-group"}>
                <label htmlFor={ idPrefix + "name" }>{getLabel("name", "Cardholder Name")}</label>
                <input tabIndex={1} id={idPrefix + "name"} defaultValue={value?.name} type={"text"} ref={nameRef} onBlur={(e) => clearErrors("name")} />
                <div className={"form-error"}>{viewError("name")}</div>
            </div>
 
            <div className={"form-group"}>
                <label htmlFor={ idPrefix + "card-number" }>{getLabel("number", "Card Number:")}</label>
                <input tabIndex={2} id={idPrefix + "card-number"} ref={numberRef} type={"text"} onChange={onFormChange} maxLength={constraints.numberLen} defaultValue={value?.number} onBlur={clearErrors.bind(this, "number")} />
                <div className={"form-error"}>{viewError("number")}</div>
            </div>

            <div className={"form-group multi"}>
                <div className={"third exp"}>
                    <label htmlFor={ idPrefix + "exp-month" }>{getLabel("exp_month", "Expiration Month:")}</label>
                    <select tabIndex={3} id={idPrefix + "exp-month"} ref={expireMonthRef} onChange={onFormChange} defaultValue={value?.expirationMonth || value?.expiration_month} onBlur={clearErrors.bind(this, "expiration")}>
                        <option value={"00"}>{labels?.default_month || "Month"}</option>
                        {monthElements}
                    </select>
                    <div className={"form-error"}>{errors?.expiration_month}</div>
                </div>
                <div className={"third exp"}>
                    <label htmlFor={ idPrefix + "exp-year" }>{getLabel("exp_year", "Expiration Year:")}</label>
                    <select tabIndex={4} id={idPrefix + "exp-year"} ref={expireYearRef} onChange={onFormChange} defaultValue={value?.expirationYear || value?.expiration_year} onBlur={clearErrors.bind(this, "expiration")}>
                        <option value={"0000"}>{labels?.default_year || "Year"}</option>
                        {yearElements}
                    </select>
                    <div className={"form-error"}>{errors?.expiration_year}</div>
                </div>
                <div className={"third"}>
                    <label htmlFor={ idPrefix + "cvv" }>{getLabel("cvv", "CVV:")}</label>
                    <input tabIndex={5} id={idPrefix + "cvv"} type={"text"} ref={cvvRef} onChange={onFormChange} defaultValue={value?.cvv} maxLength={constraints.cvvLen} onBlur={clearErrors.bind(this, "cvv")} />
                    <div className={"form-error"}>{errors?.cvv}</div>
                </div>
                <div className={"form-error"}>{errors?.expiration}</div>
            </div>

            { zipElement }
        
           {buttonElement}
 
        </div>
    );
};

CreditCardForm.defaultDataKey = "creditcardform";

export default CreditCardForm
