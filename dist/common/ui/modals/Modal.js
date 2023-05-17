"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModalSize = exports.ModalPosition = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ModalSize = /*#__PURE__*/_createClass(
/**
 * Simple class to represent the size of a thing
 * @param {number} width - The width of the thing
 * @param {number} height - The height of the thing
 */
function ModalSize() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  _classCallCheck(this, ModalSize);
  this.width = width;
  this.height = height;
});
exports.ModalSize = ModalSize;
_defineProperty(ModalSize, "create", function (source) {
  var _source, _source2;
  var useNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof source === "number") source = {
    width: source,
    height: source
  };else if (_typeof(source) !== "object") source = {};
  if (typeof ((_source = source) === null || _source === void 0 ? void 0 : _source.width) === "number" && typeof ((_source2 = source) === null || _source2 === void 0 ? void 0 : _source2.height) === "number") return new ModalSize(source.width, source.height);
  return useNull === true ? null : new ModalSize(0, 0);
});
var ModalPosition = /*#__PURE__*/_createClass(
/**
 * Simple class to represent the position of a thing
 * @param {number} x - The x position of the thing
 * @param {number} y - The y position of the thing
 * @param {string} source - Type of position: mouse (spawns from mouse position), anchored (spawns from HTMLElement), dialog (floats, likely centered)
 */
function ModalPosition() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "default";
  _classCallCheck(this, ModalPosition);
  this.x = x;
  this.y = y;
  this.source = source;
});
exports.ModalPosition = ModalPosition;
_defineProperty(ModalPosition, "create", function (source) {
  var useNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var defaultSourceType = typeof source === "undefined" ? "dialog" : typeof source === "string" ? source : _typeof(source).toString().toLowerCase();
  if (typeof source === "number") source = {
    x: source,
    y: source,
    type: "number"
  };else if (_typeof(source) !== "object") source = {};
  if (!source.type) source.type = defaultSourceType;
  if (typeof source.x === "number" && typeof source.y === "number") return new ModalPosition(source.x, source.y, source.type);
  return useNull === true ? null : new ModalPosition(0, 0, source.type);
});
var Modal = /*#__PURE__*/function () {
  /**
   * @param {object} json - The JSON object to use to create the modal
   * @param {string} json.id - The id of the modal
   * @param {ModalPosition|object {x: number, y: number }|undefined} json.position - The position of the modal
   * @param {ModalSize|object {width: number, height: number }|undefined} json.size - The size of the modal
   */
  function Modal(json) {
    var _json, _json2;
    _classCallCheck(this, Modal);
    if (_typeof(json) !== "object") json = {};
    this.hasId = typeof json.id === "string" && json.id.length > 0;
    this.id = this.hasId ? json.id : "pi-modal-" + Math.floor(Math.random() * 1000000);
    this.containerId = this.id + "-container";
    this.container = null;
    this.state = 0;
    this.bodyElementId = typeof json.bodyElementId === "string" ? json.bodyElementId : null;
    this.userClassName = typeof json.className === "string" ? json.className : "";
    this.backgroundClassName = ((_json = json) === null || _json === void 0 ? void 0 : _json.backgroundClassName) || null;
    this.backgroundCloses = ((_json2 = json) === null || _json2 === void 0 ? void 0 : _json2.backgroundCloses) !== false;
    this.verticalPlacement = "";
    this.horizontalPlacement = "";
    this.onPreOpen = null;
    this.targetRect = null;

    /** The anchor position of the modal. Use style.transform.translateX/Y to move it from there */
    this.position = json.position instanceof ModalPosition ? json.position : ModalPosition.create(json.position);
    this.modalType = json.modalType || this.position.source;
    this.size = json.size instanceof ModalSize ? json.size : ModalSize.create(json.size);
    if (typeof this.userClassName !== "string") this.userClassName = "";
    console.log("Created '" + this.modalType + "' Modal: " + this.id);
  }
  _createClass(Modal, [{
    key: "openAsync",
    value: function () {
      var _openAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(content) {
        var _this$position, _this$position2, _this$options;
        var buttons,
          clickTime,
          summary,
          div,
          bg,
          durations,
          containerRect,
          offset,
          scrollOffset,
          x,
          _this$anchor,
          y,
          containerDuration,
          clickDiff,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              buttons = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
              clickTime = new Date().getTime();
              summary = "Opening with state: " + this.state;
              if (!this.hasId) {
                _context.next = 10;
                break;
              }
              div = document.getElementById(this.id);
              if (!div) {
                _context.next = 9;
                break;
              }
              throw new Error("Modal with id '" + this.id + "' already exists.");
            case 9:
              console.warn("HasId: " + this.id + " but no element found. Good.");
            case 10:
              if (!(this.state !== 0)) {
                _context.next = 13;
                break;
              }
              console.warn("State: " + this.state);
              throw new Error("Modal is in an invalid state to open: " + this.state);
            case 13:
              this.state = 2; // Opening...
              bg = Modal.getOrCreateBackgroundElement(); // Async function called syncronously
              // The background takes the lowest transition duration, so it's always opened first (or at least tied for first)
              if (!!bg) Modal.openBackgroundAsync(bg, this);
              durations = Modal.transitionDurations; // Create the container, which has the content appended to it
              this.container = this.createContainerWithContent(content, buttons);
              Modal.modalStack.push(this); // <--- This needs to happen IMMEDIATELY after setting this.container
              Modal.addDebugMessage("Modal Added to Stack (SetState: 2, ActualState: " + this.state + "): " + this.id);
              bg.appendChild(this.container);
              this.setContainerClassName("");
              _context.next = 24;
              return this.getContainerMeasurementAsync();
            case 24:
              containerRect = _context.sent;
              offset = this.getOptionsOffset();
              scrollOffset = this.getScrollOffset();
              this.size = new ModalSize(containerRect.width, containerRect.height);
              if (((_this$position = this.position) === null || _this$position === void 0 ? void 0 : _this$position.x) >= 0) {
                //if (this?.anchor?.width > 0) this.position.x += (this.anchor.width / 2.0) - (this.size.width / 2.0); // Centers horizontally
                x = this.position.x + offset.x + scrollOffset.x;
                this.container.style.left = Math.round(x) + "px";
              }
              if (((_this$position2 = this.position) === null || _this$position2 === void 0 ? void 0 : _this$position2.y) >= 0) {
                y = this.position.y + (offset.y + scrollOffset.y);
                if (!this.verticalPlacement && (this === null || this === void 0 ? void 0 : (_this$anchor = this.anchor) === null || _this$anchor === void 0 ? void 0 : _this$anchor.height) > 0) y += this.anchor.height / 2.0 - this.size.height / 2.0;else if (this.verticalPlacement === "top") {
                  y -= containerRect.height - this.anchor.height;
                }
                this.container.style.top = Math.round(y) + "px";
              }
              if (typeof this.onPreOpen === "function") this.onPreOpen(this, containerRect);
              containerDuration = typeof ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.duration) === "number" ? this.options.duration : durations.container;
              this.container.style.transitionDuration = containerDuration + "ms";
              this.setContainerClassName("opening");
              this.setBodyClassName("pi-open");
              summary += ", DURATION: " + containerDuration;
              _context.next = 38;
              return Modal.delay(containerDuration);
            case 38:
              if (!(this.state > 2 || this.state === 0)) {
                _context.next = 47;
                break;
              }
              // 3=closing, 0=closed/dead
              console.warn("Dialog did not open because the state is: " + this.state);
              if (!(this.state === 0)) {
                _context.next = 42;
                break;
              }
              return _context.abrupt("return", this);
            case 42:
              clickDiff = Modal.clickDifference;
              Modal.addDebugMessage("Modal was closed before it fully opened (ClickDiff: " + clickDiff + ", ExpetedState: 2, CurrentState: " + this.state + "): " + this.id, 2);
              this.state = 1;
              this.closeAsync(null, {
                duration: 200
              });
              return _context.abrupt("return", this);
            case 47:
              summary += ", Changing state from " + this.state + " to 1";
              this.state = 1; // Opened state.

              this.setContainerClassName("open");
              if (this.backgroundCloses) {
                _context.next = 53;
                break;
              }
              Modal.addDebugMessage("No Event: onBackgroundClick: " + this.id);
              return _context.abrupt("return", this);
            case 53:
              console.warn("Supposedly opened fine: " + summary);
              return _context.abrupt("return", this);
            case 55:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function openAsync(_x) {
        return _openAsync.apply(this, arguments);
      }
      return openAsync;
    }()
  }, {
    key: "closeContainerAsync",
    value: function () {
      var _closeContainerAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
        var state,
          durations,
          containerDuration,
          bodyElement,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              state = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
              if (_typeof(options) !== "object") options = {};
              durations = Modal.transitionDurations;
              containerDuration = typeof options.duration === "number" && options.duration > 0 ? options.duration : durations.container;
              this.container.style.transitionDuration = containerDuration + "ms";
              this.setContainerClassName("closing");
              _context2.next = 8;
              return Modal.delay(containerDuration);
            case 8:
              this.setContainerClassName("closed");
              _context2.next = 11;
              return Modal.delay(durations.tick);
            case 11:
              bodyElement = this.getBodyElement();
              if (!!(bodyElement !== null && bodyElement !== void 0 && bodyElement.parentNode)) bodyElement.remove();
              if (!!this.container) {
                if (!!this.container.parentNode) this.container.remove();
                this.container = null;
              }
              if (typeof state === "number") this.state = state;
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function closeContainerAsync(_x2) {
        return _closeContainerAsync.apply(this, arguments);
      }
      return closeContainerAsync;
    }()
  }, {
    key: "closeAsync",
    value: function () {
      var _closeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sender) {
        var options,
          bgStillOpening,
          popIndex,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
              if (!options) options = {};
              if (!(this.state === 0)) {
                _context3.next = 6;
                break;
              }
              Modal.addDebugMessage("closeAsync: Modal is already closed (state: 0): " + this.id);
              _context3.next = 9;
              break;
            case 6:
              if (!(this.state === 3)) {
                _context3.next = 9;
                break;
              }
              Modal.addDebugMessage("closeAsync: Modal is already closing (state: 3)... " + this.id);
              return _context3.abrupt("return");
            case 9:
              bgStillOpening = this.state === 2;
              if (bgStillOpening) {
                // Opening still...
                // Background is currently opening, so since we tried to close the modal, nothing really needs to change except perhaps the closing duration.
                // Does it make sense to shorten the closing duration if it was initiated "quickly" (before it fully opens)...?
                //Modal.addDebugMessage("closeAsync: Modal is still opening... " + this.id, 1);
                console.error("Still Opening: " + options.duration);
              }
              this.state = 3; // Closing...
              if (this.container) {
                _context3.next = 15;
                break;
              }
              Modal.addDebugMessage("closeAsync: No Container element for modal: " + this.id, 3);
              return _context3.abrupt("return", false);
            case 15:
              _context3.next = 17;
              return this.closeContainerAsync(options);
            case 17:
              this.state = 4;

              // Async function called syncronously
              if (!bgStillOpening) Modal.closeBackgroundAsync(sender, this);
              this.state = 0; // Closed => Idle

              this.setContainerClassName("");
              popIndex = Modal.modalStack.indexOf(this);
              if (popIndex >= 0) Modal.modalStack.splice(popIndex, 1);
              if (Modal.modalStack.length === 0) this.removeBodyClassName("pi-open");
              return _context3.abrupt("return", true);
            case 25:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function closeAsync(_x3) {
        return _closeAsync.apply(this, arguments);
      }
      return closeAsync;
    }()
  }, {
    key: "getScrollOffset",
    value: function getScrollOffset() {
      var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var offset = {
        x: 0,
        y: 0
      };
      if (typeof document === "undefined") return offset;
      if (!scrollElement) scrollElement = document.documentElement || document.body;
      if (!scrollElement) return offset;
      offset.x = scrollElement.scrollLeft;
      offset.y = scrollElement.scrollTop;
      if (typeof offset.x !== "number") offset.x = 0;
      if (typeof offset.y !== "number") offset.y = 0;
      return offset;
    }
  }, {
    key: "getOptionsOffset",
    value: function getOptionsOffset() {
      var _this$options2, _this$options3, _this$anchor2, _this$anchor3;
      var offset = {
        x: typeof ((_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.offsetX) === "number" ? this.options.offsetX : 0,
        y: typeof ((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.offsetY) === "number" ? this.options.offsetY : 0
      };
      if (!this.options || this.options.offset === "mouse") return offset;
      if (typeof ((_this$anchor2 = this.anchor) === null || _this$anchor2 === void 0 ? void 0 : _this$anchor2.height) === "number") {
        if (this.options.offsetY === "bottom") {
          offset.y = this.anchor.height;
        } else if (this.options.offsetY === "top") {
          offset.y = -this.anchor.height;
        }
      }
      if (typeof ((_this$anchor3 = this.anchor) === null || _this$anchor3 === void 0 ? void 0 : _this$anchor3.width) === "number") {
        if (this.options.offsetX === "right") {
          offset.x = this.anchor.width;
        } else if (this.options.offsetX === "left") {
          offset.x = -this.anchor.width;
        }
      }
      if (typeof offset.x !== "number") offset.x = 0;
      if (typeof offset.y !== "number") offset.y = 0;
      return offset;
    }
  }, {
    key: "removeBodyClassName",
    value: function removeBodyClassName(className) {
      var bodyElement = document.querySelector("html") || document.querySelector("body");
      if (!bodyElement || !className || typeof className !== "string") return false;
      if (!bodyElement.classList.contains(className)) {
        return true;
      }

      //delete bodyElement.style.transform;

      bodyElement.className = (bodyElement.className || "").replace(className, "").trim();
      if (bodyElement.className === "") bodyElement.removeAttribute("class");
      return true;
    }
  }, {
    key: "setBodyClassName",
    value: function setBodyClassName(className) {
      var bodyElement = document.querySelector("html") || document.querySelector("body");
      if (!bodyElement || !className || typeof className !== "string") return false;
      var top = bodyElement.scrollTop;
      if (bodyElement.classList.contains(className)) {
        return true;
      }
      bodyElement.className = ((bodyElement.className || "") + " " + className).trim();
      //bodyElement.style.transform = "translateY(-" + top + "px)";

      return true;
    }
  }, {
    key: "setContainerClassName",
    value: function setContainerClassName(className) {
      if (!this.container) return null;
      if (!className) className = "";
      var newClassName = ((Modal.classes.container + " " + this.userClassName).trim() + " " + className.trim()).trim();
      if (newClassName !== this.container.className) {
        this.container.className = newClassName;
        //console.warn("CLASSNAME Set (" + this.container.className + ") : " + this.container.className);
        //if (isTheThing) throw new Error("Toast - Check the style properties");
      }

      return this.container.className || null;
    }
  }, {
    key: "getContainerMeasurementAsync",
    value: function () {
      var _getContainerMeasurementAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var force,
          size,
          rect,
          restoreTransition,
          restoreProperty,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              force = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : false;
              size = {
                width: 0,
                height: 0,
                x: -1,
                y: -1
              };
              rect = this.targetRect;
              if (!(!!rect && !force)) {
                _context4.next = 9;
                break;
              }
              size.width = rect.width;
              size.height = rect.height;
              size.x = rect.left;
              size.y = rect.top;
              return _context4.abrupt("return", size);
            case 9:
              if (this.container) {
                _context4.next = 11;
                break;
              }
              return _context4.abrupt("return", size);
            case 11:
              restoreTransition = this.container.style.transitionDuration;
              restoreProperty = this.container.style.transitionProperty;
              this.container.style.transitionDuration = 0;
              this.container.style.transitionProperty = "none !important";
              this.setContainerClassName("measure");
              _context4.next = 18;
              return Modal.delay(1);
            case 18:
              rect = this.container.getBoundingClientRect();
              size.width = rect.width;
              size.height = rect.height;
              size.x = rect.left;
              size.y = rect.top;
              this.setContainerClassName("");
              _context4.next = 26;
              return Modal.delay(Modal.transitionDurations.tick);
            case 26:
              this.container.style.transitionDuration = restoreTransition;
              this.container.style.transitionProperty = restoreProperty;
              return _context4.abrupt("return", size);
            case 29:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getContainerMeasurementAsync() {
        return _getContainerMeasurementAsync.apply(this, arguments);
      }
      return getContainerMeasurementAsync;
    }()
  }, {
    key: "getContainerElement",
    value: function getContainerElement() {
      var createdIfNotExistant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.container) {
        this.container = document.getElementById(this.containerId);
        if (!this.container) {
          if (!createdIfNotExistant) return null;
          this.container = document.createElement("div");
          this.container.id = this.containerId;
        }
        this.container.className = Modal.classes.container;
      }
      return this.container;
    }

    /**
     *  The first child of the container that has a visual component.
     *  There can be zero or more child elements at any given time, but it's almost always only one.
     *  If there is more than one child element, the bodyElement should always be the first one (but that could change)
     * @returns {HtmlElement|null} */
  }, {
    key: "getBodyElement",
    value: function getBodyElement() {
      if (!this.bodyElementId || typeof document === "undefined") {
        console.warn("No body element: " + this.bodyElementId);
        return null;
      }

      //console.log("BodyElementId: " + this.bodyElementId);
      return document.getElementById(this.bodyElementId);
    }

    /**
     * Gets (or creates) the HTML element that is the invisible container for the modal body, and appends the given content to it.
     * It does NOT append it to the background, so you must do that after you make this call.
     * It needs to be display:block so we can accurately measure the size of the modal with all its contents in order to properly center/position it
     * @param {string|HtmlElement|null} content - The content to display in the modal
     * @param {Array} buttons - The buttons to display in the modal
     * @returns HtmlElement
     */
  }, {
    key: "createContainerWithContent",
    value: function createContainerWithContent(content) {
      var buttons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var container = this.getContainerElement();
      content = Modal.createHtmlContent(content);
      if (!content.id) content.id = this.bodyElementId = this.id + "-body";
      this.bodyElementId = content.id;
      while (container.hasChildNodes()) container.removeChild(container.firstChild);
      if (!container.parentNode) {
        var duration = Math.min(Modal.transitionDurations.container, Modal.transitionDurations.containerBody);
        content.style.transitionDuration = duration + "ms";
        container.appendChild(content);
      }
      return container;
    }
  }], [{
    key: "createHtmlContent",
    value: /** Static Methods */

    /**
     * Creates a new HtmlElement with the given content. Does NOT append to document.body.
     * If the given content is null, an empty div is returned. If the given content is an HTMLElement, it is returned as is.
     * @param {string|number|object|null} content - The content to create
     * @returns HtmlElement
     */
    function createHtmlContent(content) {
      if (content === null || typeof content === "undefined") {
        var _div = document.createElement("div");
        _div.innerHTML = "";
        _div.className = Modal.classes.body;
        return _div;
      }
      if (content instanceof HTMLElement) {
        if (!!content.className) content.className = (content.className + " " + Modal.classes.body).trim();else content.className = Modal.classes.body;
        return content;
      }
      var contentType = _typeof(content);
      var div = document.createElement("div");
      div.className = Modal.classes.body;
      if (contentType !== "object" || content instanceof Date) {
        var _content$toString;
        div.innerHTML = (_content$toString = content === null || content === void 0 ? void 0 : content.toString()) !== null && _content$toString !== void 0 ? _content$toString : "";
      } else {
        div.innerHTML = JSON.stringify(content, null, 4);
        div.content = content;
      }
      return div;
    }
  }, {
    key: "openBackgroundAsync",
    value: function () {
      var _openBackgroundAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(backgroundElement, senderModal) {
        var _bg$classList, _bg$classList2;
        var bg, _senderModal$backgrou, classes, durations, bgDuration, bgClassName;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              bg = backgroundElement instanceof HTMLElement ? backgroundElement : Modal.getOrCreateBackgroundElement();
              if (bg) {
                _context5.next = 3;
                break;
              }
              throw new Error("Unable to get background element");
            case 3:
              if (!(Modal.states.background > 0 || (_bg$classList = bg.classList) !== null && _bg$classList !== void 0 && _bg$classList.contains("open") || (_bg$classList2 = bg.classList) !== null && _bg$classList2 !== void 0 && _bg$classList2.contains("opening"))) {
                _context5.next = 7;
                break;
              }
              console.warn("BG is already open or opening");

              // TODO: Fix this. Check for specific classNames
              if (((_senderModal$backgrou = senderModal.backgroundClassName) === null || _senderModal$backgrou === void 0 ? void 0 : _senderModal$backgrou.toString().length) > 0 && senderModal.defaultBackgroundClassName !== senderModal.backgroundClassName) {
                // console.log("Setting background class name: " + senderModal.backgroundClassName);
                // console.log(" > This: " + senderModal.backgroundClassName);
                // console.log(" > CurrentBG: " + bg.className);

                bg.className = typeof bg.className === "string" ? bg.className.replace(senderModal.defaultBackgroundClassName, senderModal.backgroundClassName) : senderModal.backgroundClassName;
              }
              return _context5.abrupt("return", bg);
            case 7:
              Modal.states.background = 2;
              classes = Modal.classes;
              durations = Modal.transitionDurations;
              bgDuration = Math.min(durations.background, Math.min(Modal.transitionDurations.containerBody, Modal.transitionDurations.container));
              bgClassName = (senderModal === null || senderModal === void 0 ? void 0 : senderModal.backgroundClassName) || classes.background; //bg.style.display = "block";
              bg.style.transitionDuration = bgDuration + "ms";
              _context5.next = 15;
              return Modal.delay(durations.tick);
            case 15:
              bg.className = bgClassName + " opening";
              _context5.next = 18;
              return Modal.delay(bgDuration);
            case 18:
              bg.className = bgClassName + " open";
              _context5.next = 21;
              return Modal.delay(durations.tick);
            case 21:
              Modal.states.background = 1;
              return _context5.abrupt("return", bg);
            case 23:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function openBackgroundAsync(_x4, _x5) {
        return _openBackgroundAsync.apply(this, arguments);
      }
      return openBackgroundAsync;
    }()
  }, {
    key: "closeBackgroundAsync",
    value: function () {
      var _closeBackgroundAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e, senderModal) {
        var durationOverride,
          activeModals,
          bg,
          classes,
          durations,
          bgDuration,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              durationOverride = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : null;
              console.log("closeBackgroundAsync(e, senderModel) [" + !!e + ", " + !!senderModal + "]");
              if (!(Modal.states.background === 0)) {
                _context6.next = 5;
                break;
              }
              console.warn("Background state is 0 when trying to close it. Aborting");
              return _context6.abrupt("return", false);
            case 5:
              if (!(Modal.states.background !== 1)) {
                _context6.next = 8;
                break;
              }
              Modal.addDebugMessage("closeBackgroundAsync: Background state is not open: " + Modal.states.background, 3);
              return _context6.abrupt("return", false);
            case 8:
              activeModals = Modal.modalStack.filter(function (m) {
                return m.state === 1;
              });
              if (!(activeModals.length > 0)) {
                _context6.next = 13;
                break;
              }
              Modal.addDebugMessage("closeBackgroundAsync: Modal stack still contains active modals. Top Modal is: " + activeModals[activeModals.length - 1].id, 2);
              console.log("Total Modals: " + Modal.modalStack.length);
              return _context6.abrupt("return", false);
            case 13:
              bg = Modal.getOrCreateBackgroundElement(false);
              if (bg) {
                _context6.next = 17;
                break;
              }
              console.warn("No bg element found when trying to close it.");
              return _context6.abrupt("return", false);
            case 17:
              classes = Modal.classes;
              durations = Modal.transitionDurations;
              bgDuration = typeof durationOverride === "number" ? durationOverride : Math.min(durations.background, Math.max(Modal.transitionDurations.containerBody, Modal.transitionDurations.container));
              bg.style.transitionDuration = bgDuration + "ms";
              bg.className = classes.background + " closing";
              _context6.next = 24;
              return Modal.delay(bgDuration);
            case 24:
              bg.className = classes.background + " closed";
              _context6.next = 27;
              return Modal.delay(durations.tick);
            case 27:
              bg.className = classes.background;
              bg.style.display = null;
              Modal.states.background = 0;
              bg.remove();
              console.log("Background closed gracefully and fully.");
              return _context6.abrupt("return", true);
            case 33:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function closeBackgroundAsync(_x6, _x7) {
        return _closeBackgroundAsync.apply(this, arguments);
      }
      return closeBackgroundAsync;
    }()
  }, {
    key: "delay",
    value: function () {
      var _delay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var duration,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              duration = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : 200;
              if (!(duration <= 0 || typeof duration !== "number")) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return");
            case 3:
              _context7.next = 5;
              return new Promise(function (resolve, reject) {
                setTimeout(function () {
                  resolve();
                }, duration);
              });
            case 5:
              return _context7.abrupt("return", _context7.sent);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function delay() {
        return _delay.apply(this, arguments);
      }
      return delay;
    }()
    /**
     * Gets the existing background HTMLElement, or creates it with a click EventListener (and appends it to document.body) if it doesn't exist.
     * @param {boolean} appendIfNotExistant - If true, and the background element hasn't already been created, it will create it and append it to the document.body
     * @returns HTMLDivElement
     */
  }, {
    key: "getOrCreateBackgroundElement",
    value: function getOrCreateBackgroundElement() {
      var appendIfNotExistant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!Modal.backgroundElement) {
        if (!appendIfNotExistant) return null;
        var c = Modal.classes;
        var background = document.createElement("div");
        var globalClassName = typeof Modal.globalClassName === "string" ? Modal.globalClassName : "";
        var bgcn = (c.background + " " + globalClassName).trim();
        background.id = Modal.backgroundElementId;
        background.className = bgcn;
        Modal.backgroundElement = background;
        if (typeof Modal.onModalBackgroundClick === "function") {
          Modal.backgroundElement.removeEventListener("click", Modal.onModalBackgroundClick);
        }
        Modal.backgroundElement.addEventListener("click", Modal.onModalBackgroundClick);
      }
      if (!Modal.backgroundElement.parentElement && appendIfNotExistant === true && typeof document !== "undefined") {
        // Add a debug element to the background HTML Element so we can print to it later
        if (!this.debugElement) {
          this.debugElement = document.createElement("div");
          this.debugElement.id = Modal.debugElementId;
          Modal.addDebugMessage("Modal Debug Element Created.");
          Modal.backgroundElement.appendChild(this.debugElement);
        }
        document.body.appendChild(Modal.backgroundElement);
        Modal.updateDebugElement();
      }
      return Modal.backgroundElement;
    }
  }, {
    key: "onModalBackgroundClick",
    value: function onModalBackgroundClick(e) {
      var _e$target;
      var clickId = (Math.random() * 99999999).toString(16);
      var stackSize = Modal.modalStack.length;
      if (stackSize === 0) return;
      var targetIsBackground = (e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.id) === Modal.backgroundElementId;
      if (!targetIsBackground) {
        // Body of the modal was clicked, not the background
        // console.log("< " + clickId + " : Body clicked. Ignored.");
        // Modal.addDebugMessage("Body clicked: " + e?.target?.id + " | " + e?.target?.className);
        return false;
      }
      console.log("onModalBackgroundClick(e) : " + clickId + " with stack size: " + stackSize);
      if (typeof (e === null || e === void 0 ? void 0 : e.preventDefault) === "function") e.preventDefault();
      if (typeof (e === null || e === void 0 ? void 0 : e.stopPropagation) === "function") e.stopPropagation();
      var modal = stackSize > 0 ? Modal.modalStack[stackSize - 1] : null;
      if (!((modal === null || modal === void 0 ? void 0 : modal.state) === 1)) {
        if (!!modal.container) modal.container.style.transitionDuration = "200ms";
        if (modal.backgroundClassName !== modal.defaultBackgroundClassName) {
          modal.backgroundClassName = modal.defaultBackgroundClassName;
          var bge = Modal.getOrCreateBackgroundElement(false);
          if (bge) bge.className = modal.defaultBackgroundClassName;
        }
        return;
      }
      if (typeof (modal === null || modal === void 0 ? void 0 : modal.onBackgroundClick) === "function") {
        var rsp = modal.onBackgroundClick(e);
        if (rsp === false) {
          console.log("< " + clickId + " : onClick is not true (", rsp, ")");
          Modal.addDebugMessage("modal.onBackgroundClick returned false: " + this.id);
          return false;
        }
      }
      modal.closeAsync(e);
      Modal.addDebugMessage("Modal Removed from Stack: " + this.id);
      return true;
    }
  }, {
    key: "suppressBackgroundClick",
    value: function suppressBackgroundClick() {
      return false;
    }
  }, {
    key: "getGlobalPosition",
    value: function getGlobalPosition(element) {
      var rect = element.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        width: rect.width,
        height: rect.height
      };
    }
  }, {
    key: "addDebugMessage",
    value: function addDebugMessage(message) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var date = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      });
      Modal.debugMessages.push(date + ": " + message);
      if (level === 1) console.warn(date + ": " + message);else if (level === 2) console.warn(date + ": " + message);else if (level >= 3) console.error(date + ": " + message);else console.log(date + " LOG :: " + message);
      Modal.updateDebugElement();
    }
  }, {
    key: "clearDebugMessages",
    value: function clearDebugMessages() {
      Modal.debugMessages = [];
      Modal.updateDebugElement();
    }
  }, {
    key: "updateDebugElement",
    value: function updateDebugElement() {
      if (!Modal.debugElement) return false;
      Modal.debugElement.innerHTML = Modal.debugMessages.join("<br />");
      return true;
    }
  }]);
  return Modal;
}();
_defineProperty(Modal, "classes", {
  background: "pi-modal-background",
  container: "pi-modal-container",
  title: "pi-modal-title",
  body: "pi-modal-body",
  button: "pi-modal-button"
});
_defineProperty(Modal, "transitionDurations", {
  background: 100,
  container: 300,
  containerBody: 300,
  tick: 10
});
_defineProperty(Modal, "globalClassName", "");
_defineProperty(Modal, "states", {
  background: 0,
  backgroundClickId: null
});
_defineProperty(Modal, "clickTime", 0);
_defineProperty(Modal, "clickDifference", 0);
_defineProperty(Modal, "modalStack", []);
_defineProperty(Modal, "backgroundElementId", "pi-modal-background");
_defineProperty(Modal, "backgroundElement", null);
_defineProperty(Modal, "debugElementId", "modal-background-debug");
_defineProperty(Modal, "debugElement", null);
_defineProperty(Modal, "debugMessages", []);
var _default = Modal;
exports.default = _default;