import useDragDropManager from "../useDragDropManager";
import {TargetConnector} from '../../internals'
import {useMemo} from "react";
function useDropTargetConnector(){
    // 先获取manager
    const manager = useDragDropManager()
    const connector = useMemo(() => new TargetConnector(manager.getBackend()), [manager])
    return connector
}

export default useDropTargetConnector
