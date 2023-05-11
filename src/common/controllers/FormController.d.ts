declare namespace Controllers {
    type FormController = {
        id: string | null;
        prefix: string;
        errors: { [key: string]: string };
        callbacks: { [key: string]: Function };
        onClick: Function | null;
        userData: any;
        addError: (name: string, error: string) => void;
        getData: (key: string, options: { [key: string]: any } | null = null) => { [key: string]: any } | null;
        getErrors: () => any | null;
        setUserData: () => any | null;
        getUserData: () => any | null;
        submit: (e: any | null) => any | null;
        setSubmit: (submitFunction: Function) => boolean;
        setErrors: (errorJson: { [key: string]: any }) => boolean;
        setError: () => any | null;
        hasErrors: () => any | null;
        focusError: () => any | null;
        setCallback: (key: string, callback: Function, overwrite: boolean = false) => boolean;
        removeCallback: (key: string) => boolean;
        clearErrors: (key: string) => boolean;
        static isDebug: boolean;
    };    
}
