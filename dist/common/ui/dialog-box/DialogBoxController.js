"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DialogBoxController = /*#__PURE__*/function () {
  function DialogBoxController(title, body) {
    _classCallCheck(this, DialogBoxController);
    this.title = title || "";
    this.body = body || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    this.id = Math.random().toString(36).substr(2, 9);
    this.payload = null;
    var me = this;
    this.open = null;
    this.close = function () {
      var keepPayload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (keepPayload !== true) me.payload = null;
    };
    this.onSubmit = function (item) {
      if (!!item) console.warn('Item was included, but the DialogBoxController.onSubmit(item) has not been implemented');else console.warn('The DialogBoxController.onSubmit(item) has not been implemented');
    };
  }
  _createClass(DialogBoxController, [{
    key: "setBody",
    value: function setBody(body) {
      this.body = body;
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.title = title;
    }
  }, {
    key: "setPayload",
    value: function setPayload(payload) {
      this.payload = payload;
    }
  }, {
    key: "setOpenCallback",
    value: function setOpenCallback(callback) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.open || force === true) {
        this.open = callback;
      }
    }
  }, {
    key: "setCloseCallback",
    value: function setCloseCallback(callback) {
      this.close = callback;
    }
  }, {
    key: "setSubmitCallback",
    value: function setSubmitCallback(callback) {
      this.onSubmit = callback;
    }
  }]);
  return DialogBoxController;
}();
var _default = DialogBoxController;
exports.default = _default;