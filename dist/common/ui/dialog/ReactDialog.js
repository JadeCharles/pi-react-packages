"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ReactDialogConfig = void 0;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _DialogModal = _interopRequireWildcard(require("./DialogModal"));
var _FormButton = _interopRequireDefault(require("@jadecharles/pi-react-packages/dist/common/forms/FormButton"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ReactDialogConfig = /*#__PURE__*/_createClass(function ReactDialogConfig() {
  _classCallCheck(this, ReactDialogConfig);
});
exports.ReactDialogConfig = ReactDialogConfig;
_defineProperty(ReactDialogConfig, "transitionType", "ease");
_defineProperty(ReactDialogConfig, "transitionDuration", 200);
_defineProperty(ReactDialogConfig, "exitTransition", "ease");
_defineProperty(ReactDialogConfig, "enterTransition", "ease");
_defineProperty(ReactDialogConfig, "backgroundDuraction", 50);
_defineProperty(ReactDialogConfig, "backgroundColor", "rgba(0,0,0,0.8)");
var ReactDialog = /*#__PURE__*/function () {
  function ReactDialog() {
    _classCallCheck(this, ReactDialog);
  }
  _createClass(ReactDialog, null, [{
    key: "confirmAsync",
    value: //faGear;    //faCrosshairs, fa
    /**
     * Used for confirmation dialogs. When the okayButton is pressed it performs the action. Otherwise, it cancels out.
     * @param message {string}
     * @param title {string}
     * @param okayButtonData { ButtonData|function }
     * @param cancelButtonData { ButtonData|function }
     * @param otherButtonDataArray { [ButtonData] }
     * @param icon { object|null } - The icon to display in the dialog. Default is hand sparkle
     * @returns {Promise<DialogModal>}
     */
    function () {
      var _confirmAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
        var _otherButtonDataArray;
        var title,
          okayButtonData,
          cancelButtonData,
          otherButtonDataArray,
          icon,
          key,
          id,
          _id,
          buttonData,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              title = _args.length > 1 && _args[1] !== undefined ? _args[1] : "Confirm?";
              okayButtonData = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
              cancelButtonData = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
              otherButtonDataArray = _args.length > 4 && _args[4] !== undefined ? _args[4] : [];
              icon = _args.length > 5 && _args[5] !== undefined ? _args[5] : null;
              if (typeof title === "function") {
                if (!okayButtonData) okayButtonData = title;else if (!cancelButtonData) {
                  cancelButtonData = okayButtonData;
                  okayButtonData = title;
                } else if (!Array.isArray(otherButtonDataArray)) {
                  otherButtonDataArray = cancelButtonData;
                  cancelButtonData = okayButtonData;
                  okayButtonData = title;
                } else if (!icon) {
                  icon = otherButtonDataArray;
                  otherButtonDataArray = cancelButtonData;
                  cancelButtonData = okayButtonData;
                  okayButtonData = title;
                }
                title = "Confirm?";
              }
              if (okayButtonData) {
                _context.next = 8;
                break;
              }
              throw new Error("Button data or callback missing. Either include a callback function (preferably with an async method) or use getConfirmationAsync()");
            case 8:
              key = new Date().getTime().toString();
              if (typeof okayButtonData === 'function') {
                id = "dialog-confirm-okay-button-" + key;
                okayButtonData = new _DialogModal.ButtonData("Yes, Do it", "dialog-button confirm-dialog", id, okayButtonData);
              }
              if (typeof cancelButtonData === 'function' || !cancelButtonData) {
                _id = "dialog-confirm-cancel-button-" + key;
                cancelButtonData = new _DialogModal.ButtonData("Cancel", "dialog-button cancel confirm-dialog", _id, cancelButtonData);
              }
              buttonData = [okayButtonData, cancelButtonData];
              if (((_otherButtonDataArray = otherButtonDataArray) === null || _otherButtonDataArray === void 0 ? void 0 : _otherButtonDataArray.length) > 0) buttonData.push.apply(buttonData, _toConsumableArray(otherButtonDataArray));
              _context.next = 15;
              return ReactDialog.open(message, title, buttonData, "confirm", icon || ReactDialog.defaultConfirmIcon);
            case 15:
              return _context.abrupt("return", _context.sent);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function confirmAsync(_x) {
        return _confirmAsync.apply(this, arguments);
      }
      return confirmAsync;
    }()
  }, {
    key: "getConfirmationAsync",
    value: function () {
      var _getConfirmationAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(message) {
        var title,
          icon,
          okCaption,
          cancelCaption,
          id,
          okayButtonData,
          cancelButtonData,
          dialog,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              title = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "Confirm?";
              icon = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
              okCaption = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : "Okay";
              cancelCaption = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : "Cancel";
              id = Math.floor(Math.random() * 999999).toString(16);
              okayButtonData = new _DialogModal.ButtonData(okCaption || "Okay", "complete-dialog-button", "complete-button-" + id, function () {
                return true;
              });
              cancelButtonData = new _DialogModal.ButtonData(cancelCaption || "Cancel", "cancel-dialog-button", "cancel-button-" + id, function () {
                return true;
              });
              _context2.next = 9;
              return ReactDialog.open(message, title, [okayButtonData, cancelButtonData], "confirm", icon || ReactDialog.defaultConfirmIcon);
            case 9:
              dialog = _context2.sent;
              _context2.next = 12;
              return new Promise(function (resolve) {
                dialog.onClose = function (duration, sender) {
                  resolve(sender !== "cancel");
                };
              });
            case 12:
              return _context2.abrupt("return", _context2.sent);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getConfirmationAsync(_x2) {
        return _getConfirmationAsync.apply(this, arguments);
      }
      return getConfirmationAsync;
    }()
  }, {
    key: "completeAsync",
    value: function () {
      var _completeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(message) {
        var title,
          buttonData,
          bodyClassName,
          icon,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              title = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "Complete!";
              buttonData = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
              bodyClassName = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : null;
              icon = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : null;
              if (title === false) {
                title = "Complete!";
                buttonData = false;
              }
              if (buttonData === false) buttonData = null;else if (buttonData instanceof _DialogModal.default) {} else if (!buttonData) buttonData = function buttonData() {
                return true;
              };
              _context3.next = 8;
              return ReactDialog.openAsync(message, title, buttonData, bodyClassName || "completed", icon || ReactDialog.defaultCompleteIcon);
            case 8:
              return _context3.abrupt("return", _context3.sent);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function completeAsync(_x3) {
        return _completeAsync.apply(this, arguments);
      }
      return completeAsync;
    }()
  }, {
    key: "toastAsync",
    value: function () {
      var _toastAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(message) {
        var _options, _options2, _options3, _options4;
        var options,
          buttonData,
          title,
          d,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              if (!(!message && message !== 0)) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");
            case 3:
              if (typeof options === "number") {
                options = {
                  timeout: options
                };
              } else if (typeof options === "string") {
                options = {
                  title: options,
                  timeout: 0
                };
              }
              if (!options) options = {};
              if (!(options.timeout > 0)) options.timeout = ReactDialog.defaultToastTimeout;
              buttonData = (_options = options) === null || _options === void 0 ? void 0 : _options.buttonData;
              title = ((_options2 = options) === null || _options2 === void 0 ? void 0 : _options2.title) || null;
              _context4.next = 10;
              return ReactDialog.openAsync(message, title, buttonData, ((_options3 = options) === null || _options3 === void 0 ? void 0 : _options3.className) || "", ((_options4 = options) === null || _options4 === void 0 ? void 0 : _options4.icon) || null, "toast");
            case 10:
              d = _context4.sent;
              ReactDialog.toastQueue.push(d);
              if (options.timeout < 120) options.timeout *= 1000;
              setTimeout(function () {
                ReactDialog.toastQueue = ReactDialog.toastQueue.filter(function (x) {
                  return x !== d;
                });
                d.close(200, d);
              }, options.timeout);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function toastAsync(_x4) {
        return _toastAsync.apply(this, arguments);
      }
      return toastAsync;
    }()
  }, {
    key: "errorAsync",
    value: function () {
      var _errorAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(message) {
        var title,
          okayButtonData,
          icon,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              title = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : "Oops.";
              okayButtonData = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : null;
              icon = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : null;
              if (!okayButtonData) okayButtonData = function okayButtonData() {
                return true;
              };
              _context5.next = 6;
              return ReactDialog.openAsync(message, title, okayButtonData, "dialog-error", icon || ReactDialog.defaultErrorIcon, "error");
            case 6:
              return _context5.abrupt("return", _context5.sent);
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function errorAsync(_x5) {
        return _errorAsync.apply(this, arguments);
      }
      return errorAsync;
    }()
  }, {
    key: "activityAsync",
    value: function () {
      var _activityAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(message) {
        var _options5, _options6, _options7, _options8, _options9, _options10;
        var title,
          options,
          otherButtonDataArray,
          icon,
          backgroundDismiss,
          cancelButtonData,
          optionsType,
          d,
          onBgDismiss,
          oldOnBgDismiss,
          timeOut,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              title = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : "Processing...";
              options = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
              if (_typeof(message) == "object") {
                if (_typeof(options) !== "object") options = message;else options = _objectSpread(_objectSpread({}, message), options);
                if (typeof title !== "string") title = options.title || "Processing...";
                message = options.message || options.text || options.description || "Please wait...";
              }
              otherButtonDataArray = Array.isArray((_options5 = options) === null || _options5 === void 0 ? void 0 : _options5.otherButtonData) ? options.otherButtonData : [];
              icon = ((_options6 = options) === null || _options6 === void 0 ? void 0 : _options6.icon) || null;
              backgroundDismiss = ((_options7 = options) === null || _options7 === void 0 ? void 0 : _options7.backgroundDismiss) === true || ((_options8 = options) === null || _options8 === void 0 ? void 0 : _options8.bgDismiss) === true;
              cancelButtonData = ((_options9 = options) === null || _options9 === void 0 ? void 0 : _options9.cancelButtonData) || null;
              optionsType = _typeof(options);
              if (optionsType === "function" || optionsType === "string") {
                cancelButtonData = options;
                options = {};
              } else if (optionsType === "number") {
                options = {
                  timeout: options
                };
              }
              if (!!cancelButtonData) {
                if (typeof cancelButtonData === "function") cancelButtonData = new _DialogModal.ButtonData("Cancel", "dialog-button cancel", "dialog-activity-cancel-button", cancelButtonData);else if (typeof cancelButtonData === "string") cancelButtonData = new _DialogModal.ButtonData(cancelButtonData, "dialog-button cancel", "dialog-activity-cancel-button", function () {
                  return true;
                });else cancelButtonData = null;
                if (!!cancelButtonData) otherButtonDataArray.push(cancelButtonData);
              }
              _context6.next = 12;
              return ReactDialog.openAsync(message, title, otherButtonDataArray, "dialog-activity", icon || ReactDialog.defaultActivityIcon, "activity", false);
            case 12:
              d = _context6.sent;
              if (!backgroundDismiss) {
                _context6.next = 15;
                break;
              }
              return _context6.abrupt("return", d);
            case 15:
              onBgDismiss = function onBgDismiss(dialog) {
                //
              };
              if (typeof d.onBackgroundDismiss !== "function") d.onBackgroundDismiss = onBgDismiss;else {
                oldOnBgDismiss = d.onBackgroundDismiss;
                d.onBackgroundDismiss = function (dialog) {
                  if (oldOnBgDismiss(dialog) === false) return false;
                  return onBgDismiss(dialog);
                };
              }
              if (typeof ((_options10 = options) === null || _options10 === void 0 ? void 0 : _options10.timeout) === "number" && options.timeout > 0) {
                timeOut = ReactDialog.getMilisecondsTimeout(options);
                setTimeout(function () {
                  var _options11, _options12, _options13, _options14, _options15, _options16;
                  if (d.isComplete) return;
                  var result = typeof ((_options11 = options) === null || _options11 === void 0 ? void 0 : _options11.onTimeout) === "function" ? options.onTimeout(d) : true;
                  var timeoutOptions = ((_options12 = options) === null || _options12 === void 0 ? void 0 : _options12.timeoutOptions) || {
                    message: ((_options13 = options) === null || _options13 === void 0 ? void 0 : _options13.timeoutMessage) || "The operation timed out",
                    title: ((_options14 = options) === null || _options14 === void 0 ? void 0 : _options14.timeoutTitle) || "Error",
                    icon: ((_options15 = options) === null || _options15 === void 0 ? void 0 : _options15.timeoutIcon) || ReactDialog.defaultErrorIcon,
                    caption: ((_options16 = options) === null || _options16 === void 0 ? void 0 : _options16.timeoutCaption) || "Okay"
                  };
                  if (result !== false) d.toError(d, timeoutOptions);
                }, timeOut);
              }
              return _context6.abrupt("return", d);
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function activityAsync(_x6) {
        return _activityAsync.apply(this, arguments);
      }
      return activityAsync;
    }()
  }, {
    key: "showAsync",
    value: function () {
      var _showAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(body) {
        var buttonData,
          options,
          title,
          icon,
          buttonClassName,
          bodyClassName,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              buttonData = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : function () {
                return true;
              };
              options = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
              title = null;
              icon = null;
              buttonClassName = null;
              bodyClassName = null;
              if (_typeof(buttonData) === "object") {
                if (typeof buttonData.title === "string") title = buttonData.title;
                if (typeof buttonData.buttonClassName === "string") buttonClassName = buttonData.buttonClassName;else if (typeof buttonData.className === "string") buttonClassName = buttonData.className;
                if (_typeof(buttonData.icon) === "object") icon = buttonData.icon;
                if (typeof buttonData.bodyClassName === "string") bodyClassName = buttonData.bodyClassName;
              }
              buttonData = _DialogModal.ButtonData.create(buttonData);
              if (typeof options === "string") options = {
                bodyClassName: options
              };
              if (_typeof(options) !== "object") options = {};
              options.bodyClassName = bodyClassName;
              options.buttonClassName = buttonClassName;
              options.icon = icon;
              _context7.next = 15;
              return ReactDialog.openAsync(body, title, buttonData, options);
            case 15:
              return _context7.abrupt("return", _context7.sent);
            case 16:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function showAsync(_x7) {
        return _showAsync.apply(this, arguments);
      }
      return showAsync;
    }()
  }, {
    key: "completeActivityAsync",
    value: function () {
      var _completeActivityAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(activityDialog, message, title, options) {
        var _options18, _options19, _options20, _options21;
        var result, _options17, buttonData, d;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return activityDialog.completeAsync(message, options);
            case 2:
              result = _context8.sent;
              if (!(result === false)) {
                _context8.next = 5;
                break;
              }
              return _context8.abrupt("return", false);
            case 5:
              if (_typeof(title) === "object") {
                if (!options) options = _objectSpread({}, title);else options = _objectSpread(_objectSpread({}, title), options);
                title = (_options17 = options) === null || _options17 === void 0 ? void 0 : _options17.title;
              }
              buttonData = !!((_options18 = options) !== null && _options18 !== void 0 && _options18.buttonData) ? options.buttonData : function () {
                return true;
              };
              _context8.next = 9;
              return this.completeAsync(message, title = "Complete!", buttonData, ((_options19 = options) === null || _options19 === void 0 ? void 0 : _options19.className) || "complete", ((_options20 = options) === null || _options20 === void 0 ? void 0 : _options20.icon) || ReactDialog.defaultCompleteIcon);
            case 9:
              d = _context8.sent;
              if (typeof ((_options21 = options) === null || _options21 === void 0 ? void 0 : _options21.duration) === "number") {
                setTimeout(function () {
                  d.close(200, {});
                }, options.duration);
              }
              return _context8.abrupt("return", d);
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function completeActivityAsync(_x8, _x9, _x10, _x11) {
        return _completeActivityAsync.apply(this, arguments);
      }
      return completeActivityAsync;
    }()
  }, {
    key: "contextMenuAsync",
    value:
    /**
     * Opens a dialog with a position anchored to an element
     * @param {object|string} body - The body of the dialog
     * @param {HTMLE} anchorElement - The element to anchor the dialog to
     * @param {[ButtonData]|object} buttonData - The button data to use, or the options parameter
     * @param {object|null} options - The options to use { title, bodyClass, buttonClass, icon, placement, etc }
     * @returns 
     */
    function () {
      var _contextMenuAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(body, anchorElement) {
        var _anchorElement;
        var options,
          buttonData,
          event,
          title,
          _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              options = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : {};
              buttonData = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : [];
              event = null;
              if (_typeof((_anchorElement = anchorElement) === null || _anchorElement === void 0 ? void 0 : _anchorElement.target) === "object") {
                event = anchorElement;
                anchorElement = event.target;
              }
              if (anchorElement) {
                _context9.next = 6;
                break;
              }
              throw new Error("Context menu dialog is missing an anchor element.");
            case 6:
              if (_typeof(buttonData) === "object" && !Array.isArray(buttonData)) {
                if (options === {}) options = buttonData;else options = _objectSpread(_objectSpread({}, buttonData), options);
                buttonData = [];
              } else if (typeof buttonData === "function") {
                buttonData = [buttonData];
              } else {
                buttonData = [];
              }
              if (typeof options === "string") options = {
                placement: options
              };else if (_typeof(options) !== "object") options = {};
              title = typeof options.title === "string" ? options.title : null;
              options.anchorElement = anchorElement;
              options.bodyClass = "dialog-context-menu";
              _context9.next = 13;
              return ReactDialog.openAsync(body, title, buttonData, options);
            case 13:
              return _context9.abrupt("return", _context9.sent);
            case 14:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function contextMenuAsync(_x12, _x13) {
        return _contextMenuAsync.apply(this, arguments);
      }
      return contextMenuAsync;
    }()
    /**
     * Intended to dismiss the current activity dialog, and display an error message without closing the background
     * @param {DialogModal} activityDialog - The activity dialog to dismiss (usually because of timeout or server error)
     * @param {object|null} options - Options for the activity dialog.
     */
  }, {
    key: "activityErrorAsync",
    value: function () {
      var _activityErrorAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(activityDialog, message, options) {
        var _options23, _options24, _options25, _options26, _options27;
        var _options22, okayButtonData, title, d;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(_DialogModal.default.dialogs.length === 0)) {
                _context10.next = 3;
                break;
              }
              console.warn("You tried to call an activity error after all dialogs have been closed. This is likely because the dialog completed successfully before the timeout.");
              return _context10.abrupt("return");
            case 3:
              if (_typeof(message) === "object") {
                if (!options) options = _objectSpread({}, message);else options = _objectSpread(_objectSpread({}, message), options);
                message = (_options22 = options) === null || _options22 === void 0 ? void 0 : _options22.message;
              }
              if (!options) options = {};else if (typeof options === "string") options = {
                message: options
              };else if (typeof options === "function") options = {
                buttonData: options
              };
              if (typeof ((_options23 = options) === null || _options23 === void 0 ? void 0 : _options23.timeoutMessage) === "string" && !options.message) options.message = options.timeoutMessage;
              if (typeof ((_options24 = options) === null || _options24 === void 0 ? void 0 : _options24.timeoutCaption) === "string" && !options.caption) options.caption = options.timeoutCaption;
              if (typeof ((_options25 = options) === null || _options25 === void 0 ? void 0 : _options25.timeoutTitle) === "string" && !options.title) options.title = options.timeoutTitle;
              okayButtonData = options.buttonData instanceof _DialogModal.ButtonData ? options.buttonData : new _DialogModal.ButtonData(options.caption || options.label || options.buttonCaption || "Okay", "dialog-button cancel", "dialog-activity-error-okay-button", typeof options.buttonData === "function" ? options.buttonData : function () {
                return true;
              });
              if (!message) message = message || "Operation timed out";
              title = ((_options26 = options) === null || _options26 === void 0 ? void 0 : _options26.title) || "Oops";
              activityDialog.close(-1, {
                removeBackground: false
              });
              _context10.next = 14;
              return ReactDialog.openAsync(message, title, okayButtonData, "dialog-error", ((_options27 = options) === null || _options27 === void 0 ? void 0 : _options27.icon) || ReactDialog.defaultErrorIcon, "error");
            case 14:
              d = _context10.sent;
              return _context10.abrupt("return", d);
            case 16:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function activityErrorAsync(_x14, _x15, _x16) {
        return _activityErrorAsync.apply(this, arguments);
      }
      return activityErrorAsync;
    }()
  }, {
    key: "getMilisecondsTimeout",
    value: function getMilisecondsTimeout(options) {
      if ((options === null || options === void 0 ? void 0 : options.timeout) > 0) return options.timeout * (options.timeout < 1000 ? 1000 : 1);
      if ((options === null || options === void 0 ? void 0 : options.timeout) <= 0) options.timeout = null;
      if (typeof (options === null || options === void 0 ? void 0 : options.timeout) !== "number") {
        if (typeof (options === null || options === void 0 ? void 0 : options.timeoutSeconds) === "number" && _typeof(options === null || options === void 0 ? void 0 : options.timeoutSeconds) > 0) {
          options.timeout = options.timeoutSeconds * 1000;
        } else if (typeof (options === null || options === void 0 ? void 0 : options.timeoutMinutes) === "number" && _typeof(options === null || options === void 0 ? void 0 : options.timeoutMinutes) > 0) {
          options.timeout = options.timeoutMinutes * 1000 * 60;
        } else if (typeof (options === null || options === void 0 ? void 0 : options.timeoutMilliseconds) === "number" && _typeof(options === null || options === void 0 ? void 0 : options.timeoutMilliseconds) > 0) {
          options.timeout = options.timeoutMilliseconds;
          return options.timeout; // return early - no need to convert to milliseconds
        }
      }

      if (typeof (options === null || options === void 0 ? void 0 : options.onTimeout) === "function" && typeof options.timeout !== "number") options.timeout = 60;

      // Final fixing calculation
      if (options.timeout < 1000) options.timeout = options.timeout * 1000;
      return options === null || options === void 0 ? void 0 : options.timeout;
    }

    /**
     * Opens a dialog with the given properties and displays it
     * @param {string|object} message - The message to display in the dialog
     * @param {string} title - The title of the dialog
     * @param {ButtonData|[ButtonData]} buttonData - The button data to display in the dialog. Can be a single ButtonData object or an array of ButtonData objects. If this value is null or empty array, no buttons will appear
     * @param {string} bodyClassName - The class name to apply to the dialog body
     * @param {FontAwesomeIcon} icon - The icon to display in the dialog
     * @param {string} buttonClassName - The class name to apply to the Button Data
     * @param {boolean} backgroundDismissable - Whether or not the dialog can be dismissed by clicking the background
     * @returns 
     */
  }, {
    key: "openAsync",
    value: function () {
      var _openAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(message) {
        var title,
          buttonData,
          options,
          bodyClassName,
          icon,
          buttonClassName,
          backgroundDismissable,
          content,
          dialog,
          otherButtonData,
          cancelButtonData,
          okayButtonData,
          body,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              title = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : "Alert";
              buttonData = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : null;
              options = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : {};
              if (typeof options === "string" || !options) options = {
                bodyClassName: options
              };
              bodyClassName = options.bodyClassName || null;
              icon = (_args11.length <= 4 ? 0 : _args11.length - 4) > 0 ? _args11.length <= 4 ? undefined : _args11[4] : options.icon || null;
              buttonClassName = (_args11.length <= 4 ? 0 : _args11.length - 4) > 1 ? _args11.length <= 5 ? undefined : _args11[5] : options.buttonClassName || "";
              backgroundDismissable = (_args11.length <= 4 ? 0 : _args11.length - 4) > 2 ? _args11.length <= 6 ? undefined : _args11[6] : options.backgroundDismissable !== false;
              content = [];
              dialog = new _DialogModal.default();
              if (!!title) {
                if (!_DialogModal.default.isReact(title)) title = /*#__PURE__*/_react.default.createElement("h3", {
                  key: "content-key-title"
                }, title);else title = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
                  key: ""
                }, title);
                content.push(title);
              }
              otherButtonData = [];
              cancelButtonData = null;
              if (Array.isArray(buttonData)) {
                buttonData = buttonData.filter(function (b) {
                  return !!b;
                });
                if (buttonData.length === 0) buttonData = null;else if (buttonData.length === 1) buttonData = buttonData[0];else {
                  okayButtonData = buttonData[0];
                  cancelButtonData = buttonData[1];
                  buttonData.splice(0, 2);
                  otherButtonData = buttonData;
                  buttonData = okayButtonData;
                }
              }
              body = _DialogModal.default.isReact(message) ? message : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
                key: "content-key-body"
              }, message);
              content.push(body);
              content.push( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
                key: "content-key-buttons"
              }, ReactDialog.createButtonPanel(dialog, buttonData, cancelButtonData, otherButtonData)));
              dialog.body = /*#__PURE__*/_react.default.createElement("div", {
                className: ("dialog-container-body " + bodyClassName || "").trim()
              }, content);
              dialog.icon = icon;
              dialog.toError = function (message, options) {
                return ReactDialog.activityErrorAsync(dialog, message, options);
              };
              dialog.toCompleted = function (message, options) {
                return ReactDialog.activityCompletedAsync(dialog, message, options);
              };
              if (!backgroundDismissable) {
                dialog.onBackgroundDismiss = function (d) {
                  return false;
                };
              }
              options.duration = 200;
              options.className = bodyClassName;
              _context11.next = 26;
              return dialog.open(function (d) {
                if (!d.container || !d.body) {
                  var _message = "Failed to open dialog because no container or body was specified.";
                  console.warn(_message);
                  throw new Error(_message);
                }
                var root = _client.default.createRoot(d.container);
                root.render(ReactDialog.toReactBody(d.body));
              }, options);
            case 26:
              return _context11.abrupt("return", dialog);
            case 27:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function openAsync(_x17) {
        return _openAsync.apply(this, arguments);
      }
      return openAsync;
    }()
  }, {
    key: "createBody",
    value: function createBody(content) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (_DialogModal.default.isReact(content)) return content;
      var cn = className || "";
      return /*#__PURE__*/_react.default.createElement("div", {
        className: ("dialog-content " + cn).trim()
      }, /*#__PURE__*/_react.default.createElement("span", {
        key: "dialog-badge",
        className: "dialog-content-badge"
      }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: icon || _freeSolidSvgIcons.faCheckCircle
      }))), /*#__PURE__*/_react.default.createElement("span", {
        key: "dialog-content",
        className: "dialog-content-message"
      }, content === null || content === void 0 ? void 0 : content.toString()));
    }

    /**
     * Creates a button panel with a default button and optional cancel button
     * @param dialogModal { DialogModal } - The dialog modal to close when the button is clicked
     * @param okayButtonData { ButtonData|[ButtonData]|null }
     * @param cancelButtonData { ButtonData|null }
     * @param otherButtonDataArray { [ButtonData] | null } - Additional buttons, positioned on the left, running from left to right
     */
  }, {
    key: "createButtonPanel",
    value: function createButtonPanel(dialogModal) {
      var okayButtonData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var cancelButtonData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var otherButtonDataArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var renderer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      if (!okayButtonData) {
        //const id = "dialog-complete-okay-button-" + (new Date()).getTime().toString();
        //okayButtonData = new ButtonData("Okay", "complete-dialog-button", id, null);
      }
      if (typeof renderer !== "function") renderer = ReactDialog.renderButton;
      if (!!okayButtonData) okayButtonData.key = "ok";
      if (!!cancelButtonData) cancelButtonData.key = "cancel";
      var cancelButton = !!cancelButtonData ? renderer(dialogModal, cancelButtonData, "cancel-" + (Math.random() * 1000000).toString(36)) : null;
      var otherButtons = (otherButtonDataArray === null || otherButtonDataArray === void 0 ? void 0 : otherButtonDataArray.length) > 0 ? otherButtonDataArray.map(function (buttonData, i) {
        return renderer(dialogModal, buttonData, "dialog-buttons-" + i);
      }) : null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "buttons dialog-button-panel complete-dialog-button-panel"
      }, otherButtons, cancelButton, renderer(dialogModal, okayButtonData));
    }

    /**
     * Creates a react-rendered button from meta data
     * @param dialogModal { DialogModal } - The dialog modal to close when the button is clicked
     * @param buttonData { ButtonData } - The button data
     * @param key { string|null } - The key to use for the button array rendering
     */
  }, {
    key: "renderButton",
    value: function renderButton(dialogModal, buttonData) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!dialogModal || !buttonData) return null;
      var onClick = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e) {
          var rsp, result;
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
              case 0:
                rsp = typeof buttonData.onClick === 'function' ? buttonData.onClick(e) : null;
                if (!(typeof (rsp === null || rsp === void 0 ? void 0 : rsp.then) === 'function')) {
                  _context12.next = 7;
                  break;
                }
                _context12.next = 4;
                return rsp;
              case 4:
                _context12.t0 = _context12.sent;
                _context12.next = 8;
                break;
              case 7:
                _context12.t0 = rsp;
              case 8:
                result = _context12.t0;
                if (!(result === false)) {
                  _context12.next = 11;
                  break;
                }
                return _context12.abrupt("return", result);
              case 11:
                if (!dialogModal) {
                  _context12.next = 14;
                  break;
                }
                _context12.next = 14;
                return dialogModal.close(200, buttonData.key || key);
              case 14:
                return _context12.abrupt("return", result);
              case 15:
              case "end":
                return _context12.stop();
            }
          }, _callee12);
        }));
        return function onClick(_x18) {
          return _ref.apply(this, arguments);
        };
      }();
      if ((key === null || key === void 0 ? void 0 : key.startsWith("cancel-")) === true) return /*#__PURE__*/_react.default.createElement("button", {
        key: key || "random-key-" + (Math.random() * 1000000).toString(36),
        className: ("dialog-button " + buttonData.className || "").trim(),
        id: buttonData.id || "",
        onClick: onClick
      }, buttonData.caption);
      return /*#__PURE__*/_react.default.createElement(_FormButton.default, {
        key: key || "random-key-" + (Math.random() * 1000000).toString(36),
        className: ("dialog-button " + buttonData.className || "").trim(),
        id: buttonData.id || "",
        onClick: onClick
      }, buttonData.caption);
    }

    /**
     * Converts a class to string or HTMLElement
     * @param {any} component - The component to convert to HTML
     * @returns {HTMLElement|string} the HTML string of the component
     */
  }, {
    key: "toHtml",
    value: function toHtml(component) {
      if (typeof component === 'string') return component;
      if (component instanceof HTMLElement) return component;
      if (_DialogModal.default.isReact(component)) return _react.ReactDOMServer.renderToString(component);
      return (component === null || component === void 0 ? void 0 : component.toString()) || "";
    }

    /**
     * Converts a class to a React component
     * @param {any} body - The component to convert to React
     * @returns {React.Component} the React component
     */
  }, {
    key: "toReactBody",
    value: function toReactBody(body) {
      if (body !== 0 && !body) return null;
      if (_DialogModal.default.isReact(body)) return body;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, body === null || body === void 0 ? void 0 : body.toString());
    }

    /**
     * Creates a DialogModal with the specified content and buttons. Then returns the dialog for later closing
     * @param message {string|object|null} - The message to display in the dialog. Can be a string or a React component
     * @param title {string|object|null} - Title of the dialog, or a React component
     * @param buttonData {ButtonData|[ButtonData]|null}
     * @param className {string|null} - The class name to apply to the dialog default body element
     * @param icon { object|null } - The icon to display in the dialog. Default is green checkmark
     * @returns {Promise<DialogModal>}
     */
  }, {
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(message) {
        var title,
          buttonData,
          className,
          icon,
          content,
          dialog,
          otherButtonData,
          cancelButtonData,
          okayButtonData,
          _args13 = arguments;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              title = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : "Alert";
              buttonData = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : null;
              className = _args13.length > 3 && _args13[3] !== undefined ? _args13[3] : null;
              icon = _args13.length > 4 && _args13[4] !== undefined ? _args13[4] : null;
              content = [];
              dialog = new _DialogModal.default();
              if (!!title) {
                if (!_DialogModal.default.isReact(title)) title = /*#__PURE__*/_react.default.createElement("h3", null, title);
                content.push(title);
              }
              otherButtonData = [];
              cancelButtonData = null;
              if (Array.isArray(buttonData)) {
                if (buttonData.length === 0) buttonData = null;else if (buttonData.length === 1) buttonData = buttonData[0];else {
                  okayButtonData = buttonData[0];
                  cancelButtonData = buttonData[1];
                  buttonData.splice(0, 2);
                  otherButtonData = buttonData;
                  buttonData = okayButtonData;
                }
              }
              content.push(ReactDialog.createBody(message, className, icon));
              content.push(ReactDialog.createButtonPanel(dialog, buttonData, cancelButtonData, otherButtonData));
              dialog.body = /*#__PURE__*/_react.default.createElement("div", {
                className: "complete-body"
              }, content);
              dialog.icon = icon;
              _context13.next = 16;
              return dialog.open(function (d) {
                if (!d.container || !d.body) {
                  console.warn("Failed to open dialog because no container or body was specified.");
                  return;
                }
                var root = _client.default.createRoot(d.container);
                root.render(ReactDialog.toReactBody(d.body));
              });
            case 16:
              return _context13.abrupt("return", dialog);
            case 17:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function open(_x19) {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "delay",
    value: function delay() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, duration);
      });
    }
  }]);
  return ReactDialog;
}();
_defineProperty(ReactDialog, "defaultActivityIcon", _freeSolidSvgIcons.faCompass);
_defineProperty(ReactDialog, "defaultErrorIcon", _freeSolidSvgIcons.faTriangleExclamation);
_defineProperty(ReactDialog, "defaultConfirmIcon", _freeSolidSvgIcons.faCircleQuestion);
_defineProperty(ReactDialog, "defaultCompleteIcon", _freeSolidSvgIcons.faHandsClapping);
_defineProperty(ReactDialog, "defaultToastTimeout", 4);
_defineProperty(ReactDialog, "toastQueue", []);
var _default = ReactDialog;
exports.default = _default;