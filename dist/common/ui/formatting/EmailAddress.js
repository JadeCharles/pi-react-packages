"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var EmailAddress = function EmailAddress(props) {
  var value = props.value,
    defaultValue = props.defaultValue,
    icon = props.icon,
    isLinked = props.isLinked;
  var prefix = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  if (icon === true) {
    prefix = /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faEnvelope
    });
  }
  if (!value) value = props.children;
  if (isLinked !== false) {
    value = /*#__PURE__*/_react.default.createElement("a", {
      href: 'mailto:' + value
    }, prefix, value);
    prefix = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "boc-span email-address-text"
  }, value);
};
var _default = EmailAddress;
exports.default = _default;