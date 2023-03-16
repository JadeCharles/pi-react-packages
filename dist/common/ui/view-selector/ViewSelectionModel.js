"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @class Model that binds to ViewSelector component.
 * @param data {object|string} - The data to bind to the model. If this is a string, it will be the name field.
 * @param icon { IconDefinition|null } - The icon to display for the item.
 * @param id { string|null } - The id of the item.
 * @param index { number } - The index of the item within a broader list
 */
var ViewSelectionModel = /*#__PURE__*/function () {
  /**
   * Model that binds to ViewSelector component.
   * @param data {object|string} - The data to bind to the model. If this is a string, it will be the name field.
   * @param icon { IconDefinition|null } - The icon to display for the item.
   * @param id { string|null } - The id of the item.
   * @param index { number } - The index of the item within a broader list
   */
  function ViewSelectionModel(data) {
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
    _classCallCheck(this, ViewSelectionModel);
    if (_typeof(data) !== 'object') data = {
      name: data,
      icon: icon,
      id: id,
      index: index
    };
    this.icon = icon || data.icon || _freeSolidSvgIcons.faList;
    this.id = id || data.id || (Math.random() * 1000000).toString(36).toUpperCase();
    this.index = typeof index === 'number' ? index : typeof data.index === 'number' ? data.index : -1;
    this.name = data.name || "Item: " + (this.index + 1).toString();
  }
  _createClass(ViewSelectionModel, null, [{
    key: "cleanItems",
    value: function cleanItems(items) {
      var minItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      if (!items || !Array.isArray(items)) {
        if (typeof minItems !== 'number' || minItems < 2) minItems = 2;
        if (minItems > 500) minItems = 2;
        items = new Array(minItems).fill("");
      }
      return items.map(function (item, i) {
        if (item instanceof ViewSelectionModel) {
          item.index = i;
          return item;
        }
        if (typeof item === 'string') return new ViewSelectionModel(item + "(string)", null, null, i);
        return new ViewSelectionModel(item + " (" + _typeof(item) + ")");
      });
    }
  }, {
    key: "cleanIndex",
    value: function cleanIndex(index, items) {
      var _index;
      if (typeof index !== 'number') index = parseInt(((_index = index) === null || _index === void 0 ? void 0 : _index.toString()) || "");
      if (isNaN(index) || !Array.isArray(items) || index >= items.length || index < 0) return 0;
      return index;
    }
  }]);
  return ViewSelectionModel;
}();
var _default = ViewSelectionModel;
exports.default = _default;