import DropTargetImpl from './DropTargetImpl'
import {useEffect, useMemo} from "react";

function useDropTarget(spec, monitor, connector){
    const dropTarget = useMemo(()=>new DropTargetImpl(spec, monitor, connector), [monitor, connector])
    useEffect(()=> {
        dropTarget.spec = spec
    }, [spec])
    return dropTarget
}

export default useDropTarget
