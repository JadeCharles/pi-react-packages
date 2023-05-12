
declare namespace Forms {
    type FormButton = { 
        id: string | null;
        onClick: (e:Event) => any;
        label: string;
        isWorking: boolean;
        children: any;
        disabled: boolean;
        controller: FormController;
        continueActivity: any;
    };
}
