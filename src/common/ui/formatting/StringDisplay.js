/* eslint-disable no-extend-native */
import React from 'react';

const StringDisplay = (props) => {
    const { value, plural, children } = props;
    
    let v = typeof value === 'string' ? value : children?.toString();
    
    if (plural) v = v.toPlural();
    
    return (<>{v}</>);
};

String.prototype.toPlural = function () {
    let s = this?.valueOf() || "";
    
    if (s.endsWith("s")) {
        return s + "es";
    } else if (s.endsWith("y") && !(s.endsWith("ay") || s.endsWith("ey") || s.endsWith("iy") || s.endsWith("oy") || s.endsWith("uy"))) {
        return s.substring(0, s.length - 1) + "ies";
    }
    
    return s + "s";
};

export default StringDisplay;
