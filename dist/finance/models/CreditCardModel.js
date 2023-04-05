"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AddressModel = _interopRequireDefault(require("../../geo/models/AddressModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CreditCardModel = /*#__PURE__*/function () {
  function CreditCardModel(json) {
    var _json, _json$address, _json2, _json2$billing_addres;
    _classCallCheck(this, CreditCardModel);
    if (!json) json = {};
    this.name = json.name || json.cardholder_name || "";
    this.number = json.number || json.card_number || "";
    this.cvv = json.cvv || "";
    this.address = new _AddressModel.default(json.address || json.billing_address);
    if (!json) json = {};
    this.name = json.name || "";
    this.number = json.number || "";
    this.expirationMonth = json.exp_month || json.expiration_month || json.expires_month || "";
    if (this.expirationMonth.length === 1) this.expirationMonth = "0" + this.expirationMonth;
    if (this.expirationMonth.length !== 2 || isNaN(parseInt(this.expirationMonth))) this.expirationMonth = "";
    this.expirationYear = json.exp_year || json.expiration_year || json.expires_year || "";
    if (this.expirationYear.length === 2) this.expirationYear = "20" + this.expirationYear;
    if (this.expirationYear.length !== 4 || isNaN(parseInt(this.expirationYear))) this.expirationYear = "";
    this.expirationDate = (json.expiration_date || "").toString().replaceAll("/", "").replaceAll(" ", "").replaceAll("-", "").replaceAll(".", "");
    this.cvv = json.cvv || "";
    this.billingZip = json.zip || json.billing_zip || ((_json = json) === null || _json === void 0 ? void 0 : (_json$address = _json.address) === null || _json$address === void 0 ? void 0 : _json$address.billing_zip) || ((_json2 = json) === null || _json2 === void 0 ? void 0 : (_json2$billing_addres = _json2.billing_address) === null || _json2$billing_addres === void 0 ? void 0 : _json2$billing_addres.zip) || "";
    switch (this.expirationDate.length) {
      case 6:
        this.expirationMonth = this.expirationDate.substring(0, 2);
        this.expirationYear = this.expirationDate.substring(2, 6);
        break;
      case 5:
        this.expirationMonth = "0" + this.expirationDate.substring(0, 1);
        this.expirationYear = this.expirationDate.substring(1, 5);
        break;
      case 4:
        this.expirationMonth = this.expirationDate.substring(0, 2);
        this.expirationYear = "20" + this.expirationDate.substring(2, 4);
        break;
      case 3:
        this.expirationMonth = "0" + this.expirationDate.substring(0, 1);
        this.expirationYear = "20" + this.expirationDate.substring(1, 3);
        break;
      default:
        break;
    }
    this.expirationDate = this.expirationMonth + this.expirationYear;
  }
  _createClass(CreditCardModel, [{
    key: "toJson",
    value: function toJson() {
      return {
        number: this.number,
        name: this.name,
        expiration_month: this.expirationMonth,
        expiration_year: this.expirationYear,
        cvv: this.cvv,
        billing_zip: this.billingZip || null
      };
    }
  }]);
  return CreditCardModel;
}();
_defineProperty(CreditCardModel, "maestroPrefixes", ["5018", "5020", "5038", "5612", "5893", "6304", "6759", "6761", "6762", "6763", "0604", "6390"]);
var _default = CreditCardModel;
exports.default = _default;