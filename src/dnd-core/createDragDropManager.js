import {createStore} from 'redux'
import reducer from "./reducers";
import DragDropManagerImpl from './classes/DragDropManagerImpl'
import DragDropMonitorImpl from './classes/DragDropMonitorImpl'
import HandlerRegistryImpl from './classes/HandlerRegistryImpl'
// 管理器管理所有的东西
function createDragDropManager(backendFactory){
    // 创建一个仓库存放dnd项目的状态
    const store = createStore(reducer);
    // 创建注册表
    const registry = new HandlerRegistryImpl(store)
    // 创建监听器
    const globalMonitor = new DragDropMonitorImpl(store, registry)
    // 创建真实管理器
    const manager = new DragDropManagerImpl(store,globalMonitor)
    const backend = backendFactory(manager)
    manager.receiveBackend(backend)
    return manager
}

export default createDragDropManager
