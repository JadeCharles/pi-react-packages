declare namespace Formatting { 
    type NumberDisplay = {
        decimalPlaces: number;
        value: string | number;
        path: string | undefined;
        type: string;
        symbol: string;
        formatter: (text: string) => string;
        isComponent: boolean;
    };
}