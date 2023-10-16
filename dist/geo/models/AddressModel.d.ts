declare namespace Geo { 
    type AddressModel = {
        id: string | null;
        street: string;
        unit: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        lat: string;
        lon: string;
        status: number;
        created: Date;
        updated: Date;

        toJson: () => { [key: string]: any };
        toAddressLine: () => string;
        toCityStateZip: (boolean: includeCountry = false) => string;
        fromJsonArray: (jsonArray: [any]) => AddressModel[];
        countries: [{ [key: string]: string }];
        states: [{ [key: string]: string }];
    };
}
