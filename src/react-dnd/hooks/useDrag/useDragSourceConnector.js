import useDragDropManager from "../useDragDropManager";
import {SourceConnector} from '../../internals'
import {useMemo} from "react";
function useDragSourceConnector(){
    // 先获取manager
    const manager = useDragDropManager()
    const connector = useMemo(() => new SourceConnector(manager.getBackend()), [manager])
    return connector
}

export default useDragSourceConnector
