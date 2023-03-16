"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ValidateModel = _interopRequireDefault(require("./ValidateModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator() {
    var _args$, _args$2;
    _classCallCheck(this, FormValidator);
    this.map = {};
    this.fields = [];
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    this.scrollAnchorPrefix = ((_args$ = args["0"]) === null || _args$ === void 0 ? void 0 : _args$.scrollAnchorPrefix) || args["0"] || "";
    this.scrollAnchorSuffix = ((_args$2 = args["0"]) === null || _args$2 === void 0 ? void 0 : _args$2.scrollAnchorSuffix) || args["1"] || "";
    this.onValidate = FormValidator.onDefaultValidate;
    this.isSet = false;
  }
  _createClass(FormValidator, [{
    key: "validate",
    value: function validate() {
      var isValid = true;
      if (this.fields.length === 0) {
        console.log("No fields to validate. Validation success.");
        return isValid;
      }
      var i = 0;
      for (i = 0; i < this.fields.length; i++) {
        var field = this.fields[i];
        if (!field.validate()) {
          console.warn("Field " + field.name + " is invalid (" + field.errorMessage + ")");
          isValid = false;
        }
        console.log("Validation[" + i + "]: " + field.name + " is " + (field.isValid() ? "valid" : "invalid"));
        console.log(JSON.stringify(field, null, 4));
      }
      console.warn("Fields Checked: " + this.fields.length);
      return isValid;
    }
  }, {
    key: "addRef",
    value: function addRef(fieldRef, elementId) {
      var _elementId;
      var errorMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var scrollAnchor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      //if (typeof document === "undefined") return fieldRef;
      if (_typeof(fieldRef) !== "object" || fieldRef === null) throw new Error("Invalid field type added: " + _typeof(fieldRef).toString());
      if (!elementId && typeof fieldRef.current === "string") elementId = FormValidator.createElementName(fieldRef.current);
      if (typeof name !== "string" || name.length === 0) name = FormValidator.createNameFromElementId(elementId);
      if (typeof errorMessage !== "string" || errorMessage.length === 0) errorMessage = name + " is invalid";
      var fieldJson = {
        name: name,
        ref: fieldRef,
        elementId: (_elementId = elementId) === null || _elementId === void 0 ? void 0 : _elementId.toString(),
        scrollAnchor: scrollAnchor,
        errorMessage: errorMessage
      };
      return this.add(new _ValidateModel.default(fieldJson));
    }
  }, {
    key: "add",
    value: function add(field) {
      var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (typeof document === "undefined") return field;
      if (!(field instanceof _ValidateModel.default)) throw new Error("Invalid field type added: " + _typeof(field).toString());
      if (_typeof(field) !== "object") {
        throw new Error("Invalid field type added: " + _typeof(field).toString());
      }
      if (!!this.map[field.elementId]) {
        if (overwrite === true) {
          delete this.map[field.elementId];
        } else return this.map[field.elementId];
      }
      if (typeof field.elementId !== "string" || field.elementId.length === 0) throw new Error("Could not add field " + field.name + ": elementId is invalid: " + field.elementId);
      var hasSuffix = this.scrollAnchorSuffix.length > 0;
      var hasPrefix = this.scrollAnchorPrefix.length > 0;
      if (hasPrefix && !field.scrollAnchor.startsWith(this.scrollAnchorPrefix)) field.scrollAnchor = this.scrollAnchorPrefix + field.scrollAnchor;
      if (hasSuffix && !field.scrollAnchor.endsWith(this.scrollAnchorSuffix)) field.scrollAnchor += this.scrollAnchorSuffix;
      this.map[field.elementId] = field;
      this.fields.push(field);
      this.isSet = true;
      return field;
    }
  }, {
    key: "createErrorJson",
    value: function createErrorJson() {
      var errorJson = {};
      for (var i = 0; i < this.fields.length; i++) {
        var _field$result;
        var field = this.fields[i];
        if (((_field$result = field.result) === null || _field$result === void 0 ? void 0 : _field$result.isValid) !== true) {
          errorJson[field.elementId] = field.errorMessage;
        }
      }
      return errorJson;
    }
  }, {
    key: "setDisabledById",
    value: function setDisabledById(elementId) {
      var isDisabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var target = this.getFieldByTarget(elementId);
      if (!target) return false;
      target.isDisabled = isDisabled;
      return true;
    }
  }, {
    key: "setEnabledById",
    value: function setEnabledById(elementId) {
      var isEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return this.setDisabledById(elementId, !isEnabled);
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var i = 0; i < this.fields.length; i++) {
        if (typeof this.fields[i].reset === "function") this.fields[i].reset();
      }
    }
  }, {
    key: "resetError",
    value: function resetError(elementId) {
      var _this$getFieldByTarge;
      if (!elementId || typeof elementId !== "string") return false;
      return ((_this$getFieldByTarge = this.getFieldByTarget(elementId)) === null || _this$getFieldByTarge === void 0 ? void 0 : _this$getFieldByTarge.reset()) === true;
    }
  }, {
    key: "getFirstInvalidField",
    value: function getFirstInvalidField() {
      return this.fields.find(function (field) {
        var _field$result2;
        return ((_field$result2 = field.result) === null || _field$result2 === void 0 ? void 0 : _field$result2.isValid) === false;
      });
    }
  }, {
    key: "getFieldByTarget",
    value: function getFieldByTarget(target) {
      var _target;
      var t = _typeof(target);
      if (t === "string") target = this.map[target];else if (t === "object" && typeof ((_target = target) === null || _target === void 0 ? void 0 : _target.elementId) === "string") target = this.map[target.elementId];else if (t === "number" && target >= 0 && target < this.fields.length) target = this.fields[target];
      return target;
    }
  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor(target) {
      var _target2;
      target = this.getFieldByTarget(target);
      if (typeof ((_target2 = target) === null || _target2 === void 0 ? void 0 : _target2.scrollToAnchor) === "function" && target !== this) {
        target.scrollToAnchor();
        return true;
      }
      return false;
    }
  }, {
    key: "getValidator",
    value: function getValidator(elementId) {
      if (typeof elementId !== "string" || elementId.length === 0) {
        return null;
      }
      var field = this.map[elementId];
      if (_typeof(field) !== "object" || field === null) {
        return null;
      }
      return field;
    }
  }], [{
    key: "createElementName",
    value: function createElementName(camelCaseName) {
      if (!camelCaseName) return "";
      return camelCaseName.replace(/([A-Z])/g, function ($1) {
        return "_" + $1.toLowerCase();
      });
    }
  }, {
    key: "createNameFromElementId",
    value: function createNameFromElementId(elementId) {
      if (!elementId) return "";
      var name = elementId.replace(/_([a-z])/g, function ($1) {
        return $1.toUpperCase().replace('_', ' ');
      });
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }, {
    key: "onDefaultValidate",
    value: function onDefaultValidate(fields, isValid) {
      if (isValid === true) console.log("All fields are valid.");else {
        // Print out all invalid fields, if any -- Debug for now
        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          if (!field.isValid()) console.warn("Field " + field.name + " is invalid: " + field.errorMessage);
        }
      }
    }
  }]);
  return FormValidator;
}();
var _default = FormValidator;
exports.default = _default;