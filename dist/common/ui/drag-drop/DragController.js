"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DragController = /*#__PURE__*/function () {
  function DragController() {
    _classCallCheck(this, DragController);
    this.dataStore = {};
    this.lastKey = null;
  }
  _createClass(DragController, [{
    key: "setData",
    value: function setData(key, data) {
      if (!key) return false;
      if (typeof data === 'undefined') {
        data = key;
        key = DragController.defaultKey;
      } else if (typeof key !== 'string') {
        throw new Error("DragController.setData: Key must be a string");
      }
      this.lastKey = key;
      this.dataStore[key] = data;
      return !!this.dataStore[key];
    }
  }, {
    key: "getData",
    value: function getData(key) {
      if (!key) key = this.lastKey;
      return this.dataStore[key];
    }
  }, {
    key: "removeData",
    value: function removeData(key) {
      var refreshKey = this.lastKey === key;
      delete this.dataStore[key];
      if (refreshKey) {
        this.lastKey = null;
        for (var k in this.dataStore) {
          this.lastKey = k;
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      console.warn("DATA CLEARED:");
      delete this.dataStore;
      this.dataStore = {};
    }
  }]);
  return DragController;
}();
_defineProperty(DragController, "instance", new DragController());
_defineProperty(DragController, "defaultKey", "data");
var _default = DragController;
exports.default = _default;