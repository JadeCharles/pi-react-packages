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
var ErrorResponse = /*#__PURE__*/function () {
  function ErrorResponse(err) {
    var _err$response$data, _err$response, _err$response2;
    var defaultErrorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, ErrorResponse);
    var data = (_err$response$data = err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data) !== null && _err$response$data !== void 0 ? _err$response$data : {};
    this.message = data.message || defaultErrorMessage;
    this.code = data.error_code || 0;
    this.httpCode = (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.statusCode) || 500;
    this.objects = (data === null || data === void 0 ? void 0 : data.objects) || null;
    console.log('HttpCode: ' + this.httpCode);
  }
  _createClass(ErrorResponse, [{
    key: "toFormError",
    value: function toFormError() {
      var delimiter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ". ";
      var formError = {};
      if (!this.objects || !Array.isArray(this.objects)) {
        if (!!this.message) formError.general = this.message;
        return formError;
      }
      for (var i = 0; i < this.objects.length; i++) {
        var f = this.objects[i];
        if (f.field_name && f.message) {
          var msg = formError[f.field_name];
          if (!!msg) msg += delimiter + f.message;else msg = f.message;
          formError[f.field_name] = msg.trim();
        }
      }
      return formError;
    }
  }]);
  return ErrorResponse;
}();
var _default = ErrorResponse;
exports.default = _default;