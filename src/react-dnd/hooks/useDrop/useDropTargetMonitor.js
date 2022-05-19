import useDragDropManager from '../useDragDropManager'
import {useMemo} from "react";
import {DropTargetMonitorImpl} from "../../internals";

function useDropTargetMonitor(){
    const manager = useDragDropManager()
    return useMemo(()=> new DropTargetMonitorImpl(manager), [manager])
}

export default useDropTargetMonitor
