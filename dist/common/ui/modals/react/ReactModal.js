"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Modal2 = _interopRequireDefault(require("../Modal"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ReactModal = /*#__PURE__*/function (_Modal) {
  _inherits(ReactModal, _Modal);
  var _super = _createSuper(ReactModal);
  function ReactModal(json) {
    var _this;
    _classCallCheck(this, ReactModal);
    if (!json) json = {};
    if (!json.modalType) json.modalType = "dialog";
    _this = _super.call(this, json);
    _this.reactBody = null;
    _this.defaultBackgroundClassName = (ReactModal.dialogBackgroundClassName + " " + _this.userClassName).trim();
    _this.backgroundClassName = _this.defaultBackgroundClassName;
    _this.onPreOpen = function (me, containerRect) {
      //
      return true;
    };
    return _this;
  }
  _createClass(ReactModal, [{
    key: "getToastPositionClassName",
    value: function getToastPositionClassName(options) {
      if (typeof (options === null || options === void 0 ? void 0 : options.positionClassName) === "string") return options.positionClassName;
      if (typeof (options === null || options === void 0 ? void 0 : options.placement) !== "string") {
        return "";
      }
      var placements = options.placement.trim().toLowerCase().split(" ");
      var cn = "";
      if (placements.includes("top")) cn += "top ";else if (placements.includes("bottom")) cn += "bottom ";else cn += "center ";
      return cn.trim();
    }
  }, {
    key: "openToastDialogAsync",
    value: function () {
      var _openToastDialogAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(content) {
        var _options;
        var options,
          duration,
          closeDuration,
          positionClassName,
          rsp,
          result,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              if (typeof options === "number") {
                options = {
                  duration: options
                };
              } else if (typeof options === "string") {
                options = {
                  placement: options
                };
              } else if (typeof options === "function") {
                options = {
                  onClose: options
                };
              } else if (_typeof(options) !== "object") {
                options = {};
              }
              if (typeof options.duration !== "number" || options.duration <= 0 || isNaN(options.duration)) options.duration = 13000;
              duration = options.duration;
              closeDuration = typeof options.closeDuration === "number" && options.closeDuration > 0 ? options.closeDuration : 1200;
              positionClassName = this.getToastPositionClassName(options);
              options.userClassName = ((options.userClassName || "") + " dialog toast " + positionClassName).trim();
              _context.next = 9;
              return this.openDialogAsync(content, options);
            case 9:
              _context.next = 11;
              return new Promise(function (resolve, reject) {
                setTimeout(function () {
                  resolve(true);
                }, duration);
              });
            case 11:
              if (typeof options.onBackgroundClick === "function") {
                this.onBackgroundClick = options.onBackgroundClick;
              } else {
                this.onBackgroundClick = null;
              }
              rsp = typeof options.onClose === "function" ? options.onClose() : null;
              if (!(typeof (rsp === null || rsp === void 0 ? void 0 : rsp.then) === "function")) {
                _context.next = 19;
                break;
              }
              _context.next = 16;
              return rsp;
            case 16:
              _context.t0 = _context.sent;
              _context.next = 20;
              break;
            case 19:
              _context.t0 = rsp;
            case 20:
              result = _context.t0;
              if (!(result === false)) {
                _context.next = 23;
                break;
              }
              return _context.abrupt("return", false);
            case 23:
              _context.next = 25;
              return this.closeAsync((_options = options) === null || _options === void 0 ? void 0 : _options.e, {
                duration: closeDuration
              });
            case 25:
              return _context.abrupt("return", true);
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function openToastDialogAsync(_x) {
        return _openToastDialogAsync.apply(this, arguments);
      }
      return openToastDialogAsync;
    }()
  }, {
    key: "toAlertAsync",
    value: function () {
      var _toAlertAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(content) {
        var options,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              _context2.next = 3;
              return this.closeContainerAsync(options, 0);
            case 3:
              if (typeof content === "string") content = /*#__PURE__*/_react.default.createElement("div", {
                className: "pi-dialog-alert-content"
              }, content);
              if (typeof options === "function") {
                options = {
                  onClick: options
                };
              } else if (_typeof(options) !== "object") {
                options = {};
              }
              options.icon = _freeSolidSvgIcons.faBell;
              _context2.next = 8;
              return this.openAlertDialogAsync(content, options);
            case 8:
              return _context2.abrupt("return", _context2.sent);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function toAlertAsync(_x2) {
        return _toAlertAsync.apply(this, arguments);
      }
      return toAlertAsync;
    }()
  }, {
    key: "toCompletedAsync",
    value: function () {
      var _toCompletedAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(content) {
        var options,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              _context3.next = 3;
              return this.closeContainerAsync(options, 0);
            case 3:
              // if (typeof content === "string")
              //     content = (<div className="pi-dialog-alert-content">{content}</div>);
              if (typeof options === "function") {
                options = {
                  onClick: options
                };
              } else if (_typeof(options) !== "object") {
                options = {};
              }
              options.icon = _freeSolidSvgIcons.faCircleCheck;
              if (typeof content === "string") {
                options.iconClassName = "complete";
                content = this.createRectIconContent(content, options, _freeSolidSvgIcons.faBell);
              }
              if (this.onBackgroundClick === _Modal2.default.suppressBackgroundClick) {
                this.onBackgroundClick = null;
              }
              _context3.next = 9;
              return this.openAlertDialogAsync(content, options);
            case 9:
              return _context3.abrupt("return", _context3.sent);
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function toCompletedAsync(_x3) {
        return _toCompletedAsync.apply(this, arguments);
      }
      return toCompletedAsync;
    }()
  }, {
    key: "toErrorAsync",
    value: function () {
      var _toErrorAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(content) {
        var options,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              _context4.next = 3;
              return this.closeContainerAsync(options, 0);
            case 3:
              if (typeof content === "string") content = /*#__PURE__*/_react.default.createElement("div", {
                className: "pi-dialog-error-content"
              }, content);
              if (typeof options === "function") {} else if (_typeof(options) !== "object") {
                options = {};
              }
              options.icon = _freeSolidSvgIcons.faSkull;
              if (!options.title) options.title = "Oops...";
              _context4.next = 9;
              return this.openAlertDialogAsync(content, options);
            case 9:
              return _context4.abrupt("return", _context4.sent);
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function toErrorAsync(_x4) {
        return _toErrorAsync.apply(this, arguments);
      }
      return toErrorAsync;
    }()
  }, {
    key: "openActivityAsync",
    value: function () {
      var _openActivityAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(content) {
        var options,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
              if (typeof options === "function") {
                options = {
                  onClick: options
                };
              } else if (typeof options === "string") {
                options = {
                  title: options
                };
              } else if (_typeof(options) !== "object") {
                options = {};
              }
              if (typeof options === "function") {
                options = {
                  onClick: options
                };
              } else if (_typeof(options) !== "object") {
                options = {};
              }
              if (!options.title) options.title = "Working...";
              if (!options.iconClassName) options.iconClassName = "pi-dialog-activity-icon";
              if (!options.icon) options.icon = _freeSolidSvgIcons.faGear;
              options.userClassName = "dialog working";
              this.onBackgroundClick = _Modal2.default.suppressBackgroundClick;
              if (typeof content === "string") {
                options.iconClassName = "activity";
                content = this.createRectIconContent(content, options, _freeSolidSvgIcons.faBell);
              }
              this.onBackgroundClick = _Modal2.default.suppressBackgroundClick;
              _context5.next = 12;
              return this.openDialogAsync(content, options, []);
            case 12:
              return _context5.abrupt("return", _context5.sent);
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function openActivityAsync(_x5) {
        return _openActivityAsync.apply(this, arguments);
      }
      return openActivityAsync;
    }()
  }, {
    key: "openAlertDialogAsync",
    value: function () {
      var _openAlertDialogAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(content) {
        var _this2 = this;
        var options,
          _len,
          args,
          _key,
          argType,
          okCaption,
          buttons,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
              if (typeof options === "function") {} else if (typeof options === "string") {
                options = {
                  title: options
                };
              } else if (_typeof(options) !== "object") {
                options = {};
              }
              for (_len = _args7.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = _args7[_key];
              }
              if ((args === null || args === void 0 ? void 0 : args.length) > 0) {
                argType = _typeof(args[0]);
                if (argType === "function") {
                  options.onClick = args[0];
                } else if (argType === "object" && typeof args[0].onClick === "function") {
                  options.onClick = args[0].onClick;
                }
              }
              okCaption = options.buttonCaption || "Okay";
              buttons = [{
                caption: okCaption,
                onClick: function () {
                  var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
                    var _options2;
                    var rsp, isAsync, result;
                    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                        case 0:
                          rsp = typeof ((_options2 = options) === null || _options2 === void 0 ? void 0 : _options2.onClick) === "function" ? options.onClick(e) : null;
                          isAsync = typeof (rsp === null || rsp === void 0 ? void 0 : rsp.then) === "function";
                          if (!isAsync) {
                            _context6.next = 8;
                            break;
                          }
                          _context6.next = 5;
                          return rsp;
                        case 5:
                          _context6.t0 = _context6.sent;
                          _context6.next = 9;
                          break;
                        case 8:
                          _context6.t0 = rsp;
                        case 9:
                          result = _context6.t0;
                          if (!(result === false)) {
                            _context6.next = 12;
                            break;
                          }
                          return _context6.abrupt("return", false);
                        case 12:
                          if (!isAsync) {
                            _context6.next = 17;
                            break;
                          }
                          _context6.next = 15;
                          return _this2.closeAsync(e);
                        case 15:
                          _context6.next = 18;
                          break;
                        case 17:
                          _this2.closeAsync(e);
                        case 18:
                          return _context6.abrupt("return", true);
                        case 19:
                        case "end":
                          return _context6.stop();
                      }
                    }, _callee6);
                  }));
                  function onClick(_x7) {
                    return _onClick.apply(this, arguments);
                  }
                  return onClick;
                }()
              }];
              options.userClassName = "dialog alert";
              if (typeof content === "string") {
                options.iconClassName = "alert";
                content = this.createRectIconContent(content, options, _freeSolidSvgIcons.faBell);
              }
              _context7.next = 10;
              return this.openDialogAsync(content, options, options.useButtons === false ? [] : buttons);
            case 10:
              return _context7.abrupt("return", _context7.sent);
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function openAlertDialogAsync(_x6) {
        return _openAlertDialogAsync.apply(this, arguments);
      }
      return openAlertDialogAsync;
    }()
  }, {
    key: "openConfirmDialogAsync",
    value: function () {
      var _openConfirmDialogAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(content, _onClick3) {
        var _this3 = this;
        var options,
          tmp,
          okCaption,
          cancelCaption,
          buttons,
          _args10 = arguments;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              options = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : {};
              // Ensure params
              if (typeof options === "function" && typeof _onClick3 !== "function") {
                tmp = _onClick3;
                _onClick3 = options;
                options = tmp;
              }
              if (typeof options === "string") {
                options = {
                  title: options
                };
              }
              okCaption = options.buttonCaption || "Okay";
              cancelCaption = options.cancelButtonCaption || "Cancel";
              buttons = [{
                caption: cancelCaption,
                onClick: function () {
                  var _onClick2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {
                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                      while (1) switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return _this3.closeAsync(e);
                        case 2:
                          return _context8.abrupt("return", _context8.sent);
                        case 3:
                        case "end":
                          return _context8.stop();
                      }
                    }, _callee8);
                  }));
                  function onClick(_x10) {
                    return _onClick2.apply(this, arguments);
                  }
                  return onClick;
                }(),
                isCancel: true
              }, {
                caption: okCaption,
                onClick: function () {
                  var _onClick4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e) {
                    var rsp, result;
                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                        case 0:
                          rsp = typeof _onClick3 === "function" ? _onClick3(e) : null;
                          if (!(typeof (rsp === null || rsp === void 0 ? void 0 : rsp.then) === "function")) {
                            _context9.next = 7;
                            break;
                          }
                          _context9.next = 4;
                          return rsp;
                        case 4:
                          _context9.t0 = _context9.sent;
                          _context9.next = 8;
                          break;
                        case 7:
                          _context9.t0 = rsp;
                        case 8:
                          result = _context9.t0;
                          if (!(result === false)) {
                            _context9.next = 11;
                            break;
                          }
                          return _context9.abrupt("return", false);
                        case 11:
                          return _context9.abrupt("return", _this3.closeAsync(e));
                        case 12:
                        case "end":
                          return _context9.stop();
                      }
                    }, _callee9);
                  }));
                  function onClick(_x11) {
                    return _onClick4.apply(this, arguments);
                  }
                  return onClick;
                }()
              }];
              options.userClassName = "dialog confirm";
              if (typeof content === "string") {
                options.frameClassName = "confirm";
                content = this.createRectIconContent(content, options, _freeSolidSvgIcons.faFaceSurprise);
              }
              _context10.next = 10;
              return this.openDialogAsync(content, options, buttons);
            case 10:
              return _context10.abrupt("return", _context10.sent);
            case 11:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function openConfirmDialogAsync(_x8, _x9) {
        return _openConfirmDialogAsync.apply(this, arguments);
      }
      return openConfirmDialogAsync;
    }()
  }, {
    key: "openFormDialogAsync",
    value: function () {
      var _openFormDialogAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(formElement, onClick) {
        var _this4 = this,
          _options3,
          _options4,
          _options5,
          _options6;
        var options,
          buttons,
          buttonText,
          buttonClassName,
          buttonElementId,
          labelElementId,
          submitButtonLabel,
          setButtonWorkingClass,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              options = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : {};
              if (!(typeof onClick !== "function")) {
                _context12.next = 3;
                break;
              }
              throw new Error("Invalid onClick function passed to openFormDialogAsync");
            case 3:
              if (ReactModal.isReact(formElement)) {
                _context12.next = 5;
                break;
              }
              throw new Error("Invalid formElement passed to openFormDialogAsync. Must be a react component.");
            case 5:
              if (typeof options === "string") {
                options = {
                  title: options
                };
              } else if (_typeof(options) !== "object") {
                options = {};
              }
              options.userClassName = ("dialog form " + (options.userClassName || "")).trim();
              if (options.close === null || options.close === undefined) options.close = true;
              if (options.backgroundCloses !== true) {
                this.onBackgroundClick = _Modal2.default.suppressBackgroundClick;
              }
              buttons = Array.isArray(options.buttons) ? options.buttons : [];
              if (_typeof(options.buttons) === "object" & !!options.buttons && !Array.isArray(options.buttons)) {
                buttons.push(options.buttons);
              }

              //const cancelClassName = "pi-modal-cancel-button";
              buttons.push( /*#__PURE__*/_react.default.createElement("button", {
                onClick: function onClick() {
                  return _this4.closeAsync();
                },
                className: "react-modal-button pi-modal-cancel-button cancel",
                key: "cancel-button"
              }, "Cancel"));
              buttonText = typeof ((_options3 = options) === null || _options3 === void 0 ? void 0 : _options3.buttonCaption) === "string" ? options.buttonCaption : "Submit";
              buttonClassName = "pi-modal-button";
              buttonElementId = "pi-modal-submit-button-" + new Date().getTime().toString(16);
              labelElementId = "pi-model-submit-button-label-" + new Date().getTime().toString(16);
              submitButtonLabel = !((_options4 = options) !== null && _options4 !== void 0 && _options4.buttonCaption) || typeof ((_options5 = options) === null || _options5 === void 0 ? void 0 : _options5.buttonCaption) === "string" ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
                id: labelElementId
              }, buttonText), /*#__PURE__*/_react.default.createElement("span", {
                className: "activity"
              }, /*#__PURE__*/_react.default.createElement("label", null))) : (_options6 = options) === null || _options6 === void 0 ? void 0 : _options6.buttonCaption;
              setButtonWorkingClass = function setButtonWorkingClass(cn) {
                var workingLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var buttonElement = document.getElementById(buttonElementId);
                var buttonLabel = document.getElementById(labelElementId);
                if (!buttonElement) return;
                if (typeof cn !== "string") cn = "";
                buttonElement.className = (buttonClassName + " " + cn).trim();
                if (!!buttonLabel) buttonLabel.innerText = workingLabel;
              };
              buttons.push( /*#__PURE__*/_react.default.createElement("button", {
                id: buttonElementId,
                className: "react-modal-button submit-button",
                key: "onClick-button",
                onClick: /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {
                    var _options7;
                    var rsp, isAsync, result;
                    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                      while (1) switch (_context11.prev = _context11.next) {
                        case 0:
                          console.log("Modal Button onClick:");
                          rsp = onClick(e);
                          isAsync = typeof (rsp === null || rsp === void 0 ? void 0 : rsp.then) === "function";
                          if (isAsync) setButtonWorkingClass("working", ((_options7 = options) === null || _options7 === void 0 ? void 0 : _options7.workingCaption) || "Processing");
                          if (!isAsync) {
                            _context11.next = 10;
                            break;
                          }
                          _context11.next = 7;
                          return rsp;
                        case 7:
                          _context11.t0 = _context11.sent;
                          _context11.next = 11;
                          break;
                        case 10:
                          _context11.t0 = rsp;
                        case 11:
                          result = _context11.t0;
                          if (isAsync) setButtonWorkingClass("", buttonText);
                          return _context11.abrupt("return", result);
                        case 14:
                        case "end":
                          return _context11.stop();
                      }
                    }, _callee11);
                  }));
                  return function (_x14) {
                    return _ref.apply(this, arguments);
                  };
                }()
              }, submitButtonLabel));
              _context12.next = 21;
              return this.openDialogAsync(formElement, options, buttons);
            case 21:
              return _context12.abrupt("return", _context12.sent);
            case 22:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function openFormDialogAsync(_x12, _x13) {
        return _openFormDialogAsync.apply(this, arguments);
      }
      return openFormDialogAsync;
    }()
  }, {
    key: "openDialogAsync",
    value: function () {
      var _openDialogAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(content) {
        var _this5 = this;
        var options,
          buttons,
          tmp,
          _tmp,
          _buttons,
          sections,
          reactButtons,
          body,
          _args13 = arguments;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              options = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
              buttons = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : [];
              content = /*#__PURE__*/_react.default.createElement("div", {
                className: "pi-modal-content"
              }, content);
              if (!Array.isArray(buttons) && Array.isArray(options)) {
                tmp = buttons;
                buttons = options;
                options = tmp || {};
              } else if (options === "function") {
                _tmp = options;
                options = buttons;
                buttons = _tmp || [];
              }
              if (typeof options.userClassName === "string") this.userClassName = options.userClassName;
              if (!this.userClassName) this.userClassName = "dialog";
              if (typeof buttons === "function" || !Array.isArray(buttons) && _typeof(buttons) === "object") buttons = [buttons];
              if (!Array.isArray(buttons)) buttons = [buttons].filter(function (b) {
                return !!b;
              });
              if (Array.isArray(options.buttons)) {
                (_buttons = buttons).append.apply(_buttons, _toConsumableArray(options.buttons));
              }
              if (!options) options = {};
              options.duration = 175;
              this.position = null;
              this.options = options;
              sections = [];
              if (options.close === true) {
                sections.push( /*#__PURE__*/_react.default.createElement("span", {
                  onClick: function onClick(e) {
                    return _this5.closeAsync(e);
                  },
                  className: "close-panel"
                }, "x"));
              } else if (ReactModal.isReact(options.close) || typeof options.close === "string" && options.close.length > 0) {
                sections.push( /*#__PURE__*/_react.default.createElement("span", {
                  onClick: function onClick(e) {
                    return _this5.closeAsync(e);
                  },
                  className: "close-panel"
                }, options.close));
              }
              if (typeof options.title === "string" || ReactModal.isReact(options.title)) sections.push( /*#__PURE__*/_react.default.createElement("h2", {
                className: "pi-modal-dialog-title"
              }, options.title));
              sections.push( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
                key: "body-key"
              }, content));
              reactButtons = buttons.map(function (button, index) {
                return _this5.createReactButton(button, "button-" + index);
              });
              if (reactButtons.length > 0) sections.push( /*#__PURE__*/_react.default.createElement("div", {
                key: "buttons-key",
                className: "pi-modal-buttons"
              }, reactButtons));
              body = /*#__PURE__*/_react.default.createElement("div", {
                className: "pi-modal-body"
              }, sections);
              _context13.next = 22;
              return _get(_getPrototypeOf(ReactModal.prototype), "openAsync", this).call(this, body, buttons);
            case 22:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function openDialogAsync(_x15) {
        return _openDialogAsync.apply(this, arguments);
      }
      return openDialogAsync;
    }()
  }, {
    key: "createRectIconContent",
    value: function createRectIconContent(content, options, defaultIcon) {
      var _options8;
      if (!options) options = {};
      var icon = ReactModal.isReact((_options8 = options) === null || _options8 === void 0 ? void 0 : _options8.icon) ? options.icon : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: options.icon || defaultIcon
      });
      var frameClassName = typeof options.iconClassName === "string" ? options.iconClassName : "";
      return /*#__PURE__*/_react.default.createElement("div", {
        className: ("pi-modal-dialog-frame " + frameClassName).trim()
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "pi-modal-dialog-icon"
      }, icon), /*#__PURE__*/_react.default.createElement("div", {
        className: "pi-modal-dialog-pp-content"
      }, content));
    }
  }, {
    key: "createReactButton",
    value: function createReactButton(button, key) {
      var _this6 = this;
      var caption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Okay";
      if (ReactModal.isReact(button)) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: key
      }, button);
      var isCancelButton = (button === null || button === void 0 ? void 0 : button.isCancel) === true;
      var cancelClassName = "pi-modal-cancel-button";
      var buttonClassName = "pi-modal-button";
      var buttonId = (button === null || button === void 0 ? void 0 : button.id) || "pi-modal-button-" + Math.floor(Math.random() * 99999999).toString(16);
      var setButtonWorkingClass = function setButtonWorkingClass(buttonElementId, cn) {
        var workingLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var buttonElement = document.getElementById(buttonElementId);
        if (!buttonElement) return;
        if (typeof cn !== "string") cn = "";
        var ccn = isCancelButton ? " " + cancelClassName : "";
        buttonElement.className = (buttonClassName + ccn + " " + cn).trim();
        if (!!workingLabel) buttonElement.innerText = workingLabel;
      };
      if (_typeof(button) === "object") {
        var props = _objectSpread({}, button);
        if (typeof props.className !== "string") props.className = "";
        props.className = (buttonClassName + " " + props.className).trim();
        if (isCancelButton === true) {
          props.className += " " + cancelClassName;
          delete props.isCancel;
        }
        var buttonCaption = props.children || props.caption || props.body || props.text || props.label || caption || "Okay";
        var workingCaption = !!props.workingCaption ? props.workingCaption : "Working...";
        props === null || props === void 0 ? true : delete props.workingCaption;
        if (props.id !== buttonId) props.id = buttonId;
        var clicker = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(e) {
            var rsp, isAsync, result;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  rsp = typeof props.onClick === "function" ? props.onClick(e) : null;
                  isAsync = typeof (rsp === null || rsp === void 0 ? void 0 : rsp.then) === "function";
                  if (isAsync && !isCancelButton) setButtonWorkingClass(buttonId, "working", workingCaption);
                  if (!isAsync) {
                    _context14.next = 9;
                    break;
                  }
                  _context14.next = 6;
                  return rsp;
                case 6:
                  _context14.t0 = _context14.sent;
                  _context14.next = 10;
                  break;
                case 9:
                  _context14.t0 = rsp;
                case 10:
                  result = _context14.t0;
                  if (isAsync && !isCancelButton) setButtonWorkingClass(buttonId, "", !!workingCaption ? buttonCaption : null);
                  if (!(result === false)) {
                    _context14.next = 14;
                    break;
                  }
                  return _context14.abrupt("return");
                case 14:
                  _context14.next = 16;
                  return _this6.closeAsync();
                case 16:
                case "end":
                  return _context14.stop();
              }
            }, _callee14);
          }));
          return function clicker(_x16) {
            return _ref2.apply(this, arguments);
          };
        }();
        return /*#__PURE__*/_react.default.createElement("button", _extends({
          key: key
        }, props, {
          onClick: clicker
        }), buttonCaption);
      }
      if (typeof button === "function") {
        var _clicker = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(e) {
            var rsp, isAsync, result;
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  rsp = button(e);
                  isAsync = typeof (rsp === null || rsp === void 0 ? void 0 : rsp.then) === "function";
                  if (isAsync) setButtonWorkingClass(buttonId, "working");
                  if (!isAsync) {
                    _context15.next = 9;
                    break;
                  }
                  _context15.next = 6;
                  return rsp;
                case 6:
                  _context15.t0 = _context15.sent;
                  _context15.next = 10;
                  break;
                case 9:
                  _context15.t0 = rsp;
                case 10:
                  result = _context15.t0;
                  if (!(result === false)) {
                    _context15.next = 13;
                    break;
                  }
                  return _context15.abrupt("return");
                case 13:
                  _context15.next = 15;
                  return _this6.closeAsync();
                case 15:
                case "end":
                  return _context15.stop();
              }
            }, _callee15);
          }));
          return function _clicker(_x17) {
            return _ref3.apply(this, arguments);
          };
        }();
        return /*#__PURE__*/_react.default.createElement("button", {
          key: key,
          onClick: _clicker
        }, caption || "Okay");
      }
      return /*#__PURE__*/_react.default.createElement("button", {
        key: key,
        onClick: this.closeAsync
      }, button);
    }
  }, {
    key: "setPlacement",
    value: function setPlacement(placement) {
      var emptyOk = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var placementTokens = typeof placement === "string" && placement.trim().length > 0 ? placement.split(" ").map(function (tok) {
        return tok.toLowerCase();
      }) : [];
      if (placementTokens.includes("top")) this.verticalPlacement = "top";else if (placementTokens.includes("bottom")) this.verticalPlacement = "bottom";else if (emptyOk) this.verticalPlacement = "";
      if (placementTokens.includes("left")) this.horizontalPlacement = "left";else if (placementTokens.includes("right")) this.horizontalPlacement = "right";else if (emptyOk) this.horizontalPlacement = "";
    }
  }, {
    key: "getPlacementClassName",
    value: function getPlacementClassName() {
      var className = "";
      if (this.verticalPlacement.length > 0) className += " " + this.verticalPlacement;
      if (this.horizontalPlacement.length > 0) className += " " + this.horizontalPlacement;
      return className.trim();
    }
  }, {
    key: "createContainerWithContent",
    value: function createContainerWithContent(content, buttons) {
      if (!!this.reactRoot) return;
      this.reactRoot = this.container;
      var container = this.getContainerElement();
      var defaultId = this.id + "-body";
      var durationStyle = {
        transitionDuration: _Modal2.default.transitionDurations.containerBody + "ms"
      };
      this.reactBody = ReactModal.toReactBody(content, defaultId, durationStyle);
      this.bodyElementId = this.reactBody.props.id;
      while (container.hasChildNodes()) container.removeChild(container.firstChild);
      var root = _client.default.createRoot(this.container);
      root.render(this.reactBody);
      return this.container;
    }
  }, {
    key: "openAsync",
    value: function () {
      var _openAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(content) {
        var buttons,
          _args16 = arguments;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              buttons = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : [];
              _context16.next = 3;
              return _get(_getPrototypeOf(ReactModal.prototype), "openAsync", this).call(this, content, buttons);
            case 3:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function openAsync(_x18) {
        return _openAsync.apply(this, arguments);
      }
      return openAsync;
    }()
    /**
     * Checks to see if a given variable is that of a React component (function class or JSX)
     * @param {object|any} component - The object in question
     * @returns {boolean}
     */
  }], [{
    key: "isReact",
    value: function isReact(component) {
      if (!component) return false;
      return typeof component.ref !== 'undefined' && _typeof(component.props) === 'object';
    }

    /**
     * Converts a class to a React component
     * @param {any} body - The component to convert to React
     * @returns {React.Component} the React component 
     */
  }, {
    key: "toReactBody",
    value: function toReactBody(body, elementId) {
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (body !== 0 && !body) return null;
      var elementType = "div";
      var props = {};
      if (ReactModal.isReact(body)) {
        var _props$id;
        props = _objectSpread({}, body.props);
        if (((_props$id = props.id) === null || _props$id === void 0 ? void 0 : _props$id.length) > 0) elementId = props.id;
        elementType = body.type;
        body = props.children;
        delete props.children;
        delete props.id;
      }
      if (typeof className !== "string") className = _Modal2.default.classes.body;
      props.id = elementId;
      props.className = ((props.className || "") + " " + className).trim();
      if (!!style) props.style = _objectSpread(_objectSpread({}, props.style), style);
      return /*#__PURE__*/_react.default.createElement(elementType, props, body);
    }
  }]);
  return ReactModal;
}(_Modal2.default);
_defineProperty(ReactModal, "dialogBackgroundClassName", "pi-modal-background");
var _default = ReactModal;
exports.default = _default;