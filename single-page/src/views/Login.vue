<template>
  <div>
    <el-input v-model="user.username" placeholder="用户名">
    </el-input>
    <el-input v-model="user.password" placeholder="密码">
    </el-input>
    <el-button type="primary" @click="commit">登录</el-button>
  </div>

</template>

<script>
  import store from '../store';
  import {getRoutes} from '../router/routerMap'
  import axios from 'axios'
  export default{
    data(){
      return {
        user:{}
      }
    },
    methods:{
      commit(){
        let self = this;
        self.$store.commit('setRole',this.user.username)
        self.$router.push({path: '/'})
      }
    },
    created(){

    }
  }
</script>

<style>

</style>
