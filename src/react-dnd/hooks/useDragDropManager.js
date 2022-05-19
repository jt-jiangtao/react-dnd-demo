import {useContext} from "react";
import {DndContext} from "../core";

function useDragDropManager(){
    let value = useContext(DndContext)
    return value.dragDropManager
}

export default useDragDropManager
