import React from 'react';

const ErrorElement = (props) => {
    
    if (props.message) return (<strong className="form-error">{props.message}</strong>)
    return (<></>);
};

export default ErrorElement;
