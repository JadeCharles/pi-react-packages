declare namespace Controllers {
    type Controller = {
        id: string;
        userData: any;
        state: number;

        // Callbacks/Events
        onClick: (e:Event) => void | boolean;
        onChange: (e:Event) => void | boolean;
        onKeyPress: (e:Event) => void | boolean;
        onSubmit: (e:Event) => void | boolean;

        // Methods
        open: (e:Event | undefined) => Promise<any>;
        close: (e:Event | undefined) => Promise<any>;
        cancel: (e:Event | undefined) => Promise<any>;
        submit: (e:Event | undefined) => Promise<any>;

        refresh: (e: Event | undefined) => Promise<any>;
        delete: (e:Event | undefined) => Promise<any>;

        getData: (key: string | undefined) => any;

        setState: (state: number) => boolean | null;
        setUserData: (key: string, value: any | null) => void;
        getUserData: (options: object | string | undefined) => any | null;
        setOpenCallback: (key: string, onOpen: Function) => void;
        setCloseCallback: (key: string, onClose: Function) => void;

        static copyText: (text: string) => boolean;
    };

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

export default Controllers;
