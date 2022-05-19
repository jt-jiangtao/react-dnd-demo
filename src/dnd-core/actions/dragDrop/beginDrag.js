import {BEGIN_DRAG} from "./types";

export function createBeginDrag(manager){
   return function beginDrag(sourceId){
       // 获取管理器中的全局监听器
       const monitor = manager.getGlobalMonitor();
       // 获取注册表
       const registry = manager.getRegistry()
       // 获取拖动源
       const source = registry.getSource(sourceId);
       // 调用useDrag中的spec.item方法，返回正在拖动的元素信息
       const item = source.beginDrag(monitor)
       const itemType = registry.getSourceType(sourceId)
       return {
           type: BEGIN_DRAG,
           payload: {
               itemType,
               item, // (id, index)
               sourceId
           }
       }
   }
}
