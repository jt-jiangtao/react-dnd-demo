export const ADD_SOURCE = 'dnd-core/ADD_SOURCE'
export const ADD_TARGET = 'dnd-core/ADD_TARGET'

export function addSource(handlerId){
    return {
        type: ADD_SOURCE,
        payload: {handlerId}
    }
}

export function addTarget(handlerId){
    return {
        type: ADD_TARGET,
        payload: {handlerId}
    }
}
