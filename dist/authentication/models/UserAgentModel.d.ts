declare namespace Authentication { 
    type UserAgentModel = {
        userAgent: string;
        name: string;
        isMobile: boolean;
        isUnferral: boolean;
        browser: string;

        getUnferralTypeName: () => string;
        find: (description: string) => any | null;
        Browsers: object;
        
    };
}