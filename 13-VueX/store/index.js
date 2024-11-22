// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({
    strict:true,
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules:{
        user,
        setting
    }
})

// 导出仓库
export default store
