"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _PersonModel = _interopRequireDefault(require("../../people/models/PersonModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CommentModel = /*#__PURE__*/function () {
  function CommentModel(json) {
    _classCallCheck(this, CommentModel);
    if (!json) json = {};
    this.id = json.id;
    this.userId = json.user_id;
    this.entityId = json.entity_id;
    this.entityType = json.entity_type;
    this.text = json.text;
    this.ipAddress = json.ip_address;
    this.user = _PersonModel.default.create(json.user);
    this.created = json.created;
    this.modified = json.modified;
    this.status = json.status || 0;
  }
  _createClass(CommentModel, [{
    key: "toJson",
    value: function toJson() {
      return {
        entity_id: this.entityId,
        entity_type: this.entityType,
        text: this.text
      };
    }
  }], [{
    key: "fromJsonArray",
    value: function fromJsonArray(jsonArray) {
      if (!jsonArray) return [];
      return jsonArray.map(function (json) {
        return CommentModel.create(json);
      });
    }
  }]);
  return CommentModel;
}();
_defineProperty(CommentModel, "entityType", 3);
_defineProperty(CommentModel, "create", function (json) {
  return new CommentModel(json);
});
var _default = CommentModel;
exports.default = _default;