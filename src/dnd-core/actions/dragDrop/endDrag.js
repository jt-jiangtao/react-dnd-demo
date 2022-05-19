import {END_DRAG} from "./types";

export function createEndDrag(manager){
    return function endDrag(sourceId){
        return {
            type: END_DRAG
        }
    }
}
