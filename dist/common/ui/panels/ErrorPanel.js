"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ErrorElement = function ErrorElement(props) {
  if (props.message) return /*#__PURE__*/_react.default.createElement("strong", {
    className: "form-error"
  }, props.message);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};
var _default = ErrorElement;
exports.default = _default;