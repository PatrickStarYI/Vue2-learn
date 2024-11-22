/**
 在vue2中, 如果想要让一个对象变成插件对象
 1) 需要在对象中加一个install方法
 2) 外部需要用Vue.use(插件对象), 会把vue实例对象作为参数传递过来
 */
export const directive = {
  install(Vue){
    // 1. 第一个指令
    Vue.directive('focus', {
      inserted(el, binding){
        console.log(el, binding)
        el.focus()
      }
    }),
    // 2. 第二个指令
    Vue.directive('color', {
      inserted(el, binding){
        el.style.color = binding.value
      },
      update(el, binding){
        el.style.color = binding.value
      }
    })
  }
}