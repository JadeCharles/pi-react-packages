declare namespace Common {
    type WebVisitorService = {
        createWebVistorAsync: (json = null) => Promise<WebVisitorModel>,
        getWebVisitorsAsync: () => Promise<[WebVisitorModel]>,
        static saveAsync: (json = null) => Promise<WebVisitorModel>,
        static instance: WebVisitorService,
    };
}
