import axios from "axios";
import DateTime from "../ui/DateTime";

export default class HttpService {
    static sessionKey = "session-id";
    static v = "2.1.0";
    static staticCount = 0;
    static ipAddress = null;
    static httpBaseUrl = "/";
    static errors = [];
    static isInit = false;
    static isDebug = false;

    static emptyResponse = {
        data: {},
        message: 'no session id'
    };

    static getDomain() {
        if (typeof window === "undefined") return "";
        return window.location.hostname;
    }

    static {
        HttpService.getIpAddressAsync();
        HttpService.isDebug = process.env.NODE_ENV !== "production";
        console.log('HttpService is good. Env: ' + process.env.NODE_ENV + ', IsDebug: ' + HttpService.isDebug);
    }
    
    static debugPrint(message, level = 0) { 
        if (!HttpService.isDebug) return false;
        
        if (typeof message === "object") { 
            message = JSON.stringify(message, null, 4);
        }

        message = message?.toString() || null;
        if (!message) return false;

        if (level > 1) console.error(message);
        else if (level === 1) console.warn(message);
        else console.log(message);

        return true;
    }

    static instance = new HttpService(false);


    constructor(explicit = true) {
        this.baseUrl = HttpService.httpBaseUrl || "";
        this.isLoaded = (typeof window !== 'undefined');
        this.sessionId = null;
        this.debug = HttpService.isDebug;

        this.onUnauthorizedResponse = (err) => { 
            if (!HttpService.debugPrint('Unauthorized response (default)', 2))
                console.warn("Unauthorized response (default)");
            
            return err || null;
        };

        if (!this.baseUrl) this.detectBaseUrl();
    }

    static init(options = { force: false }) { 
        if (typeof window === "undefined") return null;
        if (typeof options === "boolean") options = { force: options };
        else if (typeof options === "string") options = { baseUrl: options, force: false };
        else if (!options) options = { force: false, numberValue: options || 0 };

        if (!options?.force && HttpService.isInit) { 
            HttpService.debugPrint("HttpService already initialized.");
            return false;
        }

        if (!!options?.baseUrl) HttpService.httpBaseUrl = options.baseUrl;

        if (process.env.NODE_ENV === "development") {
            HttpService.httpBaseUrl = options.developmentUrl || (options.baseUrl || "");
            HttpService.debugPrint("Development Base URL: " + HttpService.httpBaseUrl);
        } else {
            HttpService.httpBaseUrl = options.productionUrl || (options.baseUrl || "");
            HttpService.debugPrint("Production Base URL: " + HttpService.httpBaseUrl);
        }

        HttpService.instance = new HttpService();
        HttpService.isInit = true;

        return true;
    }
    
    detectBaseUrl() {
        if (typeof window === 'undefined') return false;
        this.isLoaded = (typeof window !== 'undefined');

        if (!this.baseUrl && this.isLoaded)
            this.baseUrl = window.location.origin;

        HttpService.debugPrint("Base url is: " + this.baseUrl);
        
        return this.isLoaded;
    }
    
    setSessionId(sessionId) { 
        this.sessionId = sessionId;
    }
    
    getHeaderConfig(headers) {
        if (!!headers)
            return { headers: headers };

        headers = { 'Content-Type': 'application/json' };

        if (this.sessionId) headers['session-id'] = this.sessionId?.toString() ?? "";
        if (this.ipAddress) headers['X-Forwarded-For'] = HttpService.ipAddress?.toString() ?? "";
        
        return { headers: headers };
    }

    createUrlWithDateRange(path, startDate, endDate) {
        if (DateTime.isDate(startDate)) startDate = startDate.toDate().toFormDate();
        else startDate = '';

        if (DateTime.isDate(endDate)) endDate = endDate.toDate().toFormDate();
        else endDate = '';

        let qa = path.indexOf('?') > -1 ? '&' : '?';

        return path + qa + 'start-date=' + startDate + '&end-date=' + endDate;
    }

    /**
     * Calls the getAsync method with the given url and date range. 
     * The date range is formatted to fit the platform query string start-date/end-date naming convention* 
     * @param path
     * @param startDate
     * @param endDate
     * @returns {Promise<AxiosResponse<[any]>|void>}
     */
    async getWithDateRangeAsync(path, startDate, endDate) {
        let url = this.createUrlWithDateRange(path, startDate, endDate);
        HttpService.debugPrint('Date Url: ' + url);
        return await HttpService.instance.getAsync(url);
    }

