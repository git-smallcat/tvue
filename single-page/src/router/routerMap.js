/**
 * Created by OTt on 2019/4/10.
 */
import Menu1 from '../views/Menu1.vue'
import Menu2 from '../views/Menu2.vue'
import Menu3 from '../views/Menu3.vue'
import Menu4 from '../views/Menu4.vue'
import Menu5 from '../views/Menu5.vue'
import Menu6 from '../views/Menu6.vue'
import Manager from '../views/Manager.vue'

export const powerRouterMap = [
  {path:'/menu1',name:'menu1',component:Menu1,meta:{id:'menu1'}},
  {path:'/menu2',name:'menu2',component:Menu2,meta:{id:'menu2'}},
  {path:'/menu3',name:'menu3',component:Menu3,meta:{id:'menu3'}},
  {path:'/menu4',name:'menu4',component:Menu4,meta:{id:'menu4'}},
  {path:'/menu5',name:'menu5',component:Menu5,meta:{id:'menu5'}},
  {path:'/menu6',name:'menu6',component:Menu6,meta:{id:'menu6'}},
  {path:'/manager',name:'manager',component:Manager,meta:{id:'manager'}}
]

/*export const constantRouterMap = [
  {path:'/menu1',component:()=> import('@/views/Login')}
]*/

export function getRoutes(resources){
  var routes = [];
  for(var i = 0; i < resources.length; i++){
    for(var j = 0; j < powerRouterMap.length; j++){
      if (powerRouterMap[j].meta.id == resources[i]){
        routes.push(powerRouterMap[j])
      }
    }
  }
  return routes;
}
