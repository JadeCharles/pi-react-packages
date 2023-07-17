import HttpService from "../../common/services/HttpService";
import DocumentModel from "../models/DocumentModel";

class DocumentService { 
    static instance = new DocumentService();

    constructor() {
        this.documentsMap = {};
        this.documentMap = {};
        this.documentSummaryMap = {};
    }

    async getDocumentAsync(documentId) {
        const path = '/api/document/' + documentId;
        const me = this;

        return await HttpService.instance.getAsync(path).then((response) => {
            me.documentMap[documentId] = new DocumentModel(response.data);
            return me.documentMap[documentId];
        });
    }

    async getDocumentsAsync(companyId) {
        if (!companyId) { 
            console.warn("Failed to get documents. No company id provided: " + companyId);
            return [];
        }
        
        const path = "/api/company/" + companyId + "/document";
        const me = this;

        return await HttpService.instance.getAsync(path).then((response) => {
            let documents = response.data.map((document) => {
                return new DocumentModel(document);
            });

            me.documentsMap[companyId] = documents;
            
            return documents;
        });
    }
    
    async getDocumentsByTypeAsync(companyId, docTypeKeyInt) {
        if (typeof docTypeKeyInt !== "number") {
            let v = parseInt(docTypeKeyInt);
            if (isNaN(v)) { 
                console.error("Could not get documents by type becuase the document type key is not a number: " + docTypeKeyInt);
                return;
            }
            
            docTypeKeyInt = v;
        }
        
        const path = "/api/company/" + companyId + "/document-type/" + docTypeKeyInt;
        const me = this;

        return await HttpService.instance.getAsync(path).then((response) => {
            let documents = response.data.map((document) => {
                return new DocumentModel(document);
            });

            me.documentsMap[companyId] = documents;
            
            return documents;
        });
    };
    
    async getDocumentsSummaryAsync(companyId) {
        if (!companyId) {
            console.warn("Failed to get document summary. No company id provided: " + companyId);
            return [];
        }

        const path = "/api/company/" + companyId + "/documents-summary";
        const me = this;

        return await HttpService.instance.getAsync(path).then((response) => {
            me.documentSummaryMap[companyId] = response.data;
            return me.documentSummaryMap[companyId];
        });
    }
    
    async uploadDocumentsAsync(companyId, docTypeKeyInt, fileModels) {
        if (typeof docTypeKeyInt !== "number") {
            let v = parseInt(docTypeKeyInt);
            if (isNaN(v)) { 
                console.error("Could not upload document becuase the document type key is not a number: " + docTypeKeyInt);
                return;
            }
            
            docTypeKeyInt = v;
        }
        
        let files = fileModels.map((f) => f.file);
        const path = "/api/company/" + companyId + "/document-upload/" + docTypeKeyInt;
        console.log("Uploading to: " + path);
        
        return await HttpService.instance.uploadAsync(path, files).then((rsp) => { 
            return DocumentModel.fromJsonArray(rsp.data);
        });
    }
    
    async deleteDocumentAsync(documentId) {
        const path = "/api/document/" + documentId;

        return await HttpService.instance.deleteAsync(path).then((x) => { 
            //
        });
    }
}

export default DocumentService;
