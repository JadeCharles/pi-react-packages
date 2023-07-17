"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CommentModel = _interopRequireDefault(require("../../messaging/models/CommentModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RouteUriModel = /*#__PURE__*/function () {
  function RouteUriModel(json) {
    _classCallCheck(this, RouteUriModel);
    if (!json) json = {};
    this.id = json.id || null;
    this.routeType = json.route_type || 0;
    this.routeTypeName = json.route_type_name || "";
    this.uri = json.uri || null;
    this.name = json.name || null;
    this.description = json.description || null;
    this.metaData = json.meta_data || null;
    this.comments = _CommentModel.default.fromJsonArray(json.comments);
    this.created = !!json.created ? new Date(json.created) : null;
    this.modified = !!json.modified ? new Date(json.modified) : null;
  }
  _createClass(RouteUriModel, [{
    key: "toJson",
    value: function toJson() {
      return {
        route_type: this.routeType,
        uri: this.uri,
        name: this.name,
        description: this.description,
        meta_data: this.metaData,
        comments: this.comments
      };
    }
  }, {
    key: "searchFor",
    value: function searchFor(term) {
      var _this$uri, _this$name, _this$description, _this$metaData, _this$id;
      if (typeof term === "number") term = term.toString();
      if (!term) return true;
      term = term.toLowerCase();
      if (((_this$uri = this.uri) === null || _this$uri === void 0 ? void 0 : _this$uri.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$name = this.name) === null || _this$name === void 0 ? void 0 : _this$name.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$description = this.description) === null || _this$description === void 0 ? void 0 : _this$description.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.toString().toLowerCase().indexOf(term)) >= 0) return true;
      return term === ((_this$id = this.id) === null || _this$id === void 0 ? void 0 : _this$id.toLowerCase());
    }
  }], [{
    key: "fromJsonArray",
    value: function fromJsonArray(jsonArray) {
      if (!jsonArray || !Array.isArray(jsonArray)) return [];
      return jsonArray.map(function (json) {
        return RouteUriModel.create(json);
      });
    }
  }]);
  return RouteUriModel;
}();
_defineProperty(RouteUriModel, "entityType", 27);
_defineProperty(RouteUriModel, "create", function (json) {
  return new RouteUriModel(json);
});
var _default = RouteUriModel;
exports.default = _default;