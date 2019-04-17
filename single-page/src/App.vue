<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import axios from 'axios'
  import {getRoutes} from './router/routerMap'
  export default{
    mounted(){
      let self = this;
      if (localStorage.getItem("role")){
        axios.get('/json/Shiro.json').then(res => {// 拉取用户信息
          const roles = res.data
          let rolesKey = Object.keys(roles);
        for(var i = 0; i < rolesKey.length; i++){
          if(rolesKey[i] == self.$store.state.role){
            let routes = getRoutes(roles[rolesKey[i]]);
            self.$store.commit("setPowerMenu",routes);
            self.$router.addRoutes(routes);
          }
        }
      })
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
