"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var EmptyBox = function EmptyBox(props) {
  var id = props.id,
    className = props.className;
  var cn = !!className ? ' ' + className : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-items-box" + cn
  }, /*#__PURE__*/_react.default.createElement("div", null, props.children));
};
var _default = EmptyBox;
exports.default = _default;