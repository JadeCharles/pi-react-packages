"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var AnimatedButton = function AnimatedButton(props) {
  var isWorking = props.isWorking || false;
  var caption = props.value || props.text || props.caption;
  var onClick = props.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    disabled: isWorking,
    className: isWorking ? 'button working' : 'button',
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(Spinner, {
    isWorking: false
  }), caption || 'Button', /*#__PURE__*/_react.default.createElement(Spinner, {
    isWorking: isWorking
  }));
};
var _default = AnimatedButton;
exports.default = _default;