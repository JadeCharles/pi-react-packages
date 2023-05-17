"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AddressModel = _interopRequireDefault(require("../../geo/models/AddressModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
  }], [{
    key: "getCardNumberMask",
    value: function getCardNumberMask(number) {
      var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "*";
      if (!number || number.length < 4) return "";
      return "**** **** **** " + number.substr(number.length - 4);
    }
  }]);
  return CreditCardModel;
}();
_defineProperty(CreditCardModel, "maestroPrefixes", ["5018", "5020", "5038", "5612", "5893", "6304", "6759", "6761", "6762", "6763", "0604", "6390"]);
_defineProperty(CreditCardModel, "getConstraints", function (number) {
  var constraints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!constraints) constraints = {};
  if (!!number && number.length > 1) {
    var firstNumber = parseInt(number.substr(0, 1));
    var constraint = _objectSpread(_objectSpread({}, constraints), {}, {
      cvvLen: 3,
      numberLen: 16,
      cardType: firstNumber
    });
    if (!isNaN(firstNumber)) {
      switch (firstNumber) {
        case 4:
        case 6:
        case 5:
          return constraint;
        default:
          if (number.length < 4) {
            if (firstNumber === 3) {
              constraint.cvvLen = 4;
              constraint.numberLen = 15;
            }
            return constraint;
          }
      }
    }
    constraint.cardType = firstNumber;
    var s4 = number.substr(0, 4);
    if (CreditCardModel.maestroPrefixes.includes(s4)) {
      constraint.numberLen = 19;
    }
    if (firstNumber === 3) {
      var int3 = parseInt(number.substr(0, 3));
      var int2 = parseInt(number.substr(0, 2));
      if (s4 === "3095") constraint.cardType = 13;
      if (int3 >= 300 && int3 <= 305) constraint.cardType = 13;
      if (int3 >= 360 && int3 <= 369) constraint.cardType = 13;
      //if (int2 == 37 || int2 == 38 || int2 == 39) return CreditCardTypeEnum.DinersClub;
      if (int2 === 30 || int2 === 38 || int2 === 39) constraint.cardType = 13;
      if (constraint.cardType === 3) {
        constraint.cvvLen = 4;
        constraint.numberLen = 15;
      }
    }
    return constraint;
  }
});
var _default = CreditCardModel;
exports.default = _default;