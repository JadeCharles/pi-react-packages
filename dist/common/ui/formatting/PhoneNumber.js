"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-extend-native */

var PhoneNumber = function PhoneNumber(props) {
  var value = (props.value || props.children || '').formatPhoneNumber(props.prefix, props.suffix, props.defaultValue);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "pi-span phone-number-text"
  }, value);
};
String.prototype.formatPhoneNumber = function (prefix, suffix, defaultValue) {
  var _this$valueOf;
  var value = ((_this$valueOf = this.valueOf()) === null || _this$valueOf === void 0 ? void 0 : _this$valueOf.replace(/\D/g, '')) || "";
  if (value.length === 11 && value.substr(0, 1) === '1') {
    value = value.substr(1);
  }
  if (!value) value = defaultValue || "";
  if (value.length === 10) value = (prefix || '') + '(' + value.substr(0, 3) + ') ' + value.substr(3, 3) + '-' + value.substr(6, 4) + (suffix || '');
  return value;
};
var _default = PhoneNumber;
exports.default = _default;