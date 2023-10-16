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
var PagerController = /*#__PURE__*/function () {
  function PagerController(options) {
    var _this = this;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var onPageClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, PagerController);
    if (options === null) options = {};
    if (typeof pageSize === 'function') {
      onPageClick = pageSize;
      pageSize = undefined;
    }
    if (typeof options === "function") {
      var tmp = onPageClick;
      onPageClick = options;
      options = _typeof(tmp) === "object" ? tmp : {};
      if (typeof tmp === 'number') pageSize = tmp;
    }
    if (_typeof(options) !== 'object') {
      if (typeof options === 'function') onPageClick = options;
      if (typeof options !== 'number') options = 0;
      options = {
        page: options
      };
    }
    if (typeof onPageClick !== 'function') {
      onPageClick = undefined;
    }
    if (typeof options.onPageClick !== 'function') options.onPageClick = onPageClick;
    if (typeof options.pageSize !== 'number') options.pageSize = pageSize;
    this.pagerRegistry = {};
    this.page = options.page || 0;
    this.pageViewCount = options.pageViewCount || PagerController.defaultPageViewCount;
    this.pageSize = options.pageSize || PagerController.defaultPageSize;
    this.onPageClick = options.onPageClick === null || typeof options.onPageClick !== 'function' ? function (e) {
      console.warn('No onPageClick');
    } : options.onPageClick;
    this.setCurrentPage = function (p) {
      _this.page = p;
      console.warn("Page was set by the controller, but no render update was called.");
      return true;
    };
  }
  _createClass(PagerController, [{
    key: "register",
    value: function register(pagerId, setFunction) {
      if (typeof setFunction !== "function") throw new Error("setFunction must be a function");
      if (!pagerId || typeof pagerId !== "string") throw new Error("Invalid Pager Id");
      this.pagerRegistry[pagerId] = setFunction;
      return true;
    }
  }, {
    key: "notify",
    value: function notify(page, senderId) {
      var count = 0;
      for (var pagerId in this.pagerRegistry) {
        if (pagerId === senderId) continue;
        var setPg = this.pagerRegistry[pagerId];
        setPg(page);
        count++;
      }
      return count;
    }
  }, {
    key: "mapLineItems",
    value: function mapLineItems(items, callback) {
      var results = [];
      if (!Array.isArray(items)) return results;
      if (typeof callback !== 'function') {
        throw new Error('Missing callback');
      }
      var start = this.page * this.pageSize;
      var end = Math.min(items.length, start + this.pageSize);
      for (var i = start; i < end; i++) {
        var item = callback(items[i], i);
        results.push(item);
      }
      return results;
    }
  }]);
  return PagerController;
}();
_defineProperty(PagerController, "defaultPageSize", 24);
_defineProperty(PagerController, "defaultPageViewCount", 2);
var _default = PagerController;
exports.default = _default;