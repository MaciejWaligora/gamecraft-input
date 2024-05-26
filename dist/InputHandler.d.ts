import { View, ViewConfig } from "gamecraft-view";
import { Signal } from "gamecraft-utils";
export declare class InputHandler {
    static buttonClickedSignal: Signal<string>;
    static attachClickHandler(view: View<ViewConfig>): void;
    static removeClickHandler(view: View<ViewConfig>): void;
    static addKeyboardInput(): void;
    static removeKeyboardInput(): void;
    static _onKeyboardPressed(e: KeyboardEvent): void;
}
