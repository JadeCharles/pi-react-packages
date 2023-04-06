import React from 'react';

const ErrorElement = ({ message }) => {
    return !!message ? (<strong className="panel-error">{message}</strong>) : null;
};

export default ErrorElement;
