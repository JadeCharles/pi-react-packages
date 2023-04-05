class AddressModel {
    static entityType = 1;

    static states = [
        { name: "Alabama", abbr: "AL" },
        { name: "Alaska", abbr: "AK" },
        { name: "American Samoa", abbr: "AS" },
        { name: "Arizona", abbr: "AZ" },
        { name: "Arkansas", abbr: "AR" },
        { name: "California", abbr: "CA" },
        { name: "Colorado", abbr: "CO" },
        { name: "Connecticut", abbr: "CT" },
        { name: "Delaware", abbr: "DE" },
        { name: "District Of Columbia", abbr: "DC" },
        { name: "Federated States Of Micronesia", abbr: "FM" },
        { name: "Florida", abbr: "FL" },
        { name: "Georgia", abbr: "GA" },
        { name: "Guam", abbr: "GU" },
        { name: "Hawaii", abbr: "HI" },
        { name: "Idaho", abbr: "ID" },
        { name: "Illinois", abbr: "IL" },
        { name: "Indiana", abbr: "IN" },
        { name: "Iowa", abbr: "IA" },
        { name: "Kansas", abbr: "KS" },
        { name: "Kentucky", abbr: "KY" },
        { name: "Louisiana", abbr: "LA" },
        { name: "Maine", abbr: "ME" },
        { name: "Marshall Islands", abbr: "MH" },
        { name: "Maryland", abbr: "MD" },
        { name: "Massachusetts", abbr: "MA" },
        { name: "Michigan", abbr: "MI" },
        { name: "Minnesota", abbr: "MN" },
        { name: "Mississippi", abbr: "MS" },
        { name: "Missouri", abbr: "MO" },
        { name: "Montana", abbr: "MT" },
        { name: "Nebraska", abbr: "NE" },
        { name: "Nevada", abbr: "NV" },
        { name: "New Hampshire", abbr: "NH" },
        { name: "New Jersey", abbr: "NJ" },
        { name: "New Mexico", abbr: "NM" },
        { name: "New York", abbr: "NY" },
        { name: "North Carolina", abbr: "NC" },
        { name: "North Dakota", abbr: "ND" },
        { name: "Northern Mariana Islands", abbr: "MP" },
        { name: "Ohio", abbr: "OH" },
        { name: "Oklahoma", abbr: "OK" },
        { name: "Oregon", abbr: "OR" },
        { name: "Palau", abbr: "PW" },
        { name: "Pennsylvania", abbr: "PA" },
        { name: "Puerto Rico", abbr: "PR" },
        { name: "Rhode Island", abbr: "RI" },
        { name: "South Carolina", abbr: "SC" },
        { name: "South Dakota", abbr: "SD" },
        { name: "Tennessee", abbr: "TN" },
        { name: "Texas", abbr: "TX" },
        { name: "Utah", abbr: "UT" },
        { name: "Vermont", abbr: "VT" },
        { name: "Virgin Islands", abbr: "VI" },
        { name: "Virginia", abbr: "VA" },
        { name: "Washington", abbr: "WA" },
        { name: "West Virginia", abbr: "WV" },
        { name: "Wisconsin", abbr: "WI" },
        { name: "Wyoming", abbr: "WY" }
    ];

    static countries = [
        {name: "United States", abbr: "US"},
        {name: "Canada", abbr: "CA"},
        {name: "Mexico", abbr: "MX"},
        {name: "United Kingdom", abbr: "UK"},
        {name: "France", abbr: "FR"},
        {name: "Germany", abbr: "DE"},
        {name: "Spain", abbr: "ES"},
        {name: "Italy", abbr: "IT"},
        {name: "Switzerland", abbr: "CH"},
        {name: "Netherlands", abbr: "NL"},
        {name: "Belgium", abbr: "BE"},
        {name: "Austria", abbr: "AT"},
        {name: "Portugal", abbr: "PT"},
        {name: "Sweden", abbr: "SE"},
        {name: "Norway", abbr: "NO"},
        {name: "Denmark", abbr: "DK"},
        {name: "Finland", abbr: "FI"},
        {name: "Ireland", abbr: "IE"},
        {name: "Iceland", abbr: "IS"},
        {name: "Poland", abbr: "PL"},
        {name: "Czech Republic", abbr: "CZ"},
        {name: "Hungary", abbr: "HU"},
        {name: "Romania", abbr: "RO"},
        {name: "Greece", abbr: "GR"},
        {name: "Bulgaria", abbr: "BG"},
        {name: "Croatia", abbr: "HR"},
        {name: "Slovenia", abbr: "SI"},
        {name: "Bosnia and Herzegovina", abbr: "BA"},
        {name: "Albania", abbr: "AL"},
        {name: "Macedonia", abbr: "MK"},
        {name: "Moldova", abbr: "MD"},
        {name: "Montenegro", abbr: "ME"},
        {name: "Serbia", abbr: "RS"},
        {name: "Kosovo", abbr: "XK"},
        {name: "Lithuania", abbr: "LT"},
        {name: "Latvia", abbr: "LV"},
        {name: "Estonia", abbr: "EE"},
        {name: "Luxembourg", abbr: "LU"},
        {name: "Malta", abbr: "MT"},
        {name: "Cyprus", abbr: "CY"},
        {name: "Sri Lanka", abbr: "LK"},
        {name: "India", abbr: "IN"},
        {name: "Pakistan", abbr: "PK"},
        {name: "Afghanistan", abbr: "AF"},
        {name: "Bangladesh", abbr: "BD"},
        {name: "Bhutan", abbr: "BT"},
        {name: "Brunei", abbr: "BN"},
        {name: "Cambodia", abbr: "KH"},
        {name: "China", abbr: "CN"},
        {name: "East Timor", abbr: "TL"},
        {name: "Indonesia", abbr: "ID"},
        {name: "Japan", abbr: "JP"},
        {name: "Kazakhstan", abbr: "KZ"},
        {name: "Korea, North", abbr: "KP"},
        {name: "Korea, South", abbr: "KR"},
        {name: "Kyrgyzstan", abbr: "KG"},
        {name: "Laos", abbr: "LA"},
        {name: "Malaysia", abbr: "MY"},
        {name: "Maldives", abbr: "MV"},
        {name: "Mongolia", abbr: "MN"},
        {name: "Myanmar", abbr: "MM"},
        {name: "Nepal", abbr: "NP"},
        {name: "Oman", abbr: "OM"},
        {name: "Philippines", abbr: "PH"},
        {name: "Qatar", abbr: "QA"},
        {name: "Russia", abbr: "RU"},
        {name: "Saudi Arabia", abbr: "SA"},
        {name: "Singapore", abbr: "SG"}
    ];

    constructor(json) {
        if (!json) json = {};

        this.id = json.id;
        this.street = json.street;
        this.unit = json.unit;
        this.city = json.city;
        this.state = json.state;
        this.zip = json.zip;
        this.country = json.country;
        this.lat = json.lat;
        this.lon = json.lon;
        this.status = json.status;
        this.created = json.created;
        this.modified = json.modified;
    }

    toJson() {
        return {
            street: this.street,
            unit: this.unit,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country
        };
    }
}

export default AddressModel;
