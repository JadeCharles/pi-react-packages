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
        this.isDebug = true;

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
        const isdb = this.isDebug === true || this.httpService?.isDebug === true;
        
        if (json !== true && json?.force !== true && isdb) { 
            console.log("Debug: Suppressed WebVisitor logging");
            return null;
        }

        const identifier = (typeof json === "string") ? json : null;
        if (identifier === json) json = null;

        if (!json) json = WebVisitorModel.createJson(HttpService.ipAddress);

        const path = "/api/web-visitor";

        if (!json.identifier) json.identifier = identifier;
        console.warn(JSON.stringify(json, null, 4));

        return await this.httpService.postAsync(path, json).then((response) => { 
            const wv = new WebVisitorModel(response.data);
            if (!!wv?.id) return wv;

            if (typeof HttpService.debugPrint === "function")
                HttpService.debugPrint("No WebVisitor Id when saving view", 1);

            return null;
        });
    }
}

export default WebVisitorService;
