<template>
  <el-container style>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-submenu index="index" v-for="(menu,index) in menuList">
          <template slot="title"><i class="el-icon-message"></i>{{menu.name}}</template>
          <router-link :to="menu.path">{{menu.name}}</router-link>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{role}}</span><span @click="logout">退出</span>
      </el-header>
      <el-main>
        <router-view ></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      return {
        menuList: this.$store.state.powerMenu,
        role: this.$store.state.role
      }
    },
    methods:{
      logout(){
        this.$store.commit("logout")
        window.location.reload();
      }

    }
  };
</script>
