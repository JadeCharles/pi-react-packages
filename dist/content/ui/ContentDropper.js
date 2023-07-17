"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _DropTarget = _interopRequireDefault(require("../../common/ui/drop-target/DropTarget"));
var _material = require("@mui/material");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _AuthenticationService = _interopRequireDefault(require("../../authentication/services/AuthenticationService"));
var _DocumentService = _interopRequireDefault(require("../services/DocumentService"));
var _FormButton = _interopRequireDefault(require("../../common/ui/FormButton"));
require("./Content.css");
var _FileUploadModel = _interopRequireDefault(require("../models/FileUploadModel"));
var _DialogBox = _interopRequireDefault(require("../../common/ui/dialog-box/DialogBox"));
var _DialogBoxController = _interopRequireDefault(require("../../common/ui/dialog-box/DialogBoxController"));
var _LogoSvgs = require("../../common/ui/svgs/LogoSvgs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ContentDropper = function ContentDropper(props) {
  var _content$files, _content$textItems;
  var _;
  var onPasteFiles = props.onPasteFiles,
    onPasteText = props.onPasteText,
    items = props.items,
    onRefresh = props.onRefresh,
    onDrop = props.onDrop,
    onUpload = props.onUpload,
    controller = props.controller;
  var initialState = {
    files: [],
    docs: items || [],
    textItems: []
  };
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    contentView = _useState2[0],
    setContentView = _useState2[1];
  var _useState3 = (0, _react.useState)(controller || new _DialogBoxController.default("View Content")),
    _useState4 = _slicedToArray(_useState3, 2),
    contentViewerDialogController = _useState4[0],
    setContentViewerDialogController = _useState4[1];
  var _useState5 = (0, _react.useState)(initialState),
    _useState6 = _slicedToArray(_useState5, 2),
    content = _useState6[0],
    setContent = _useState6[1];
  var onFilesDrop = function onFilesDrop(files, textItems) {
    console.log("FILES DROPPED OK");
    _ = Promise.all([_FileUploadModel.default.fromFilesAsync(files), _FileUploadModel.default.fromTextItemsAsync(textItems)]).then(function (values) {
      // TODO: Clean list
      // values.map((v) => { 
      //     console.log(v);
      // });

      var newFiles = values.filter(function (v) {
        return v.length > 0 && !!v[0].filePath;
      }).flat();
      var newText = values.filter(function (v) {
        return v.length > 0 && !!v[0].text;
      }).flat();
      if (typeof onDrop === 'function') onDrop(newFiles, newText);
      var co = {
        files: content.files.concat(newFiles),
        docs: content.docs,
        textItems: content.textItems.concat(newText)
      };
      setContent(co);
    });
  };
  var onTextContentDrop = function onTextContentDrop(textData) {
    console.log("Text Content Drop: " + textData);
  };
  var onFilesPasted = function onFilesPasted(files) {
    _FileUploadModel.default.fromFilesAsync(files).then(function (newFiles) {
      var c = {
        files: content.files.concat(newFiles),
        docs: content.docs,
        textItems: content.textItems
      };
      setContent(c);
    });
  };
  var onTextPasted = function onTextPasted(text) {
    console.log("On text pasted: " + text);
  };
  var uploadAsync = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof onUpload !== 'function')) {
              _context.next = 3;
              break;
            }
            console.log("onUpload has not been set");
            return _context.abrupt("return");
          case 3:
            console.log("OnUpload");
            _context.next = 6;
            return onUpload(content === null || content === void 0 ? void 0 : content.files, content === null || content === void 0 ? void 0 : content.textItems, e);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function uploadAsync(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      if (!!contentView) contentViewerDialogController.open(null, "View Content");else contentViewerDialogController.close();
    }, 100);
  }, [contentView]);
  var sid = _AuthenticationService.default.instance.sessionId;
  var viewContentInTab = function viewContentInTab(dof) {
    var _dof$contentType;
    console.log(JSON.stringify(dof));
    if ((_dof$contentType = dof.contentType) !== null && _dof$contentType !== void 0 && _dof$contentType.startsWith("image")) {
      window.open("/secure/document/" + dof.fileName + "?session-id=" + sid);
      return;
    }
    window.open(dof.uri);
  };
  var viewExpanded = function viewExpanded(doc) {
    var _doc$contentType;
    if (!!doc.text || ((_doc$contentType = doc.contentType) === null || _doc$contentType === void 0 ? void 0 : _doc$contentType.indexOf("text/")) >= 0) {
      setContentView( /*#__PURE__*/_react.default.createElement("pre", {
        className: "text"
      }, doc.text || doc.content));
      return;
    }
    var imagePath = doc.filePath || "/secure/document/" + doc.fileName + (doc.fileName && doc.fileName.includes("?") ? "&" : "?") + "session-id=" + sid;
    var imageElement = /*#__PURE__*/_react.default.createElement("img", {
      src: imagePath,
      alt: ""
    });
    setContentView( /*#__PURE__*/_react.default.createElement("div", null, imageElement));
  };
  var deleteDocumentAsync = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dof, index) {
      var documentId, removed;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            documentId = dof.id;
            console.warn("Remove: " + documentId);
            removed = {
              files: content.files.filter(function (f) {
                return f.id !== documentId;
              }),
              docs: content.docs.filter(function (d) {
                return d.id !== documentId;
              }),
              textItems: content.textItems.filter(function (t) {
                return t.id !== documentId;
              })
            };
            console.log("Deleting: " + _typeof(dof.contentTypeKey).toString());
            setContent(removed);
            if (!(typeof dof.contentTypeKey === 'number')) {
              _context2.next = 9;
              break;
            }
            _context2.next = 8;
            return _DocumentService.default.instance.deleteDocumentAsync(documentId);
          case 8:
            if (typeof onRefresh === 'function') onRefresh();
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function deleteDocumentAsync(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var createActionPanel = function createActionPanel(dof) {
    var isDoc = typeof dof.contentTypeKey === 'number';
    var isUrl = !!dof.text && dof.contentType === "text/uri-list";
    var tabView = isDoc || isUrl ? /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick() {
        return viewContentInTab(dof);
      },
      title: "Open in new tab"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faArrowUpRightFromSquare
    })) : null;
    var expandedView = /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick() {
        return viewExpanded(dof);
      },
      title: "Large View"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faExpand
    }));
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "document-action-panel"
    }, /*#__PURE__*/_react.default.createElement("label", null, dof.name), /*#__PURE__*/_react.default.createElement("div", null, expandedView, tabView, /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick() {
        return deleteDocumentAsync(dof);
      },
      className: "btn btn-danger btn-sm"
    }, isDoc ? "Delete" : "Remove")));
  };
  var getDocumentThumbnailElement = function getDocumentThumbnailElement(f) {
    if (!!f.contentType && f.contentType.startsWith("image") && !f.filePath) {
      var imagePath = "/secure/document/128x128/" + f.fileName + (f.fileName && f.fileName.includes("?") ? "&" : "?") + "session-id=" + sid;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: imagePath,
        style: {
          width: "100px",
          height: "100px",
          lineHeight: "0",
          objectFit: "cover"
        },
        alt: ""
      });
    }

    // Pre-uploaded items
    if (!!f.filePath) {
      var _imagePath = f.filePath;
      return /*#__PURE__*/_react.default.createElement("img", {
        src: _imagePath,
        style: {
          width: "100px",
          height: "100px",
          lineHeight: "0",
          objectFit: "cover"
        },
        alt: ""
      });
    }
    var icon = _freeSolidSvgIcons.faFile;
    var typeUri = "text/uri-list";
    if (!!f.uri && f.uri.indexOf("figma.com") >= 0) icon = _LogoSvgs.piFigma;else if (f.contentType === typeUri || f.contentType === typeUri) icon = _freeSolidSvgIcons.faGlobeAfrica;else console.warn("Unknown content type: " + f.contentType);
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "svg"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: icon
    }));
  };
  var previewItems = ((content === null || content === void 0 ? void 0 : content.files) || []).concat((content === null || content === void 0 ? void 0 : content.textItems) || []).concat((content === null || content === void 0 ? void 0 : content.docs) || []);
  var filePreview = !!previewItems ? previewItems.map(function (f, i) {
    var imageElement = getDocumentThumbnailElement(f);
    var panel = createActionPanel(f);
    return /*#__PURE__*/_react.default.createElement(_material.Tooltip, {
      title: panel,
      key: "file-preview-" + i,
      arrow: true,
      placement: "top"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "document-preview-item",
      style: {
        lineHeight: "0",
        padding: "8px"
      },
      onClick: function onClick(e) {
        return deleteDocumentAsync(f.id, f.index);
      }
    }, imageElement));
  }) : null;
  var uploadButton = ((content === null || content === void 0 ? void 0 : (_content$files = content.files) === null || _content$files === void 0 ? void 0 : _content$files.length) || 0) + ((content === null || content === void 0 ? void 0 : (_content$textItems = content.textItems) === null || _content$textItems === void 0 ? void 0 : _content$textItems.length) || 0) > 0 ? /*#__PURE__*/_react.default.createElement(_FormButton.default, {
    onClick: uploadAsync,
    label: "Upload"
  }) : null;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DropTarget.default, {
    className: "content-dropper x-large",
    onDrop: function onDrop(files, items) {
      return onFilesDrop(files, items);
    },
    onPaste: function onPaste(files) {
      return onFilesPasted(files);
    },
    onPasteText: function onPasteText(text) {
      return onTextPasted(text);
    }
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", null, "Drop Files Here."), /*#__PURE__*/_react.default.createElement("span", null, uploadButton)), /*#__PURE__*/_react.default.createElement("div", {
    className: "file-previews"
  }, filePreview)), /*#__PURE__*/_react.default.createElement(_DialogBox.default, {
    controller: contentViewerDialogController,
    fullScreen: true,
    hasCancelButton: false,
    onOkay: function onOkay() {
      return 100;
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "view-content"
  }, contentView)));
};
var _default = ContentDropper;
exports.default = _default;