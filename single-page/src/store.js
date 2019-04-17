import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role:localStorage.getItem("role") ? localStorage.getItem("role") : '',
    powerMenu: []
  },
  mutations: {
    setRole(state,role){
      state.role = role;
      localStorage.setItem("role",role)
    },
    setPowerMenu(state,menus){
      state.powerMenu = menus;
    },
    logout(state){
      state.role = '';
      localStorage.removeItem("role");
    }
  },
  actions: {

  }
})
