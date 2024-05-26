"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputHandler = void 0;
const gamecraft_utils_1 = require("gamecraft-utils");
class InputHandler {
    static attachClickHandler(view) {
        if (view.listeners('pointerdown').length === 1) {
            view.interactive = true;
        }
        else {
            view.interactive = true;
            view.on('pointerdown', view.click);
        }
    }
    static removeClickHandler(view) {
        view.interactive = false;
    }
    static addKeyboardInput() {
        document.addEventListener('keydown', InputHandler._onKeyboardPressed);
    }
    static removeKeyboardInput() {
        document.removeEventListener('keydown', InputHandler._onKeyboardPressed);
    }
    static _onKeyboardPressed(e) {
        InputHandler.buttonClickedSignal.emit(e.key);
    }
}
exports.InputHandler = InputHandler;
InputHandler.buttonClickedSignal = new gamecraft_utils_1.Signal();
