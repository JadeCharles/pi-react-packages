"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormController = _interopRequireDefault(require("../../common/controllers/FormController"));
var _FormValidator = _interopRequireDefault(require("../../common/controllers/FormValidator"));
var _FormButton = _interopRequireDefault(require("../../common/forms/FormButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ContactForm = function ContactForm(props) {
  var _options$labels, _options$labels$subje, _options$labels2, _options$labels3, _options$labels3$subj, _options$labels4, _options$labels5;
  var value = props.value,
    onClick = props.onClick,
    onError = props.onError,
    onComplete = props.onComplete,
    useButton = props.useButton,
    options = props.options,
    controller = props.controller,
    controllerKey = props.controllerKey,
    requiredFields = props.requiredFields,
    prefix = props.prefix;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    errors = _useState2[0],
    setErrors = _useState2[1];
  var nameRef = (0, _react.useRef)();
  var emailRef = (0, _react.useRef)();
  var phoneRef = (0, _react.useRef)();
  var websiteRef = (0, _react.useRef)();
  var subjectRef = (0, _react.useRef)();
  var messageRef = (0, _react.useRef)();
  var displayPhone = options === "all" || options === "phone" || !!(options !== null && options !== void 0 && options.phone);
  var displayWeb = options === "all" || options === "website" || !!(options !== null && options !== void 0 && options.website);
  var idPrefix = typeof prefix === "string" && prefix.length > 0 ? prefix : "";
  var createJson = function createJson() {
    var _nameRef$current, _emailRef$current, _phoneRef$current, _websiteRef$current, _subjectRef$current, _messageRef$current;
    return {
      name: ((_nameRef$current = nameRef.current) === null || _nameRef$current === void 0 ? void 0 : _nameRef$current.value) || null,
      email: ((_emailRef$current = emailRef.current) === null || _emailRef$current === void 0 ? void 0 : _emailRef$current.value) || null,
      phone: ((_phoneRef$current = phoneRef.current) === null || _phoneRef$current === void 0 ? void 0 : _phoneRef$current.value) || null,
      website: ((_websiteRef$current = websiteRef.current) === null || _websiteRef$current === void 0 ? void 0 : _websiteRef$current.value) || null,
      subject: ((_subjectRef$current = subjectRef.current) === null || _subjectRef$current === void 0 ? void 0 : _subjectRef$current.value) || null,
      message: ((_messageRef$current = messageRef.current) === null || _messageRef$current === void 0 ? void 0 : _messageRef$current.value) || null
    };
  };
  var createValidator = function createValidator() {
    var v = !!requiredFields && _typeof(requiredFields) === "object" && !Array.isArray(requiredFields) ? requiredFields : null;

    // Validation defaults
    if (v === null) v = {
      name: "Name is required",
      message: "Message is missing",
      email: "An valid email address is required"
    };
    if (!!v.website && !displayWeb) delete v.website;
    if (!!v.phone && !displayPhone) delete v.phone;
    return new _FormValidator.default(v, idPrefix);
  };
  var validateForm = function validateForm(json) {
    var validator = createValidator();
    var ex = validator.validateJson(json);
    setErrors(ex);
    controller === null || controller === void 0 ? void 0 : controller.setErrors(ex);
    console.warn(JSON.stringify(ex, null, 4));
    console.log(JSON.stringify(json, null, 4));
    if (Object.keys(ex).length > 0) return null;
    return nameRef.current.value;
  };
  var setControllerCallback = function setControllerCallback() {
    if (!controller || !(controller instanceof _FormController.default)) {
      console.warn("setControllerCallback failed: No FormController was provided to PersonForm.");
      return false;
    }
    var ckey = typeof controllerKey === "string" && controllerKey.length > 0 ? controllerKey : "contactform";
    controller.setCallback(ckey, function () {
      var json = createJson();
      if (!validateForm(json)) return null;
      return json;
    });
    return true;
  };
  var handleError = function handleError(ex) {
    var handleResult = typeof onError === 'function' ? onError(ex) : null;
    if (handleResult === false) return;
    var newError = {};
    newError[idPrefix + "general"] = ex;
    setErrors(newError);
    throw ex;
  };
  var onClickAsync = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var json, rsp, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof onClick !== 'function')) {
              _context.next = 2;
              break;
            }
            throw new Error("ContactForm.onClick function was not set");
          case 2:
            json = createJson();
            if (validateForm(json)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return");
          case 5:
            rsp = onClick(json, e);
            if (!(typeof rsp.then === 'function')) {
              _context.next = 12;
              break;
            }
            _context.next = 9;
            return rsp.then(function (model) {
              if (typeof onComplete === 'function') onComplete(model);
              return model;
            }).catch(function (ex) {
              handleError(ex);
            });
          case 9:
            _context.t0 = _context.sent;
            _context.next = 13;
            break;
          case 12:
            _context.t0 = rsp;
          case 13:
            result = _context.t0;
            return _context.abrupt("return", result);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onClickAsync(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    setControllerCallback();
  }, []);
  var clearErrors = function clearErrors(key) {
    key = idPrefix + key;
    if (!!errors[key]) {
      var newErrors = _objectSpread({}, errors);
      delete newErrors[key];
      setErrors(newErrors);
    }
  };
  var createSubjectOption = function createSubjectOption(s, i) {
    var text = typeof s === "string" ? s : s.text || s.caption || (s === null || s === void 0 ? void 0 : s.toString());
    var value = typeof s === "string" ? s : s.value || text;
    return /*#__PURE__*/_react.default.createElement("option", {
      key: "subject-" + i,
      value: value
    }, text);
  };
  var viewError = function viewError(key) {
    var _errors$key;
    key = idPrefix + key;
    return (errors === null || errors === void 0 ? void 0 : (_errors$key = errors[key]) === null || _errors$key === void 0 ? void 0 : _errors$key.toString()) || null;
  };
  var phoneElement = displayPhone ? /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group pi-phone"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Phone:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "phone",
    defaultValue: value === null || value === void 0 ? void 0 : value.phone,
    type: "tel",
    ref: phoneRef,
    onBlur: function onBlur(e) {
      return clearErrors("phone");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("phone"))) : null;
  var websiteElement = displayWeb ? /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group pi-website"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Website:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "website",
    defaultValue: value === null || value === void 0 ? void 0 : value.website,
    type: "text",
    placeholder: "https://",
    ref: websiteRef,
    onBlur: function onBlur(e) {
      return clearErrors("website");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("website"))) : null;
  var subjectElement = Array.isArray(options === null || options === void 0 ? void 0 : options.subjectSelections) && options.subjectSelections.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group pi-subject"
  }, /*#__PURE__*/_react.default.createElement("label", null, (options === null || options === void 0 ? void 0 : (_options$labels = options.labels) === null || _options$labels === void 0 ? void 0 : (_options$labels$subje = _options$labels.subject) === null || _options$labels$subje === void 0 ? void 0 : _options$labels$subje.toString()) || "Subject:"), /*#__PURE__*/_react.default.createElement("select", {
    id: idPrefix + "subject",
    defaultValue: value === null || value === void 0 ? void 0 : value.subject,
    ref: subjectRef,
    onBlur: function onBlur(e) {
      return clearErrors("subject");
    }
  }, options.subjectSelections.map(function (s, i) {
    return createSubjectOption(s, i);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("subject"))) : options.useSubject === true || typeof (options === null || options === void 0 ? void 0 : (_options$labels2 = options.labels) === null || _options$labels2 === void 0 ? void 0 : _options$labels2.subject) === "string" ? /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, (options === null || options === void 0 ? void 0 : (_options$labels3 = options.labels) === null || _options$labels3 === void 0 ? void 0 : (_options$labels3$subj = _options$labels3.subject) === null || _options$labels3$subj === void 0 ? void 0 : _options$labels3$subj.toString()) || "Subject:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "subject",
    defaultValue: value === null || value === void 0 ? void 0 : value.website,
    type: "text",
    ref: websiteRef,
    onBlur: function onBlur(e) {
      return clearErrors("subject");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("subject"))) : null;
  var buttonElement = useButton !== false || typeof (options === null || options === void 0 ? void 0 : (_options$labels4 = options.labels) === null || _options$labels4 === void 0 ? void 0 : _options$labels4.button) === "string" ? /*#__PURE__*/_react.default.createElement("div", {
    className: "button"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("general")), /*#__PURE__*/_react.default.createElement(_FormButton.default, {
    onClick: onClickAsync
  }, (options === null || options === void 0 ? void 0 : (_options$labels5 = options.labels) === null || _options$labels5 === void 0 ? void 0 : _options$labels5.button) || "Submit")) : null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form pi-contact-form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group pi-name"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Name:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "name",
    defaultValue: value === null || value === void 0 ? void 0 : value.name,
    type: "text",
    ref: nameRef,
    onBlur: function onBlur(e) {
      return clearErrors("name");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("name"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group pi-email"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Email:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "email",
    defaultValue: value === null || value === void 0 ? void 0 : value.email,
    type: "text",
    ref: emailRef,
    onBlur: function onBlur(e) {
      return clearErrors("email");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("email"))), phoneElement, websiteElement, subjectElement, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group pi-message"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Message:"), /*#__PURE__*/_react.default.createElement("textarea", {
    id: idPrefix + "message",
    defaultValue: value === null || value === void 0 ? void 0 : value.message,
    ref: messageRef,
    onBlur: function onBlur(e) {
      return clearErrors("message");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("message"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error general"
  }, viewError("general")), buttonElement);
};
ContactForm.defaultDataKey = "contactform";
var _default = ContactForm;
exports.default = _default;