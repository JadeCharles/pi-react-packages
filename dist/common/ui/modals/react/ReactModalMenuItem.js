"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ModalMenuItem2 = _interopRequireDefault(require("../ModalMenuItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ReactModalMenuItem = /*#__PURE__*/function (_ModalMenuItem) {
  _inherits(ReactModalMenuItem, _ModalMenuItem);
  var _super = _createSuper(ReactModalMenuItem);
  function ReactModalMenuItem(json) {
    var _this;
    _classCallCheck(this, ReactModalMenuItem);
    _this = _super.call(this, json);
    _this.reactComponent = (json === null || json === void 0 ? void 0 : json.reactComponent) || null;
    return _this;
  }
  _createClass(ReactModalMenuItem, [{
    key: "toElement",
    value: function toElement(owner) {
      var _this2 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var onClickWrapper = function onClickWrapper(onClick, e) {
        var _e$target;
        console.warn("Click Wrap: " + ((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.tagName));
        var hasClose = typeof (owner === null || owner === void 0 ? void 0 : owner.closeAsync) === "function";
        if (typeof onClick !== "function") {
          if (hasClose) owner.closeAsync(e);
          return;
        }
        var result = onClick(_this2, e);
        if (result !== false) {
          // close menu
          if (hasClose) owner.closeAsync(e);
        }
      };
      if (!!this.reactComponent) {
        if (typeof this.reactComponent.type !== "undefined") {
          var elementType = this.reactComponent.type;
          var props = _objectSpread({}, this.reactComponent.props);
          var sourceOnClick = props === null || props === void 0 ? void 0 : props.onClick;
          var href = props.href || props.to;
          if (typeof href === "string" && elementType !== "a" && elementType !== "Link" && elementType !== "TransitionLink") {
            elementType = "a";
            props.href = href;
            delete props.to;
          }
          if (typeof (props === null || props === void 0 ? void 0 : props.onClick) === "function" && !href) props.onClick = function (e) {
            return onClickWrapper(sourceOnClick, e);
          };
          return /*#__PURE__*/_react.default.createElement(elementType, props, this.reactComponent.props.children);
        } else {
          console.warn("React Component Type is undefined");
        }
        return this.reactComponent;
        // let props = { ...this.reactComponent.props };
        // const hasOnClick = typeof props?.onClick === "function";

        // const originalOnClick = hasOnClick ? props?.onClick : (e) => {
        //     console.log("Toast");
        //     owner.closeAsync(e);
        //     return true;
        // };

        // const body = props.children;
        // const elementType = body.type;

        // delete props.onClick;

        // props.onClick = (e) => onClickWrapper(originalOnClick, e);

        // const hasHref = typeof props?.href === "string";
        // console.warn("HasHref: " + hasHref + " | " + (typeof body.props?.href === "string"));

        // return React.createElement(elementType, props, body);

        //return React.cloneElement(this.reactComponent, { ...props });
      }

      var key = "menu-item-" + this.id;
      var cn = this.label === null ? " separator" : "";
      var className = "menu-item" + cn;
      var label = this.label === null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\xA0") : /*#__PURE__*/_react.default.createElement("a", {
        href: this.href,
        onClick: function onClick(e) {
          return onClickWrapper(_this2.onClick, e);
        }
      }, this.label, "!");
      return /*#__PURE__*/_react.default.createElement("div", {
        title: "Non-React",
        className: className,
        key: key
      }, label);
    }
  }]);
  return ReactModalMenuItem;
}(_ModalMenuItem2.default);
var _default = ReactModalMenuItem;
exports.default = _default;