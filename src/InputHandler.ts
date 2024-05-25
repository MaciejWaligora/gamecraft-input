
import { View, ViewConfig } from "gamecraft-view";
import { Signal } from "gamecraft-utils";


export class InputHandler{
    public static buttonClickedSignal = new Signal<string>();

    public static attachClickHandler(view: View<ViewConfig>) {
        if(view.listeners('pointerdown').length === 1){
            view.interactive = true;
        }else{
            view.interactive = true;
            view.on('pointerdown', view.click);
        }       
        
    }

    public static removeClickHandler(view: View<ViewConfig>) {
        view.interactive = false;
    }

    public static addKeyboardInput(){
        document.addEventListener('keydown', (e: KeyboardEvent)=>{
            this.buttonClickedSignal.emit(e.key);
        })
    }


}