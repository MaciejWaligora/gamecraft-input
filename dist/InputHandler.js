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
        document.addEventListener('keydown', this._onKeyboardPressed);
    }
    static removeKeyboardInput() {
        document.removeEventListener('keydown', this._onKeyboardPressed);
    }
    static _onKeyboardPressed(e) {
        this.buttonClickedSignal.emit(e.key);
    }
}
exports.InputHandler = InputHandler;
InputHandler.buttonClickedSignal = new gamecraft_utils_1.Signal();
