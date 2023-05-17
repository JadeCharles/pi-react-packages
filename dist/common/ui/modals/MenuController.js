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
var MenuController = /*#__PURE__*/function () {
  function MenuController() {
    var _this = this;
    _classCallCheck(this, MenuController);
    this.state = 0;
    this.data = {};
    this.onMenuItemAdded = {};
    this.onStateChange = function (newState) {
      console.log("New State: " + newState);
    };
    this.open = function () {
      return _this.setState(1);
    };
    this.close = function () {
      return _this.setState(0);
    };
    this.toggle = function () {
      return _this.state === 0 ? _this.open() : _this.close();
    };
    this.setContent = function (content) {
      return null;
    };
  }
  _createClass(MenuController, [{
    key: "addMenuItem",
    value: function addMenuItem(item, key) {
      if (typeof key === "number") key = key.toString();else if (!key) key = null;else key = key.toString();
      if (typeof this.onMenuItemAdded[key] !== "function") return false;
      var result = this.onMenuItemAdded[key](item);
      return !!result && result !== false;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      if (typeof state !== "number") throw new Error("Invalid state. Number expected, but found '" + _typeof(state) + "'");
      var success = this.state !== state;
      this.state = state;
      if (success && typeof this.onStateChange === "function") {
        this.onStateChange(state);
      }
      return success;
    }
  }, {
    key: "setData",
    value: function setData(value) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (typeof key !== "string") key = "";
      if (key === "") {
        if (_typeof(value) !== "object") throw new Error("Invalid data. Object expected, but found '" + _typeof(value) + "'");
        this.data = value;
        return true;
      }
      if (_typeof(this.data) !== "object") this.data = {};
      this.data[key] = value;
      return true;
    }
  }, {
    key: "getData",
    value: function getData() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (typeof key !== "string") key = "";
      if (key === "") return this.data;
      var dat = this.data[key];
      if (typeof dat === "undefined") return defaultValue;
      return dat;
    }
  }]);
  return MenuController;
}();
var _default = MenuController;
exports.default = _default;