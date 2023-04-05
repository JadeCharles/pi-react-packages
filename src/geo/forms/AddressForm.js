import React, { useEffect, useRef, useState } from "react";
import FormController from "../../common/controllers/FormController";
import FormValidator from "../../common/controllers/FormValidator";
import FormButton from "../../common/forms/FormButton";
import AddressModel from "../models/AddressModel";

const AddressForm = (props) => { 
    const { value, onClick, onError, onComplete, useCountry, useButton, controller, controllerKey, requiredFields, prefix } = props;
    const [errors, setErrors] = useState({});

    const streetRef = useRef();
    const unitRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();
    const countryRef = useRef();
    
    const createJson = () => { 
        return {
            street: streetRef.current?.value || null,
            unit: unitRef.current?.value || null,
            city: cityRef.current?.value || null,
            state: stateRef.current?.value || null,
            zip: zipRef.current?.value || null,
            country: countryRef.current?.value || null,
        };
    }

    const createValidator = () => { 
        let v = (!!requiredFields && typeof requiredFields === "object" && !Array.isArray(requiredFields)) ?
            requiredFields :
            null;
    
        // Validation defaults
        if (v === null) v = { street: "Street is required", zip: "Zip/Postal code is required" };

        return new FormValidator(v);
    }

    const validateForm = (json) => {
        let errs = {};
        // Snippet: Validate form with FormValidator (??)
        const validator = createValidator();
        const ex = validator.validateJson(json);

        setErrors(errs);
        controller?.setErrors(errs);

        if (Object.keys(errs).length > 0)
            return null;

        return streetRef.current.value;
    };

    const setControllerCallback = () => {
        if (!controller || !(controller instanceof FormController)) {
            console.warn("setControllerCallback failed: No FormController was provided to PersonForm.")
            return false;
        }

        const ckey = typeof controllerKey === "string" && controllerKey.length > 0 ?
            controllerKey :
            "addressform";
        
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

        setErrors({ general: ex });
    }

    const onClickAsync = async (e) => {
        if (typeof onClick !== 'function') {
            throw new Error("AddressForm.onClick function was not set");
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
            }) :
            rsp;

        return result;
    };

    const onAddressChange = (fieldId, event) => {
        //console.log(fieldId + ": " + event.target.value);
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
    const buttonElement = useButton === true ? 
        (<div className={"button"}>
                <div className={"form-error"}>{viewError("general")}</div>
                <FormButton onClick={onClickAsync}>Submit</FormButton>
            </div>) : null;
   
    const countryElement = useCountry ? (<div className={"form-group"}>
        <label>Country:</label>
        <input id={idPrefix + "country"} defaultValue={value?.country} type={"text"} ref={countryRef} onBlur={(e) => clearErrors("country")} />
        <div className={"form-error"}>{viewError(idPrefix + "country")}</div>
    </div>) : null;
    
    let stateOptions = AddressModel.states.map((state) => {
        return (<option key={state.abbr} value={state.abbr}>{state.name}</option>);
    });

    return (
        <div className={"form"}>
            <div className={"form-group"}>
                <label>Street:</label>
                <input id={idPrefix + "street"} defaultValue={value?.street} type={"text"} ref={streetRef} onBlur={(e) => clearErrors(idPrefix + "street")} />
                <div className={"form-error"}>{viewError(idPrefix + "street")}</div>
            </div>

            <div className={"form-group"}>
                <label>Unit:</label>
                <input id={idPrefix + "unit"} defaultValue={value?.unit} type={"text"} ref={unitRef} onBlur={(e) => clearErrors(idPrefix + "unit")} />
                <div className={"form-error"}>{viewError(idPrefix + "unit")}</div>
            </div>

            <div className={"form-group double"}>

                <div className={"half"}>
                    <label>City:</label>
                    <input id={idPrefix + "city"} defaultValue={value?.city} type={"text"} ref={cityRef} onBlur={(e) => clearErrors(idPrefix + "city")} />
                    <div className={"form-error"}>{viewError(idPrefix + "city")}</div>
                </div>

                <div className={"half"}>
                    <label>State:</label>
                    <select id={idPrefix + "state"} defaultValue={value?.state} onChange={onAddressChange.bind(this, idPrefix + "state")} ref={stateRef}>
                        <option value={""}>Select State</option>
                        { stateOptions }

                    </select>
                    <div className={"form-error"}>{viewError(idPrefix + "state")}</div>
                </div>
            </div>

            <div className={"form-group"}>
                <label>Zip/Postal Code:</label>
                <input id={idPrefix + "zip"} defaultValue={value?.zip} type={"text"} ref={zipRef} onBlur={(e) => clearErrors(idPrefix + "zip")} />
                <div className={"form-error"}>{viewError(idPrefix + "zip")}</div>
            </div>

            { countryElement }
 
           {buttonElement}
 
        </div>
    );
};

AddressForm.defaultDataKey = "addressform";

export default AddressForm
