"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonData = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DialogModal = /*#__PURE__*/function () {
  /**
   * Pops up, etc.
   * @param title - Title of the dialog
   * @param body - Body element or string of the dialog
   * @param buttons - Buttons to add to the dialog
   */
  function DialogModal(title, body, buttons) {
    _classCallCheck(this, DialogModal);
    var id = (Math.random() * 1000000).toString(36);
    this.continerId = "dialog-container-" + id;
    this.bodyId = (body === null || body === void 0 ? void 0 : body.id) || "dialog-body-" + id;
    this.width = null;
    this.title = title || "Alert";
    this.body = body || "Dialog v0.1";
    this.isComplete = false;
    this.buttons = buttons;
    this.container = document.createElement("div");
    this.container.className = DialogModal.containerClassName;
    this.container.id = this.continerId;
    this.onBackgroundDismiss = null;
    DialogModal.dialogs.push(this);
    if (DialogModal.isDebug) {
      if (DialogModal.isDebug) console.log("Created Dialog with ID: " + this.continerId);
    }
    this.onClose = function (sender) {
      if (DialogModal.isDebug) console.log("Dialog closed (default).");
    };
    DialogModal.instanceCount++;
    this.container.addEventListener("click", function (e) {
      e.stopPropagation();
      return false;
    });
    DialogModal.getBackground();
  }
  _createClass(DialogModal, [{
    key: "setWidth",
    value: function setWidth(width) {
      if (typeof width === "number") width = width.toString() + "px";
      if (typeof width !== "string") width = null;
      this.width = width;
      this.container.style.width = width;
    }
  }, {
    key: "completeAsync",
    value: function () {
      var _completeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
        var title,
          duration,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              title = _args.length > 1 && _args[1] !== undefined ? _args[1] : "Complete!";
              duration = _args.length > 2 && _args[2] !== undefined ? _args[2] : 2000;
              if (!this.isComplete) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", true);
            case 4:
              this.isComplete = true;
              _context.next = 7;
              return this.close(200, {
                removeBackground: false
              });
            case 7:
              return _context.abrupt("return", _context.sent);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function completeAsync(_x) {
        return _completeAsync.apply(this, arguments);
      }
      return completeAsync;
    }()
  }, {
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(onRender) {
        var _this = this;
        var duration,
          dialogClassName,
          d,
          bg,
          me,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              duration = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 200;
              dialogClassName = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : "";
              _context2.next = 4;
              return this.delay(1);
            case 4:
              // Allow for any DOM updates happening at the moment...

              if (typeof onRender === "number") {
                d = onRender;
                if (typeof duration === "function") {
                  onRender = duration;
                  duration = d;
                } else if (duration === 200 || typeof duration !== "number") {
                  duration = onRender;
                }
                onRender = null;
              }
              bg = DialogModal.getBackground(this);
              me = this;
              DialogModal.addBackgroundListener(function (e) {
                e.stopPropagation();
                var rsp = typeof me.onBackgroundDismiss === 'function' ? me.onBackgroundDismiss(_this) : true;
                if (rsp !== false) me.close(200, "cancel");
              });

              // Add background blocker
              if (!(bg.parentElement === null)) {
                _context2.next = 14;
                break;
              }
              if (DialogModal.isDebug) console.log("Attaching background");
              document.body.appendChild(bg);
              _context2.next = 13;
              return this.delay(20);
            case 13:
              bg.className = "open";
            case 14:
              if (!(this.container.parentElement === null)) {
                _context2.next = 19;
                break;
              }
              if (DialogModal.isDebug) console.log("Attaching Container");
              bg.appendChild(this.container);
              _context2.next = 19;
              return this.delay(50);
            case 19:
              this.container.className = (DialogModal.containerClassName + " open " + dialogClassName).trim();
              if (typeof onRender === "function") onRender(this);
              return _context2.abrupt("return", this.container);
            case 22:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function open(_x2) {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this$container,
          _this2 = this;
        var duration,
          sender,
          x,
          noBackgroundRemoval,
          s,
          bg,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              duration = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 200;
              sender = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
              if ((_this$container = this.container) !== null && _this$container !== void 0 && _this$container.parentElement) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return", true);
            case 4:
              if (!(typeof this.onClose === "function")) {
                _context3.next = 8;
                break;
              }
              x = this.onClose(duration, sender || this);
              if (!(x === false)) {
                _context3.next = 8;
                break;
              }
              return _context3.abrupt("return", false);
            case 8:
              DialogModal.dialogs = DialogModal.dialogs.filter(function (x) {
                return x !== _this2;
              });
              noBackgroundRemoval = (sender === null || sender === void 0 ? void 0 : sender.removeBackground) === false; // Fade out the container
              //this.container.className = DialogModal.containerClassName + " closed"
              this.container.className = ((this.container.className || "").replace(" open", "") + " closed").trim();
              if (DialogModal.isDebug) console.log("Container Class: " + this.container.className);
              if (!(duration > 0)) {
                _context3.next = 15;
                break;
              }
              _context3.next = 15;
              return this.delay(duration * (noBackgroundRemoval ? 0.5 : 1));
            case 15:
              this.container.className = DialogModal.containerClassName;
              this.container.remove();
              if (!noBackgroundRemoval) {
                _context3.next = 23;
                break;
              }
              if (DialogModal.isDebug) console.warn("Not removing background.");
              DialogModal.addBackgroundListener(null);
              return _context3.abrupt("return", true);
            case 23:
              if (DialogModal.isDebug) {
                console.warn("Removing BG: " + duration);
              }
            case 24:
              if (!(DialogModal.dialogs.length > 0)) {
                _context3.next = 27;
                break;
              }
              if (DialogModal.isDebug) {
                s = DialogModal.dialogs.length === 1 ? "" : "s";
                console.warn("There are still " + DialogModal.dialogs.length + " dialog" + s + " open. Not closing background.");
              }
              return _context3.abrupt("return", true);
            case 27:
              // Then fade out the background
              bg = DialogModal.getBackground(this);
              DialogModal.addBackgroundListener(null);
              bg.className = "closed";
              _context3.next = 32;
              return this.delay(duration);
            case 32:
              bg.className = "";
              bg.remove();
              return _context3.abrupt("return", true);
            case 35:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function close() {
        return _close.apply(this, arguments);
      }
      return close;
    }()
    /**
     * Utility/Helper function to sleep a thread
     * @param {number} duration How long to delay in milliseconds
     * @returns A delayed promise
     */
  }, {
    key: "delay",
    value: function () {
      var _delay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var duration,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              duration = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 200;
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                setTimeout(function () {
                  resolve();
                }, duration);
              }));
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function delay() {
        return _delay.apply(this, arguments);
      }
      return delay;
    }()
    /**
     * Checks to see if a given variable is that of a React component (function class or JSX)
     * @param {object|any} component - The object in question
     * @returns {boolean}
     */
  }], [{
    key: "isReact",
    value: function isReact(component) {
      return _typeof(component === null || component === void 0 ? void 0 : component.key) === 'object' && _typeof(component.ref) === 'object' && _typeof(component.props) === 'object';
    }

    /**
     * Gets the background HTMLElement for the dialog. Creates it if it doesn't exist (assuming 'createIfEmpty' is true)
     * @param {boolean} createIfEmpty - Whether to create the background element if it doesn't exist
     * @returns {HTMLElement} The background element
     */
  }, {
    key: "getBackground",
    value: function getBackground() {
      var createIfEmpty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!DialogModal.background) {
        if (createIfEmpty === false) return null;
        DialogModal.background = document.createElement("div");
      }
      DialogModal.background.id = DialogModal.backgroundId;
      return DialogModal.background;
    }
  }, {
    key: "addBackgroundListener",
    value: function addBackgroundListener(onClick) {
      if (!DialogModal.background) throw new Error("No background to add a listener to");
      if (typeof DialogModal.backgroundListener === "function") {
        var _DialogModal$backgrou;
        if (DialogModal.isDebug) console.log("Removing existing listener...");
        (_DialogModal$backgrou = DialogModal.background) === null || _DialogModal$backgrou === void 0 ? void 0 : _DialogModal$backgrou.removeEventListener("click", DialogModal.backgroundListener);
      }
      if (typeof onClick === "function") {
        DialogModal.background.addEventListener("click", onClick);
        DialogModal.backgroundListener = onClick;
        return;
      }
      DialogModal.backgroundListener = null;
      if (DialogModal.isDebug) console.log("Removed background listener");
    }

    /**
     * Checks to see if the background element is attached to the document (parent element)
     * @returns {boolean} Whether the background element is attached to the document
     */
  }, {
    key: "isBackgroundAttached",
    value: function isBackgroundAttached() {
      var _DialogModal$getBackg;
      return ((_DialogModal$getBackg = DialogModal.getBackground(false)) === null || _DialogModal$getBackg === void 0 ? void 0 : _DialogModal$getBackg.parentElement) !== null;
    }

    /**
     * 
     * @param {string|object} caption - Caption of the button, or a React component
     * @param {string} id - Html Element id of the button
     * @param {function} onClick - Function to call when the button is clicked
     * @returns 
     */
  }, {
    key: "createButton",
    value: function createButton(caption, id, onClick) {
      if (typeof id === "function") {
        onClick = id;
        id = null;
      }
      if (!id || typeof id !== "string") id = "dialog-button-" + (Math.random() * 1000000).toString(36);
      var button = document.createElement("button");
      button.id = id;
      button.innerHTML = caption;
      button.className = "dialog-button";
      button.off();
      button.addEventListener("click", function (e) {
        if (typeof e.stopPropagation === "function") e.stopPropagation();
        if (typeof e.preventDefault === "function") e.preventDefault();
        if (typeof onClick === 'function') return onClick(e);
      });
      return button;
    }
  }]);
  return DialogModal;
}();
_defineProperty(DialogModal, "backgroundId", "main-dialog-background");
_defineProperty(DialogModal, "containerClassName", "dialog-container-element");
_defineProperty(DialogModal, "isDebug", process.env.NODE_ENV !== "production");
_defineProperty(DialogModal, "dialogs", []);
_defineProperty(DialogModal, "instanceCount", 0);
var ButtonData = /*#__PURE__*/function () {
  /**
   * Button metadata used to render a button in whatever way
   * @param caption {string|object} - Caption of the button, or a React component
   * @param className {string|null} - Html Element class name of the button
   * @param id { string|null } - Html Element Id of the button
   * @param onClick { function|null } - Function to call when the button is clicked. Can (should) be async
   * @param options { object|null } - Options for the button
   */
  function ButtonData(caption) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var onClick = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    _classCallCheck(this, ButtonData);
    this.id = id;
    this.className = className;
    this.caption = caption;
    this.onClick = onClick;
    this.key = (options === null || options === void 0 ? void 0 : options.key) || null;
    this.payload = options || null;
  }
  _createClass(ButtonData, null, [{
    key: "create",
    value: function create() {
      var _options$key;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (!args) return new ButtonData("Okay", "dialog-button", "dialog-show-button", function () {
        return true;
      });
      var isList = typeof (args === null || args === void 0 ? void 0 : args.length) === "number";
      var options = isList ? args[0] : args;
      if (Array.isArray(options)) {
        options.reverse();
        return options.map(function (o) {
          return ButtonData.create(o);
        });
      }
      if (options instanceof ButtonData) return options;
      if (typeof options === "function") return new ButtonData("Okay", "dialog-button", "dialog-show-button", options);else if (typeof options === "string") return new ButtonData(options, "dialog-button", "dialog-show-button", function () {
        return true;
      });
      if (_typeof(options) !== "object") {
        throw new Error("Invalid options for button data: " + _typeof(options));
      }
      if (_typeof(options.buttonData) === "object") return ButtonData.create(options.buttonData);
      var caption = typeof options.caption === "string" ? options.caption : "Okay";
      var className = typeof options.className === "string" ? options.className : "dialog-button";
      var id = typeof options.id === "string" ? options.id : "dialog-show-button";
      var onClick = typeof options.onClick === "function" ? options.onClick : function () {
        return console.log("No onClick function for button");
      };
      var key = ((_options$key = options.key) === null || _options$key === void 0 ? void 0 : _options$key.toString()) || null;
      return new ButtonData(caption, className, id, onClick, key);
    }
  }]);
  return ButtonData;
}();
exports.ButtonData = ButtonData;
var _default = DialogModal;
exports.default = _default;