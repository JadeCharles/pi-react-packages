import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const EmailAddress = (props) => {
    let { value, icon, isLinked } = props;
    
    let prefix = (<></>);

    if (icon === true) { 
        prefix = (<FontAwesomeIcon icon={faEnvelope} /> );
    }
    
    if (!value) value = props.children;
    
    if (isLinked !== false) {
        value = (<a href={'mailto:' + value}>{prefix}{value}</a>);
        prefix = (<></>);
    }
    
    return (
        <span className="boc-span email-address-text">{value}</span>
    )
};

export default EmailAddress;
