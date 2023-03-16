/* eslint-disable no-extend-native */
import React from 'react';
import {Link} from "react-router-dom";

const NumberDisplay = (props) => {
    let { decimalPlaces, value, path, type, symbol, isComponent } = props;

    if (type !== 'currency' && type !== 'percent') type = 'number';
    
    if (decimalPlaces === undefined) decimalPlaces = type === "currency" ? 2 : -1;
    if (typeof value !== 'number') value = parseFloat(value);
    if (isNaN(value)) value = 0;
    
    const formatNumber = (value) => {
        return value.formatNumber(decimalPlaces);
    };

    const formatCurrency = (value) => {
        return value.formatCurrency(decimalPlaces, symbol || "$");
    };
    
    let func = (type === 'currency') ? formatCurrency : formatNumber;
    let mult = (type === 'percent') ? 100 : 1;
    let body = func(value * mult) + (mult === 100 ? "%": "");
    
    if (isComponent === true) {
        let tokens = body.split('.', 2);
        
        if (tokens.length > 1) {
            body = (<><span className={type + "-display-base"}>{tokens[0]}</span>
                <span className={type + "-display-decimal"}>.{tokens[1]}</span></>);
        }
    }
    
    if (typeof path === 'string') body = (<Link to={path}>{body}</Link>);
    
    return (<span className={"boc-span " + type + "-text"}>{body}</span>);
};

Number.prototype.toPercent = function(decimalPlaces) {
    return (this * 100).formatNumber(decimalPlaces) + '%';
};

Number.prototype.formatNumber = function(decimalPlaces) {
    const value = this.valueOf();
    
    if (typeof decimalPlaces !== 'number') decimalPlaces = -1;
    
    if (decimalPlaces < 0) {
        return value.toLocaleString("en-US");
    } else {
        let numberValue = parseFloat(value.toFixed(decimalPlaces)).toLocaleString("en-US");
        if (decimalPlaces === 0) return numberValue;
        
        if (numberValue.indexOf('.') < 0) numberValue += '.';
        let parts = numberValue.split('.')
        if (parts[1].length < decimalPlaces) parts[1] += '0'.repeat(decimalPlaces - parts[1].length);
        
        return parts[0] + '.' + parts[1];
    }
};

Number.prototype.formatCurrency = function(decimalPlaces, symbol) {
    if (typeof symbol === 'undefined') symbol = "$";
    if (typeof decimalPlaces === 'undefined') decimalPlaces = 2;
    
    let sign = this < 0 ? "-" : "";
    
    return sign + symbol + Math.abs(this).formatNumber(decimalPlaces);
};

export default NumberDisplay;
