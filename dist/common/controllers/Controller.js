"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Controller = /*#__PURE__*/function () {
  function Controller(props) {
    var _props,
      _props2,
      _props3,
      _props4,
      _props5,
      _props6,
      _props7,
      _props8,
      _this = this,
      _props9,
      _props10,
      _props11,
      _props12,
      _props13,
      _props14,
      _props15;
    _classCallCheck(this, Controller);
    if (typeof props === 'function') {
      props = {
        onClick: props
      };
    }
    var d = new Date();
    this.id = ((_props = props) === null || _props === void 0 ? void 0 : _props.id) || 'controller-' + Math.floor(Math.random() * 1000000).toString();
    this.userData = {};
    this.items = null;
    this.startDate = d.addDays(-7);
    this.endDate = d;
    this.setDates((_props2 = props) === null || _props2 === void 0 ? void 0 : _props2.startDate, (_props3 = props) === null || _props3 === void 0 ? void 0 : _props3.endDate);

    /**
     * @type {number}
     * @default 0
     * @public
     * @readonly
     * @description The current state of the controller (0=Default/Closed/No-Activity, 1=Open/Active/ActiveState, 2=Opening/Transitioning-to-active, 3=Closing/Transitioning-to-non-active, -1=Deleted, -2=Deleting, -3=Cancelling/Aborting Action)
     */
    this.state = 0;

    // Callbacks/Events
    this.onClick = typeof ((_props4 = props) === null || _props4 === void 0 ? void 0 : _props4.onClick) === 'function' ? props.onClick : function (e) {
      return false;
    };
    this.onChange = typeof ((_props5 = props) === null || _props5 === void 0 ? void 0 : _props5.onChange) === 'function' ? props.onChange : function (e) {
      return false;
    };
    this.onKeyPress = typeof ((_props6 = props) === null || _props6 === void 0 ? void 0 : _props6.onKeyPress) === 'function' ? props.onKeyPress : function (e) {
      return false;
    };
    this.onSubmit = typeof ((_props7 = props) === null || _props7 === void 0 ? void 0 : _props7.onSubmit) === 'function' ? props.onSubmit : function (e) {
      return false;
    };

    // Methods
    this.open = typeof ((_props8 = props) === null || _props8 === void 0 ? void 0 : _props8.open) === 'function' ? props.open : function (e) {
      return _this.setState(1);
    };
    this.close = typeof ((_props9 = props) === null || _props9 === void 0 ? void 0 : _props9.close) === 'function' ? props.close : function (e) {
      return _this.setState(0);
    };
    this.cancel = typeof ((_props10 = props) === null || _props10 === void 0 ? void 0 : _props10.cancel) === 'function' ? props.cancel : function (e) {
      return _this.setState(0);
    };
    this.submit = typeof ((_props11 = props) === null || _props11 === void 0 ? void 0 : _props11.submit) === 'function' ? props.submit : function (e) {
      return false;
    };
    this.update = typeof ((_props12 = props) === null || _props12 === void 0 ? void 0 : _props12.update) === 'function' ? props.update : function (e) {
      return false;
    };
    this.refresh = typeof ((_props13 = props) === null || _props13 === void 0 ? void 0 : _props13.refresh) === 'function' ? props.refresh : function (e) {
      return false;
    };
    this.delete = typeof ((_props14 = props) === null || _props14 === void 0 ? void 0 : _props14.refresh) === 'function' ? props.refresh : function (e) {
      return _this.setState(-1);
    };
    this.getData = typeof ((_props15 = props) === null || _props15 === void 0 ? void 0 : _props15.getData) === 'function' ? props.getData : function (options) {
      return null;
    };
    this.eventListeners = {};
  }
  _createClass(Controller, [{
    key: "addEventListener",
    value: function addEventListener(eventName, callback, options) {
      if (typeof eventName !== "string" || !eventName) throw new Error("Invalid event name");
      if (typeof callback !== "function") throw new Error("Invalid callback");
      var eventId = typeof options === "string" ? options : (options === null || options === void 0 ? void 0 : options.eventId) || "event-" + (Math.random() * 999999999).toString(16);
      if (_typeof(this.eventListeners[eventName]) !== "object" || this.eventListeners[eventName] === null) {
        this.eventListeners[eventName] = {};
      }
      this.eventListeners[eventName][eventId] = callback;
      return eventId;
    }
  }, {
    key: "raiseEvent",
    value: function raiseEvent(eventName, args) {
      if (!this.eventListeners[eventName]) return -1;
      var i = 0;
      for (var eventId in this.eventListeners[eventName]) {
        var callback = this.eventListeners[eventName][eventId];
        callback(args);
        i++;
      }
      return i;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      if (typeof state !== "number") throw new Error("Invalid state: " + state + ". Expected number.");
      var ret = true;
      if (state < -3 || state > 3) {
        ret = null;
        console.warn("Non-standard state passed to Controller.setState(" + state + ") (" + this.id + ")");
      }
      this.state = state;
      return ret;
    }
  }, {
    key: "setDate",
    value: function setDate(sd, ed) {
      this.setDates(sd, ed);
    }
  }, {
    key: "setDates",
    value: function setDates(sd, ed) {
      if (sd === null) this.startDate = null;else if (typeof sd !== "undefined") {
        var _sd;
        if (typeof sd === "string") sd = new Date(Date.parse(sd));
        if (typeof ((_sd = sd) === null || _sd === void 0 ? void 0 : _sd.getTime) !== "function" || isNaN(sd)) throw new Error("Invalid StartDate passed to controller.setDate(). Expected Date object.");
        this.startDate = sd;
      }
      if (ed === null) this.endDate = null;else if (typeof ed !== "undefined") {
        var _ed;
        if (typeof ed === "string") ed = new Date(Date.parse(ed));
        if (typeof ((_ed = ed) === null || _ed === void 0 ? void 0 : _ed.getTime) !== "function" || isNaN(ed)) throw new Error("Invalid StartDate passed to controller.setDate(). Expected Date object.");
        this.endDate = ed;
      }
    }
  }, {
    key: "setUserData",
    value: function setUserData(key, value) {
      this.userData[key] = value;
    }
  }, {
    key: "getUserData",
    value: function getUserData(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var val = this.userData[key];
      if (typeof val === 'undefined') return defaultValue;
      return val;
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      if (!Array.isArray(items) || items === null) {
        console.error("Invalid items passed to Controller.setItems(). Expected array.");
        return false;
      }
      this.items = items;
      return true;
    }
  }, {
    key: "setOpenCallback",
    value: function setOpenCallback(callback) {
      this.open = callback;
    }
  }, {
    key: "setCloseCallback",
    value: function setCloseCallback(callback) {
      this.close = callback;
    }

    /**
     * Copies text to the clipboard
     * @param text {string} - The text to copy
     * @returns {Promise<boolean>}
     */
  }], [{
    key: "copyText",
    value: function () {
      var _copyText = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(text) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.clipboard.writeText(text);
            case 3:
              console.log('Page Text: ' + text);
              return _context.abrupt("return", true);
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('Failed to copy: ', _context.t0);
              throw _context.t0;
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function copyText(_x) {
        return _copyText.apply(this, arguments);
      }
      return copyText;
    }()
  }]);
  return Controller;
}();
var _default = Controller;
exports.default = _default;