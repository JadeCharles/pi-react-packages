"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ErrorElement = function ErrorElement(_ref) {
  var message = _ref.message;
  return !!message ? /*#__PURE__*/_react.default.createElement("strong", {
    className: "panel-error"
  }, message) : null;
};
var _default = ErrorElement;
exports.default = _default;