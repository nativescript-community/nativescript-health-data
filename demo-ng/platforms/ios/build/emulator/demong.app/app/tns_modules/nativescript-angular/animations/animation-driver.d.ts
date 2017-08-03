import { AnimationPlayer } from "@angular/animations";
import { NgView } from "../element-registry";
import { Keyframe } from "./utils";
export declare abstract class AnimationDriver {
    abstract animate(element: any, keyframes: Keyframe[], duration: number, delay: number, easing: string): AnimationPlayer;
}
export declare class NativeScriptAnimationDriver implements AnimationDriver {
    computeStyle(element: NgView, prop: string): string;
    animate(element: NgView, keyframes: Keyframe[], duration: number, delay: number, easing: string): AnimationPlayer;
}
