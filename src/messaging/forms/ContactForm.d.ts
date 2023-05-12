declare namespace Messaging {
    type ContactForm = { 
        value: object;
        onClick: (e: Event) => any;
        onError: (e: Error) => void;
        onComplete: (result: any) => any;
        useButton: boolean | undefined;
        options: object | null | undefined;
        controller: FormController;
        controllerKey: string | null | undefined;
        requiredFields: object | null | undefined;
        prefix: string | null | undefined;
    };
}
