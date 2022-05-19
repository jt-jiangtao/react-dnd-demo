/**
 * 拖动源连接器
 * 连接一个真实dom
 */
class TargetConnector{
    backend
    handlerId
    dragTargetRef

    constructor(backend) {
        this.backend = backend
    }

    // 3
    connect(){
        // handlerId为拖动源
        console.log("react dnd(handlerId) <---> dom", this.handlerId, this.dragTargetRef)
        if (!this.handlerId || !this.dragTargetRef)return
        this.backend.connectDropTarget(this.handlerId, this.dragTargetRef.current)
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
        return (dragTargetRef) => this.dragTargetRef = dragTargetRef
    }
}

export default TargetConnector
