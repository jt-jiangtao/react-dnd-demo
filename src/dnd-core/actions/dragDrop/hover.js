import {HOVER} from "./types";

export function createHover(manager){
    return function hover(targetId, {clientOffset}){
        const monitor = manager.getGlobalMonitor()
        const registry = manager.getRegistry()
        const target = registry.getTarget(targetId)
        queueMicrotask(target.hover.bind(target, monitor))
        return {
            type: HOVER,
            payload: {
                targetId,
                clientOffset
            }
        }
    }
}
