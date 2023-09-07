import HttpService from "./HttpService";
import WebVisitorModel from "../models/WebVisitorModel";

class WebVisitorService {
    static instance = new WebVisitorService();
    
    /**
     * 
     */
    static async saveAsync(json = null) {
        await WebVisitorService.instance.createWebVistorAsync(json);
    }

    constructor(options = null) {
        this.webVisitorsMap = {};
        this.webVisitors = [];
        this.webVisitorMap = {};
        this.httpService = HttpService.instance;
        this.isDebug = typeof options?.isDebug === "boolean" ? options.isDebug : process.env.NODE_ENV !== "production";
        this.print = options?.print === true;

        if (this.print) console.log("WebVisitor: Print set to TRUE");

        if (options === null) return;

        if (typeof options === "object") {
            if (options instanceof HttpService || typeof options?.postAsync === "function") this.httpService = options;
            else if (!!options.httpService &&  typeof options.httpService?.postAsync === "function") this.httpService = options.httpService;
        }
    }

    async getWebVisitorAsync(webVisitorId) {
        const path = '/api/web-visitor/' + webVisitorId;
        const me = this;

        return await this.httpService.getAsync(path).then((response) => {
            me.webVisitorMap[webVisitorId] = new WebVisitorModel(response.data);
            return me.webVisitorMap[webVisitorId];
        });
    }

    async getWebVisitorsAsync() {
        const path = "/api/web-visitor";
        const me = this;

        return await this.httpService.getAsync(path).then((response) => {
            me.webVisitors = response.data.map((webVisitor) => {
                return new WebVisitorModel(webVisitor);
            });

            return me.webVisitors;
        });
    }

    /**
     * 
     */
    async createWebVistorAsync(json = null) {
        const isdb = json?.isDebug !== false && (this.isDebug !== false && (this.isDebug === true || this.httpService?.isDebug === true));
        const isForced = json === true || json?.force === true;

        if (!isForced && isdb) { 
            console.log("Debug: Suppressed WebVisitor logging");
            return null;
        }

        if (this.print) console.log("Logging Web Visitor: " + json?.path);

        const identifier = (typeof json === "string") ? json : null;
        if (identifier === json) json = null;

        if (typeof json !== "object" || !json) json = WebVisitorModel.createJson(HttpService.ipAddress);
        
        delete json.isDebug;
        delete json.print;
        delete json.force;

        if (!json.ip_address) { 
            try {
                json.ip_address = await HttpService.getIpAddressAsync();
            } catch (ex) {
                console.warn("Failed to get Ip Address:");
                console.warn(ex);
             }
        }

        if (this.print) console.log(JSON.stringify(json, null, 4));

        if (!isForced && json?.domain === "localhost") { 
            console.log("Debug: Suppressed WebVisitor logging for localhost");
            return null;
        }
        
        const path = "/api/web-visitor";

        if (!json.identifier) json.identifier = identifier;

        return await this.httpService.postAsync(path, json).then((response) => { 
            const wv = new WebVisitorModel(response.data);
            if (!!wv?.id) return wv;

            if (typeof HttpService.debugPrint === "function")
                HttpService.debugPrint("No WebVisitor Id when saving view", 1);

            return null;
        });
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
        if (typeof localStorage === "undefined") return null;

        const value = WebVisitorModel.getParam();
        if (!!value) return WebVisitorModel.setAttribution(wsKey, value);
        return localStorage.getItem(wsKey) || null;
    }

    static setAttribution(wsKey = "pi-attribution", value) {
        if (typeof localStorage === "undefined") return null;

        if (typeof value === "undefined" || value === null) {
            localStorage.removeItem(wsKey);
            return null;
        }
        
        localStorage.setItem(wsKey, value);

        return value;
    }

}

export default WebVisitorService;
