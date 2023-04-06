"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ErrorModel = /*#__PURE__*/function () {
  /**
   *
   * @param err {Error|object|string|null} - Any sort of error. Form or otherwise.
   * @param isFormError {boolean|null} - If null, will be determined by the absence of "data" and "response" properties.
   */
  function ErrorModel(err) {
    var _err2, _this$formError, _err3;
    var isFormError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, ErrorModel);
    if (!err) err = {};else if (_typeof(err) !== "object") {
      var _err;
      err = {
        message: ((_err = err) === null || _err === void 0 ? void 0 : _err.toString()) || ErrorModel.createDefaultMessage(err)
      };
      if (isFormError !== false) {
        err.general = err.message;
        delete err.message;
        isFormError = true;
      }
    }
    this.error = _objectSpread({}, err); // Save raw error
    this.isFormError = isFormError || false;
    this.requiredFields = err.required_fields || err.requiredFields || null;
    if (_typeof(this.requiredFields) !== "object" || !this.requiredFields) this.requiredFields = {};
    isFormError = isFormError === true || err.isFormError === true || err.is_form_error === true || typeof err.general === "string" || typeof err.data === "undefined" && typeof err.response === "undefined";
    this.formError = isFormError ? _objectSpread({}, err) : _objectSpread({}, err.formError || err.form_error) || {};
    this.message = ((_err2 = err) === null || _err2 === void 0 ? void 0 : _err2.message) || ((_this$formError = this.formError) === null || _this$formError === void 0 ? void 0 : _this$formError.general) || "";
    this.messages = Array.isArray((_err3 = err) === null || _err3 === void 0 ? void 0 : _err3.messages) ? err.messages : [];
    if (!!this.message && this.messages.length === 0) this.messages.push(this.message);
    this.parse(err);
  }

  /**
   * Parses the error and returns true if there is an error message.
   * @param {object|Error|null} err 
   * @returns 
   */
  _createClass(ErrorModel, [{
    key: "parse",
    value: function parse() {
      var _err4, _this$message;
      var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!err) err = this.error || (this.isFormError ? this.formError : null);
      if (!((_err4 = err) !== null && _err4 !== void 0 && _err4.message)) {
        var _err5, _err5$response, _err6, _err7, _err8;
        err = ((_err5 = err) === null || _err5 === void 0 ? void 0 : (_err5$response = _err5.response) === null || _err5$response === void 0 ? void 0 : _err5$response.data) || ((_err6 = err) === null || _err6 === void 0 ? void 0 : _err6.data) || {};
        this.message = ((_err7 = err) === null || _err7 === void 0 ? void 0 : _err7.message) || ErrorModel.createDefaultMessage(err instanceof ErrorModel);
        this.messages = ((_err8 = err) === null || _err8 === void 0 ? void 0 : _err8.messages) || [];
        if (this.messages.length === 0) this.messages.push(this.message);
      }
      var switched = !this.isFormError;
      this.isFormError = this.isFormError || !!this.formError && Object.keys(this.formError).length > 0;
      if (this.isFormError && switched) {
        var _this$formError$messa;
        if (!this.formError) this.formError = {};
        if (this.messages.length > (((_this$formError$messa = this.formError.messages) === null || _this$formError$messa === void 0 ? void 0 : _this$formError$messa.length) || 0)) this.formError.messages = _toConsumableArray(this.messages);
        if (this.message !== this.formError.message) {
          this.formError.message = this.message;
        }
      }
      return ((_this$message = this.message) === null || _this$message === void 0 ? void 0 : _this$message.length) > 0 || this.isFormError;
    }
  }, {
    key: "hasFormErrors",
    value: function hasFormErrors() {
      return Object.keys(this.formError || {}).length > 0;
    }
  }, {
    key: "focus",
    value: function focus() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      return ErrorModel.focusInput(this.formError, prefix, delay);
    }

    /**
     * Typically used for server exceptions. Creates an object with form field names as keys (field), and error messages as values (message).
     * @param ex { object|object[]|string|string[]|null} - Usually an error that came from an API call.
     * @param formElementIdPrefix {string|null} - If included, it will call try to find the element with the given ID and focus it.
     * @param defaultError {string} - If no error message is found, this will be used.
     * @param defaultField {string} = If no field name is found, this will be used.
     * @returns {object} - A raw JSON object to be used to display form errors. The keys are the field ids, and the values are the error messages. For example: { "email": "Email is missing"}
     */
  }], [{
    key: "createFormError",
    value: function createFormError(ex) {
      var _ex$response, _ex$response2;
      var formElementIdPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var defaultError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "An unknown error happened. Check logs for details.";
      var defaultField = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "general";
      var data = (ex === null || ex === void 0 ? void 0 : (_ex$response = ex.response) === null || _ex$response === void 0 ? void 0 : _ex$response.data) || (ex === null || ex === void 0 ? void 0 : ex.data) || ex;
      if (typeof data === "string" && (ex === null || ex === void 0 ? void 0 : (_ex$response2 = ex.response) === null || _ex$response2 === void 0 ? void 0 : _ex$response2.status) >= 300 && data.includes("<!DOCTYPE")) {
        return {
          general: "An error with status " + ex.response.status.toString() + " occurred. Please try again later."
        };
      }
      var er = {};
      if (Array.isArray(ex) && (ex === null || ex === void 0 ? void 0 : ex.length) > 0) {
        var items = typeof ex[0] === "string" ? ex.map(function (x) {
          return {
            message: x,
            field: defaultField
          };
        }) : ex;
        data = {
          objects: items
        };
      } else if (typeof ex === "string") {
        data = {
          objects: [{
            message: ex,
            field: defaultField
          }]
        };
      } else if (typeof data === "string") {
        data = {
          objects: [{
            message: data,
            field: defaultField
          }]
        };
      }
      if (!data) er.general = (ex === null || ex === void 0 ? void 0 : ex.message) || defaultError;else {
        var _data, _data2, _data3;
        var objects = (_data = data) === null || _data === void 0 ? void 0 : _data.objects;
        if (Array.isArray(objects) && objects.length > 0) {
          for (var i = 0; i < objects.length; i++) {
            var f = objects[i];
            if (typeof f === "string") {
              f = {
                message: f,
                field: defaultField
              };
            } else if (_typeof(f) === "object") {
              var _f;
              if (!f.message) f.message = ((_f = f) === null || _f === void 0 ? void 0 : _f.error) || defaultError;
              if (!f.field) f.field = f.field_name || f.fieldId || f.field_id || defaultField || f.field_key || f.key;
            } else {
              var _f2;
              console.warn("Error parser: unknown object type: " + _typeof(f).toString() + " (" + ((_f2 = f) === null || _f2 === void 0 ? void 0 : _f2.toString()) + "). Skipping");
              continue;
            }
            if (f.message && f.field) {
              var existing = !!er[f.field] ? er[f.field] + ". " : "";
              er[f.field] = existing + f.message;
            }
          }
        } else er.general = ((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.message) || defaultError;
        if (Object.keys(er).length === 0) er.general = ((_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.message) || defaultError;
      }
      if (typeof formElementIdPrefix === "string" && formElementIdPrefix.length > 0) {
        ErrorModel.focusInput(er, formElementIdPrefix);
      }
      return er;
    }

    /**
     * Focuses the cursor on the first input with an error.
     * @param errorsObject {object|null} - If null, will return null.
     * @param prefixOptions {string|object|null} - If null, will ignore the elementId prefix. For example: If the elementId is "company-name", the prefix is "company-" and the error key is "name", then the elementId will be "company-name".
     * @param delay {number} - The delay in milliseconds before focusing the input. Default is 200ms. Maximum is 3000ms.
     * @returns {*}
     */
  }, {
    key: "focusInput",
    value: function focusInput(errorsObject) {
      var prefixOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
      var errorKeys = Object.keys(errorsObject);
      if (errorKeys.length > 0 && typeof errorKeys[0] === "string") {
        var prefix = typeof prefixOptions === "string" ? prefixOptions : _typeof(prefixOptions) === "object" ? prefixOptions.prefix || prefixOptions[errorKeys[0]] : "";
        if (typeof delay !== "number" || delay < 0 || delay > 3000) delay = 200;
        setTimeout(function () {
          var _div;
          var key = (prefix + errorKeys[0]).trim();
          var div = document.getElementById(key);
          if (!div && key.indexOf("_") > 0) div = document.getElementById(key.replaceAll("_", "-"));
          (_div = div) === null || _div === void 0 ? void 0 : _div.focus();
        }, delay);
      }
      return errorsObject;
    }
  }, {
    key: "getMessage",
    value: function getMessage(ex) {
      var _ex$response3, _ex$response3$data;
      var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "An unknown error occurred.";
      if (typeof ex === "string") return ex || defaultMessage;
      return (ex === null || ex === void 0 ? void 0 : (_ex$response3 = ex.response) === null || _ex$response3 === void 0 ? void 0 : (_ex$response3$data = _ex$response3.data) === null || _ex$response3$data === void 0 ? void 0 : _ex$response3$data.message) || (ex === null || ex === void 0 ? void 0 : ex.message) || (ex === null || ex === void 0 ? void 0 : ex.toString()) || defaultMessage;
    }
  }, {
    key: "createDefaultMessage",
    value: function createDefaultMessage(metaMessage) {
      var metaType = _typeof(metaMessage);
      var suffix = metaType === "string" || metaType === "number" || metaType === "boolean" ? "(" + metaMessage.toString() + ")" : metaType === "object" ? "(" + JSON.stringify(metaMessage) + ")" : "";
      return "An unknown error occurred" + (" " + suffix).trim();
    }
  }]);
  return ErrorModel;
}();
var _default = ErrorModel;
exports.default = _default;