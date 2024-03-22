"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _DateTime = _interopRequireDefault(require("../ui/formatting/DateTime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var HttpService = /*#__PURE__*/function () {
  function HttpService() {
    var explicit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, HttpService);
    this.baseUrl = HttpService.httpBaseUrl || "";
    this.isLoaded = typeof window !== 'undefined';
    this.sessionId = null;
    this.debug = HttpService.isDebug;
    this.webSession = typeof localStorage !== "undefined" ? HttpService.getWebSession(true) : null;
    this.onUnauthorizedResponse = function (err) {
      if (!HttpService.debugPrint('Unauthorized response (default)', 2)) console.warn("Unauthorized response (default)");
      return err || null;
    };
    if (!this.baseUrl) this.detectBaseUrl();
    HttpService.getIpAddressAsync();
  }
  _createClass(HttpService, [{
    key: "detectBaseUrl",
    value: function detectBaseUrl() {
      if (typeof window === 'undefined') return false;
      this.isLoaded = typeof window !== 'undefined';
      if (!this.baseUrl && this.isLoaded) this.baseUrl = window.location.origin;
      HttpService.debugPrint("Base url is: " + this.baseUrl);
      return this.isLoaded;
    }
  }, {
    key: "setSessionId",
    value: function setSessionId(sessionId) {
      this.sessionId = sessionId;
    }
  }, {
    key: "getHeaderConfig",
    value: function getHeaderConfig(headers) {
      var _this$sessionId$toStr, _this$sessionId, _HttpService$ipAddres, _HttpService$ipAddres2, _this$webSession$toSt, _this$webSession;
      if (!!headers) return {
        headers: headers
      };
      headers = {
        'Content-Type': 'application/json'
      };
      if (this.sessionId) headers['session-id'] = (_this$sessionId$toStr = (_this$sessionId = this.sessionId) === null || _this$sessionId === void 0 ? void 0 : _this$sessionId.toString()) !== null && _this$sessionId$toStr !== void 0 ? _this$sessionId$toStr : "";
      if (this.ipAddress) headers['X-Forwarded-For'] = (_HttpService$ipAddres = (_HttpService$ipAddres2 = HttpService.ipAddress) === null || _HttpService$ipAddres2 === void 0 ? void 0 : _HttpService$ipAddres2.toString()) !== null && _HttpService$ipAddres !== void 0 ? _HttpService$ipAddres : "";
      if (this.webSession) headers['X-Web-Session'] = (_this$webSession$toSt = (_this$webSession = this.webSession) === null || _this$webSession === void 0 ? void 0 : _this$webSession.toString()) !== null && _this$webSession$toSt !== void 0 ? _this$webSession$toSt : "";
      var vp = HttpService.getViewPortData();
      headers['X-View-Port'] = !!vp ? JSON.stringify(vp) : null;
      return {
        headers: headers
      };
    }
  }, {
    key: "createUrlWithDateRange",
    value: function createUrlWithDateRange(path, startDate, endDate) {
      var adjustTimeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var adjustTz = adjustTimeZone === true ? function (d) {
        if (typeof (d === null || d === void 0 ? void 0 : d.getTimezoneOffset) !== "function") return d;
        var tz = d.getTimezoneOffset();
        if (tz > 0) return new Date(d.getTime() + tz * 60000);
        return d;
      } : function (d) {
        return d;
      };
      if (_DateTime.default.isDate(startDate)) {
        startDate = adjustTz(startDate.toDate()).toFormDate();
      } else startDate = '';
      if (_DateTime.default.isDate(endDate)) {
        endDate = adjustTz(endDate.toDate()).toFormDate();
      } else endDate = '';
      var qa = path.indexOf('?') > -1 ? '&' : '?';
      return path + qa + 'start-date=' + startDate + '&end-date=' + endDate;
    }

    /**
     * Calls the getAsync method with the given url and date range. 
     * The date range is formatted to fit the platform query string start-date/end-date naming convention* 
     * @param path
     * @param startDate
     * @param endDate
     * @returns {Promise<AxiosResponse<[any]>|void>}
     */
  }, {
    key: "getWithDateRangeAsync",
    value: function () {
      var _getWithDateRangeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path, startDate, endDate) {
        var adjustTimeZone,
          url,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              adjustTimeZone = _args.length > 3 && _args[3] !== undefined ? _args[3] : true;
              url = this.createUrlWithDateRange(path, startDate, endDate, adjustTimeZone = true);
              HttpService.debugPrint('Date Url: ' + url);
              _context.next = 5;
              return HttpService.instance.getAsync(url);
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getWithDateRangeAsync(_x, _x2, _x3) {
        return _getWithDateRangeAsync.apply(this, arguments);
      }
      return getWithDateRangeAsync;
    }()
    /**
     * Uses ipify.org to get the ip address of the client, then saves it for later use in the header "X-Forwarded-For"
     * @returns {Promise<AxiosResponse<any>>}
     */
  }, {
    key: "cleanPath",
    value: function cleanPath(path) {
      if (!path) return '';
      if (!path.startsWith('http')) {
        if (!path.startsWith('/')) path = '/' + path;
        if (!this.isLoaded) this.detectBaseUrl();
        path = this.baseUrl + path;
      }
      return path;
    }
  }, {
    key: "getAsync",
    value: function () {
      var _getAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(path, isPublic, headers) {
        var _this = this;
        var responseType,
          h,
          errorMessage,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              responseType = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : null;
              HttpService.errors.push({
                error: null,
                message: "Getting",
                date: new Date()
              });
              h = this.getHeaderConfig(headers);
              if (!(!isPublic && !h["headers"][HttpService.sessionKey])) {
                _context2.next = 6;
                break;
              }
              HttpService.errors.push({
                error: new Error("No getting because no session-id"),
                date: new Date()
              });
              return _context2.abrupt("return", HttpService.emptyResponse);
            case 6:
              if (!!responseType) h["responseType"] = responseType;
              path = this.cleanPath(path);
              HttpService.debugPrint("GET: " + path);
              if (!(typeof (_axios.default === null || _axios.default === void 0 ? void 0 : _axios.default.get) !== "function")) {
                _context2.next = 14;
                break;
              }
              errorMessage = "No getting because no axios";
              HttpService.errors.push({
                error: new Error(errorMessage),
                date: new Date()
              });
              console.error(errorMessage);
              return _context2.abrupt("return", HttpService.emptyResponse);
            case 14:
              _context2.next = 16;
              return _axios.default.get(path, h).catch(function (err) {
                var _err$response;
                HttpService.errors.push({
                  error: new Error(err),
                  date: new Date()
                });
                if ((err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 401) {
                  _this.onUnauthorizedResponse(err);
                }
                HttpService.handleError(err, "GET");
              });
            case 16:
              return _context2.abrupt("return", _context2.sent);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getAsync(_x4, _x5, _x6) {
        return _getAsync.apply(this, arguments);
      }
      return getAsync;
    }()
  }, {
    key: "postAsync",
    value: function () {
      var _postAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(path, payload, headers) {
        var _this2 = this;
        var responseType,
          url,
          h,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              responseType = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : null;
              url = this.cleanPath(path);
              h = this.getHeaderConfig(headers);
              if (!!responseType) {
                h["responseType"] = responseType;
                h["exposedHeaders"] = "file-name";
              }
              HttpService.debugPrint("POST: " + url);
              _context3.next = 7;
              return _axios.default.post(url, payload, h).catch(function (err) {
                var _err$response2;
                HttpService.errors.push({
                  error: new Error(err),
                  date: new Date()
                });
                if ((err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.status) === 401) {
                  _this2.onUnauthorizedResponse();
                }
                HttpService.handleError(err, "POST");
              });
            case 7:
              return _context3.abrupt("return", _context3.sent);
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function postAsync(_x7, _x8, _x9) {
        return _postAsync.apply(this, arguments);
      }
      return postAsync;
    }()
  }, {
    key: "putAsync",
    value: function () {
      var _putAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(path, payload, headers) {
        var _this3 = this;
        var responseType,
          c,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              responseType = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : null;
              c = this.getHeaderConfig(headers);
              if (!!responseType) c.responseType = responseType;
              path = this.cleanPath(path);
              HttpService.debugPrint("PUT: " + path);
              _context4.next = 7;
              return _axios.default.put(path, payload, c).catch(function (err) {
                var _err$response3;
                if ((err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : _err$response3.status) === 401) {
                  _this3.onUnauthorizedResponse();
                }
                HttpService.handleError(err, "PUT");
              });
            case 7:
              return _context4.abrupt("return", _context4.sent);
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function putAsync(_x10, _x11, _x12) {
        return _putAsync.apply(this, arguments);
      }
      return putAsync;
    }()
  }, {
    key: "uploadAsync",
    value: function () {
      var _uploadAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(path, files, headers) {
        var _headers$ContentType,
          _this4 = this;
        var formData,
          fileId,
          responseType,
          msg,
          i,
          file,
          config,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              formData = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : null;
              fileId = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : "files";
              responseType = _args5.length > 5 && _args5[5] !== undefined ? _args5[5] : null;
              if (!formData) formData = new FormData();
              if (!fileId) fileId = 'files';
              msg = ""; // Update the formData object
              if (!Array.isArray(files)) {
                files = [files];
                msg += "Converted file (object) to files (array). ";
              }
              i = 0;
              for (i = 0; i < files.length; i++) {
                file = files[i];
                formData.append(fileId, file, file.name);
              }
              msg += "File Count: " + i;
              if (!headers) headers = {};
              config = {
                headers: headers
              };
              if (((_headers$ContentType = headers["Content-Type"]) === null || _headers$ContentType === void 0 ? void 0 : _headers$ContentType.includes("multipart/form-data")) !== true) headers["Content-Type"] = "multipart/form-data";
              if (typeof headers['session-id'] === 'undefined' && this.sessionId) config.headers['session-id'] = this.sessionId || "";
              HttpService.debugPrint(msg);
              HttpService.debugPrint('Uploading file: ' + path);
              if (!!responseType) {
                config.responseType = responseType;
              }
              _context5.next = 19;
              return _axios.default.post(this.cleanPath(path), formData, config).catch(function (err) {
                var _err$response4;
                if ((err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : _err$response4.status) === 401) {
                  _this4.onUnauthorizedResponse();
                }
                HttpService.handleError(err, "POST");
              });
            case 19:
              return _context5.abrupt("return", _context5.sent);
            case 20:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function uploadAsync(_x13, _x14, _x15) {
        return _uploadAsync.apply(this, arguments);
      }
      return uploadAsync;
    }()
  }, {
    key: "getBlobAsync",
    value: function () {
      var _getBlobAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(path) {
        var options,
          me,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
              console.warn("Download Options Sending:");
              me = this;
              _context6.next = 5;
              return HttpService.instance.getAsync(path, options, null, "blob").then(function (response) {
                var _response$headers, _response$headers2, _response$headers3, _response$headers3$co, _response$headers3$co2;
                var contentTypeHeader = (response === null || response === void 0 ? void 0 : (_response$headers = response.headers) === null || _response$headers === void 0 ? void 0 : _response$headers["content-type"]) || "application/octet-stream; name=\"\"";
                var contentTypeTokens = contentTypeHeader.split(";");
                var contentType = (contentTypeTokens[0] || "image/png").trim();
                var fileName = (options === null || options === void 0 ? void 0 : options.fileName) || (contentTypeTokens.length < 1 ? contentType.replaceAll("/", ".") : contentTypeTokens[1]) || (response === null || response === void 0 ? void 0 : (_response$headers2 = response.headers) === null || _response$headers2 === void 0 ? void 0 : _response$headers2["file-name"]) || (response === null || response === void 0 ? void 0 : (_response$headers3 = response.headers) === null || _response$headers3 === void 0 ? void 0 : (_response$headers3$co = _response$headers3["content-disposition"]) === null || _response$headers3$co === void 0 ? void 0 : (_response$headers3$co2 = _response$headers3$co.split(";")[1]) === null || _response$headers3$co2 === void 0 ? void 0 : _response$headers3$co2.split("=")[1]) || "file-" + new Date().getTime() + "." + contentType.split("/")[1];
                if (fileName.indexOf("=") > 0) fileName = fileName.split("=")[1].replaceAll("\"", "");
                var blobModel = {
                  blob: new Blob([response.data], {
                    type: contentType
                  }),
                  fileName: fileName,
                  headers: response === null || response === void 0 ? void 0 : response.headers
                };
                if ((options === null || options === void 0 ? void 0 : options.download) === true) {
                  me.downloadBlob(blobModel);
                }
                return blobModel;
              });
            case 5:
              return _context6.abrupt("return", _context6.sent);
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getBlobAsync(_x16) {
        return _getBlobAsync.apply(this, arguments);
      }
      return getBlobAsync;
    }()
  }, {
    key: "downloadBlob",
    value: function downloadBlob(blobModel) {
      if (!(blobModel !== null && blobModel !== void 0 && blobModel.blob)) {
        console.error("Blob Model is invalid: " + _typeof(blobModel));
        return false;
      }
      var href = window.URL.createObjectURL(blobModel.blob);
      var link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', blobModel.fileName); //or any other extension
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(href);
      return true;
    }
  }, {
    key: "deleteAsync",
    value: function () {
      var _deleteAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(path, headers) {
        var _this5 = this;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              path = this.cleanPath(path);
              HttpService.debugPrint("DELETE: " + path);
              _context7.next = 4;
              return _axios.default.delete(path, this.getHeaderConfig(headers)).catch(function (err) {
                var _err$response5;
                if ((err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : _err$response5.status) === 401) {
                  _this5.onUnauthorizedResponse();
                }
                HttpService.handleError(err, "DELETE");
              });
            case 4:
              return _context7.abrupt("return", _context7.sent);
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function deleteAsync(_x17, _x18) {
        return _deleteAsync.apply(this, arguments);
      }
      return deleteAsync;
    }()
  }], [{
    key: "getDomain",
    value: function getDomain() {
      if (typeof window === "undefined") return "";
      return window.location.hostname;
    }
  }, {
    key: "debugPrint",
    value: function debugPrint(message) {
      var _message;
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!HttpService.isDebug) return false;
      if (_typeof(message) === "object") {
        message = JSON.stringify(message, null, 4);
      }
      message = ((_message = message) === null || _message === void 0 ? void 0 : _message.toString()) || null;
      if (!message) return false;
      if (level > 1) console.error(message);else if (level === 1) console.warn(message);else console.log(message);
      return true;
    }
  }, {
    key: "init",
    value: function init() {
      var _process$env, _process$env2, _options, _options2, _options3;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        force: false
      };
      if (typeof console === "undefined") return null;
      if (typeof process === "undefined") {
        console.warn("No 'process' object. Aborting init()");
        return null;
      }
      HttpService.isDebug = ((_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env.NODE_ENV) !== "production";
      console.log('HttpService is good. Env: ' + ((_process$env2 = process.env) === null || _process$env2 === void 0 ? void 0 : _process$env2.NODE_ENV) + ', IsDebug: ' + HttpService.isDebug);
      if (typeof window === "undefined") return null;
      if (typeof options === "boolean") options = {
        force: options
      };else if (typeof options === "string") options = {
        baseUrl: options,
        force: false
      };else if (!options) options = {
        force: false,
        numberValue: options || 0
      };
      if (!((_options = options) !== null && _options !== void 0 && _options.force) && HttpService.isInit) {
        HttpService.debugPrint("HttpService already initialized.");
        return false;
      }
      if (!!((_options2 = options) !== null && _options2 !== void 0 && _options2.baseUrl)) HttpService.httpBaseUrl = options.baseUrl;
      if (process.env.NODE_ENV === "development") {
        HttpService.httpBaseUrl = options.developmentUrl || options.baseUrl || "";
        HttpService.debugPrint("Development Base URL: " + HttpService.httpBaseUrl);
      } else {
        HttpService.httpBaseUrl = options.productionUrl || options.baseUrl || "";
        HttpService.debugPrint("Production Base URL: " + HttpService.httpBaseUrl);
      }
      HttpService.instance = new HttpService();
      if (((_options3 = options) === null || _options3 === void 0 ? void 0 : _options3.register) !== false) HttpService.isInit = true;
      if (!HttpService.ipAddress) HttpService.getIpAddressAsync(false);
      return true;
    }
  }, {
    key: "getWebSession",
    value: function getWebSession() {
      var createIfEmpty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var wsKey = "pi-web-session";
      var ws = localStorage.getItem(wsKey);
      if (!ws && createIfEmpty === true) {
        ws = "pi-" + (Math.random() * 99999999).toString(16).toLowerCase() + "-" + new Date().getTime().toString();
        localStorage.setItem(wsKey, ws);
      }
      return ws;
    }
  }, {
    key: "getViewPortData",
    value: function getViewPortData() {
      var _window$screen, _window$screen2;
      if (typeof window === "undefined") return null;
      if (typeof document === "undefined") return null;
      var data = {};

      // Window size:
      data.windowWidth = window.innerWidth || 0;
      data.windowHeight = window.innerHeight || 0;

      // Screen size:
      data.screenWidth = ((_window$screen = window.screen) === null || _window$screen === void 0 ? void 0 : _window$screen.width) || 0;
      data.screenHeight = ((_window$screen2 = window.screen) === null || _window$screen2 === void 0 ? void 0 : _window$screen2.height) || 0;
      return data;
    }
  }, {
    key: "getIpAddressAsync",
    value: function () {
      var _getIpAddressAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var force,
          handleIpResponse,
          handleIpError,
          _args8 = arguments;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              force = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : false;
              HttpService.staticCount++;
              if (!(typeof window === "undefined")) {
                _context8.next = 5;
                break;
              }
              HttpService.debugPrint("No window, no ip address.", 1);
              return _context8.abrupt("return", HttpService.ipAddress || null);
            case 5:
              if (!(typeof (_axios.default === null || _axios.default === void 0 ? void 0 : _axios.default.get) !== "function")) {
                _context8.next = 9;
                break;
              }
              console.warn("No Axios.get when getting ip");
              HttpService.debugPrint("No Axios, no ip address.", 2);
              return _context8.abrupt("return", HttpService.ipAddress || null);
            case 9:
              if (!(HttpService.staticCount > 1 && !!HttpService.ipAddress)) {
                _context8.next = 13;
                break;
              }
              if (force) {
                _context8.next = 12;
                break;
              }
              return _context8.abrupt("return", HttpService.ipAddress);
            case 12:
              HttpService.staticCount = 0;
            case 13:
              if (!(HttpService.staticCount > 15)) {
                _context8.next = 16;
                break;
              }
              HttpService.debugPrint("Static Count: " + HttpService.staticCount + ". Ip: " + HttpService.ipAddress + ", Exiting.", 2);
              return _context8.abrupt("return", HttpService.ipAddress);
            case 16:
              if (!(typeof HttpService.ipAddress === "string" && HttpService.ipAddress.length > 11 && !force)) {
                _context8.next = 18;
                break;
              }
              return _context8.abrupt("return", HttpService.ipAddress);
            case 18:
              HttpService.debugPrint("Getting ip: " + HttpService.ipAddress + " force: " + force);
              handleIpResponse = function handleIpResponse(rsp) {
                var _rsp$data;
                var ip = (rsp === null || rsp === void 0 ? void 0 : (_rsp$data = rsp.data) === null || _rsp$data === void 0 ? void 0 : _rsp$data.ip) || null;
                if (ip) {
                  HttpService.ipAddress = ip;
                  HttpService.debugPrint('IP Address (' + HttpService.staticCount + ') Set to: ' + ip);
                }
                if (typeof HttpService.onIpAddress === "function") HttpService.onIpAddress(ip);
                return ip;
              };
              handleIpError = function handleIpError(ex) {
                var _ex$response, _ex$response$data;
                HttpService.staticCount = -1;
                console.error("Error getting ip address: " + ((ex === null || ex === void 0 ? void 0 : (_ex$response = ex.response) === null || _ex$response === void 0 ? void 0 : (_ex$response$data = _ex$response.data) === null || _ex$response$data === void 0 ? void 0 : _ex$response$data.message) || (ex === null || ex === void 0 ? void 0 : ex.message)));
                return null;
              };
              _context8.prev = 21;
              _context8.next = 24;
              return _axios.default.get("https://api.ipify.org/?format=json", true).then(handleIpResponse).catch(handleIpError);
            case 24:
              return _context8.abrupt("return", _context8.sent);
            case 27:
              _context8.prev = 27;
              _context8.t0 = _context8["catch"](21);
              console.warn("IP Address Exception (" + HttpService.staticCount + "):" + _context8.t0);
              handleIpError(_context8.t0);
            case 31:
              return _context8.abrupt("return", null);
            case 32:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[21, 27]]);
      }));
      function getIpAddressAsync() {
        return _getIpAddressAsync.apply(this, arguments);
      }
      return getIpAddressAsync;
    }()
  }, {
    key: "createErrorAsync",
    value: function () {
      var _createErrorAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(message) {
        var url,
          severity,
          path,
          data,
          _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              url = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : null;
              severity = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : 3;
              if (message) {
                _context9.next = 4;
                break;
              }
              return _context9.abrupt("return", null);
            case 4:
              if (!(typeof url !== "string" || !url)) {
                _context9.next = 8;
                break;
              }
              if (!(typeof window === "undefined")) {
                _context9.next = 7;
                break;
              }
              return _context9.abrupt("return");
            case 7:
              url = window.location.href;
            case 8:
              path = "/api/system-error";
              data = {
                message: message,
                url: url,
                severity: severity
              };
              _context9.next = 12;
              return HttpService.instance.postAsync(path, data, true).catch(function (ex) {
                HttpService.handleError(ex, "POST");
              });
            case 12:
              return _context9.abrupt("return", _context9.sent);
            case 13:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function createErrorAsync(_x19) {
        return _createErrorAsync.apply(this, arguments);
      }
      return createErrorAsync;
    }()
  }]);
  return HttpService;
}();
_defineProperty(HttpService, "sessionKey", "session-id");
_defineProperty(HttpService, "v", "2.1.0");
_defineProperty(HttpService, "staticCount", 0);
_defineProperty(HttpService, "ipAddress", null);
_defineProperty(HttpService, "httpBaseUrl", "/");
_defineProperty(HttpService, "errors", []);
_defineProperty(HttpService, "isInit", false);
_defineProperty(HttpService, "isDebug", false);
_defineProperty(HttpService, "emptyResponse", {
  data: {},
  message: 'no session id'
});
_defineProperty(HttpService, "instance", new HttpService(false));
HttpService.queue = [];
HttpService.handleError = function (err) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  if (!err) return;
  console.error("Http Default " + method + " Error: " + err);
  throw err;
};
HttpService.onIpAddress = function (ip) {
  var len = -1;
  if (typeof ip === "string" && ip.length > 7) {
    var _q$length;
    var q = HttpService.queue;
    len = (_q$length = q === null || q === void 0 ? void 0 : q.length) !== null && _q$length !== void 0 ? _q$length : 0;
    console.warn("Dequeing Ip Calls (" + len.toString() + "): " + ip);
    HttpService.queue = [];
    for (var i = 0; i < len; i++) {
      if (typeof q[i] === "function") {
        q[i]({
          ip: ip,
          index: i
        });
      }
    }
  }
  return len;
};
var _default = HttpService;
exports.default = _default;