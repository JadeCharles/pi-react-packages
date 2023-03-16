"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DragController = _interopRequireDefault(require("./DragController"));
var _DragDataModel = _interopRequireDefault(require("./DragDataModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DragBox = function DragBox(props) {
  var data = props.data,
    children = props.children,
    className = props.className,
    ignore = props.ignore,
    id = props.id,
    onDrag = props.onDrag;
  var ignoreIds = (!!ignore ? Array.isArray(ignore) ? ignore : [ignore] : []).map(function (i) {
    return i.toString();
  });
  var onDragger = function onDragger(e) {
    var payload = {
      data: data,
      dragId: id,
      id: Math.floor(Math.random() * 100000000000000000).toString(36),
      source: e.currentTarget,
      ignoreIds: ignoreIds
    };
    var model = new _DragDataModel.default(payload);
    _DragController.default.instance.setData(model);
    if (typeof onDrag === 'function') onDrag(e, model);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: ("dragger " + (className || "")).trim(),
    draggable: true,
    onDragStart: function onDragStart(e) {
      return onDragger(e);
    }
  }, children);
};
var _default = DragBox;
exports.default = _default;