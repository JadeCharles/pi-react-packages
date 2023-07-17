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
var PersonModel = /*#__PURE__*/function () {
  function PersonModel(json) {
    _classCallCheck(this, PersonModel);
    if (!json) json = {};
    this.id = json.id || "";
    this.imageUrl = json.image_url || "";
    this.firstName = json.first_name || "";
    this.lastName = json.last_name || "";
    this.email = json.email || "";
    this.phone = json.phone || "";
    this.companyId = json.company_id || "00000000-0000-0000-0000-000000000000";
    this.companyName = json.company_name || "";
    this.imageId = json.image_id || "";
    this.fullName = (this.firstName + ' ' + this.lastName).trim();
    this.userType = json.user_type || 0;
    this.userTypeName = json.user_type_name || "";
    this.created = !!json.created ? new Date(json.created) : null;
    this.modified = !!json.modified ? new Date(json.modified) : null;
  }
  _createClass(PersonModel, [{
    key: "searchFor",
    value: function searchFor(term) {
      var name = (this.firstName + " " + this.lastName).trim().toLowerCase();
      if (name.indexOf(term) >= 0) return true;
      if (this.email && this.email.toLowerCase().indexOf(term) >= 0) return true;
      if (this.companyName && this.companyName.toLowerCase().indexOf(term) >= 0) return true;
      return this.phone && this.phone.toLowerCase().indexOf(term) >= 0;
    }
  }], [{
    key: "fromJsonArray",
    value: function fromJsonArray(jsonArray) {
      if (!jsonArray || !Array.isArray(jsonArray)) return [];
      return jsonArray.map(function (x) {
        return PersonModel.create(x);
      });
    }
  }]);
  return PersonModel;
}();
_defineProperty(PersonModel, "create", function (json) {
  return new PersonModel(json);
});
var _default = PersonModel;
exports.default = _default;