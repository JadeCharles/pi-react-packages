"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormController = _interopRequireDefault(require("../../common/controllers/FormController"));
var _FormValidator = _interopRequireDefault(require("../../common/controllers/FormValidator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PasswordForm = function PasswordForm(_ref) {
  var policy = _ref.policy,
    controller = _ref.controller,
    controllerKey = _ref.controllerKey,
    prefix = _ref.prefix;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    errors = _useState2[0],
    setErrors = _useState2[1];
  var passwordRef = (0, _react.useRef)();
  var passwordConfirmRef = (0, _react.useRef)();
  var createJson = function createJson() {
    var _passwordRef$current, _passwordConfirmRef$c;
    return {
      password: ((_passwordRef$current = passwordRef.current) === null || _passwordRef$current === void 0 ? void 0 : _passwordRef$current.value) || null,
      password_confirm: ((_passwordConfirmRef$c = passwordConfirmRef.current) === null || _passwordConfirmRef$c === void 0 ? void 0 : _passwordConfirmRef$c.value) || null
    };
  };
  var validateForm = function validateForm(json) {
    var _passwordRef$current2, _passwordRef$current3, _passwordConfirmRef$c2;
    var errs = {};
    var result = _FormValidator.default.validatePassword((_passwordRef$current2 = passwordRef.current) === null || _passwordRef$current2 === void 0 ? void 0 : _passwordRef$current2.value, policy);
    if (!result.success) {
      errs.password = result.toString();
      controller === null || controller === void 0 ? void 0 : controller.setError("password", errs.password);
    }
    if (!_FormValidator.default.validatePasswords((_passwordRef$current3 = passwordRef.current) === null || _passwordRef$current3 === void 0 ? void 0 : _passwordRef$current3.value, (_passwordConfirmRef$c2 = passwordConfirmRef.current) === null || _passwordConfirmRef$c2 === void 0 ? void 0 : _passwordConfirmRef$c2.value)) {
      errs.password_confirm = "Passwords do not match.";
      controller === null || controller === void 0 ? void 0 : controller.setError("password_confirm", errs.password);
    }
    setErrors(errs);
    controller === null || controller === void 0 ? void 0 : controller.setErrors(errs);
    if (Object.keys(errs).length > 0) return null;
    return passwordConfirmRef.current.value;
  };
  var setControllerCallback = function setControllerCallback() {
    if (!controller || !(controller instanceof _FormController.default)) {
      console.warn("setControllerCallback failed: No FormController was provided to PersonForm.");
      return false;
    }
    var ckey = typeof controllerKey === "string" && controllerKey.length > 0 ? controllerKey : "passwords";
    controller.setCallback(ckey, function () {
      var json = createJson();
      if (!validateForm(json)) return null;
      return json;
    });
    return true;
  };
  (0, _react.useEffect)(function () {
    setControllerCallback();
  }, []);
  var clearErrors = function clearErrors(key) {
    if (!!errors[key]) {
      var newErrors = _objectSpread({}, errors);
      delete newErrors[key];
      setErrors(newErrors);
    }
  };
  var viewError = function viewError(key) {
    return (errors === null || errors === void 0 ? void 0 : errors[key]) || null;
  };
  var idPrefix = typeof prefix === "string" && prefix.length > 0 ? prefix : "";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Password:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "password",
    type: "password",
    ref: passwordRef,
    onBlur: function onBlur(e) {
      return clearErrors("password");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError(idPrefix + "password"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Confirm Password:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "password_confirm",
    type: "password",
    ref: passwordConfirmRef,
    onBlur: function onBlur(e) {
      return clearErrors("password_confirm");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError(idPrefix + "password_confirm"))));
};
PasswordForm.defaultDataKey = "passwords";
var _default = PasswordForm;
exports.default = _default;