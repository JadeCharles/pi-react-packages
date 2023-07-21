declare namespace Common {
    type WebVisitorModel = {
        userAgent: string,
        domain: string,
        path: string,
        referer: string,
        webSession: string,
        attribution: string,
        searchFor: (term: string) => boolean,
        toJson: () => object,
        static getWebSession: (createIfEmpty:boolean = true) => string,
        static getParam: (qsParam:string = "ref") => string,
        static getAttribution: (wsKey:string = "pi-attribution") => string,
        static setAttribution: () => string,
        static createJson: (ipAddress: string) => object,
        static fromJsonArray: (jsonArray: [object]) => [WebVisitorModel],
    };
}
