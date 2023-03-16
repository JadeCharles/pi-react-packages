"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PagerPage = function PagerPage(props) {
  var children = props.children,
    items = props.items,
    controller = props.controller;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};
var _default = PagerPage;
exports.default = _default;