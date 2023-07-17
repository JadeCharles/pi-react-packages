import PersonModel from "../../people/models/PersonModel";

class CommentModel {
    static entityType = 3;
    static create = (json) => new CommentModel(json);

    constructor(json) {
        if (!json) json = {};
        
        this.id = json.id;
        
        this.userId = json.user_id;
        this.entityId = json.entity_id;
        this.entityType = json.entity_type;
        this.text = json.text;
        this.ipAddress = json.ip_address;
        
        this.user = PersonModel.create(json.user);
        
        this.created = json.created;
        this.modified = json.modified;
        this.status = json.status || 0;
    }
    
    toJson() {
        return {
            entity_id: this.entityId,
            entity_type: this.entityType,
            text: this.text
        };
    }
    
    static fromJsonArray(jsonArray) {
        if (!jsonArray) return [];
        return jsonArray.map(json => CommentModel.create(json));
    }
}

export default CommentModel;
