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
var ModalMenuItem = /*#__PURE__*/function () {
  function ModalMenuItem(json) {
    _classCallCheck(this, ModalMenuItem);
    if (typeof json === "string") json = {
      label: json
    };
    if (!json) json = {};
    this.id = "modal-menu-item-" + Math.floor(Math.random() * 9999999999).toString(16);
    this.label = json.label || json.name || json.text || json.caption || null;
    this.data = json.data;
    this.onClick = typeof json.onClick === "function" ? json.onClick : null;
    this.href = json.href || null;
    this.id = "modal-menu-item-" + Math.floor(Math.random() * 9999999999).toString(16);
    this.index = typeof json.index === "number" ? json.index : -1;
  }
  _createClass(ModalMenuItem, [{
    key: "toElement",
    value: function toElement(owner) {
      var _options,
        _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (typeof document === "undefined") return null;
      if (typeof options === "number") options = {
        index: options
      };
      var index = ((_options = options) === null || _options === void 0 ? void 0 : _options.index) === "number" ? options.index : this.index;
      var div = document.createElement("div");
      div.id = this.id;
      if (index >= 0) div.index = index;
      if (!!this.label) {
        var link = document.createElement("a");
        link.className = "menu-item-link";
        link.href = options.href || "javascript:void(0);";
        link.innerHTML = this.label.toString();
        if (typeof this.onClick === "function") {
          link.addEventListener("click", function (e) {
            var result = _this.onClick(_this, e);
            if (result !== false && typeof (owner === null || owner === void 0 ? void 0 : owner.closeAsync) === "function") owner.closeAsync(e);
          });
        }
        div.className = "menu-item";
        div.appendChild(link);
      } else {
        div.className = "menu-item separator";
        div.innerHTML = "&nbsp;";
      }
      if (!!this.href) div.href = this.href;
      return div;
    }
  }]);
  return ModalMenuItem;
}();
var _default = ModalMenuItem;
exports.default = _default;