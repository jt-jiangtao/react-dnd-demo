class HTML5BackendImpl{
    manager
    actions
    dragStartHandlerId // 记录当前被拖动的处理器ID
    dragOverTargetId
    constructor(manager) {
        this.manager = manager
        this.actions = manager.getActions()
    }

    setUp(){
        this.addEventListener(window)
    }

    // 绑定的为window
    addEventListener(target) {
        target.addEventListener('dragstart', this.handleTopDragStart)
        target.addEventListener('dragover', this.handleTopDragOver)
        target.addEventListener('dragend', this.handleTopDragEndCapture, true)
    }

    handleTopDragStart = ()=> {
        this.actions.beginDrag(this.dragStartHandlerId)
    }

    handleTopDragOver = (event)=> {
        this.actions.hover(this.dragOverTargetId,{
            clientOffset: getEventClientOffset(event)
        })
    }

    handleTopDragEndCapture = ()=>{
        this.actions.endDrag()
    }

    // 绑定的是具体的卡片的拖动元素
    connectDragSource(handlerId, domNode){
        console.log(domNode)
        domNode.setAttribute('draggable', true)
        domNode.addEventListener('dragstart', (event)=> this.handleDragStart(event, handlerId))
    }

    handleDragStart(event, handlerId){
        this.dragStartHandlerId = handlerId
    }

    handleDragOver = (event, targetId)=>{
        this.dragOverTargetId = targetId
    }

    connectDropTarget(targetId, domNode){
        domNode.addEventListener('dragover', (event)=> this.handleDragOver(event, targetId))
    }
}

function getEventClientOffset(event){
    return {
        x: event.clientX,
        y: event.clientY
    }
}

export default HTML5BackendImpl
