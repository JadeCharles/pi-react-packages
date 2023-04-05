class PasswordPolicy { 
    static emptyError = "Password cannot be empty";
    static getPolicyOptionsByName = (name) => { 
        if (!name || typeof name !== "string") return {};

        switch (name) {
            case "weak":
                return { minLength: 6, minUpperCase: 0, minLowerCase: 0, minNumbers: 0, minSpecial: 0 };
            case "medium":
                return { minLength: 8, minUpperCase: 1, minLowerCase: 1, minNumbers: 1, minSpecial: 0 };
            case "strong":
                return { minLength: 10, minUpperCase: 1, minLowerCase: 1, minNumbers: 1, minSpecial: 1 };
            default:
                return { minLength: 6, minUpperCase: 0, minLowerCase: 0, minNumbers: 0, minSpecial: 0 };
        }
    };

    constructor(options = {}) {
        if (typeof options === "number") options = { minLength: options };
        else if (typeof options === "string") options = PasswordPolicy.getPolicyOptionsByName(options);
        else if (!options) options = {};
        
        this.minLength = options.minLength || 6;
        this.maxLength = options.maxLength || 128;
        this.minUpperCase = options.minUpperCase || options.minUpper || 0;
        this.minLowerCase = options.minLowerCase || options.minLower || 0;
        this.minNumbers = options.minNumbers || options.minNumber || 0;
        this.minSpecial = options.minSpecial || 0;

        if (typeof this.minLength !== "number" || this.minLength < 1) this.minLength = 6;
        else if (this.minLength > 128) this.minLength = 128;

        if (typeof this.maxLength !== "number" || this.maxLength < this.minLength) this.maxLength = this.minLength <= 16 ? 256 : Math.max(this.minLength + 256, 512);
        if (typeof this.minUpperCase !== "number" || this.minUpperCase < 0) this.minUpperCase = 0;
        if (typeof this.minLowerCase !== "number" || this.minLowerCase < 0) this.minLowerCase = 0;
        if (typeof this.minNumbers !== "number" || this.minNumbers < 0) this.minNumbers = 0;
        if (typeof this.minSpecial !== "number" || this.minSpecial < 0) this.minSpecial = 0;

        this.messages = [];
    }

    validate(password) {
        this.messages = [];

        if (typeof password !== "string") this.messages.push("Password must be a string. Found: " + (typeof password).toString());
        else if (password.length < this.minLength) {
            const message = this.minLength > 1 ?
                "Password is too short. Min is " + this.minLength + " characters. Found: " + password.length + " characters" :
                PasswordPolicy.emptyError;
            
            this.messages.push(message);
        }

        if (password.length > this.maxLength)
            this.messages.push("Password is too long. Max is " + this.maxLength + " characters");

        let upper = 0;
        let lower = 0;
        let numbers = 0;
        let special = 0;

        for (let i = 0; i < password.length; i++) {
            const c = password.charAt(i);

            if (c >= "A" && c <= "Z") upper++;
            else if (c >= "a" && c <= "z") lower++;
            else if (c >= "0" && c <= "9") numbers++;
            else special++;
        }

        const getEs = (count) => count === 1 ? "" : "s";
        const prefix = "Must contain at least ";

        if (upper < this.minUpperCase) this.messages.push(prefix + this.minUpperCase + " uppercase letter(s)");
        if (lower < this.minLowerCase) this.messages.push(this.minLowerCase + " lowercase letter" + getEs(this.minLowerCase));
        if (numbers < this.minNumbers) this.messages.push(this.minNumbers + " number" + getEs(this.minNumbers));
        if (special < this.minSpecial) this.messages.push(this.minSpecial + " special character" + getEs(this.minSpecial));

        return this.messages.length === 0;
    };
}

export default PasswordPolicy;
