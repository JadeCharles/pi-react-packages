declare namespace Controllers {
    type Controller = {
        id: string;
        userData: any;

        // Callbacks/Events
        onClick: Function;
        onChange: Function;
        onKeyPress: Function;
        onSubmit: Function;

        // Methods
        open: Function;
        close: Function;
        cancel: Function;
        submit: Function;
        
        refresh: Function;
        delete: Function;

        getData: Function;
    
        setUserData: (key: string, value: any | null) => void;
        getUserData: () => any | null;
        setOpenCallback: () => void;
        setCloseCallback: () => void;
        static copyText: (text: string) => boolean;
    };
}