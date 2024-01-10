declare namespace SetterFunctions { 
    type SetterFunction = {
        set: (value: string) => boolean;
        setFunction: (onSetHandler: function) => boolean;
        onSet: (isChecked: boolean, e:Event) => boolean;
        isMounted: () => boolean;
    };
}
