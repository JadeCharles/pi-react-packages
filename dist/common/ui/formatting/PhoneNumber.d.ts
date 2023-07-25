declare namespace Formatting { 
    type PhoneNumber = {
        value: string | number;
        children: object | string | number;
        defaultValue: string | number;
        prefix: string | undefined;
        suffix: string | undefined;
    };
}