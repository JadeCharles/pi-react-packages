declare namespace Common {
    type HttpService = {
        sessionKey: string;
        v: string;
        staticCount: number;
        ipAddress: string?;
        httpBaseUrl: string;
        errors: [object];
        isInit: boolean;
        isDebug: boolean;

        emptyResponse: { [key: string]: any?};  
        getDomain: () => string;
        async getIpAddressAsync: () => Promise<string>;
        debugPrint: (message: string | object, level: number = 0) => void;
        instance: HttpService;
        init: (options: { [key: string]: any }) => boolean;
        detectBaseUrl: boolean;
        createUrlWithDateRange: (path: string, startDate: Date, endDate: Date) => string;
        getHeaderConfig: (headers: { [key: string]: string?}) => { [key: string]: any };

        cleanPath: (path: string) => string;
        async getWithDateRangeAsync: (path: string, startDate: Date?, endDate: Date?) => Promise<any>;
        async getAsync: (path: string, isPublic: boolean, headers: { [key: string]: string|null }, responseType:string = null) => Promise<any>;
        async postAsync: (path: string, payload: object|null, headers: { [key: string]: string|null }, responseType = null) => Promise<any>;
        async putAsync: (path: string, payload: object|null, headers: { [key: string]: string|null }, responseType = null) => Promise<any>;
        async uploadAsync: (path: string, files: [any], headers: { [key: string]: string|null }, formData: FormData = null, fileId:string = "files", responseType:string = null) => Promise<any>;
        async deleteAsync: (path: string, headers: { [key: string]: string | null }) => Promise<any>;
        static getViewPortData: () => { [key: string]: any };
    };
}
