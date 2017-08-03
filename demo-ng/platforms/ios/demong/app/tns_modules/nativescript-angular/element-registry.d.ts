import { View } from "tns-core-modules/ui/core/view";
export declare type NgView = (View & ViewExtensions);
export declare type NgElement = NgView | InvisibleNode;
export interface ViewExtensions {
    nodeType: number;
    nodeName: string;
    templateParent: NgView;
    ngCssClasses: Map<string, boolean>;
    meta: ViewClassMeta;
}
export interface ViewClass {
    new (): View;
}
export declare abstract class InvisibleNode extends View implements ViewExtensions {
    meta: {
        skipAddToDom: boolean;
    };
    templateParent: NgView;
    nodeType: number;
    nodeName: string;
    ngCssClasses: Map<string, boolean>;
    constructor();
    toString(): string;
}
export declare class CommentNode extends InvisibleNode {
    protected static id: number;
    constructor();
}
export declare class TextNode extends InvisibleNode {
    protected static id: number;
    constructor();
}
export interface ViewClassMeta {
    skipAddToDom?: boolean;
    insertChild?: (parent: NgView, child: NgView, atIndex: number) => void;
    removeChild?: (parent: NgView, child: NgView) => void;
}
export declare function isDetachedElement(element: any): boolean;
export declare type ViewResolver = () => ViewClass;
export declare function registerElement(elementName: string, resolver: ViewResolver, meta?: ViewClassMeta): void;
export declare function getViewClass(elementName: string): ViewClass;
export declare function getViewMeta(nodeName: string): ViewClassMeta;
export declare function isKnownView(elementName: string): boolean;
export declare function getSingleViewRecursive(nodes: Array<any>, nestLevel: number): View;
