// 从监听器中收集属性并返回用来渲染组件
import {useCallback, useLayoutEffect, useState} from "react";
import equal from 'fast-deep-equal'

function useCollectedProps(collect, monitor, connector){
    const [collectedProps, setCollectedProps] = useState(() => collect(monitor));
    // 当仓库的状态变化后，需要重新计算属性来渲染组件
    const updateCollected = useCallback(()=>{
        // redux中数据发生改变,monitor发生改变
        const nextValue = collect(monitor)
        if (! equal(collectedProps, nextValue)){
            // 传递给useState组件重新刷新
            setCollectedProps(nextValue)
        }
    }, [collect, monitor])
    useLayoutEffect(()=>{
        monitor.subscribeStateChange(updateCollected)
    }, [monitor, updateCollected])
    return collectedProps
}

export default useCollectedProps
