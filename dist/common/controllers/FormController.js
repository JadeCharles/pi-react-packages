"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormController = /*#__PURE__*/function () {
  function FormController(id) {
    _classCallCheck(this, FormController);
    this.id = id || Math.floor(Math.random() * 999999999).toString(16) + "-" + new Date().getTime().toString(16);
    this.errors = {};
    this.callbacks = {};
    this.callbacks["main"] = function (options) {
      return {};
    };
  }
  _createClass(FormController, [{
    key: "getData",
    value: function getData(key) {
      if (typeof key !== "string") key = "main";
      return typeof this.callbacks[key] === "function" ? this.callbacks[key]() : null;
    }
  }, {
    key: "getErrors",
    value: function getErrors(key) {
      if (typeof key !== "string") key = "main";
      return _typeof(this.errors[key]) === "object" ? this.errors[key] : null;
    }
  }, {
    key: "setErrors",
    value: function setErrors(errorJson) {
      if (_typeof(errorJson) !== "object") throw new Error("FormController.setErrors: errorJson must be a valid error json object");
      var setCount = 0;
      for (var p in errorJson) {
        if (typeof p !== "string" || p.length === 0) continue;
        this.setError(p, errorJson[p] || "An unknown error occurred");
        setCount++;
      }
      return setCount > 0;
    }
  }, {
    key: "setError",
    value: function setError(key, message) {
      if (typeof key !== "string" || key.length === 0) throw new Error("Missing error key");
      if (typeof message !== "string") throw new Error("Error message must be a string");
      this.errors[key] = message || "An unknown error occurred";
    }
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "focusError",
    value: function focusError() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
      var field = null;
      for (var p in this.errors) {
        if (typeof p !== "string" || p.length === 0) continue;
        var element = document.getElementById(p);
        if (!element) element = document.querySelector('[name="' + p + '"]');
        if (!!element) {
          field = element;
          break;
        }
      }
      if (!field) return false;
      if (delay > 0) {
        setTimeout(function () {
          field.focus();
        }, delay);
        return true;
      }
      field.focus();
      return true;
    }
  }, {
    key: "setCallback",
    value: function setCallback(key, callback) {
      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (typeof key !== "string" || key.length === 0) throw new Error("Missing callback key");
      if (typeof callback !== "function") throw new Error("Callback must be a function");
      var exists = typeof this.callbacks[key] === "function";
      if (exists && !overwrite) {
        var message = "Callback already exists for FormController key: " + key + ". ";
        throw new Error(message + "Set overwrite to true to overwrite the existing callback for FormController with id: " + this.id);
      }
      var action = exists ? "Updated" : "Added";
      this.callbacks[key] = callback;
      console.log("FormController" + this.id + ": Callback " + action + " for key: " + key);
    }
  }, {
    key: "removeCallback",
    value: function removeCallback(key) {
      if (typeof key !== "string" || key.length === 0) return false;
      var success = typeof this.callbacks[key] === "function";
      delete this.callbacks[key];
      return success;
    }
  }, {
    key: "clearErrors",
    value: function clearErrors() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (typeof key !== "string") {
        this.errors = {};
        return true;
      }
      if (key.length === 0) return false;
      delete this.errors[key];
      return true;
    }
  }]);
  return FormController;
}();
var _default = FormController;
exports.default = _default;