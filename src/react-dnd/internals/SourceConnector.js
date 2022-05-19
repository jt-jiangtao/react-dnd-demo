/**
 * 拖动源连接器
 * 连接一个真实dom
 */
class SourceConnector{
    backend
    handlerId
    dragSourceRef

    constructor(backend) {
        this.backend = backend
    }

    // 3
    connect(){
        // handlerId为拖动源
        console.log("react dnd(handlerId) <---> dom", this.handlerId, this.dragSourceRef)
        if (!this.handlerId || !this.dragSourceRef)return
        this.backend.connectDragSource(this.handlerId, this.dragSourceRef.current)
    }

    // 2
    // 接收react dnd对象
    receiveHandlerId(handlerId){
        this.handlerId = handlerId
        this.connect()
    }

    // 1
    // 接收真实dom
    receiveDragSource(){
        return (dragSourceRef) => this.dragSourceRef = dragSourceRef
    }
}

export default SourceConnector
