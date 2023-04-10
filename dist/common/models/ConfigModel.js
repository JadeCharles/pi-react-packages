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
var ConfigModel = /*#__PURE__*/function () {
  function ConfigModel() {
    _classCallCheck(this, ConfigModel);
  }
  _createClass(ConfigModel, null, [{
    key: "init",
    value: function init(companyName, companyId, companyNumber) {
      var appName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var defaultProfileImageUrl = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      if (typeof companyName !== "string" || companyName.trim().length === 0) throw new Error("Invalid company name: " + companyName);
      if (typeof companyId !== "string" || companyId.length !== 36 || companyId === ConfigModel.emptyId) throw new Error("Invalid company id. Must be a valid Guid: " + companyId);
      if (typeof companyNumber !== "number" || companyNumber <= 0) throw new Error("Invalid company number. Must be a positive number: " + companyNumber);
      ConfigModel.companyId = companyId;
      ConfigModel.companyName = companyName;
      ConfigModel.appName = appName || companyName + " App";
      ConfigModel.companyNumber = companyNumber;
      ConfigModel.defaultProfileImageUrl = defaultProfileImageUrl;
    }
  }]);
  return ConfigModel;
}();
_defineProperty(ConfigModel, "companyId", "");
_defineProperty(ConfigModel, "companyName", "");
_defineProperty(ConfigModel, "appName", "");
_defineProperty(ConfigModel, "companyNumber", 0);
_defineProperty(ConfigModel, "defaultProfileImageUrl", "");
_defineProperty(ConfigModel, "defaultPageTitle", "Home Page");
_defineProperty(ConfigModel, "emptyId", "00000000-0000-0000-0000-000000000000");
_defineProperty(ConfigModel, "houseCompanyId", "A32B21B2-1A90-4ECA-AFAA-6E8A08C60EDD");
_defineProperty(ConfigModel, "houseUserId", "");
_defineProperty(ConfigModel, "isDebug", process.env.NODE_ENV !== "production");
_defineProperty(ConfigModel, "environment", process.env.NODE_ENV || "unknown");
_defineProperty(ConfigModel, "isProduction", function () {
  return ConfigModel.environment === "production";
});
var _default = ConfigModel;
exports.default = _default;