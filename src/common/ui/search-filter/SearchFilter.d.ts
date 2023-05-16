declare namespace UIElements { 
    type SearchFilter = {
        onFilter: (text: string) => any;
        minLength: number;
        label: string | object;
        placeholder: string | null;
    };
}
