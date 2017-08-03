import { ɵDomAnimationEngine as DomAnimationEngine } from "@angular/animations/browser";
import { AnimationPlayer } from "@angular/animations";
import { NgView } from "../element-registry";
export declare class NativeScriptAnimationEngine extends DomAnimationEngine {
    animateTransition(element: NgView, instruction: any): AnimationPlayer;
    private _onRemovalTransitionOverride(element);
    private _queuePlayerOverride(element, triggerName, player, event);
    private _getElementAnimation(element);
    private _getTransitionAnimation(element);
}
