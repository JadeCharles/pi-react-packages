import React from 'react';

const DateTime = (props) => {
    let { value, options, showRelative, showRelativeDate, time, defaultValue, prefix, suffix, wrapWithStrong, useUtc } = props;
    
    if (value === null || typeof value === 'undefined') {
        return defaultValue || 'No Date';
    }
    
    let date = value.toDate();
    if (!useUtc) date = date.toLocalTime();
    
    if (date === null) return defaultValue || 'No Date';
    
    if (!options) options = { month: 'short', day: 'numeric', year: 'numeric' };
    
    if (time === true) {
        options.hour = 'numeric';
        options.minute = 'numeric';
    }
    
    if (showRelative === true || showRelativeDate === true) {
        value = date.toRelativeTime(options);
    } else {
        // noinspection JSCheckFunctionSignatures
        value = date.toLocaleDateString("en-US", options);
    }
    
    if (typeof prefix === 'undefined' || prefix === null) prefix = '';
    if (typeof suffix === 'undefined' || suffix === null) suffix = '';
    
    value = wrapWithStrong === true ?
        (<>{prefix}<strong>{value}</strong>{suffix}</>) :
        (<>{prefix + value + suffix}</>);
    
    return (
        <span className="ui-span date-time-text">
            {value}
        </span>
    );
};

DateTime.defaultOptions = { month: 'short', day: 'numeric', year: 'numeric' };
DateTime.defaultTimeOptions = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
DateTime.isDate = function (value) {
    if (!value) return false;
    if (typeof value === 'string') value = value.toDate();
    
    if (Object.prototype.toString.call(value) === "[object Date]")
        return !isNaN(value);
    
    return false;
};

Date.prototype.toFirstOfTheMonth = function () {
    let date = new Date(this.valueOf());
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}

Date.prototype.toFirstOfTheYear = function () {
    let date = new Date(this.valueOf());
    date.setDate(1);
    date.setMonth(0);
    
    return date;
}

Date.prototype.toDateTime = function (options) {
    if (typeof options !== 'object' || options === null || Array.isArray(options)) { 
        options = DateTime.defaultTimeOptions;
    }
    
    return this.toLocaleDateString('en-US', options);
}

Date.prototype.toFormDate = function(hasTime) {
    let dt = new Date(this.valueOf());
    dt.setSeconds(0);
    dt.setMilliseconds(0);
    
    if (!hasTime) { 
        dt.setHours(0, 0, 0, 0);
        let items = dt.toISOString().split('T');
        return items[0];
    }
    
    return dt.toISOString().replace(':00.000Z', '');
}

Date.prototype.addMonths = function (months) {
    let date = new Date(this.valueOf());
    date.setMonth(date.getMonth() + months);
    return date;
}

Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

Date.prototype.addHours = function (hours) {
    return this.addMinutes(hours * 60);
};

Date.prototype.addMinutes = function (minutes) {
    let date = new Date(this.valueOf());
    
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    
    return date;
};

Date.prototype.toDate = function() {
    return this;
};

Date.prototype.toLocalTime = function () {
    let date = new Date(this.valueOf());
    let tzo = date.getTimezoneOffset();
    if (tzo !== 0) date.setMinutes(date.getMinutes() - tzo);
    
    return date;
};

Date.prototype.toRelativeTime = function (options) {
    if (typeof options !== 'object' || Array.isArray(options)) { 
        options = {};
    }

    let justNowMessage = options.justNowMessage || 'Just now';
    let minSeconds = options.minSeconds || 4;
    
    if (minSeconds < 1) minSeconds = 4;
    if (minSeconds < 1000) minSeconds *= 1000;
    
    let span = new Date().getTime() - this.getTime();
    if (span < minSeconds) return justNowMessage;
    
    let secondsSpan = Math.floor(span / 1000);
    
    if (secondsSpan < 50) return secondsSpan + ' seconds ago';
    if (secondsSpan < 60 * 60) {
        let mm = Math.floor(secondsSpan / 60);
        let s = (mm === 1) ? '' : 's';
        return mm + ' minute' + s + ' ago';
    }
    
    if (secondsSpan < 60 * 60 * 24) {
        let h = Math.floor(secondsSpan / (60 * 60));
        let s = h === 1 ? '' : 's';
        return h + ' hour' + s + ' ago';
    }
        
    let format = options.format || { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    return this.toLocaleDateString("en-US", options);
}

Date.prototype.formatDate = function (options) {
    if (!options) options = DateTime.defaultOptions;
    else if (typeof options === 'string') {
        let dateString = options;

        dateString = dateString.replace('TIME', "hh:mm");
        dateString = dateString.replaceAll(/YYYY/g, this.getFullYear().toString());
        dateString = dateString.replaceAll(/YY/g, (this.getFullYear() % 100).toString());
        dateString = dateString.replaceAll(/yyyy/g, this.getFullYear().toString());
        dateString = dateString.replaceAll(/yy/g, (this.getFullYear() % 100).toString());
        dateString = dateString.replaceAll(/MONTHNAME/g, this.toLocaleDateString("en-US", { month: 'long' }));
        dateString = dateString.replaceAll(/MMMM/g, this.toLocaleDateString("en-US", { month: 'long' }));
        dateString = dateString.replaceAll(/MMM/g, this.toLocaleDateString("en-US", { month: 'short' }));
        dateString = dateString.replaceAll(/MM/g, (this.getMonth() + 1).toString().padStart(2, '0'));
        dateString = dateString.replaceAll(/MONTH/g, (this.getMonth() + 1).toString());
        dateString = dateString.replaceAll(/dd/g, this.getDate().toString().padStart(2, '0'));
        dateString = dateString.replaceAll(/DAY/g, this.getDate().toString());
        dateString = dateString.replaceAll(/HH/g, this.getHours().toString());
        dateString = dateString.replaceAll(/HOUR/g, this.getHours().toString());
        dateString = dateString.replaceAll(/hh/g, (this.getHours() % 12).toString());
        dateString = dateString.replaceAll(/mm/g, this.getMinutes().toString());
        dateString = dateString.replaceAll(/MINUTE/g, this.getMinutes().toString());
        dateString = dateString.replaceAll(/ss/g, this.getSeconds().toString());
        dateString = dateString.replaceAll(/SECOND/g, this.getSeconds().toString());
        
        return dateString;
    }
    
    return this.toLocaleDateString("en-US", options);
};

// String conversions to date
String.prototype.formatDate = function (options) {
    return this.toDate().formatDate(options);
};

String.prototype.toDate = function (useUtc, defaultDate) {
    //console.warn('toDate Initial Value: ' + this);
    let dt = Date.parse(this + '');

    let newDate = new Date();
    if (!isNaN(dt)) newDate = new Date(dt);
    
    let offset = new Date().getTimezoneOffset();
    if (useUtc && offset !== 0) newDate = newDate.addMinutes(offset);
    
    return newDate;
}

String.prototype.toDateTime = function (options, useUtc) {
    if (typeof options === 'boolean') {
        useUtc = options;
        options = null;
    }

    return this.toDate(useUtc).toDateTime(options);
}

String.prototype.toRelativeTime = function (options, useUtc) {
    if (typeof options === 'boolean') { 
        useUtc = options;
        options = null;
    }
    return this.toDate(useUtc).toRelativeTime(options);
}

export default DateTime;
