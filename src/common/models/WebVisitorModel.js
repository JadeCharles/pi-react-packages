class WebVisitorModel {
    static entityType = 51;
    static create = (json) => new WebVisitorModel(json);
    
    constructor(json) {
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
        this.referrer = json.referrer || (json.referer || null);
        this.webSession = json.web_session || null;
        this.attribution = json.attribution || null;

        this.created = !!json.created ? new Date(json.created) : null;
        this.modified = !!json.modified ? new Date(json.modified) : null;
    }

    static getWebSession(createIfEmpty = true) { 
        const wsKey = "pi-web-session";
        let ws = localStorage.getItem(wsKey);

        if (!ws && createIfEmpty) {
            ws = "pi-" + (Math.random() * 99999999).toString(16).toLowerCase() + "-" + (new Date()).getTime().toString();
            localStorage.setItem(wsKey, ws);
        }

        return ws;
    }

    static getParam(qsParam = "ref") {
        if (typeof window === "undefined") return null;
        let ws = window.location.search;
        if (!ws) return null;

        if (ws.startsWith("?")) ws = ws.substring(1);

        const p = ws.split("&").find((pm) => pm.startsWith(qsParam + "="));
        if (p === null || typeof p !== "string") return null;

        const index = p.indexOf("=");
        return index >= 0 && index < p.length ? p.substring(index + 1) : "";
    }
    
    static getAttribution(wsKey = "pi-attribution") {
        const value = WebVisitorModel.getParam();
        if (!!value) return WebVisitorModel.setAttribution(wsKey, value);
        return localStorage.getItem(wsKey) || null;
    }

    static setAttribution(wsKey = "pi-attribution", value) { 
        if (typeof value === "undefined" || value === null) {
            localStorage.removeItem(wsKey);
            return null;
        }
        
        localStorage.setItem(wsKey, value);

        return value;
    }

    static createJson(ipAddress = "") { 
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
            media_devices: typeof navigator.mediaDevices === "object" ? JSON.stringify(navigator.mediaDevices) : navigator.mediaDevices?.toString(),
            on_line: navigator.onLine,
            webdriver: navigator.webdriver,
            device_memory: navigator.deviceMemory,
        };
    }
    
    toJson() {
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
            device_memory: this.deviceMemory,
        };
    }


    static getVisitorDeviceName(userAgent, defaultName = "Web Browser") {
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
    
    searchFor(term) { 
        if (typeof term === "number") term = term.toString();
        if (!term) return true;
        
        term = term.toLowerCase();
        
        if (this.maxTouchPoints?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.path?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.hardwareConcurrency?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.appCodeName?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.appName?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.appVersion?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.ipAddress?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.vendorSub?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.productSub?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.vendor?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.platform?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.product?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.userAgent?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.language?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.mediaDevices?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.deviceMemory?.toString().toLowerCase().indexOf(term) >= 0) return true;
        
        return (term === this.id?.toLowerCase());
    }
    
    static fromJsonArray(jsonArray) {
        if (!jsonArray || !Array.isArray(jsonArray)) return [];
        return jsonArray.map(json => WebVisitorModel.create(json));
    }
}

export default WebVisitorModel;
