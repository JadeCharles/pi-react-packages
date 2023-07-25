declare namespace People { 
    type PersonForm = {
        onClick: (json: object|null, e: Event) => any;
        onError: (err: Error) => any;
        labels: object;
        useButton: boolean;
        onComplete: (userData:object) => any;
        value: object | null;
        controller: FormController;
        controllerKey: string | undefined;
        requiredFields: object | null;
        prefix: string;
    };
}