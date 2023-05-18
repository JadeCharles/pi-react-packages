declare namespace Modals { 
    export type ModalPosition = {
        x: number;
        y: number;
    }

    export type ModalSize = {
        width: number;
        height: number;
    };
    
    export type Modal = {
        id: string;
        hasId: boolean;
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