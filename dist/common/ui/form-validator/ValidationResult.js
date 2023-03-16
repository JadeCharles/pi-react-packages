"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * Object that is returned from a validation function
 * */
var ValidationResult = /*#__PURE__*/_createClass(
/**
 * Object that is returned from a validation function
 * @param options {object} { isValid: true, errorMessage: null, elementId: null, scrollAnchor: null, originalValue: null, value: null}
 * @param args {array} [errorMessage, elementId, scrollAnchor, originalValue, value]
 */
function ValidationResult(options) {
  _classCallCheck(this, ValidationResult);
  var t = _typeof(options);
  switch (t) {
    case "object":
      break;
    case "boolean":
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      options = {
        isValid: options,
        errorMessage: options === false && !!args[1] ? args[1].toString() : null
      };
      break;
    case "string":
      options = {
        isValid: false,
        errorMessage: options
      };
      break;
    default:
      options = {
        isValid: true
      };
      break;
  }
  this.isValid = typeof options.isValid === "boolean" ? options.isValid : false;
  this.errorMessage = typeof options.errorMessage === "string" && options.errorMessage.length > 0 ? options.errorMessage : null;
  this.elementId = typeof options.elementId === "string" && options.elementId.length > 0 ? options.elementId : null;
  this.scrollAnchor = typeof options.scrollAnchor === "string" && options.scrollAnchor.length > 0 ? options.scrollAnchor : null;
  this.originalValue = typeof options.originalValue === "string" || typeof options.originalValue === "number" ? options.originalValue : null;
  this.value = typeof options.value === "string" || typeof options.value === "number" ? options.value.toString() : null;
  if (this.value === "null") this.value = this.originalValue;
});
var _default = ValidationResult;
exports.default = _default;