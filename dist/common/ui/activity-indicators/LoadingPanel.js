"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./LoadingPanel.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var LoadingPanel = function LoadingPanel(props) {
  var children = props.children,
    size = props.size;
  var sz = (size || 0).toString();
  if (["24", "32", "48", "64", "128"].includes(sz)) sz = "";
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "loading-box spinner size" + sz
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "spinner-label"
  }, children || "Loading"), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "spinning"
  })));
};
var _default = LoadingPanel;
exports.default = _default;