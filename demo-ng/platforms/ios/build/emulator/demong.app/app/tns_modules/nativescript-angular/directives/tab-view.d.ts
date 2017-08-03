import { AfterViewInit, ElementRef, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { TabView } from "tns-core-modules/ui/tab-view";
export declare class TabViewDirective implements AfterViewInit {
    tabView: TabView;
    private _selectedIndex;
    private viewInitialized;
    selectedIndex: number;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
}
export declare class TabViewItemDirective implements OnInit {
    private owner;
    private templateRef;
    private viewContainer;
    private item;
    private _title;
    private _iconSource;
    constructor(owner: TabViewDirective, templateRef: TemplateRef<any>, viewContainer: ViewContainerRef);
    config: any;
    title: string;
    iconSource: string;
    private ensureItem();
    ngOnInit(): void;
}
