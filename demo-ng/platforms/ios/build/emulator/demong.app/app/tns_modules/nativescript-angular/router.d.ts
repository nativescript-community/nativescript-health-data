import { ModuleWithProviders } from "@angular/core";
import { Routes, ExtraOptions } from "@angular/router";
import { Frame } from "tns-core-modules/ui/frame";
import { NSLocationStrategy, LocationState } from "./router/ns-location-strategy";
export { PageRoute } from "./router/page-router-outlet";
export { RouterExtensions } from "./router/router-extensions";
export { NSModuleFactoryLoader } from "./router/ns-module-factory-loader";
export declare type LocationState = LocationState;
export declare class NativeScriptRouterModule {
    static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders;
    static forChild(routes: Routes): ModuleWithProviders;
}
export declare function provideLocationStrategy(locationStrategy: NSLocationStrategy, frame: Frame): NSLocationStrategy;
