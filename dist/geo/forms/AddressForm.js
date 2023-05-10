"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormController = _interopRequireDefault(require("../../common/controllers/FormController"));
var _FormValidator = _interopRequireDefault(require("../../common/controllers/FormValidator"));
var _FormButton = _interopRequireDefault(require("../../common/forms/FormButton"));
var _AddressModel = _interopRequireDefault(require("../models/AddressModel"));
var _this = void 0;
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
var AddressForm = function AddressForm(props) {
  var value = props.value,
    onClick = props.onClick,
    onError = props.onError,
    onComplete = props.onComplete,
    useCountry = props.useCountry,
    usePostal = props.usePostal,
    useButton = props.useButton,
    controller = props.controller,
    controllerKey = props.controllerKey,
    requiredFields = props.requiredFields,
    prefix = props.prefix;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    errors = _useState2[0],
    setErrors = _useState2[1];
  var streetRef = (0, _react.useRef)();
  var unitRef = (0, _react.useRef)();
  var cityRef = (0, _react.useRef)();
  var stateRef = (0, _react.useRef)();
  var zipRef = (0, _react.useRef)();
  var countryRef = (0, _react.useRef)();
  var zipName = usePostal === true ? "Postal" : "Zip";
  var createJson = function createJson() {
    var _streetRef$current, _unitRef$current, _cityRef$current, _stateRef$current, _zipRef$current, _countryRef$current;
    return {
      street: ((_streetRef$current = streetRef.current) === null || _streetRef$current === void 0 ? void 0 : _streetRef$current.value) || null,
      unit: ((_unitRef$current = unitRef.current) === null || _unitRef$current === void 0 ? void 0 : _unitRef$current.value) || null,
      city: ((_cityRef$current = cityRef.current) === null || _cityRef$current === void 0 ? void 0 : _cityRef$current.value) || null,
      state: ((_stateRef$current = stateRef.current) === null || _stateRef$current === void 0 ? void 0 : _stateRef$current.value) || null,
      zip: ((_zipRef$current = zipRef.current) === null || _zipRef$current === void 0 ? void 0 : _zipRef$current.value) || null,
      country: ((_countryRef$current = countryRef.current) === null || _countryRef$current === void 0 ? void 0 : _countryRef$current.value) || null
    };
  };
  var createValidator = function createValidator() {
    var v = !!requiredFields && _typeof(requiredFields) === "object" && !Array.isArray(requiredFields) ? requiredFields : null;

    // Validation defaults
    if (v === null) v = {
      street: "Street is required",
      zip: zipName + " code is required"
    };
    return new _FormValidator.default(v);
  };
  var validateForm = function validateForm(json) {
    var errs = {};
    // Snippet: Validate form with FormValidator (??)
    var validator = createValidator();
    var ex = validator.validateJson(json);
    setErrors(errs);
    controller === null || controller === void 0 ? void 0 : controller.setErrors(errs);
    if (Object.keys(errs).length > 0) return null;
    return streetRef.current.value;
  };
  var setControllerCallback = function setControllerCallback() {
    if (!controller || !(controller instanceof _FormController.default)) {
      console.warn("setControllerCallback failed: No FormController was provided to PersonForm.");
      return false;
    }
    var ckey = typeof controllerKey === "string" && controllerKey.length > 0 ? controllerKey : "addressform";
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
    setErrors({
      general: ex
    });
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
            throw new Error("AddressForm.onClick function was not set");
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
  var onAddressChange = function onAddressChange(fieldId, event) {
    //console.log(fieldId + ": " + event.target.value);
  };
  (0, _react.useEffect)(function () {
    setControllerCallback();
  }, []);
  var clearErrors = function clearErrors(key) {
    if (!!errors[key]) {
      var newErrors = _objectSpread({}, errors);
      delete newErrors[key];
      setErrors(newErrors);
    }
  };
  var viewError = function viewError(key) {
    return (errors === null || errors === void 0 ? void 0 : errors[key]) || null;
  };
  var idPrefix = typeof prefix === "string" && prefix.length > 0 ? prefix : "";
  var buttonElement = useButton === true ? /*#__PURE__*/_react.default.createElement("div", {
    className: "button"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError("general")), /*#__PURE__*/_react.default.createElement(_FormButton.default, {
    onClick: onClickAsync
  }, "Submit")) : null;
  var countryElement = useCountry ? /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Country:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "country",
    defaultValue: value === null || value === void 0 ? void 0 : value.country,
    type: "text",
    ref: countryRef,
    onBlur: function onBlur(e) {
      return clearErrors("country");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError(idPrefix + "country"))) : null;
  var stateOptions = _AddressModel.default.states.map(function (state) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: state.abbr,
      value: state.abbr
    }, state.name);
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Street:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "street",
    defaultValue: value === null || value === void 0 ? void 0 : value.street,
    type: "text",
    ref: streetRef,
    onBlur: function onBlur(e) {
      return clearErrors(idPrefix + "street");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError(idPrefix + "street"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Unit:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "unit",
    defaultValue: value === null || value === void 0 ? void 0 : value.unit,
    type: "text",
    ref: unitRef,
    onBlur: function onBlur(e) {
      return clearErrors(idPrefix + "unit");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError(idPrefix + "unit"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group double"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "half"
  }, /*#__PURE__*/_react.default.createElement("label", null, "City:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "city",
    defaultValue: value === null || value === void 0 ? void 0 : value.city,
    type: "text",
    ref: cityRef,
    onBlur: function onBlur(e) {
      return clearErrors(idPrefix + "city");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError(idPrefix + "city"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "half"
  }, /*#__PURE__*/_react.default.createElement("label", null, "State:"), /*#__PURE__*/_react.default.createElement("select", {
    id: idPrefix + "state",
    defaultValue: value === null || value === void 0 ? void 0 : value.state,
    onChange: onAddressChange.bind(_this, idPrefix + "state"),
    ref: stateRef
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select State"), stateOptions), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError(idPrefix + "state")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, zipName, " Code:"), /*#__PURE__*/_react.default.createElement("input", {
    id: idPrefix + "zip",
    defaultValue: value === null || value === void 0 ? void 0 : value.zip,
    type: "text",
    ref: zipRef,
    onBlur: function onBlur(e) {
      return clearErrors(idPrefix + "zip");
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-error"
  }, viewError(idPrefix + "zip"))), countryElement, buttonElement);
};
AddressForm.defaultDataKey = "addressform";
var _default = AddressForm;
exports.default = _default;