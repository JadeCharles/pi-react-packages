import {faFolderOpen} from "@fortawesome/free-solid-svg-icons";

class DocumentModel {
    static entityType = 25;
    static icon = faFolderOpen;
    
    constructor(json, index = -1) {
        if (!json) json = {};
        
        this.id = json.id || null;
        
        this.index = index;
        this.companyId = json.company_id || "";
        this.userId = json.user_id || "";
        this.name = json.name || "";
        this.description = json.description || "";
        this.content = json.content || "";
        this.contentType = json.content_type || "";
        this.contentTypeKey = json.content_type_key || "";
        
        this.uri = json.uri || "";
        this.fileName = json.file_name || "";
        this.fileSize = json.file_size;
        
        this.created = json.created ? new Date(json.created) : null;
        this.modified = json.modified ? new Date(json.modified) : null;
    }
    
    toJson() {
        return {
            name: this.name,
            description: this.description,
            uri: this.uri
        };
    }

    getFileSizeDisplay() { 
        let sz = this.fileSize;
        if (!sz) return "0 bytes";
        
        if (sz > 1000000000) return (sz / 1000000000).formatNumber(2) + " GB";
        if (sz > 1000000) return (sz / 1000000).formatNumber(2) + " MB";
        if (sz > 1000) return (sz / 1000).formatNumber(2) + " KB";
        
        return sz.formatNumber(2) + " bytes";
    }
    
    static fromJsonArray(jsonArray) {
        if (!jsonArray) return [];
        return jsonArray.map((json, index) => new DocumentModel(json, index));
    }
    
    static getIconByContentType(contentType) {
        
    }
}

export default DocumentModel;
