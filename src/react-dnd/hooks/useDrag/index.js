import useDragSourceMonitor from "./useDragSourceMonitor";
import useDragSourceConnector from './useDragSourceConnector'
import useRegisteredDragSource from "./useRegisteredDragSource";
import useConnectDragSource from './useConnectDragSource'
import useCollectedProps from "../useCollectedProps";

function useDrag(spec){
    // 创建监听器
    const monitor = useDragSourceMonitor()
    // 创建连接
    const connector = useDragSourceConnector()
    // 向dnd中注册拖动源的实例
    // 1. 创建拖动源实例
    // 2. 注册拖动源实例到注册表中
    useRegisteredDragSource(spec, monitor, connector)
    return [
        useCollectedProps(spec.collect, monitor, connector),
        useConnectDragSource(connector)
    ]
}

export default useDrag

// monitor有两个级别
// 全局monitor
// 拖动源或放置目标monitor
