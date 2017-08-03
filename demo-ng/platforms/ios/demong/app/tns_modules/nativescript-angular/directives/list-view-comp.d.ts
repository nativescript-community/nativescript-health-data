import { AfterContentInit, ChangeDetectorRef, DoCheck, ElementRef, EmbeddedViewRef, EventEmitter, IterableDiffers, OnDestroy, TemplateRef, ViewContainerRef } from "@angular/core";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view";
import { View } from "tns-core-modules/ui/core/view";
export declare class ListItemContext {
    $implicit: any;
    item: any;
    index: number;
    even: boolean;
    odd: boolean;
    constructor($implicit?: any, item?: any, index?: number, even?: boolean, odd?: boolean);
}
export interface SetupItemViewArgs {
    view: EmbeddedViewRef<any>;
    data: any;
    index: number;
    context: ListItemContext;
}
export declare class ListViewComponent implements DoCheck, OnDestroy, AfterContentInit {
    private _iterableDiffers;
    private _cdr;
    readonly nativeElement: ListView;
    private listView;
    private _items;
    private _differ;
    private _templateMap;
    loader: ViewContainerRef;
    setupItemView: EventEmitter<SetupItemViewArgs>;
    itemTemplateQuery: TemplateRef<ListItemContext>;
    itemTemplate: TemplateRef<ListItemContext>;
    items: any;
    constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers, _cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private setItemTemplates();
    registerTemplate(key: string, template: TemplateRef<ListItemContext>): void;
    onItemLoading(args: ItemEventData): void;
    setupViewRef(viewRef: EmbeddedViewRef<ListItemContext>, data: any, index: number): void;
    private detectChangesOnChild(viewRef, index);
    ngDoCheck(): void;
}
export interface ComponentView {
    rootNodes: Array<any>;
    destroy(): void;
}
export declare type RootLocator = (nodes: Array<any>, nestLevel: number) => View;
export declare function getItemViewRoot(viewRef: ComponentView, rootLocator?: RootLocator): View;
export declare class TemplateKeyDirective {
    private templateRef;
    private list;
    constructor(templateRef: TemplateRef<any>, list: ListViewComponent);
    nsTemplateKey: any;
}
