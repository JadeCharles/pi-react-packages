declare namespace Formatting { 
    type DateTimeOptions = {
        month?: string;
        day?: string;
        year?: string;
        hour?: string;
        minute?: string;
        second?: string;
        ampm?: string;
        am?: string;
        pm?: string;
        milisecond?: string;
    };

    type DateTimeProps = {
        value?: Date;
        options?: DateTimeOptions;
        showRelative?: boolean;
        showRelativeDate?: boolean;
        time?: boolean;
        defaultValue?: string;
        prefix?: string;
        suffix?: string;
        wrapWithStrong?: boolean;
        useUtc?: boolean;
    };

    type DateTime = {
        props: DateTimeProps;
        static format: (date: Date, format: string) => string;
        static defaultOptions: DateTimeOptions;
        static defaultTimeOptions: DateTimeOptions;
        static toFormDate: (date: Date) => string;
    };
}
