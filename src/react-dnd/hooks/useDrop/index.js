import useDropTargetMonitor from "./useDropTargetMonitor";
import useDropTargetConnector from './useDropTargetConnector'
import useRegisteredDropTarget from "./useRegisteredDropTarget";
import useConnectDropTarget from './useConnectDropTarget'
import useCollectedProps from "../useCollectedProps";

function useDrop(spec){
    // 创建监听器
    const monitor = useDropTargetMonitor()
    // 创建连接
    const connector = useDropTargetConnector()
    // 向dnd中注册拖动源的实例
    // 1. 创建拖动源实例
    // 2. 注册拖动源实例到注册表中
    useRegisteredDropTarget(spec, monitor, connector)
    return [
        useCollectedProps(spec.collect, monitor, connector),
        useConnectDropTarget(connector)
    ]
}

export default useDrop

// monitor有两个级别
// 全局monitor
// 拖动源或放置目标monitor
