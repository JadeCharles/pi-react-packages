/* eslint-disable no-extend-native */
import React from 'react';

const NumberDisplay = (props) => {
    let { decimalPlaces, children, defaultValue, prefix, suffix, value, path, type, symbol, formatter, isComponent } = props;

    if (typeof value !== "string" && typeof value !== "number")
        value = children;
    if (typeof value !== "string" && typeof value !== "number")
        value = defaultValue;

    if (type !== 'currency' && type !== 'percent') type = 'number';
    
    if (decimalPlaces === undefined) decimalPlaces = type === "currency" ? 2 : -1;

    if (typeof value !== 'number') value = parseFloat(value);

    if (isNaN(value)) {
        prefix = "";
        suffix = "";
        value = 0;
    } else { 
        if (typeof prefix !== "string") prefix = "";
        if (typeof suffix !== "string") suffix = "";
    }
    
    const formatNumber = (value) => {
        return prefix + value.formatNumber(decimalPlaces) + suffix;
    };

    const formatCurrency = (value) => {
        return prefix + value.formatCurrency(decimalPlaces, symbol || "$") + suffix;
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
    
    if (typeof path === 'string' && path.length > 0) {
        body = (typeof formatter === "function") ?
            formatter(body, path) :
            NumberDisplay.defaultFormatter(body, path);
    }
    
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

NumberDisplay.defaultFormatter = (body, path) => {
    return body;
}

export default NumberDisplay;
