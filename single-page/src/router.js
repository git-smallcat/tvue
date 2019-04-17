import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import {getRoutes} from './router/routerMap'
import store from './store'
import axios from 'axios'
Vue.use(Router)
const whiteList = ['/login'] // 不重定向白名单
const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: Index
  },{
    path:'/login',
    name:'login',
    component: Login
  }
]
const router = new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  //routes:constantRouterMap,
  routes: constantRouterMap
})
router.beforeEach((to,from,next) => {
  if (localStorage.getItem("role")){
    console.log(store.state.powerMenu);
    if (store.state.powerMenu.length == 0){
      axios.get('/json/Shiro.json').then(res => {// 拉取用户信息
        const roles = res.data
        let rolesKey = Object.keys(roles);
        for(var i = 0; i < rolesKey.length; i++){
          if(rolesKey[i] == store.state.role){
            let routes = getRoutes(roles[rolesKey[i]]);
            store.commit("setPowerMenu",routes);
            let index = {
              path: '/',
              name: 'index',
              component: () => import('./views/Index.vue'),
            children:routes
            }
            router.addRoutes([index]);
            next({ ...to, replace: true })
          }
        }
      })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})
//定义钩子函数进行路由判断
/*router.beforeEach((to, from, next) => {
  if (store.state.role) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.state.role){
        axios.get('/json/Shiro.json').then(res => {// 拉取用户信息
          const roles = res.data
          let rolesKey = Object.keys(roles);

          for(var i = 0; i < rolesKey.length; i++){
            if(rolesKey[i] == store.state.role){
              let routes = getRoutes(roles[rolesKey[i]])
              console.log(router)
              router.addRoutes(routes)
              console.log(router)
              next({ ...to, replace: true })
            }
          }
        })
      }
    }
    //} else {
    //  if (store.getters.roles.length === 0) {
    //    store.dispatch('GetInfo').then(res => { // 拉取用户信息
    //      const roles = res.data.roles
    //      store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
    //        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
    //        next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
    //      })
    //    }).catch((err) => {
    //      store.dispatch('FedLogOut').then(() => {
    //        Message.error(err || 'Verification failed, please login again')
    //        next({ path: '/' })
    //      })
    //    })
    //  } else {
    //    next()
    //  }
    //}
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})*/
export default router
