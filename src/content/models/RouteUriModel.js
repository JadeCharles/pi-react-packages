import CommentModel from "../../messaging/models/CommentModel";

class RouteUriModel {
    static entityType = 27;
    static create = (json) => new RouteUriModel(json);
    
    constructor(json) {
        if (!json) json = {};
        
        this.id = json.id || null;
        
        this.routeType = json.route_type || 0;
        this.routeTypeName = json.route_type_name || "";
        this.uri = json.uri || null;
        this.name = json.name || null;
        this.description = json.description || null;
        this.metaData = json.meta_data || null;
        this.comments = CommentModel.fromJsonArray(json.comments);
        
        this.created = !!json.created ? new Date(json.created) : null;
        this.modified = !!json.modified ? new Date(json.modified) : null;
    }
    
    toJson() {
        return {
            route_type: this.routeType,
            uri: this.uri,
            name: this.name,
            description: this.description,
            meta_data: this.metaData,
            comments: this.comments,
        };
    }

    searchFor(term) { 
        if (typeof term === "number") term = term.toString();
        if (!term) return true;
        
        term = term.toLowerCase();
        
        if (this.uri?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.name?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.description?.toString().toLowerCase().indexOf(term) >= 0) return true;
        if (this.metaData?.toString().toLowerCase().indexOf(term) >= 0) return true;
        
        return (term === this.id?.toLowerCase());
    }
    
    static fromJsonArray(jsonArray) {
        if (!jsonArray || !Array.isArray(jsonArray)) return [];
        return jsonArray.map(json => RouteUriModel.create(json));
    }
}

export default RouteUriModel;
