import useDragDropManager from "../useDragDropManager";
import useDragSource from './useDragSource'
import useDragType from './useDragType'
import {useLayoutEffect} from "react";
import {registerSource} from "../../internals";

function  useRegisteredDragSource(spec, monitor, connector){
    const manager = useDragDropManager()
    const dragSource = useDragSource(spec, monitor, connector)
    const itemType = useDragType(spec)
    // 在dom渲染之后执行
    useLayoutEffect(()=>{
        const handlerId = registerSource(itemType, dragSource, manager)
        monitor.receiveHandlerId(handlerId)
        connector.receiveHandlerId(handlerId)
    }, [connector, dragSource, itemType, manager, monitor])
}

export default useRegisteredDragSource
