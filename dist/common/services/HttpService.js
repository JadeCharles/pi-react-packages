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
    var _this = this;
    _classCallCheck(this, HttpService);
    this.baseUrl = '';
    this.sessionId = null;
    this.onUnauthorizedResponse = function (err) {
      console.error('Unauthorized response (default)');
      if (!!_this.sessionId) {
        _this.sessionId = null;
        _this.setSessionId(null);
      }
      return err || null;
    };
    var _ = this.getIpAddressAsync();
  }
  _createClass(HttpService, [{
    key: "setSessionId",
    value: function setSessionId(sessionId) {
      this.sessionId = sessionId;
    }
  }, {
    key: "getHeaderConfig",
    value: function getHeaderConfig(headers) {
      var _this$sessionId$toStr, _this$sessionId, _this$ipAddress$toStr, _this$ipAddress;
      if (!!headers) return {
        headers: headers
      };
      headers = {
        'Content-Type': 'application/json'
      };
      if (this.sessionId) headers['session-id'] = (_this$sessionId$toStr = (_this$sessionId = this.sessionId) === null || _this$sessionId === void 0 ? void 0 : _this$sessionId.toString()) !== null && _this$sessionId$toStr !== void 0 ? _this$sessionId$toStr : "";
      if (this.ipAddress) headers['X-Forwarded-For'] = (_this$ipAddress$toStr = (_this$ipAddress = this.ipAddress) === null || _this$ipAddress === void 0 ? void 0 : _this$ipAddress.toString()) !== null && _this$ipAddress$toStr !== void 0 ? _this$ipAddress$toStr : "";
      return {
        headers: headers
      };
    }
  }, {
    key: "createUrlWithDateRange",
    value: function createUrlWithDateRange(path, startDate, endDate) {
      if (_DateTime.default.isDate(startDate)) startDate = startDate.toDate().toFormDate();else startDate = '';
      if (_DateTime.default.isDate(endDate)) endDate = endDate.toDate().toFormDate();else endDate = '';
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
        var url;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = this.createUrlWithDateRange(path, startDate, endDate);
              console.log('Date Url: ' + url);
              _context.next = 4;
              return HttpService.instance.getAsync(url);
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
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
    key: "getIpAddressAsync",
    value: function () {
      var _getIpAddressAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var me;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              me = this;
              _context2.next = 3;
              return this.getAsync("https://api.ipify.org/?format=json", true).then(function (rsp) {
                var _rsp$data;
                var ip = rsp === null || rsp === void 0 ? void 0 : (_rsp$data = rsp.data) === null || _rsp$data === void 0 ? void 0 : _rsp$data.ip;
                if (ip) {
                  me.ipAddress = ip;
                  console.log('IP Address Set to: ' + ip);
                  return ip;
                }
                return null;
              });
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getIpAddressAsync() {
        return _getIpAddressAsync.apply(this, arguments);
      }
      return getIpAddressAsync;
    }()
  }, {
    key: "cleanPath",
    value: function cleanPath(path) {
      if (!path) return '';
      if (!path.startsWith('http')) {
        if (!path.startsWith('/')) path = '/' + path;
        path = this.baseUrl + path;
      }
      return path;
    }
  }, {
    key: "getAsync",
    value: function () {
      var _getAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(path, isPublic, headers) {
        var _this2 = this;
        var h;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              h = this.getHeaderConfig(headers);
              if (!(!isPublic && !h["headers"][HttpService.sessionKey])) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return", HttpService.emptyResponse);
            case 3:
              _context3.next = 5;
              return _axios.default.get(this.cleanPath(path), h).catch(function (err) {
                var _err$response;
                if ((err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 401) {
                  _this2.onUnauthorizedResponse(err);
                }
                throw err;
              });
            case 5:
              return _context3.abrupt("return", _context3.sent);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getAsync(_x4, _x5, _x6) {
        return _getAsync.apply(this, arguments);
      }
      return getAsync;
    }()
  }, {
    key: "postAsync",
    value: function () {
      var _postAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(path, payload, headers) {
        var _this3 = this;
        var url, h;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              url = this.cleanPath(path);
              h = this.getHeaderConfig(headers);
              _context4.next = 4;
              return _axios.default.post(url, payload, h).catch(function (err) {
                if (err.response.status === 401) {
                  _this3.onUnauthorizedResponse();
                }
                throw err;
              });
            case 4:
              return _context4.abrupt("return", _context4.sent);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function postAsync(_x7, _x8, _x9) {
        return _postAsync.apply(this, arguments);
      }
      return postAsync;
    }()
  }, {
    key: "putAsync",
    value: function () {
      var _putAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(path, payload, headers) {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _axios.default.put(this.cleanPath(path), payload, this.getHeaderConfig(headers)).catch(function (err) {
                if (err.response.status === 401) {
                  _this4.onUnauthorizedResponse();
                }
                throw err;
              });
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function putAsync(_x10, _x11, _x12) {
        return _putAsync.apply(this, arguments);
      }
      return putAsync;
    }()
  }, {
    key: "uploadAsync",
    value: function () {
      var _uploadAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(path, files, headers, fileId) {
        var _this5 = this;
        var responseType,
          formData,
          i,
          file,
          config,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              responseType = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : null;
              formData = new FormData();
              if (!fileId) fileId = 'files';

              // Update the formData object
              if (!Array.isArray(files)) files = [files];
              for (i = 0; i < files.length; i++) {
                file = files[i];
                formData.append(fileId, file, file.name);
              }
              if (!headers) headers = {};
              config = {
                headers: headers
              };
              if (typeof headers['session-id'] === 'undefined' && this.sessionId) config.headers['session-id'] = this.sessionId || "";
              console.log('Uploading file: ' + path);
              if (responseType) {
                //axios.responseType = responseType;
                config.responseType = responseType;
              }
              _context6.next = 12;
              return _axios.default.post(this.cleanPath(path), formData, config).catch(function (err) {
                if (err.response.status === 401) {
                  _this5.onUnauthorizedResponse();
                }
                throw err;
              });
            case 12:
              return _context6.abrupt("return", _context6.sent);
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function uploadAsync(_x13, _x14, _x15, _x16) {
        return _uploadAsync.apply(this, arguments);
      }
      return uploadAsync;
    }()
  }, {
    key: "deleteAsync",
    value: function () {
      var _deleteAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(path, headers) {
        var _this6 = this;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _axios.default.delete(this.cleanPath(path), this.getHeaderConfig(headers)).catch(function (err) {
                if (err.response.status === 401) {
                  _this6.onUnauthorizedResponse();
                }
                throw err;
              });
            case 2:
              return _context7.abrupt("return", _context7.sent);
            case 3:
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
      return window.location.hostname;
    }
  }]);
  return HttpService;
}();
exports.default = HttpService;
_defineProperty(HttpService, "sessionKey", "session-id");
_defineProperty(HttpService, "emptyResponse", {
  data: {},
  message: 'no session id'
});
console.log('HttpService is good.');
_defineProperty(HttpService, "instance", new HttpService());