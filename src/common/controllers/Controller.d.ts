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
}
