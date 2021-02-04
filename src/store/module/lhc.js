const state = {
  token:"2222222222",
}
const mutations = {
  SET_TOKEN: (state,token)=>{
    console.log("接收到的参数：",token)
    state.token = token
  }
}
const actions = {
  asyncSetToken({ commit },data){
    commit('SET_TOKEN',data)
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}
