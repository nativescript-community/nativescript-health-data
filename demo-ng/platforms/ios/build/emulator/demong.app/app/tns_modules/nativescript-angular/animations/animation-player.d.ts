import { AnimationPlayer } from "@angular/animations";
import { NgView } from "../element-registry";
import { Keyframe } from "./utils";
export declare class NativeScriptAnimationPlayer implements AnimationPlayer {
    private target;
    parentPlayer: AnimationPlayer;
    private _startSubscriptions;
    private _doneSubscriptions;
    private _finished;
    private _started;
    private animation;
    constructor(target: NgView, keyframes: Keyframe[], duration: number, delay: number, easing: string);
    init(): void;
    hasStarted(): boolean;
    onStart(fn: Function): void;
    onDone(fn: Function): void;
    onDestroy(fn: Function): void;
    play(): void;
    pause(): void;
    finish(): void;
    reset(): void;
    restart(): void;
    destroy(): void;
    setPosition(_p: any): void;
    getPosition(): number;
    private initKeyframeAnimation(keyframes, duration, delay, easing);
    private onFinish();
}
