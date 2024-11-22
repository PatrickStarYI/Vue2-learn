const state = {
   userInfo:{
        name:'zs',
    age:18
   }
}

const mutations = {
    changeUserInfo(state,userInfo){
        state.userInfo = userInfo
    }
}

const actions = {
    asyncChangeUserInfo(context, userInfo){
        setTimeout(() => {
            context.commit('changeUserInfo',userInfo)
        },1000)
    }
}

const getters = {}

export  default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}
