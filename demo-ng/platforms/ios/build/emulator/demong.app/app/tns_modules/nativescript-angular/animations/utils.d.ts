import { KeyframeAnimation } from "tns-core-modules/ui/animation/keyframe-animation";
export interface Keyframe {
    [key: string]: string | number;
    offset: number;
}
export declare function createKeyframeAnimation(styles: Keyframe[], duration: number, delay: number, easing: string): KeyframeAnimation;
