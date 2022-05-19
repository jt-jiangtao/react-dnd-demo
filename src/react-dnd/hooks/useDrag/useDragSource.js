import DragSourceImpl from './DragSourceImpl'
import {useEffect, useMemo} from "react";

function useDragSource(spec, monitor, connector){
    const dragSource = useMemo(()=>new DragSourceImpl(spec, monitor, connector), [monitor, connector])
    useEffect(()=> {
        dragSource.spec = spec
    }, [spec])
    return dragSource
}

export default useDragSource
