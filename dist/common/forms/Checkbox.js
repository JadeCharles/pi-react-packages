"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _SetterFunction = _interopRequireDefault(require("../controllers/SetterFunction"));
var _FormController = _interopRequireDefault(require("../controllers/FormController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Checkbox = function Checkbox(props) {
  var children = props.children,
    onChange = props.onChange,
    onCheck = props.onCheck,
    controller = props.controller,
    setter = props.setter,
    onIcon = props.onIcon,
    offIcon = props.offIcon,
    size = props.size,
    onElement = props.onElement,
    id = props.id,
    offElement = props.offElement,
    defaultValue = props.defaultValue,
    value = props.value,
    isChecked = props.isChecked,
    checked = props.checked,
    label = props.label,
    controllerKey = props.controllerKey;
  var _useState = (0, _react.useState)(defaultValue === true || value === true || isChecked === true || checked === true),
    _useState2 = _slicedToArray(_useState, 2),
    checkedState = _useState2[0],
    setCheckedState = _useState2[1];
  var toggleCheckbox = function toggleCheckbox() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var fromController = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var newValue = typeof value === "boolean" ? value : !checkedState;
    var onCheckbox = typeof onChange === "function" ? onChange : onCheck;
    if (typeof onCheckbox === "function") {
      if (onCheckbox(newValue) === false) {
        console.log("Suppressing onCheck re-render");
        return;
      }
    }
    setCheckedState(newValue);
  };
  var setSetterFunction = function setSetterFunction() {
    if (setter instanceof _SetterFunction.default) {
      setter.setFunction(function (checked) {
        toggleCheckbox(checked, true);
      });
      console.log("Setter function set for checkbox: " + setter);
      return true;
    }
    console.warn("No setter function set for checkbox");
    return false;
  };
  var setControllerCallback = function setControllerCallback() {
    if (!controller || !(controller instanceof _FormController.default)) {
      //console.warn("setControllerCallback failed: No FormController was provided to checkbox");
      return false;
    }
    var ckey = typeof controllerKey === "string" && controllerKey.length > 0 ? controllerKey : "checkbox";
    controller.setCallback(ckey, function () {
      return checkedState;
    });
    return true;
  };
  (0, _react.useEffect)(function () {
    if ((setter === null || setter === void 0 ? void 0 : setter.isMounted()) === false) setSetterFunction();
    setControllerCallback();
  }, []);
  var iconSize = typeof size === "string" ? size : typeof size === "number" ? size + "x" : "2x";
  var onStateElement = onElement || /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: onIcon || _freeSolidSvgIcons.faSquareCheck,
    size: iconSize
  });
  var offStateElement = offElement || /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: offIcon || _freeSolidSvgIcons.faSquare,
    size: iconSize
  });
  var elementId = typeof id === "string" ? id : null;
  var labelContent = label || children;
  var labelElement = !!labelContent ? /*#__PURE__*/_react.default.createElement("label", {
    className: "checkbox-label"
  }, labelContent) : null;
  var element = checkedState ? onStateElement : offStateElement;
  return /*#__PURE__*/_react.default.createElement("span", {
    id: elementId,
    className: ("checkbox " + (checkedState ? "checked" : "")).trim(),
    onClick: toggleCheckbox
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox-icon"
  }, element), labelElement);
};
Checkbox.defaultDataKey = "checkbox";
var _default = Checkbox;
exports.default = _default;