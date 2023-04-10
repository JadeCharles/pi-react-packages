"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ConfigModel = _interopRequireDefault(require("../models/ConfigModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PasswordPolicy = /*#__PURE__*/function () {
  function PasswordPolicy() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, PasswordPolicy);
    if (typeof options === "number") options = {
      minLength: options
    };else if (typeof options === "string") options = PasswordPolicy.getPolicyOptionsByName(options);else if (!options) options = {};
    this.minLength = options.minLength || 6;
    this.maxLength = options.maxLength || 128;
    this.minUpperCase = options.minUpperCase || options.minUpper || 0;
    this.minLowerCase = options.minLowerCase || options.minLower || 0;
    this.minNumbers = options.minNumbers || options.minNumber || 0;
    this.minSpecial = options.minSpecial || 0;
    if (typeof this.minLength !== "number" || this.minLength < 1) this.minLength = 6;else if (this.minLength > 128) this.minLength = 128;
    if (typeof this.maxLength !== "number" || this.maxLength < this.minLength) this.maxLength = this.minLength <= 16 ? 256 : Math.max(this.minLength + 256, 512);
    if (typeof this.minUpperCase !== "number" || this.minUpperCase < 0) this.minUpperCase = 0;
    if (typeof this.minLowerCase !== "number" || this.minLowerCase < 0) this.minLowerCase = 0;
    if (typeof this.minNumbers !== "number" || this.minNumbers < 0) this.minNumbers = 0;
    if (typeof this.minSpecial !== "number" || this.minSpecial < 0) this.minSpecial = 0;
    this.messages = [];
  }
  _createClass(PasswordPolicy, [{
    key: "validate",
    value: function validate(password) {
      this.messages = [];
      if (typeof password !== "string") this.messages.push("Password must be a string. Found: " + _typeof(password).toString());else if (password.length < this.minLength) {
        var message = this.minLength > 1 ? "Password is too short. Min is " + this.minLength + " characters. Found: " + password.length + " characters" : PasswordPolicy.emptyError;
        this.messages.push(message);
      }
      if (password.length > this.maxLength) this.messages.push("Password is too long. Max is " + this.maxLength + " characters");
      var upper = 0;
      var lower = 0;
      var numbers = 0;
      var special = 0;
      for (var i = 0; i < password.length; i++) {
        var c = password.charAt(i);
        if (c >= "A" && c <= "Z") upper++;else if (c >= "a" && c <= "z") lower++;else if (c >= "0" && c <= "9") numbers++;else special++;
      }
      var getEs = function getEs(count) {
        return count === 1 ? "" : "s";
      };
      var prefix = "Must contain at least ";
      if (upper < this.minUpperCase) this.messages.push(prefix + this.minUpperCase + " uppercase letter(s)");
      if (lower < this.minLowerCase) this.messages.push(this.minLowerCase + " lowercase letter" + getEs(this.minLowerCase));
      if (numbers < this.minNumbers) this.messages.push(this.minNumbers + " number" + getEs(this.minNumbers));
      if (special < this.minSpecial) this.messages.push(this.minSpecial + " special character" + getEs(this.minSpecial));
      return this.messages.length === 0;
    }
  }]);
  return PasswordPolicy;
}();
_defineProperty(PasswordPolicy, "isDebug", !_ConfigModel.default.isProduction());
_defineProperty(PasswordPolicy, "emptyError", "Password cannot be empty");
_defineProperty(PasswordPolicy, "getPolicyOptionsByName", function (name) {
  if (!name || typeof name !== "string") return {};
  switch (name) {
    case "weak":
      return {
        minLength: 6,
        minUpperCase: 0,
        minLowerCase: 0,
        minNumbers: 0,
        minSpecial: 0
      };
    case "medium":
      return {
        minLength: 8,
        minUpperCase: 1,
        minLowerCase: 1,
        minNumbers: 1,
        minSpecial: 0
      };
    case "strong":
      return {
        minLength: 10,
        minUpperCase: 1,
        minLowerCase: 1,
        minNumbers: 1,
        minSpecial: 1
      };
    default:
      return {
        minLength: 6,
        minUpperCase: 0,
        minLowerCase: 0,
        minNumbers: 0,
        minSpecial: 0
      };
  }
});
var _default = PasswordPolicy;
exports.default = _default;