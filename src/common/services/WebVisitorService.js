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
        
        if (options === null) return;

        if (typeof options === "object") {
            if (options instanceof HttpService || typeof options?.postAsync === "function") this.httpService = options;
            else if (!!options.httpService &&  typeof options.httpService?.postAsync === "function") this.httpService = options.httpService;
        }
    }

    async getWebVisitorAsync(webVisitorId) {
        const path = '/api/web-visitor/' + webVisitorId;
        const me = this;

        return await HttpService.instance.getAsync(path).then((response) => {
            me.webVisitorMap[webVisitorId] = new WebVisitorModel(response.data);
            return me.webVisitorMap[webVisitorId];
        });
    }

    async getWebVisitorsAsync() {
        const path = "/api/web-visitor";
        const me = this;

        return await HttpService.instance.getAsync(path).then((response) => {
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
        const identifier = (typeof json === "string") ? json : null;
        if (identifier === json) json = null;

        if (!json) json = WebVisitorModel.createJson(HttpService.ipAddress);
        const path = "/api/web-visitor";

        if (!json.identifier) json.identifier = identifier;
        console.warn(JSON.stringify(json, null, 4));

        return await HttpService.instance.postAsync(path, json).then((response) => { 
            const wv = new WebVisitorModel(response.data);
            if (!!wv?.id) return wv;

            HttpService.debugPrint("No WebVisitor Id when saving view", 1);

            return null;
        });
    }
}

export default WebVisitorService;
