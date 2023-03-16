/* eslint-disable no-extend-native */
import React from 'react';

const PhoneNumber = (props) => {
    const value = ((props.value || props.children) || '').formatPhoneNumber(props.prefix, props.suffix, props.defaultValue);
    
    return (
        <span className="pi-span phone-number-text">
            {value}
        </span>
    );
};

String.prototype.formatPhoneNumber = function (prefix, suffix, defaultValue) {
    let value = this.valueOf()?.replace(/\D/g,'') || "";
    
    if (value.length === 11 && value.substr(0, 1) === '1') {
        value = value.substr(1);
    }

    if (!value) value = defaultValue || "";
    if (value.length === 10) value = (prefix || '') + '(' + value.substr(0, 3) + ') ' + value.substr(3, 3) + '-' + value.substr(6, 4) + (suffix || '');

    return value;
}

export default PhoneNumber;
