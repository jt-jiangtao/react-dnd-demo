class DragSourceMonitorImpl{
    internalMonitor
    handlerId
    constructor(manager) {
        this.internalMonitor = manager.getGlobalMonitor()
    }
    receiveHandlerId(handlerId){
        this.handlerId = handlerId
    }
    subscribeStateChange(listener){
        return this.internalMonitor.subscribeStateChange(listener)
    }
    isDragging(){
        return this.internalMonitor.isDraggingSource(this.handlerId)
    }
}

export default DragSourceMonitorImpl

// 某个源的监听器有一个指针指向全局监听器
