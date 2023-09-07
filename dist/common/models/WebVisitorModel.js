"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var WebVisitorModel = /*#__PURE__*/function () {
  function WebVisitorModel(json) {
    _classCallCheck(this, WebVisitorModel);
    if (!json) json = {};
    this.id = json.id || null;
    this.vendor = json.vendor || null;
    this.platform = json.platform || null;
    this.city = json.city || null;
    this.country = json.country || null;
    this.region = json.region || null;
    this.maxTouchPoints = json.max_touch_points || 0;
    this.pdfViewerEnabled = json.pdf_viewer_enabled || null;
    this.hardwareConcurrency = json.hardware_concurrency || 0;
    this.cookieEnabled = json.cookie_enabled || null;
    this.appCodeName = json.app_code_name || null;
    this.appName = json.app_name || null;
    this.appVersion = json.app_version || null;
    this.ipAddress = json.ip_address || null;
    this.vendorSub = json.vendor_sub || null;
    this.productSub = json.product_sub || null;
    this.product = json.product || null;
    this.userAgent = json.user_agent || null;
    this.language = json.language || null;
    this.mediaDevices = json.media_devices || null;
    this.onLine = json.on_line || null;
    this.webdriver = json.webdriver || null;
    this.deviceMemory = json.device_memory || 0;
    this.domain = json.domain || "";
    this.path = json.path || "";
    this.referrer = json.referrer || json.referer || null;
    this.webSession = json.web_session || null;
    this.attribution = json.attribution || null;
    this.created = !!json.created ? new Date(json.created) : null;
    this.modified = !!json.modified ? new Date(json.modified) : null;
  }
  _createClass(WebVisitorModel, [{
    key: "toJson",
    value: function toJson() {
      return {
        domain: this.domain,
        max_touch_points: this.maxTouchPoints,
        path: this.path || null,
        referrer: this.referrer || null,
        web_session: this.webSession,
        attribution: this.attribution || null,
        pdf_viewer_enabled: this.pdfViewerEnabled,
        hardware_concurrency: this.hardwareConcurrency,
        cookie_enabled: this.cookieEnabled,
        app_code_name: this.appCodeName,
        app_name: this.appName,
        app_version: this.appVersion,
        ip_address: this.ipAddress,
        vendor_sub: this.vendorSub,
        product_sub: this.productSub,
        vendor: this.vendor,
        platform: this.platform,
        product: this.product,
        user_agent: this.userAgent,
        language: this.language,
        media_devices: this.mediaDevices,
        on_line: this.onLine,
        webdriver: this.webdriver,
        device_memory: this.deviceMemory
      };
    }
  }, {
    key: "searchFor",
    value: function searchFor(term) {
      var _this$maxTouchPoints, _this$path, _this$hardwareConcurr, _this$appCodeName, _this$appName, _this$appVersion, _this$ipAddress, _this$vendorSub, _this$productSub, _this$vendor, _this$platform, _this$product, _this$userAgent, _this$language, _this$mediaDevices, _this$deviceMemory, _this$id;
      if (typeof term === "number") term = term.toString();
      if (!term) return true;
      term = term.toLowerCase();
      if (((_this$maxTouchPoints = this.maxTouchPoints) === null || _this$maxTouchPoints === void 0 ? void 0 : _this$maxTouchPoints.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$path = this.path) === null || _this$path === void 0 ? void 0 : _this$path.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$hardwareConcurr = this.hardwareConcurrency) === null || _this$hardwareConcurr === void 0 ? void 0 : _this$hardwareConcurr.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$appCodeName = this.appCodeName) === null || _this$appCodeName === void 0 ? void 0 : _this$appCodeName.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$appName = this.appName) === null || _this$appName === void 0 ? void 0 : _this$appName.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$appVersion = this.appVersion) === null || _this$appVersion === void 0 ? void 0 : _this$appVersion.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$ipAddress = this.ipAddress) === null || _this$ipAddress === void 0 ? void 0 : _this$ipAddress.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$vendorSub = this.vendorSub) === null || _this$vendorSub === void 0 ? void 0 : _this$vendorSub.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$productSub = this.productSub) === null || _this$productSub === void 0 ? void 0 : _this$productSub.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$vendor = this.vendor) === null || _this$vendor === void 0 ? void 0 : _this$vendor.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$platform = this.platform) === null || _this$platform === void 0 ? void 0 : _this$platform.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$product = this.product) === null || _this$product === void 0 ? void 0 : _this$product.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$userAgent = this.userAgent) === null || _this$userAgent === void 0 ? void 0 : _this$userAgent.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$language = this.language) === null || _this$language === void 0 ? void 0 : _this$language.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$mediaDevices = this.mediaDevices) === null || _this$mediaDevices === void 0 ? void 0 : _this$mediaDevices.toString().toLowerCase().indexOf(term)) >= 0) return true;
      if (((_this$deviceMemory = this.deviceMemory) === null || _this$deviceMemory === void 0 ? void 0 : _this$deviceMemory.toString().toLowerCase().indexOf(term)) >= 0) return true;
      return term === ((_this$id = this.id) === null || _this$id === void 0 ? void 0 : _this$id.toLowerCase());
    }
  }], [{
    key: "getWebSession",
    value: function getWebSession() {
      var createIfEmpty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var wsKey = "pi-web-session";
      var ws = localStorage.getItem(wsKey);
      if (!ws && createIfEmpty) {
        ws = "pi-" + (Math.random() * 99999999).toString(16).toLowerCase() + "-" + new Date().getTime().toString();
        localStorage.setItem(wsKey, ws);
      }
      return ws;
    }
  }, {
    key: "getParam",
    value: function getParam() {
      var qsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ref";
      if (typeof window === "undefined") return null;
      var ws = window.location.search;
      if (!ws) return null;
      if (ws.startsWith("?")) ws = ws.substring(1);
      var p = ws.split("&").find(function (pm) {
        return pm.startsWith(qsParam + "=");
      });
      if (p === null || typeof p !== "string") return null;
      var index = p.indexOf("=");
      return index >= 0 && index < p.length ? p.substring(index + 1) : "";
    }
  }, {
    key: "getAttribution",
    value: function getAttribution() {
      var wsKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "pi-attribution";
      var value = WebVisitorModel.getParam();
      if (!!value) return WebVisitorModel.setAttribution(wsKey, value);
      return localStorage.getItem(wsKey) || null;
    }
  }, {
    key: "setAttribution",
    value: function setAttribution() {
      var wsKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "pi-attribution";
      var value = arguments.length > 1 ? arguments[1] : undefined;
      if (typeof value === "undefined" || value === null) {
        localStorage.removeItem(wsKey);
        return null;
      }
      localStorage.setItem(wsKey, value);
      return value;
    }
  }, {
    key: "createJson",
    value: function createJson() {
      var _navigator$mediaDevic;
      var ipAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (typeof navigator === "undefined") return {};
      return {
        domain: typeof window !== "undefined" ? window.location.hostname : "",
        path: typeof window !== "undefined" ? window.location.pathname : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
        attribution: WebVisitorModel.getAttribution(),
        web_session: WebVisitorModel.getWebSession(true),
        max_touch_points: navigator.maxTouchPoints,
        pdf_viewer_enabled: navigator.pdfViewerEnabled,
        hardware_concurrency: navigator.hardwareConcurrency,
        cookie_enabled: navigator.cookieEnabled,
        ip_address: ipAddress,
        app_code_name: navigator.appCodeName,
        app_name: navigator.appName,
        app_version: navigator.appVersion,
        vendor_sub: navigator.vendorSub,
        product_sub: navigator.productSub,
        vendor: navigator.vendor,
        platform: typeof navigator.platform !== "undefined" ? navigator.platform : "",
        product: typeof navigator.product !== "undefined" ? navigator.product : "",
        user_agent: navigator.userAgent,
        language: navigator.language,
        media_devices: _typeof(navigator.mediaDevices) === "object" ? JSON.stringify(navigator.mediaDevices) : (_navigator$mediaDevic = navigator.mediaDevices) === null || _navigator$mediaDevic === void 0 ? void 0 : _navigator$mediaDevic.toString(),
        on_line: navigator.onLine,
        webdriver: navigator.webdriver,
        device_memory: navigator.deviceMemory
      };
    }
  }, {
    key: "getVisitorDeviceName",
    value: function getVisitorDeviceName(userAgent) {
      var defaultName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Web Browser";
      if (!userAgent) return defaultName;
      if (userAgent.indexOf("iPhone") >= 0) return "iPhone";
      if (userAgent.indexOf("iPad") >= 0) return "iPad";
      if (userAgent.indexOf("iPod") >= 0) return "iPod";
      if (userAgent.indexOf("Android") >= 0) return "Android";
      if (userAgent.indexOf("Windows Phone") >= 0) return "Windows Phone";
      if (userAgent.indexOf("BlackBerry") >= 0) return "BlackBerry";
      if (userAgent.indexOf("Macintosh") >= 0) return "Macintosh";
      if (userAgent.indexOf("Windows") >= 0) return "Windows";
      if (userAgent.indexOf("Linux") >= 0) return "Linux";
      return defaultName;
    }
  }, {
    key: "fromJsonArray",
    value: function fromJsonArray(jsonArray) {
      if (!jsonArray || !Array.isArray(jsonArray)) return [];
      return jsonArray.map(function (json) {
        return WebVisitorModel.create(json);
      });
    }
  }]);
  return WebVisitorModel;
}();
_defineProperty(WebVisitorModel, "entityType", 51);
_defineProperty(WebVisitorModel, "create", function (json) {
  return new WebVisitorModel(json);
});
var _default = WebVisitorModel;
exports.default = _default;