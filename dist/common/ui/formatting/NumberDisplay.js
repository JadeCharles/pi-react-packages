"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-extend-native */

var NumberDisplay = function NumberDisplay(props) {
  var decimalPlaces = props.decimalPlaces,
    value = props.value,
    path = props.path,
    type = props.type,
    symbol = props.symbol,
    isComponent = props.isComponent;
  if (type !== 'currency' && type !== 'percent') type = 'number';
  if (decimalPlaces === undefined) decimalPlaces = type === "currency" ? 2 : -1;
  if (typeof value !== 'number') value = parseFloat(value);
  if (isNaN(value)) value = 0;
  var formatNumber = function formatNumber(value) {
    return value.formatNumber(decimalPlaces);
  };
  var formatCurrency = function formatCurrency(value) {
    return value.formatCurrency(decimalPlaces, symbol || "$");
  };
  var func = type === 'currency' ? formatCurrency : formatNumber;
  var mult = type === 'percent' ? 100 : 1;
  var body = func(value * mult) + (mult === 100 ? "%" : "");
  if (isComponent === true) {
    var tokens = body.split('.', 2);
    if (tokens.length > 1) {
      body = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
        className: type + "-display-base"
      }, tokens[0]), /*#__PURE__*/_react.default.createElement("span", {
        className: type + "-display-decimal"
      }, ".", tokens[1]));
    }
  }
  if (typeof path === 'string') body = /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: path
  }, body);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "boc-span " + type + "-text"
  }, body);
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
var _default = NumberDisplay;
exports.default = _default;