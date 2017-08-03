import { Frame } from "tns-core-modules/ui/frame";
import { Page } from "tns-core-modules/ui/page";
import { OpaqueToken } from "@angular/core";
import { Device } from "tns-core-modules/platform";
export declare const APP_ROOT_VIEW: OpaqueToken;
export declare const DEVICE: OpaqueToken;
export declare const PAGE_FACTORY: OpaqueToken;
export declare function setRootPage(page: Page): void;
export declare function getRootPage(): Page;
export declare function getDefaultPage(): Page;
export declare const defaultPageProvider: {
    provide: typeof Page;
    useFactory: () => Page;
};
export declare function getDefaultFrame(): Frame;
export declare const defaultFrameProvider: {
    provide: typeof Frame;
    useFactory: () => Frame;
};
export declare function getDefaultDevice(): Device;
export declare const defaultDeviceProvider: {
    provide: OpaqueToken;
    useFactory: () => Device;
};
export declare type PageFactory = (options: PageFactoryOptions) => Page;
export interface PageFactoryOptions {
    isBootstrap?: boolean;
    isLivesync?: boolean;
    isModal?: boolean;
    isNavigation?: boolean;
    componentType?: any;
}
export declare const defaultPageFactory: PageFactory;
export declare const defaultPageFactoryProvider: {
    provide: OpaqueToken;
    useValue: PageFactory;
};
