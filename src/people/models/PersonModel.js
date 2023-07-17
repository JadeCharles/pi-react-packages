class PersonModel {
    static create = (json) => new PersonModel(json);

    constructor(json) {
        if (!json) json = {};

        this.id = json.id || "";
        this.imageUrl = json.image_url || "";
        this.firstName = json.first_name || "";
        this.lastName = json.last_name || "";
        this.email = json.email || "";
        this.phone = json.phone || "";
        this.companyId = json.company_id || "00000000-0000-0000-0000-000000000000";
        this.companyName = json.company_name || "";
        this.imageId = json.image_id || "";
        
        this.fullName = (this.firstName + ' ' + this.lastName).trim();
        
        this.userType = json.user_type || 0;
        this.userTypeName = json.user_type_name || "";
        
        this.created = !!json.created ? new Date(json.created) : null;
        this.modified = !!json.modified ? new Date(json.modified) : null;
    }

    searchFor(term) {
        const name = (this.firstName + " " + this.lastName).trim().toLowerCase();
        if (name.indexOf(term) >= 0) return true;

        if (this.email && this.email.toLowerCase().indexOf(term) >= 0) return true;
        if (this.companyName && this.companyName.toLowerCase().indexOf(term) >= 0) return true;
        return (this.phone && this.phone.toLowerCase().indexOf(term) >= 0);
    }
    
    static fromJsonArray(jsonArray) {
        if (!jsonArray || !Array.isArray(jsonArray)) return [];
        return jsonArray.map((x) => PersonModel.create(x));
    }
}

export default PersonModel;
