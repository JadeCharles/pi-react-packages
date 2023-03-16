"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ValidationResult = _interopRequireDefault(require("./ValidationResult"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ValidateModel = /*#__PURE__*/function () {
  function ValidateModel(options) {
    var _this = this;
    _classCallCheck(this, ValidateModel);
    if (_typeof(options) !== "object") throw new Error("ValidatedModel.constructor: options must be an object");
    if (!options) options = {};

    // Ref items
    this.ref = options.ref || null;
    this.name = options.name || null;
    this.isDisabled = false;
    this.result = null;
    this.elementId = options.id || options.elementId || null;
    this.errorMessage = options.error_message || options.errorMessage || null;
    this.scrollAnchor = options.scroll_anchor || options.scrollAnchor || null;

    // Validation Rules
    this.validateFunction = typeof options.validate === "function" ? options.validate : this.validateEmpty;

    // ...
    if (!this.ref || _typeof(this.ref) !== "object") this.ref = null;
    if (!this.name || typeof this.name !== "string") this.name = null;
    if (!this.elementId || typeof this.elementId !== "string") this.elementId = "";
    if (!this.errorMessage || typeof this.errorMessage !== "string") this.errorMessage = "Invalid value for {0}";
    if (!this.scrollAnchor || typeof this.scrollAnchor !== "string") this.scrollAnchor = null;
    if (this.name === null) this.name = "Field";
    if (!this.scrollAnchor) this.scrollAnchor = (this.elementId || "").toString();
    this.onValidate = typeof options.onValidate === "function" ? options.onValidate : null;
    if (this.onValidate === null && options.onValidated === "function") this.onValidate = options.onValidated;
    if (this.onValidate === null) this.onValidate = function (result) {
      if ((result === null || result === void 0 ? void 0 : result.isValid) === true) console.log(_this.name + " is valid");else console.warn(_this.name + " is invalid: " + ((result === null || result === void 0 ? void 0 : result.errorMessage) || "No error message available"));
    };
  }
  _createClass(ValidateModel, [{
    key: "getErrorMessage",
    value: function getErrorMessage() {
      var _this$result;
      if (((_this$result = this.result) === null || _this$result === void 0 ? void 0 : _this$result.isValid) === false) return this.result.errorMessage;
      return null;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var _this$result2;
      return ((_this$result2 = this.result) === null || _this$result2 === void 0 ? void 0 : _this$result2.isValid) === true || this.isDisabled;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.isDisabled === true) return this.toResultOptions(this.getValue());
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this.result = this.validateFunction(args);
      return this.result;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.result = null;
      this.isDisabled = false;
      return true;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this$ref, _this$ref$current, _value;
      var nullValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var value = (_this$ref = this.ref) === null || _this$ref === void 0 ? void 0 : (_this$ref$current = _this$ref.current) === null || _this$ref$current === void 0 ? void 0 : _this$ref$current.value;
      if (typeof value !== "string" && typeof value !== "number") {
        var _element$value;
        var element = typeof document !== "undefined" ? document.getElementById(this.elementId || "") : null;
        if (element !== null) value = (_element$value = element.value) !== null && _element$value !== void 0 ? _element$value : element.innerHTML || nullValue;else value = nullValue;
      }
      return (_value = value) === null || _value === void 0 ? void 0 : _value.trim();
    }
  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor() {
      var element = document.getElementById(this.scrollAnchor || "");
      var formField = document.getElementById(this.elementId || "");
      element === null || element === void 0 ? void 0 : element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      if (!!formField) {
        setTimeout(function () {
          formField.focus();
        }, 500);
      }
    }
  }, {
    key: "toResultOptions",
    value: function toResultOptions() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var isValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (typeof isValid === "string") {
        var tmp = value;
        value = isValid;
        if (typeof tmp === "boolean") isValid = tmp;else isValid = true;
      }
      return {
        isValid: isValid,
        value: value,
        elementId: this.elementId,
        originalValue: value,
        errorMessage: this.errorMessage,
        scrollAnchor: this.scrollAnchor
      };
    }
  }, {
    key: "validateEmpty",
    value: function validateEmpty() {
      var minLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var nm = (this.name || "").toLowerCase();
      if (nm.startsWith("email")) return this.validateEmail();
      var value = this.getValue();
      var options = this.toResultOptions(value);
      if (typeof minLength !== "number") minLength = 1;
      if (value === null || value.length < minLength) {
        options.isValid = false;
        options.errorMessage = this.errorMessage.replace("{0}", this.name);
      }
      return new _ValidationResult.default(options);
    }
  }, {
    key: "validateEmail",
    value: function validateEmail() {
      var value = this.getValue() || "";
      var options = this.toResultOptions(value);
      options.originalValue = value;
      value = value.toLowerCase();
      var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      /* check if 'value' is a valid email address */
      if (!pattern.test(String(value).toLowerCase())) {
        options.isValid = false;
        options.errorMessage = this.errorMessage.replace("{0}", this.name);
      }
      return new _ValidationResult.default(options);
    }
  }, {
    key: "validatePhoneNumber",
    value: function validatePhoneNumber() {}
  }]);
  return ValidateModel;
}();
var _default = ValidateModel;
exports.default = _default;