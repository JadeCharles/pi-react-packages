"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _PasswordPolicy = _interopRequireDefault(require("./PasswordPolicy"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  /**
   * Uses regex to validate the format of an email address
   * @param {string} email - An email address to validate
   * @returns {boolean}
   */

  /**
   * Uses regex to validate the format of a phone number
   * @param {string} phone - A phone number to validate
   * @returns {boolean} - True if the phone number is valid, false otherwise
   */

  /**
   * Validates a password choice based on a policy. Default policy properties are:
   * - minLength: 6
   * - maxLength: 256
   * @param {string} password - The password to validate
   * @param {any|null} policy - The password policy to validate against
   */

  /**
   * Validates a form based on a set of required fields.
   * @param {object} requiredFields - An object of field names and their validation rules. For each field name, the value can be:
   * - A string: The error message to display if the field is empty
   * - An object: The object can have the following properties:
   *      - message: The error message to display if the field is empty
   *      - validator: A function that takes a value and returns true if the value is valid, and either false or a result object if the value is invalid. The result object can have the following properties:
   *          - success: True if the value is valid, false otherwise
   *          - message: The description of why it did not pass validation
   *      - type: The type of validation to perform. Can be one of the following:
   *      - email: Validates that the value is a valid email address
   *      - phone: Validates that the value is a valid phone number
   *      - password: Validates that the value is a valid password
   */
  function FormValidator(requiredFields) {
    _classCallCheck(this, FormValidator);
    if (!requiredFields) requiredFields = {};
    this.validators = {};
    this.messages = requiredFields;
    for (var fieldId in requiredFields) {
      if (typeof requiredFields[fieldId] === "string") {
        this.messages[fieldId] = requiredFields[fieldId] || "'" + fieldId + "' field is required";
      } else if (_typeof(requiredFields[fieldId]) === "object") {
        this.messages[fieldId] = requiredFields[fieldId].message || requiredFields[fieldId].text || requiredFields[fieldId].msg || "'" + fieldId + "' field is required";
        if (typeof requiredFields[fieldId].validator === "function") {
          this.validators[fieldId] = requiredFields[fieldId].validator;
          continue;
        }
        switch (requiredFields[fieldId].type) {
          case "email":
            this.validators[fieldId] = FormValidator.validateEmail;
            break;
          case "phone":
            this.validators[fieldId] = FormValidator.validatePhone;
            break;
          default:
            // Will default to FormValidator.validateExistance when it is invoked
            break;
        }
      } else {
        console.warn("FormValidator: Invalid validator object value for field: " + fieldId);
      }
    }
  }
  _createClass(FormValidator, [{
    key: "validate",
    value: function validate(fieldId, value) {
      if (!fieldId) throw new Error("FormValidator: Invalid fieldId: " + fieldId);
      if (_typeof(fieldId) === "object") {
        return this.validateJson(fieldId);
      }
      var _isValid = typeof this.validators[fieldId] === "function" ? this.validators[fieldId] : FormValidator.validateExistance;
      var rsp = _isValid(value);
      var success = typeof rsp === "boolean" ? rsp : (rsp === null || rsp === void 0 ? void 0 : rsp.success) === true;
      if (success === true) return true;
      if (typeof rsp === "boolean") {
        if (!this.messages[fieldId]) this.messages[fieldId] = "Invalid value for field: " + fieldId;
        return false;
      }
      if (!this.messages[fieldId]) this.messages[fieldId] = rsp.message || "Invalid value for field: " + fieldId;
      if (FormValidator.isDebug) {
        if (!success) console.warn("FormValidator: Field '" + fieldId + "' failed validation. Value: " + value);else console.log("FormValidator: Field '" + fieldId + "' passed validation. Value: " + value);
      }
      return false;
    }
  }, {
    key: "validateJson",
    value: function validateJson(json) {
      var errs = {};
      for (var fieldId in json) {
        if (typeof json[fieldId] === "string" || typeof json[fieldId] === "number" || json[fieldId] === null) {
          if (!this.validate(fieldId, json[fieldId])) errs[fieldId] = this.messages[fieldId] || "'" + fieldId + "' field is invalid.";
        } else if (_typeof(json[fieldId]) === "object") {
          var fieldErrs = this.validateJson(json[fieldId]);
          if (Object.keys(fieldErrs).length > 0) errs[fieldId] = fieldErrs;
        }
      }
      return errs;
    }
  }]);
  return FormValidator;
}();
_defineProperty(FormValidator, "isDebug", false);
_defineProperty(FormValidator, "validateExistance", function (value) {
  if (typeof value === "number") return value.toString().length > 0;
  return !!value && value.toString().length > 0;
});
_defineProperty(FormValidator, "validateEmail", function (email) {
  if (typeof email !== "string") return false;
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
});
_defineProperty(FormValidator, "validatePhone", function (phone) {
  if (typeof phone !== "string") return false;
  return phone.match(/^(\d{3})\D*(\d{3})\D*(\d{4})$/);
});
_defineProperty(FormValidator, "validatePassword", function (password) {
  var policy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!(policy instanceof _PasswordPolicy.default)) policy = new _PasswordPolicy.default(policy);
  var success = policy.validate(password);
  return {
    success: success,
    errors: policy.messages,
    policy: policy,
    valueOf: function valueOf() {
      return success;
    },
    toString: function toString() {
      var _policy$messages;
      return ((_policy$messages = policy.messages) === null || _policy$messages === void 0 ? void 0 : _policy$messages.length) > 0 ? policy.messages.join(", ") : "Password Valid: " + success.toString();
    }
  };
});
_defineProperty(FormValidator, "validatePasswords", function (password, confirmationPassword) {
  return typeof confirmationPassword === "string" && password === confirmationPassword;
});
var _default = FormValidator;
exports.default = _default;