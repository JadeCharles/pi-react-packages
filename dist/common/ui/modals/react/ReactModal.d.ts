declare namespace Modals {
    type ReactModal = {
        reactBody?: object | null;
        defaultBackgroundClassName?: string;
        backgroundClassName?: string;

        getToastPositionClassName: (options: { [key: string]: any }) => any?;
        async openToastDialogAsync: (content: string|object, options: { [key: string]: any }) => any?;
        async toAlertAsync: (content: object|string, options: object = {}) => Promise<any>?;
        async toCompletedAsync: (content: object|string, options: object = {}) => Promise<any>?;
        async toErrorAsync: (content: object|string, options: object = {}) => Promise<any>?;
        async openActivityAsync: (content: object|string, options: object = {}) => Promise<any>?;
        async openAlertDialogAsync: (content: object|string, options: object = {}, args:[...any]) => Promise<any>?;
        async openConfirmDialogAsync: (content: object|string, onClick: (e:Event) => any?, options: object = {}) => Promise<any>?;
        async openFormDialogAsync: (formElement: object, onClick: (e:Event) => any?, options: object = {}) => Promise<any>?;
        async openDialogAsync: (content: object|string, options = {}, buttons = []) => Promise<any>?;
        createRectIconContent: (content: object | string, options: object = {}, defaultIcon: object) => Promise<any>?;
        createReactButton: (button: string|object, key: string?, caption: string = "Okay") => Promise<any>?;

        hasId: boolean;
        id: string;
        containerId: string;
        container: HTMLElement | null;

        state: number;
        bodyElementId: string | null;
        userClassName: string;
        backgroundClassName: string | null;
        backgroundCloses: boolean;

        verticalPlacement: string;
        horizontalPlacement: string;

        onPreOpen: (() => void) | null;
        targetRect: DOMRect | null;

        /** The anchor position of the modal. Use style.transform.translateX/Y to move it from there */
        position: ModalPosition;

        modalType: string;
        size: ModalSize;

        /* Statics */
        isReact: (component: any?) => boolean;
        toReactBody: (body: any?, elementId: string?, style: object? = null, className: string? = null) => object;

        classes: { [key: string]: string };
        globalClassName: string;
        transitionDurations: { [key: string]: number };
        states: { [key: string]: number };

        clickTime: number;
        clickDifference: number;
        modalStack: [Modal];
        backgroundElementId: string;
        backgroundElement: HTMLElement | null;

        debugElementId: string;
        debugElement: HTMLElement | null;
        debugMessages: [string];
    };
}
