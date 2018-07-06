// 在Vue的实例上新增_init方法
import { initMixin } from './init'
// 在Vue的实例上新增$data $props两个属性 以及 $delete、$set、$watch三个方法
import { stateMixin } from './state'
// 在Vue的实例上新增$nextTick _render方法和一系列其他的工具方法
import { renderMixin } from './render'
// 在Vue的实例上新增$on, $once, $off, $emit四个方法
import { eventsMixin } from './events'
// 在Vue的实例上新增_update, $forceUpdate, $destroy三个方法
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 定义vue的构造方法
function Vue (options) {
  // 使用了安全模式来提醒你要使用 new 操作符来调用 Vue
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
