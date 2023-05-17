"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-extend-native */

var StringDisplay = function StringDisplay(props) {
  var value = props.value,
    plural = props.plural,
    children = props.children,
    maxLength = props.maxLength,
    ellipse = props.ellipse;
  var v = typeof value === 'string' ? value : children === null || children === void 0 ? void 0 : children.toString();
  if (maxLength > 0 && v.length > maxLength) v = v.substring(0, maxLength - 3) + (ellipse || "...");
  if (plural) v = v.toPlural();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, v);
};
String.prototype.toPlural = function () {
  var s = (this === null || this === void 0 ? void 0 : this.valueOf()) || "";
  if (s.endsWith("s")) {
    return s + "es";
  } else if (s.endsWith("y") && !(s.endsWith("ay") || s.endsWith("ey") || s.endsWith("iy") || s.endsWith("oy") || s.endsWith("uy"))) {
    return s.substring(0, s.length - 1) + "ies";
  }
  return s + "s";
};
var _default = StringDisplay;
exports.default = _default;