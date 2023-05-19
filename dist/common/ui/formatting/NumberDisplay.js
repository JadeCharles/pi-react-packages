"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-extend-native */

var NumberDisplay = function NumberDisplay(props) {
  var decimalPlaces = props.decimalPlaces,
    value = props.value,
    path = props.path,
    defaultValue = props.defaultValue,
    type = props.type,
    symbol = props.symbol,
    formatter = props.formatter,
    prefix = props.prefix,
    suffix = props.suffix,
    children = props.children,
    padLeft = props.padLeft,
    padRight = props.padRight,
    isComponent = props.isComponent;
  if (type !== 'currency' && type !== 'percent') type = 'number';
  if (decimalPlaces === undefined) decimalPlaces = type === "currency" ? 2 : -1;
  if (typeof value !== 'number') value = parseFloat(children);
  if (isNaN(value) || typeof value !== 'number') value = parseFloat(value);
  if (typeof prefix === "undefined" || prefix === null) prefix = "";
  if (typeof suffix === "undefined" || suffix === null) suffix = "";
  if (isNaN(value) || typeof value !== 'number') {
    if (typeof defaultValue !== "undefined") return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, prefix, defaultValue, suffix);
    value = 0;
  }
  var formatNumber = function formatNumber(value) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, prefix, value.formatNumber(decimalPlaces), suffix);
  };
  var formatCurrency = function formatCurrency(value) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, prefix, value.formatCurrency(decimalPlaces, symbol || "$"), suffix);
  };
  var func = type === 'currency' ? formatCurrency : formatNumber;
  var mult = type === 'percent' ? 100 : 1;
  var body = func(value * mult) + (mult === 100 ? "%" : "");
  if (isComponent === true) {
    var tokens = body.split('.', 2);
    if (padLeft > 0) tokens[0] = tokens[0].padStart(padLeft, '0');else if (padRight > 0) tokens[1] = tokens[1].padEnd(padRight, '0');
    if (tokens.length > 1) {
      body = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
        className: type + "-display-base"
      }, tokens[0]), /*#__PURE__*/_react.default.createElement("span", {
        className: type + "-display-decimal"
      }, ".", tokens[1]));
    }
  } else {
    if (padLeft > 0) body = body.padStart(padLeft, '0');else if (padRight > 0) body = body.padEnd(padRight, '0');
  }
  if (typeof path === 'string' && path.length > 0) {
    body = typeof formatter === "function" ? formatter(body, path) : NumberDisplay.defaultFormatter(body, path);
  }
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "boc-span " + type + "-text"
  }, prefix, body, suffix);
};
Number.prototype.toPercent = function (decimalPlaces) {
  return (this * 100).formatNumber(decimalPlaces) + '%';
};
Number.prototype.formatNumber = function (decimalPlaces) {
  var value = this.valueOf();
  if (typeof decimalPlaces !== 'number') decimalPlaces = -1;
  if (decimalPlaces < 0) {
    return value.toLocaleString("en-US");
  } else {
    var numberValue = parseFloat(value.toFixed(decimalPlaces)).toLocaleString("en-US");
    if (decimalPlaces === 0) return numberValue;
    if (numberValue.indexOf('.') < 0) numberValue += '.';
    var parts = numberValue.split('.');
    if (parts[1].length < decimalPlaces) parts[1] += '0'.repeat(decimalPlaces - parts[1].length);
    return parts[0] + '.' + parts[1];
  }
};
Number.prototype.formatCurrency = function (decimalPlaces, symbol) {
  if (typeof symbol === 'undefined') symbol = "$";
  if (typeof decimalPlaces === 'undefined') decimalPlaces = 2;
  var sign = this < 0 ? "-" : "";
  return sign + symbol + Math.abs(this).formatNumber(decimalPlaces);
};
NumberDisplay.defaultFormatter = function (body, path) {
  return body;
};
var _default = NumberDisplay;
exports.default = _default;