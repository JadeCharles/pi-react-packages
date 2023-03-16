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
var SortController = /*#__PURE__*/function () {
  function SortController(field, mult) {
    _classCallCheck(this, SortController);
    this.mult = mult === 1 ? 1 : -1;
    this.field = field || "";
  }
  _createClass(SortController, [{
    key: "sortBy",
    value: function sortBy(field) {
      var m = field === this.field ? -1 : 1;
      console.warn("Sorting by " + field + " " + m);
      return new SortController(field, m * this.mult);
    }
  }, {
    key: "sort",
    value: function sort(items) {
      var _this = this;
      if (!items || !Array.isArray(items)) return items;
      items = items.sort(function (a, b) {
        var aVal = a[_this.field];
        var bVal = b[_this.field];
        if (typeof aVal === "string") {
          aVal = aVal.toLowerCase();
          bVal = bVal.toLowerCase();
        }
        if (aVal < bVal) return -1 * _this.mult;
        if (aVal > bVal) return _this.mult;
        return 0;
      });
      return items;
    }
  }]);
  return SortController;
}();
var _default = SortController;
exports.default = _default;