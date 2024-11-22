const state = {
  theme: 'dark',
  desc: '描述真呀真不错'
}

const getters = {
    uppcaseTheme(state){
        return state.theme.toUpperCase()
    }
}

const mutations = {
    changeTheme(state,theme){
        state.theme = theme
    }
}

const actions = {}

export default {
    //开启命名空间
    namespaced:true,
      state,
      mutations,
      actions,
      getters
}