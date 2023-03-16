import axios from "axios";
import DateTime from "../ui/formatting/DateTime";

class HttpService {
    static sessionKey = "session-id";
    static v = "2.0.2";
    static emptyResponse = {
        data: {},
        message: 'no session id'
    };

    static _isInitted = false;
    static _baseUrl = "/";
    
    static init = (options, ...args) => {
        if (typeof console === "undefined") return -1;

        const force = typeof args["0"] === "boolean" ? args["0"] : false;
        
        if (force !== true && HttpService._isInitted === true) 
            return 0;

        console.warn("Initializing HttpService v" + HttpService.v + ": " + process.env.NODE_ENV);
        
        if (typeof options !== "object" || options === null)
            options = {
                developmentUrl: "https://localhost:5001",
                productionUrl: "https://dark.penumbralabs.io",
                baseUrl: "https://dark.penumbralabs.io"
            };
        
        if (process.env.NODE_ENV === "development") {
            HttpService._baseURL = options.developmentUrl || (options.baseUrl || "/");
            console.log("Development Base URL: " + HttpService._baseURL);
        } else {
            HttpService._baseURL = options.productionUrl || (options.baseUrl || "/");
            console.log("Production Base URL: " + HttpService._baseURL);
        }
        
        HttpService._isInitted = !!HttpService._baseURL;
        
        if (HttpService._isInitted && !!HttpService.instance) { 
            console.log("Updating BaseUrl from " + HttpService.instance.baseUrl + " to " + HttpService._baseURL);
            HttpService.instance.baseUrl = HttpService._baseURL;
        } 
        
        return 1;
    }
    
    static getDomain() {
        return (typeof window !== "undefined") ? window.location.hostname : "";
    }

    static {
        if (typeof console !== "undefined")
            console.log('HttpService is good: ' + HttpService.v);
    }

    static instance = new HttpService();

    constructor() {
        this.baseUrl = HttpService._baseUrl || "";
        this.sessionId = null;
        
        this.onUnauthorizedResponse = (err) => { 
            console.error('Unauthorized response (default)');
            
            if (!!this.sessionId) { 
                this.sessionId = null;
                this.setSessionId(null);
            }
            
            return err || null;
        };

        this.getIpAddressAsync()?.then();
    }
    
    setSessionId(sessionId) { 
        this.sessionId = sessionId;
    }
    
    getHeaderConfig(headers) {
        if (!!headers) return { headers: headers };

        headers = { 'Content-Type': 'application/json' };

        if (this.sessionId) headers['session-id'] = this.sessionId?.toString() ?? "";
        if (this.ipAddress) headers['X-Forwarded-For'] = this.ipAddress?.toString() ?? "";
        
        if (typeof navigator !== "undefined") {
            if (!navigator.onLine) throw new Error("No internet connection.");
        }
        
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
        console.log('Date Url: ' + url);
        return await HttpService.instance.getAsync(url);
    }

    /**
     * Uses ipify.org to get the ip address of the client, then saves it for later use in the header "X-Forwarded-For"
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getIpAddressAsync() {
        const me = this;
        
        return await this.getAsync("https://api.ipify.org/?format=json", true).then((rsp) => {
            let ip = rsp?.data?.ip;
            if (ip) {
                me.ipAddress = ip;
                console.log('IP Address Set to: ' + ip);
                
                return ip;
            }
            
            return null;
        }).catch((ex) => { 
            console.log("Error getting IP Address: " + ex?.message);
        });
    }

    cleanPath(path) {
        if (!path) return '';

        if (!path.startsWith('http')) {
            if (!path.startsWith('/')) path = '/' + path;
            path = this.baseUrl + path;
        }

        return path;
    }

    async getAsync(path, isPublic, headers) {
        let h = this.getHeaderConfig(headers);
        
        if (!isPublic && !h["headers"][HttpService.sessionKey]) {
            //console.error("No getting because no session-id");
            return HttpService.emptyResponse;
        }

        return await axios.get(this.cleanPath(path), h).catch((err) => {
            if (err?.response?.status === 401) {
                this.onUnauthorizedResponse(err);
            }
            
            throw err;
        });
    }

    async postAsync(path, payload, headers) {
        let url = this.cleanPath(path);
        let h = this.getHeaderConfig(headers);
        
        return await axios.post(url, payload, h).then((rsp) => rsp).catch((err) => {
            if (err?.response?.status === 401) {
                this.onUnauthorizedResponse();
            }
            
            console.warn("Error in postAsync (rsp): " + url);
            throw err;
        });
    }

    async putAsync(path, payload, headers) {
        return await axios.put(this.cleanPath(path), payload, this.getHeaderConfig(headers)).catch((err) => {
            if (err.response.status === 401) {
                this.onUnauthorizedResponse();
            }
            throw err;
        });
    }

    async uploadAsync(path, files, headers, fileId, responseType = null) {
        const formData = new FormData();

        if (!fileId) fileId = 'files';

        // Update the formData object
        if (!Array.isArray(files)) files = [files];

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            formData.append(
                fileId,
                file,
                file.name
            );
        }

        if (!headers) headers = {};

        let config = { headers: headers};
        
        if (typeof headers['session-id'] === 'undefined' && this.sessionId)
            config.headers['session-id'] = this.sessionId || "";

        console.log('Uploading file: ' + path);
        
        if (responseType) {
            //axios.responseType = responseType;
            config.responseType = responseType;
        }
        
        return await axios.post(this.cleanPath(path), formData, config).catch((err) => {
            if (err.response.status === 401) {
                this.onUnauthorizedResponse();
            }
            throw err;
        });
    }

    async deleteAsync(path, headers) {
        return await axios.delete(this.cleanPath(path), this.getHeaderConfig(headers)).catch((err) => {
            if (err.response.status === 401) {
                this.onUnauthorizedResponse();
            }
            throw err;
        });
    }

}

export default HttpService;
