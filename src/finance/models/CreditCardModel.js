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

    static getConstraints = (number, constraints = null) => {
        if (!constraints) constraints = {};

        if (!!number && number.length > 1) {
            const firstNumber = parseInt(number.substr(0, 1));
            const constraint = { ...constraints, cvvLen: 3, numberLen: 16, cardType: firstNumber };
            
            if (!isNaN(firstNumber)) {
                switch (firstNumber) {
                    case 4:
                    case 6:
                    case 5:
                        return constraint;
                    default:
                        if (number.length < 4) {
                            if (firstNumber === 3) { 
                                constraint.cvvLen = 4;
                                constraint.numberLen = 15;
                            }
                            
                            return constraint;
                        }
                }
            }

            constraint.cardType = firstNumber;
            const s4 = number.substr(0, 4);
            if (CreditCardModel.maestroPrefixes.includes(s4)) {
                constraint.numberLen = 19;
            }
            
            if (firstNumber === 3) {
                const int3 = parseInt(number.substr(0, 3));
                const int2 = parseInt(number.substr(0, 2));
                
                if (s4 === "3095") constraint.cardType = 13;
                if (int3 >= 300 && int3 <= 305) constraint.cardType = 13;
                if (int3 >= 360 && int3 <= 369) constraint.cardType = 13;
                //if (int2 == 37 || int2 == 38 || int2 == 39) return CreditCardTypeEnum.DinersClub;
                if (int2 === 30 || int2 === 38 || int2 === 39) constraint.cardType = 13;
                
                if (constraint.cardType === 3) {
                    constraint.cvvLen = 4;
                    constraint.numberLen = 15;
                }
            }
            
            return constraint;
        }
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
