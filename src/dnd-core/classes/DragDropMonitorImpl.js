class DragDropMonitorImpl{
    store
    registry

    constructor(store, registry) {
        this.store = store
        this.registry = registry
    }

    subscribeStateChange(listener){
        // 最终传递给redux仓库
        this.store.subscribe(listener)
    }

    isDraggingSource(handlerId){
        return handlerId === this.getSourceId()
    }

    getSourceId(){
        // 正在被拖动的id
        return this.store.getState().dragOperation.sourceId
    }

    getItemType(){
        return this.store.getState().dragOperation.itemType
    }

    getItem(){
        return this.store.getState().dragOperation.item
    }

    getClientOffset(){
        return this.store.getState().dragOffset.clientOffset
    }
}

export default DragDropMonitorImpl
