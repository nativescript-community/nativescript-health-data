import { NgModuleRef, Type, ViewContainerRef } from "@angular/core";
export interface ModalDialogOptions {
    context?: any;
    fullscreen?: boolean;
    viewContainerRef?: ViewContainerRef;
    moduleRef?: NgModuleRef<any>;
}
export declare class ModalDialogParams {
    context: any;
    closeCallback: (...args) => any;
    constructor(context: any, closeCallback: (...args) => any);
}
export declare class ModalDialogService {
    showModal(type: Type<any>, {viewContainerRef, moduleRef, context, fullscreen}: ModalDialogOptions): Promise<any>;
    private static showDialog({containerRef, context, doneCallback, fullscreen, pageFactory, parentPage, resolver, type});
}
export declare class ModalDialogHost {
    constructor();
}
