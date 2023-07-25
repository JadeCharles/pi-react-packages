declare namespace Forms { 
    type Checkbox = {
        children: any;
        onChange: (e:Event) => any;
        onCheck: (e:Event) => any;
        controller: FormController;
        setter: (key:string, value:any) => any;
        onIcon: object|null;
        offIcon: object|null;
        size: number;
        onElement: object|null;
        offElement: object|null;
        value: boolean;
        isChecked: boolean;
        checked: boolean;
        label: string | object | null;
        id: string | null;
        controllerKey: string | null;
    };
}