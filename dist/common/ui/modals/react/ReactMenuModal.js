"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ReactModal2 = _interopRequireDefault(require("./ReactModal"));
var _ReactModalMenuItem = _interopRequireDefault(require("./ReactModalMenuItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
var ReactMenuModal = /*#__PURE__*/function (_ReactModal) {
  _inherits(ReactMenuModal, _ReactModal);
  var _super = _createSuper(ReactMenuModal);
  function ReactMenuModal(json) {
    var _this;
    _classCallCheck(this, ReactMenuModal);
    if (!json) json = {};
    json.modalType = "menu";
    json.position = {
      x: 0,
      y: 0,
      type: "menu"
    };
    _this = _super.call(this, json);
    _this.options = null;
    _this.anchor = null;
    _this.defaultBackgroundClassName = (ReactMenuModal.dialogBackgroundClassName + " " + _this.userClassName).trim();
    _this.backgroundClassName = _this.defaultBackgroundClassName;
    return _this;
  }
  _createClass(ReactMenuModal, [{
    key: "openAsync",
    value: function openAsync(content) {
      var buttons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return _get(_getPrototypeOf(ReactMenuModal.prototype), "openAsync", this).call(this, content, buttons);
    }
  }, {
    key: "openContextAsync",
    value:
    /**
     * Opens a context menu based on the mouse position
     * @param {HTMLEvent} mouseEvent - The click event 'e' from the mouse click
     * @param {[any]} items - An array of items to display in the menu. Each item can be a string or a React component (we will try to detive them from the type)
     * @param {object} options - An object with options for the menu
     * @returns {Promise}
     */
    function openContextAsync(mouseEvent) {
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!Array.isArray(items)) throw new Error("MenuModal.openContexAsync: items must be an array");
      if (!options) options = {};
      options.offset = "mouse";
      return this.openDropdownAsync(mouseEvent, items, options);
    }
  }, {
    key: "openFloaterAsync",
    value: function () {
      var _openFloaterAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sender) {
        var items,
          options,
          content,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              items = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
              options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              if (_typeof(options) !== "object") options = {};
              options.className = "menu floater";
              content = /*#__PURE__*/_react.default.createElement("div", null, this.createMenuItems(items));
              _context.next = 7;
              return this.openExpandableAsync(sender, content, options);
            case 7:
              return _context.abrupt("return", _context.sent);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function openFloaterAsync(_x) {
        return _openFloaterAsync.apply(this, arguments);
      }
      return openFloaterAsync;
    }()
  }, {
    key: "openDropdownAsync",
    value: function () {
      var _openDropdownAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sender) {
        var _options;
        var items,
          options,
          cn,
          content,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              items = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];
              options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
              if (_typeof(options) !== "object") options = {};
              cn = typeof ((_options = options) === null || _options === void 0 ? void 0 : _options.className) === "string" ? options.className : "";
              options.className = ("menu context " + cn).trim();
              options.placement = "bottom";
              if (!options.offsetY) options.offsetY = "bottom";
              if (Array.isArray(items)) {
                _context2.next = 9;
                break;
              }
              throw new Error("MenuModal.openContexAsync: items must be an array");
            case 9:
              content = /*#__PURE__*/_react.default.createElement("div", null, this.createMenuItems(items));
              _context2.next = 12;
              return this.openExpandableAsync(sender, content, options);
            case 12:
              return _context2.abrupt("return", _context2.sent);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function openDropdownAsync(_x2) {
        return _openDropdownAsync.apply(this, arguments);
      }
      return openDropdownAsync;
    }()
  }, {
    key: "openExpandableAsync",
    value: function () {
      var _openExpandableAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sender, content) {
        var _sender$currentTarget, _this$options;
        var options,
          placementClassName,
          anchorElement,
          anchorRect,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
              if (!this.hasTargetEvent(sender)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return", this);
            case 3:
              if (typeof (sender === null || sender === void 0 ? void 0 : sender.stopPropagation) === "function") sender.stopPropagation();
              if (typeof (sender === null || sender === void 0 ? void 0 : sender.preventDefault) === "function") sender.preventDefault();
              this.setPlacement(options === null || options === void 0 ? void 0 : options.placement);
              placementClassName = this.getPlacementClassName();
              this.userClassName = (((options === null || options === void 0 ? void 0 : options.className) || "") + " " + placementClassName).trim();
              anchorElement = sender === null || sender === void 0 ? void 0 : sender.currentTarget; //
              anchorRect = typeof (anchorElement === null || anchorElement === void 0 ? void 0 : anchorElement.getBoundingClientRect) === "function" ? sender === null || sender === void 0 ? void 0 : (_sender$currentTarget = sender.currentTarget) === null || _sender$currentTarget === void 0 ? void 0 : _sender$currentTarget.getBoundingClientRect() : null;
              if (anchorRect) {
                _context3.next = 12;
                break;
              }
              throw new Error("No anchor rectangle");
            case 12:
              this.options = options;
              this.anchor = anchorRect;
              if (((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.offset) === "mouse") {
                if (typeof (sender === null || sender === void 0 ? void 0 : sender.clientX) === "number") this.position.x = sender.clientX;
                if (typeof (sender === null || sender === void 0 ? void 0 : sender.clientY) === "number") this.position.y = sender.clientY;
              } else {
                // These positions get used in base.openAsync(), right before onPreOpen
                // ... This is because we may need to re-position the menu based on the size of the measured container
                this.position.x = anchorRect.left;
                this.position.y = anchorRect.top;
              }
              return _context3.abrupt("return", this.openAsync(content, []));
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function openExpandableAsync(_x3, _x4) {
        return _openExpandableAsync.apply(this, arguments);
      }
      return openExpandableAsync;
    }()
  }, {
    key: "getPlacementOffset",
    value:
    /**
     * This is for context menus or floater menus. The offset returned positions the container x/y relative to the anchor
     * @returns {{x: number, y: number}} - The offset to apply to the menu container
     */
    function getPlacementOffset() {
      var offset = {
        x: 0,
        y: 0
      };
      var me = this;
      if (!!me.options) {
        var _this$anchor;
        var placement = me.options.placement || "bottom left";
        var placementParts = placement.split(" ");
        if (typeof ((_this$anchor = this.anchor) === null || _this$anchor === void 0 ? void 0 : _this$anchor.width) === "number") {
          var _this$anchor2;
          if (placementParts.includes("right")) offset.x += this.anchor.width;else if (placementParts.includes("centered") || placementParts.includes("center")) offset.x += this.anchor.width / 2.0 - me.size.width / 2.0;
          if (!placementParts.includes("top")) offset.y += (_this$anchor2 = this.anchor) === null || _this$anchor2 === void 0 ? void 0 : _this$anchor2.height; // Default to bottom
          else if (placementParts.includes("centered") || placementParts.includes("middle")) offset.y += this.anchor.height / 2.0 - me.size.height / 2.0;
        }
      } else {
        me.options = {};
      }
      if (typeof me.options.offsetX === "number") offset.x += me.options.offsetX;else me.options.offsetX = 0;
      if (typeof me.options.offsetY === "number") offset.y += me.options.offsetY;else me.options.offsetY = 0;
      if (typeof document !== "undefined") {
        var documentWidth = document.body.clientWidth;
        var documentHeight = document.body.clientHeight;
        var overflow = me.position.x + offset.x - documentWidth;
        if (overflow > 0) offset.x -= overflow;
        overflow = me.position.y + me.size.height + offset.y - documentHeight;
        if (overflow > 0) offset.y -= overflow;
        overflow = -(me.position.x + offset.x);
        if (overflow > 0) offset.x += overflow;
        overflow = -(me.position.y + offset.y);
        if (overflow > 0) offset.y += overflow;
      }
      return offset;
    }

    /** Checks (recursively) to see if a given HTMLEvent has a target + target.onclick event. If one is found, then we typically don't want to open the menu.
     *  If returns true, then we want to generally abord the open behavior. */
  }, {
    key: "hasTargetEvent",
    value: function hasTargetEvent(e) {
      var _e$target, _e$nativeEvent, _e$nativeEvent$target;
      var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // if this is a direct click on the target, then we want to open the menu
      if (!!(e !== null && e !== void 0 && e.currentTarget) && e.currentTarget === (e === null || e === void 0 ? void 0 : e.target)) return false;

      // If we clicked on a form element, then we don't want to open the menu
      if (["input", "textarea", "select", "button"].includes(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.tagName.toLowerCase())) return true;

      // if this is a direct has a click event, then we don't want to open the menu
      if (typeof ((_e$nativeEvent = e.nativeEvent) === null || _e$nativeEvent === void 0 ? void 0 : (_e$nativeEvent$target = _e$nativeEvent.target) === null || _e$nativeEvent$target === void 0 ? void 0 : _e$nativeEvent$target.onclick) === "function") return true;
      if (!recursive) return false;
      var cur = e.target;
      while (!!cur && cur !== e.currentTarget) {
        var _cur, _e$target2, _cur2;
        if (typeof ((_cur = cur) === null || _cur === void 0 ? void 0 : _cur.onclick) === "function" || !!((_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.href)) return true;
        cur = (_cur2 = cur) === null || _cur2 === void 0 ? void 0 : _cur2.parentNode;
      }
      return false;
    }
  }, {
    key: "createMenuItems",
    value: function createMenuItems(items) {
      if (!Array.isArray(items)) throw new Error("MenuModal.createMenuItems: items must be an array");
      var me = this;
      var menuItems = items.map(function (item, i) {
        var json = _ReactModal2.default.isReact(item) ? {
          reactComponent: item
        } : item;
        var menuItem = new _ReactModalMenuItem.default(json);
        var element = menuItem.toElement(me, {
          index: i
        });
        return element;
      });
      return menuItems;
    }
  }, {
    key: "createReactMenuItems",
    value: function createReactMenuItems(items) {
      var _this2 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (_typeof(options) !== "object") throw new Error("Options must be an object");
      if (typeof options.defaultClassName !== "string") options.defaultClassName = "menu-item";
      if (options.persist !== true) options.onClick = function (e) {
        _get(_getPrototypeOf(ReactMenuModal.prototype), "closeAsync", _this2).call(_this2, e);
      };
      return (items === null || items === void 0 ? void 0 : items.map(function (item, index) {
        return ReactMenuModal.createReactMenuItem(item, options.defaultClassName, "menu-" + index, options);
      })) || [];
    }
  }], [{
    key: "createReactMenuItem",
    value: function createReactMenuItem(item) {
      var defaultClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "menu-item";
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (typeof key !== "string" || key.length === 0) key = "menu-item-key-" + Math.floor(Math.random() * 99999999).toString(16).toLowerCase();
      if (item == null) return /*#__PURE__*/_react.default.createElement("div", {
        className: "menu-separator",
        key: key
      });
      if (ReactMenuModal.isReact(item)) {
        var newProps = _objectSpread({}, item.props);
        if (typeof (options === null || options === void 0 ? void 0 : options.onClick) === "function") {
          if (typeof newProps.className === "string") defaultClassName = (newProps.className + " " + defaultClassName).trim();
          newProps.className = defaultClassName;
          if (typeof newProps.onClick === "function") {
            var existing = newProps.onClick;
            newProps.onClick = function (e) {
              var r = existing(e);
              options.onClick(e);
              return r;
            };
          } else {
            newProps.onClick = options.onClick;
          }
        }
        var newItem = /*#__PURE__*/_react.default.cloneElement(item, newProps);
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
          key: key
        }, newItem);
      }
      var caption = item.name || item.caption || item.text || item.title || item.label || item.value || (item === null || item === void 0 ? void 0 : item.toString());
      var onClickHandler = typeof item.onClick === "function" ? item.onClick : undefined;
      var href = item.href || item.to || undefined;
      var props = {
        className: ((typeof item.className === "string" ? item.className : "") + " " + defaultClassName).trim(),
        href: href,
        onClick: onClickHandler,
        id: typeof item.id === "string" ? item.id : undefined
      };
      if (typeof item.elementType === "string") {
        props.key = key;
        return /*#__PURE__*/_react.default.createElement(item.elementType, props, caption);
      }
      props.title = "Href: " + (href || "NULL");
      var elementType = "a";
      var a = /*#__PURE__*/_react.default.createElement(elementType, {
        key: "menu-a-" + key,
        href: href
      }, caption);
      delete props.href;
      return /*#__PURE__*/_react.default.createElement("span", _extends({
        key: key
      }, props), a);
    }
  }]);
  return ReactMenuModal;
}(_ReactModal2.default);
_defineProperty(ReactMenuModal, "dialogBackgroundClassName", "pi-modal-background menu ");
var _default = ReactMenuModal;
exports.default = _default;