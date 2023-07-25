declare namespace Buttons { 
    type DeleteButton = {
        children: object;
        onClick: (e:Event) => any;
        className: string;
        activity: any;
        promptText: string;
        countDown: number;
    };
}