    /**
     * Uses ipify.org to get the ip address of the client, then saves it for later use in the header "X-Forwarded-For"
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async getIpAddressAsync(force = false) {
        HttpService.staticCount++;
        if (typeof window === "undefined") { 
            HttpService.debugPrint("No window, no ip address.", 1);
            return null;
        }

        if (HttpService.staticCount > 1) {
            //HttpService.debugPrint("Static Count > 1 : " + HttpService.staticCount + ", IP: " + HttpService.ipAddress);
            return HttpService.ipAddress;
        }

        if (typeof HttpService.ipAddress === "string" && HttpService.ipAddress.length > 11 && !force) { 
            //console.log("Already getting or got ip (" + HttpService.staticCount + "): " + HttpService.ipAddress);
            return HttpService.ipAddress;
        }

        HttpService.debugPrint("Getting ip: " + HttpService.ipAddress + " force: " + force);
        return await axios.get("https://api.ipify.org/?format=json", true).then((rsp) => {
            let ip = rsp?.data?.ip;

            if (ip) {
                HttpService.ipAddress = ip;
                HttpService.debugPrint('IP Address (' + HttpService.staticCount + ') Set to: ' + ip);
                
                return ip;
            }
            
            return null;
        }).catch((ex) => { 
            HttpService.staticCount = -1;
            console.error("Error getting ip address: " + ex);
        });
    }

    cleanPath(path) {
        if (!path) return '';

        if (!path.startsWith('http')) {
            if (!path.startsWith('/')) path = '/' + path;
            
            if (!this.isLoaded) this.detectBaseUrl();
            path = this.baseUrl + path;
        }

        return path;
    }

    async getAsync(path, isPublic, headers, responseType = null) {
        HttpService.errors.push({ error: null, message: "Getting", date: new Date()});
        let h = this.getHeaderConfig(headers);
        
        if (!isPublic && !h["headers"][HttpService.sessionKey]) {
            HttpService.errors.push({ error: new Error("No getting because no session-id"), date: new Date()});
            return HttpService.emptyResponse;
        }

        if (!!responseType) h["responseType"] = responseType;
        
        path = this.cleanPath(path);
        HttpService.debugPrint("GET: " + path);
        
        return await axios.get(path, h).catch((err) => {
            HttpService.errors.push({ error: new Error(err), date: new Date()});
            if (err?.response?.status === 401) {
                this.onUnauthorizedResponse(err);
            }
            
            throw err;
        });
    }

    async postAsync(path, payload, headers, responseType = null) {
        let url = this.cleanPath(path);
        let h = this.getHeaderConfig(headers);
        
        if (!!responseType) {
            h["responseType"] = responseType;
            h["exposedHeaders"] = "file-name";
        }
        
        HttpService.debugPrint("POST: " + url);
        
        return await axios.post(url, payload, h).catch((err) => {
            HttpService.errors.push({ error: new Error(err), date: new Date()});
            if (err?.response?.status === 401) {
                this.onUnauthorizedResponse();
            }
            
            throw err;
        });
    }

    async putAsync(path, payload, headers, responseType = null) {
        const c =  this.getHeaderConfig(headers);
        if (!!responseType) c.responseType = responseType;

        path = this.cleanPath(path);
        HttpService.debugPrint("PUT: " + path);

        return await axios.put(path, payload, c).catch((err) => {
            if (err?.response?.status === 401) {
                this.onUnauthorizedResponse();
            }
            throw err;
        });
    }

    async uploadAsync(path, files, headers, formData = null, fileId = "files", responseType = null) {
        if (!formData) formData = new FormData();

        if (!fileId) fileId = 'files';

        let msg = "";
        // Update the formData object
        if (!Array.isArray(files)) { 
            files = [files];
            msg += "Converted file (object) to files (array). ";
        }

        let i = 0;
        for (i = 0; i < files.length; i++) {
            const file = files[i];
            formData.append(
                fileId,
                file,
                file.name
            );
        }

        msg += "File Count: " + i;
        
        if (!headers) headers = {};

        const config = { headers: headers};
        if (headers["Content-Type"]?.includes("multipart/form-data") !== true)
            headers["Content-Type"] = "multipart/form-data";

        if (typeof headers['session-id'] === 'undefined' && this.sessionId)
            config.headers['session-id'] = this.sessionId || "";

        HttpService.debugPrint(msg);
        HttpService.debugPrint('Uploading file: ' + path);
        
        if (!!responseType) {
            config.responseType = responseType;
        }
        
        return await axios.post(this.cleanPath(path), formData, config).catch((err) => {
            if (err?.response?.status === 401) {
                this.onUnauthorizedResponse();
            }

            throw err;
        });
    }

    async deleteAsync(path, headers) {
        path = this.cleanPath(path);
        HttpService.debugPrint("DELETE: " + path);

        return await axios.delete(path, this.getHeaderConfig(headers)).catch((err) => {
            if (err?.response?.status === 401) {
                this.onUnauthorizedResponse();
            }
            throw err;
        });
    }

}

