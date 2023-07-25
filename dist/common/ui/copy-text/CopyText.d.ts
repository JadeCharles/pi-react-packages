declare namespace UIElements { 
    type CopyText = {
        children: object | string;
        className: string | null;
        label: string | object | undefined;
        text: string | null;
        copiedLabel: string | object | null;
        onCopy: (text: string) => any;
        onError: (err: Error) => any;
        icon: object | null;
    };
}