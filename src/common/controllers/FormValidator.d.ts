declare namespace Validators { 
    type PasswordPolicy = {
        static emptyError: string;
        static isDebug: boolean;
        validate: (password: string) => boolean;
        static getPolicyOptionsByName: (name: string) => { minLength: number, minUpperCase: number, minLowerCase: number, minNumbers: number, minSpecial: number };
        
    };

    type FormValidator = {
        static isDebug: boolean;
        static validateExistance: (value: any) => boolean;
        static validateEmail: (value: string) => boolean;
        static validatePhone: (value: string) => boolean;
        static validatePassword: (value: string, policy: PasswordPolicy) => boolean;
        static validatePasswords: (value: string, value2: string) => boolean;
    };
}
