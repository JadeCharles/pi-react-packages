"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DragController = _interopRequireDefault(require("./DragController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DropBox = function DropBox(props) {
  var onDrop = props.onDrop,
    onEnter = props.onEnter,
    onExit = props.onExit,
    onMove = props.onMove,
    onCancel = props.onCancel,
    children = props.children,
    className = props.className,
    id = props.id,
    ignore = props.ignore,
    data = props.data;
  var _React$useState = _react.default.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    overClassName = _React$useState2[0],
    setOverClassName = _React$useState2[1];
  var ignoreIds = (!!ignore ? Array.isArray(ignore) ? ignore : [ignore] : []).map(function (i) {
    return i.toString();
  });
  var didDrop = false;
  var onItemDrop = function onItemDrop(e) {
    e.preventDefault();
    didDrop = true;
    var data = _DragController.default.instance.getData();
    if (typeof onDrop === 'function') onDrop(e, data);
    setOverClassName("dropped");
  };
  var onDragEnter = function onDragEnter(e) {
    e.preventDefault();
    var data = _DragController.default.instance.getData();
    if (typeof onEnter === 'function') onEnter(e, data);
    setOverClassName("over");
  };
  var onDragOver = function onDragOver(e) {
    e.preventDefault();
    var data = _DragController.default.instance.getData();
    if (typeof onMove === 'function') onMove(e, data);
    setOverClassName("over");
  };
  var onDragLeave = function onDragLeave(e) {
    e.preventDefault();
    var data = _DragController.default.instance.getData();
    if (typeof onExit === 'function') onExit(e, data);
    setOverClassName("");
  };
  var onDragEnd = function onDragEnd(e) {
    e.preventDefault();
    if (didDrop) {
      didDrop = false;
      return;
    }
    if (typeof onCancel === 'function') onCancel(e);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ("dropper " + (className || "") + " " + overClassName).trim(),
    id: id,
    onDragEnd: onDragEnd,
    onDragEnter: onDragEnter,
    onDrop: onItemDrop,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave
  }, children);
};
var _default = DropBox;
exports.default = _default;