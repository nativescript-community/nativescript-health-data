import { ViewContainerRef, ComponentFactoryResolver, Injector } from "@angular/core";
import { RouterOutletMap, ActivatedRoute } from "@angular/router";
import { Device } from "tns-core-modules/platform";
import { Frame } from "tns-core-modules/ui/frame";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { PageFactory } from "../platform-providers";
import { NSLocationStrategy } from "./ns-location-strategy";
export declare class PageRoute {
    activatedRoute: BehaviorSubject<ActivatedRoute>;
    constructor(startRoute: ActivatedRoute);
}
export declare class PageRouterOutlet {
    private location;
    private locationStrategy;
    private componentFactoryResolver;
    private resolver;
    private frame;
    private pageFactory;
    private viewUtil;
    private refCache;
    private isInitialPage;
    private detachedLoaderFactory;
    private itemsToDestroy;
    private currentActivatedComp;
    private currentActivatedRoute;
    outletMap: RouterOutletMap;
    /** @deprecated from Angular since v4 */
    readonly locationInjector: Injector;
    /** @deprecated from Angular since v4 */
    readonly locationFactoryResolver: ComponentFactoryResolver;
    readonly isActivated: boolean;
    readonly component: Object;
    readonly activatedRoute: ActivatedRoute;
    constructor(parentOutletMap: RouterOutletMap, location: ViewContainerRef, name: string, locationStrategy: NSLocationStrategy, componentFactoryResolver: ComponentFactoryResolver, resolver: ComponentFactoryResolver, frame: Frame, device: Device, pageFactory: PageFactory);
    deactivate(): void;
    private clearRefCache();
    private destroyQueuedCacheItems();
    private destroyCacheItem(poppedItem);
    /**
     * Called by the Router to instantiate a new component during the commit phase of a navigation.
     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
     */
    activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver | null, outletMap: RouterOutletMap): void;
    private activateOnGoForward(activatedRoute, outletMap, loadedResolver);
    private activateOnGoBack(activatedRoute, outletMap);
    private loadComponentInPage(page, componentRef);
    private getComponentFactory(activatedRoute, loadedResolver);
}
