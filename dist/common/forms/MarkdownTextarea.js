"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _marked = require("marked");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _LogoSvgs = require("../ui/svgs/LogoSvgs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MarkdownTextarea = function MarkdownTextarea(props) {
  var label = props.label,
    icon = props.icon,
    className = props.className,
    onChange = props.onChange,
    fieldName = props.fieldName,
    children = props.children;
  var _useState = (0, _react.useState)({
      text: children,
      textarea: "",
      preview: "none"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    viewer = _useState2[0],
    setViewer = _useState2[1];
  var cn = className ? " " + className : "";
  var text = children || "";
  var onTextChange = function onTextChange(e) {
    text = e.target.value;
    console.log(text);
    if (typeof onChange === 'function') {
      if (typeof fieldName !== 'undefined') onChange(fieldName, e);else onChange(e);
    }
  };
  var togglePreview = function togglePreview(e) {
    var isHidden = viewer.textarea === "none";
    var p = {
      preview: "",
      textarea: "",
      text: text || ""
    };
    if (isHidden) p.preview = "none";else p.textarea = "none";
    setViewer(p);
  };
  var toolTipTheme = (0, _material.createTheme)({
    backgroundColor: "black"
  });
  var tooltipClasses = {
    tooltipArrow: "dark-arrow",
    tooltip: "dark-body",
    tooltipPlacementRight: "dark-right"
  };
  var markdownReferenceElement = /*#__PURE__*/_react.default.createElement("span", {
    className: "markdown-tooltip-body"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Markdown encoded description"), /*#__PURE__*/_react.default.createElement("p", null, "Markdown is a lightweight markup language with plain text formatting syntax.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.markdownguide.org/basic-syntax/"
  }, "Basic Markdown Syntax ", /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowUpRightFromSquare
  }))));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", null, label || "Description", /*#__PURE__*/_react.default.createElement(_material.Tooltip, {
    placement: "right",
    arrow: true,
    className: "markdown-tooltip" + cn,
    theme: toolTipTheme,
    classes: tooltipClasses,
    title: markdownReferenceElement
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    onClick: togglePreview,
    icon: icon || _LogoSvgs.piMarkdown
  }))), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "markdown-textarea" + cn,
    style: {
      display: viewer.textarea
    },
    onChange: onTextChange,
    defaultValue: children
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: viewer.preview
    },
    id: "preview-id",
    className: "markdown-preview markdown"
  }, /*#__PURE__*/_react.default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: _marked.marked.parse(viewer.text || "")
    }
  })));
};
var _default = MarkdownTextarea;
exports.default = _default;