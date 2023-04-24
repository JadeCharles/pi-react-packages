"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _NumberDisplay = _interopRequireDefault(require("../formatting/NumberDisplay"));
var _this = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Pager = function Pager(props) {
  var id = props.id,
    onPageClick = props.onPageClick,
    items = props.items,
    viewCount = props.viewCount,
    controller = props.controller,
    showSinglePage = props.showSinglePage,
    dots = props.dots,
    preDots = props.preDots,
    postDots = props.postDots;
  var _useState = (0, _react.useState)(controller.page),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  if (!controller) {
    console.error('Pager: controller is required');
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
  if (!items || !Array.isArray(items)) {
    console.warn('No items were passed to pager with id: ' + id);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "pager",
      id: id
    });
  }
  if (typeof viewCount !== 'number') viewCount = 2;
  var pageViewCount = controller.pageViewCount;
  if (!pageViewCount || typeof pageViewCount !== 'number' || pageViewCount < 2) pageViewCount = 2;
  if (!id) id = 'pager-' + new Date().getTime().toString();
  var onPageChange = function onPageChange(pg, e) {
    if (pg === currentPage) return;
    controller.setCurrentPage(pg);
    setCurrentPage(pg);
    if (typeof onPageClick === 'function') onPageClick(pg, e);else if (typeof (controller === null || controller === void 0 ? void 0 : controller.onPageClick) === 'function') controller.onPageClick(pg, e);else console.error('No onPageClick event was given (' + _typeof(controller.onPageClick).toString() + '). Set the controller.onPageClick property or pass an onPageClick function to the pager.');
  };
  var pageSize = controller.pageSize;
  if (!pageSize || typeof pageSize !== 'number') pageSize = 20;

  // TODO: PageViewCount, PageViewRangeCount, etc
  var pageCount = Math.ceil(items.length / pageSize);
  if (pageCount < 2 && showSinglePage !== true) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  if (!dots) dots = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\u2022\u2022\u2022");else if (typeof dots === 'string') dots = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dots);
  var pageNumbers = [];
  var preView = preDots || dots;
  var postView = postDots || dots;
  for (var i = 0; i < pageCount; i++) {
    var c = i === currentPage ? ' selected' : '';
    var pg = i + 1;
    var show = currentPage < i + viewCount + 1 && currentPage > i - viewCount - 1 || i < viewCount || i > pageCount - (viewCount + 1);
    if (show) {
      var pageElement = /*#__PURE__*/_react.default.createElement("a", {
        className: 'pager-item pager-item-' + i.toString() + c,
        onClick: onPageChange.bind(_this, i),
        key: i
      }, /*#__PURE__*/_react.default.createElement(_NumberDisplay.default, {
        decimalPlaces: 0
      }));
      pageNumbers.push(pageElement);
    } else if (!!preView && i < currentPage) {
      pageNumbers.push( /*#__PURE__*/_react.default.createElement("span", {
        className: "pager-item-pre-view",
        key: i
      }, preView));
      preView = "";
    } else if (!!postView && i > currentPage) {
      pageNumbers.push( /*#__PURE__*/_react.default.createElement("span", {
        className: "pager-item-post-view",
        key: i
      }, postView));
      postView = "";
    } else {
      //pageNumbers.push((<b key={i}>.</b>));
    }
  }
  var prev = currentPage - 1;
  if (prev < 0) prev = 0;
  var next = currentPage + 1;
  if (next >= pageCount) next = pageCount - 1;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pager",
    id: id
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
    className: 'pager-prev pager-arrow',
    onClick: onPageChange.bind(_this, prev)
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretLeft
  })), pageNumbers, /*#__PURE__*/_react.default.createElement("a", {
    className: 'pager-next pager-arrow',
    onClick: onPageChange.bind(_this, next)
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretRight
  }))), props.children, /*#__PURE__*/_react.default.createElement("span", null));
};
var _default = Pager;
exports.default = _default;