import useDropTarget from "./useDropTarget";
import useDragDropManager from "../useDragDropManager";
import {useLayoutEffect} from "react";
import {registerTarget} from "../../internals";

function  useRegisteredDragSource(spec, monitor, connector){
    const manager = useDragDropManager()
    const dropTarget = useDropTarget(spec, monitor, connector)
    const itemType = spec.type
    // 在dom渲染之后执行
    useLayoutEffect(()=>{
        const handlerId = registerTarget(itemType, dropTarget, manager)
        monitor.receiveHandlerId(handlerId)
        connector.receiveHandlerId(handlerId)
    }, [connector, dropTarget, itemType, manager, monitor])
}

export default useRegisteredDragSource
