import {createDragDropActions} from '../actions/dragDrop'
import {bindActionCreators} from "redux";

class DragDropManagerImpl{
    store
    backend
    globalMonitor
    constructor(store, globalMonitor) {
        this.store = store
        this.globalMonitor = globalMonitor
    }

    receiveBackend(backend){
        this.backend = backend
        this.backend.setUp()
    }

    getBackend(){
        return this.backend
    }

    getGlobalMonitor(){
        return this.globalMonitor
    }

    getRegistry(){
        return this.globalMonitor.registry
    }

    getActions(){
        const actions = createDragDropActions(this)
        // 使用store的dispatch方法把参数对象中包含的每一个action creator包裹起来，这样就不需要显示的使用dispatch方法发送action
        return bindActionCreators(actions, this.store.dispatch)
    }
}

export default DragDropManagerImpl
