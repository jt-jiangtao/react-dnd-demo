import {useDrag, useDrop} from "./react-dnd";
import * as ItemTypes from './itemTypes'
import {useRef} from "react";

const style = {
    backgroundColor: 'red',
    padding: '5px',
    margin: '5px',
    border: '1px dashed gray',
    cursor: 'move'
}

export function Card({text, id, index, moveCard}){
    let ref = useRef()
    let [, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect: ()=>({

        }),
        hover(item, monitor){
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) return
            // ref.current为hover元素
            const {top, bottom} = ref.current.getBoundingClientRect()
            const halfOfHoverHeight = (bottom - top) / 2
            // 移动元素
            const {y} = monitor.getClientOffset()
            // hover距离
            const hoverClientY = y - top
            console.log(top, bottom, y, halfOfHoverHeight, hoverClientY)
            if ((dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight)
            || (dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight)){
                moveCard(dragIndex, hoverIndex)
                item.index = hoverIndex
            }
        }
    })

    // 将组件作为拖动源连接到DND
    // DragSource ref连接真实dom
    let [{isDragging}, drag] = useDrag({
        type: ItemTypes.CARD,
        // 用于描述拖动源的普通对象
        item: ()=>({id, index}),
        // 收集功能，用来收集属性，返回JS对象并且返回值会合并到组件属性中
        // monitor存的是拖动状态，当拖动状态发生改变时通知组件生成获取属性并刷新组件
        collect: (monitor)=>({
            isDragging: monitor.isDragging()
        })
    })
    // const opacity = isDragging ? 1 : 1
    drag(ref)
    drop(ref)
    return (
        isDragging ?
            <div style={{"opacity": 1}}>123</div>
            :
        <div ref={ref} style={{...style}}>
            {text}
        </div>
    )
}
