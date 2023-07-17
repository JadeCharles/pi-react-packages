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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DocumentModel = /*#__PURE__*/function () {
  function DocumentModel(json) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    _classCallCheck(this, DocumentModel);
    if (!json) json = {};
    this.id = json.id || null;
    this.index = index;
    this.companyId = json.company_id || "";
    this.userId = json.user_id || "";
    this.name = json.name || "";
    this.description = json.description || "";
    this.content = json.content || "";
    this.contentType = json.content_type || "";
    this.contentTypeKey = json.content_type_key || "";
    this.uri = json.uri || "";
    this.fileName = json.file_name || "";
    this.fileSize = json.file_size;
    this.created = json.created ? new Date(json.created) : null;
    this.modified = json.modified ? new Date(json.modified) : null;
  }
  _createClass(DocumentModel, [{
    key: "toJson",
    value: function toJson() {
      return {
        name: this.name,
        description: this.description,
        uri: this.uri
      };
    }
  }, {
    key: "getFileSizeDisplay",
    value: function getFileSizeDisplay() {
      var sz = this.fileSize;
      if (!sz) return "0 bytes";
      if (sz > 1000000000) return (sz / 1000000000).formatNumber(2) + " GB";
      if (sz > 1000000) return (sz / 1000000).formatNumber(2) + " MB";
      if (sz > 1000) return (sz / 1000).formatNumber(2) + " KB";
      return sz.formatNumber(2) + " bytes";
    }
  }], [{
    key: "fromJsonArray",
    value: function fromJsonArray(jsonArray) {
      if (!jsonArray) return [];
      return jsonArray.map(function (json, index) {
        return new DocumentModel(json, index);
      });
    }
  }, {
    key: "getIconByContentType",
    value: function getIconByContentType(contentType) {}
  }]);
  return DocumentModel;
}();
_defineProperty(DocumentModel, "entityType", 25);
_defineProperty(DocumentModel, "icon", _freeSolidSvgIcons.faFolderOpen);
var _default = DocumentModel;
exports.default = _default;