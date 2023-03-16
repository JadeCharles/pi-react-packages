"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _HttpService = _interopRequireDefault(require("../../services/HttpService"));
var _DropTarget = _interopRequireDefault(require("../drop-target/DropTarget"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FileUploader = /*#__PURE__*/function (_React$Component) {
  _inherits(FileUploader, _React$Component);
  var _super = _createSuper(FileUploader);
  function FileUploader(props) {
    var _this;
    _classCallCheck(this, FileUploader);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedFile: null,
      url: _this.props.url,
      previewSize: _this.props.previewSize,
      onComplete: _this.props.onComplete,
      onError: _this.props.onError,
      fileSelectorElement: _this.props.fileSelectorElement,
      previewElement: _this.props.previewElement,
      displayData: null,
      cancelElement: _this.props.cancelElement || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Cancel"),
      imageUrl: _this.props.imageUrl || null,
      initialImageUrl: _this.props.imageUrl
    });
    _defineProperty(_assertThisInitialized(_this), "setDisplayImage", function (selectedFile) {
      var me = _assertThisInitialized(_this);
      var reader = new FileReader();
      reader.onload = function (e) {
        me.setState({
          selectedFile: selectedFile,
          imageUrl: e.target.result
        });
      };
      reader.readAsDataURL(selectedFile);
    });
    _defineProperty(_assertThisInitialized(_this), "onFileChange", function (event) {
      console.log('File Change URL: ' + _this.state.url);
      _this.setDisplayImage(event.target.files[0]);
    });
    _defineProperty(_assertThisInitialized(_this), "onFileUpload", function (e) {
      if (!_this.state.url) {
        console.error('Failed to upload. No url specified.');
        return;
      }
      var me = _assertThisInitialized(_this);
      _HttpService.default.instance.uploadAsync(_this.state.url, _this.state.selectedFile).then(function (rsp) {
        if (typeof me.onComplete === 'function') {
          me.onComplete(rsp.data);
        }
        console.log("Upload Complete.");
        me.setState({
          selectedFile: null,
          imageUrl: rsp.data.url
        });
      }).catch(function (err) {
        if (typeof me.onError === 'function') {
          me.onError(err);
        }
        console.error('Failed to upload file.', err);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      console.log("Toast");
    });
    _defineProperty(_assertThisInitialized(_this), "fileData", function (componentId) {
      var invokeFileDialog = function invokeFileDialog(e) {
        console.log('Invoke: ' + componentId);
        var fileElement = document.getElementById(componentId);
        if (!fileElement) console.warn("No File Element to invoke.");else fileElement.click();
      };
      var imageId = 'image-upload-' + componentId;
      var url = _this.state.imageUrl || _this.state.initialImageUrl;
      var img = !!url ? /*#__PURE__*/_react.default.createElement("img", {
        id: imageId,
        className: "file-upload-img",
        src: url,
        alt: "Image"
      }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faGhost
      });
      var imageElement = /*#__PURE__*/_react.default.createElement("div", {
        className: "file-selector-image"
      }, /*#__PURE__*/_react.default.createElement("span", null, img));
      if (_this.state.selectedFile) {
        console.log('File Details: ' + _this.state.url);
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "file-selector selected"
        }, /*#__PURE__*/_react.default.createElement("a", {
          onClick: function onClick(e) {
            return invokeFileDialog(e);
          }
        }, imageElement), /*#__PURE__*/_react.default.createElement("ul", {
          className: "file-selector-detail-list"
        }, /*#__PURE__*/_react.default.createElement("li", null, "File Name: ", _this.state.selectedFile.name), /*#__PURE__*/_react.default.createElement("li", null, "File Type: ", _this.state.selectedFile.type), /*#__PURE__*/_react.default.createElement("li", null, "Last Modified:", " ", " ", _this.state.selectedFile.lastModifiedDate.toDateString())));
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "file-selector"
        }, /*#__PURE__*/_react.default.createElement("a", {
          onClick: function onClick(e) {
            return invokeFileDialog(e);
          }
        }, imageElement), _this.state.fileSelectorElement);
      }
    });
    _this.contentRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _createClass(FileUploader, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var content = this.props.children || null;
      var componentId = this.props.componentId || 'file-upload-' + new Date().getTime().toString();
      var imageId = 'image-upload-' + componentId;
      var me = this;
      var invokeFileDialog = function invokeFileDialog(e) {
        var fileElement = document.getElementById(componentId);
        if (!fileElement) {
          console.warn("No file element to invoke");
          return;
        }
        fileElement.click();
      };
      var onDropFile = function onDropFile(files) {
        if (files.length === 0) return;
        var file = files[0];
        me.setDisplayImage(file);
      };
      if (content) {
        content = /*#__PURE__*/_react.default.createElement("div", {
          className: "file-upload-invoker",
          onClick: invokeFileDialog
        }, content);
      }
      var cn = this.state.selectedFile ? ' selected' : '';
      var onCancel = function onCancel(e) {
        _this2.setState({
          selectedFile: null,
          imageUrl: _this2.state.initialImageUrl
        });
      };
      return /*#__PURE__*/_react.default.createElement(_DropTarget.default, {
        className: "upload-drop",
        onDrop: onDropFile
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "file-upload-container" + cn,
        id: 'component-' + componentId
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "file-information"
      }, this.fileData(componentId)), /*#__PURE__*/_react.default.createElement("div", {
        className: "file-upload-form-elements",
        ref: this.contentRef
      }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("input", {
        className: "file-upload-element",
        id: componentId,
        onClick: this.handleClick.bind(this),
        type: "file",
        onChange: this.onFileChange
      })), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("button", {
        className: "file-upload-button",
        onClick: this.onFileUpload
      }, "Upload File")), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
        onClick: onCancel,
        className: "file-upload-cancel"
      }, this.state.cancelElement))), content));
    }
  }], [{
    key: "readFileContents",
    value: function readFileContents(files, callback) {
      if (!files || !((files === null || files === void 0 ? void 0 : files.length) > 0)) {
        var filesType = _typeof(files).toString();
        console.error("Failed to read HTML form file contents: no valid files provided (" + (files === null || files === void 0 ? void 0 : files.length) + "): " + filesType);
        return null;
      }
      var newFiles = [];
      var countDown = files.length;
      var _loop = function _loop(i) {
        var reader = new FileReader();
        reader.onload = function (ev) {
          var fileItem = {
            filePath: ev.target.result,
            file: files[i],
            name: files[i].name,
            size: files[i].size,
            title: ""
          };
          newFiles.push(fileItem);
          countDown--;
          if (countDown <= 0) {
            // When all files are read/loaded asynchronously, set the file list state view
            if (typeof callback === 'function') callback(newFiles);
          }
        };
        reader.readAsDataURL(files[i]);
      };
      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    }
  }]);
  return FileUploader;
}(_react.default.Component);
exports.default = FileUploader;