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
        position: ModalPosition;
        size: ModalSize,
    };
}