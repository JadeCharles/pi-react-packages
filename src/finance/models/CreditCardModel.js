import AddressModel from "../../geo/models/AddressModel";

class CreditCardModel {
    static maestroPrefixes = ["5018", "5020", "5038", "5612", "5893", "6304", "6759", "6761", "6762", "6763", "0604", "6390"];

    constructor(json) {
        if (!json) json = {};
        
        this.name = json.name || (json.cardholder_name || "");
        this.number = json.number || (json.card_number || "");
        this.cvv = json.cvv || "";
        
        this.address = new AddressModel(json.address || json.billing_address);

        if (!json) json = {};

        this.name = json.name || "";
        this.number = json.number || "";

        this.expirationMonth = (json.exp_month || json.expiration_month) || (json.expires_month || "");
        if (this.expirationMonth.length === 1) this.expirationMonth = "0" + this.expirationMonth;
        if (this.expirationMonth.length !== 2 || isNaN(parseInt(this.expirationMonth))) this.expirationMonth = "";
        
        this.expirationYear = (json.exp_year || json.expiration_year) || (json.expires_year || "");
        if (this.expirationYear.length === 2) this.expirationYear = "20" + this.expirationYear;
        if (this.expirationYear.length !== 4 || isNaN(parseInt(this.expirationYear))) this.expirationYear = "";
        
        this.expirationDate = (json.expiration_date || "").toString()
            .replaceAll("/", "")
            .replaceAll(" ", "")
            .replaceAll("-", "")
            .replaceAll(".", "");
        
        this.cvv = json.cvv || "";
        this.billingZip = ((json.zip || json.billing_zip) || (json?.address?.billing_zip || json?.billing_address?.zip) || "");

        switch(this.expirationDate.length) {
            case 6:
                this.expirationMonth = this.expirationDate.substring(0, 2);
                this.expirationYear = this.expirationDate.substring(2, 6);
                break;
            case 5:
                this.expirationMonth = "0" + this.expirationDate.substring(0, 1);
                this.expirationYear = this.expirationDate.substring(1, 5);
                break;
            case 4:
                this.expirationMonth = this.expirationDate.substring(0, 2);
                this.expirationYear = "20" + this.expirationDate.substring(2, 4);
                break;
            case 3:
                this.expirationMonth = "0" + this.expirationDate.substring(0, 1);
                this.expirationYear = "20" + this.expirationDate.substring(1, 3);
                break;
            default:
                break;
        }
        
        this.expirationDate = this.expirationMonth + this.expirationYear;        
    }

    toJson() {
        return {
            number: this.number,
            name: this.name,
            expiration_month: this.expirationMonth,
            expiration_year: this.expirationYear,
            cvv: this.cvv,
            billing_zip: this.billingZip || null,
        };
    }    
}

export default CreditCardModel;
