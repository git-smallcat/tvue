# tvue
# Vue基础教程
## 运行环境介绍与安装
### 一、vue认识
```javascript
vue.js是一个是对JavaScript进行封装的渐进式前端框架，目前越来越多的项目实现了前后端分离的架构模式，为Vue的使用提供了契机。引自Vue官网的介绍【Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。】
```
### 二、关于vue     
关于vue配套的相关工具
* vue.js ：核心
* VueRouter2 ：实现路由组织工具。
* webpack ：项目打包以及编译工具。
* nodejs ：前端开发环境。
* npm ：前端包管理器。
* axios ：ajax 接口请求工具。
* sass-loader 和 node-sass ：css 预处理。
* element ：基于vue的后台组件库。
* iview ：基于vue的另一套后台组件库。
* vue-cli ：vue  项目脚手架。一键安装 vue 全家桶的工具。
### 三、目录认识
```javascript
node_modules：存放项目使用的依赖包资源。
build：项目最终发布资源。
config：所有的配置。
src：我们开发的主要文件资源，包括assess(资源包)官网下载的把logo放在里面了，components(演示的组件资源)我们自己也可以在里面尝试Demo，App.vue(项目入口文件，可以自行改造)，main.js(核心配置文件)全局配置也在这里。
static：静态资源的存放位置，包括图片、字体。。。
test：初始测试目录
index.html：项目的主页
package.json ：项目配置文件（管理本地的npm包）
README.md：git版本管理服务文件
```
### 四、安装必备工具
```javascript
node.js 前端开发环境（npm包管理器）在node.js官网下载安装：https://nodejs.org.
查看是否安装成功：node -v
npm（Node Package Manager）包管理器是集成在node.js里，npm可以解决node.js的很多部署问题，包括 ：
  (1)允许用户从NPM服务器下载别人编写的第三方包到本地使用；
  (2)允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用；
  (3)允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。也就是下载、安装、上传以及管理已经安装的包。
所以在node.js安装成功后可以直接检查是否安装：npm -v
如果下载安装包的时候比较慢或者有些资源会被屏蔽掉，我们还可以下载淘宝镜像：
地址：npm install -g cnpm --registry=http://registry.npm.taobao.org 
安装Vue的脚手架vue-cli在命令行中运行命令 ：cnpm install -g vue-cli 脚手架功能安装成功之后，可以使用webPack（项目构建工具）构建一个初始化项目，命令：vue init webpack firstVue
运行项目
进入项目目录：
npm run dev  命令中的  run  对应  package.json 中的：npm run dev
```
### node.js
```javascript
官方网址：https://nodejs.org
简单的说 Node.js 就是运行在服务端的 JavaScript。
Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
```
### npm
```javascript
官方网址：http://npm.taobao.org
npm是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。 
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。
由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令出现版本提示表示安装成功;
```
### cnpm(可选)
```javascript
官方网址：http://npm.taobao.org
安装：命令提示符执行npm install cnpm -g --registry=https://registry.npm.taobao.org<br>
注意：安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误\<br>
PS：cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm。
```
## 开发IDE搭建

### VsCode
```javascript
1.安装配置vscode (官网https://code.visualstudio.com/Download)
2.Visual Studio Code编辑器在Windows上安装比较简单，直接setup.exe。安装好后首次启动配置插件，插件配置必须联网，从网上下载。通过左边的扩展，然后搜索相应插件安装。
   (1).安装vetur插件，是vue语法的高亮插件。
   (2).安装eslint插件，是智能错误检测插件。
   (3).安装prettier插件，是代码格式化工具。
3.配置:文件->首选项->设置
  (1).代码错误实时提示
     少写了一个空格，或者多写了一个分号，都能马上以醒目的波浪线提示出来，鼠标悬浮上去还有错误提示，双击波浪线的代码还会出现一个小灯泡，点击灯泡可以自动帮你修正代码格式：
     我们可以找到编辑器左上角，依次打开 文件、 首选项、 设置，将下面配置加入到右边的用户设置中：
         "eslint.validate": [
              "javascript",
              "javascriptreact",
         {
              "language": "vue",
              "autoFix": true
         }
        ],
  (2).ctrl+s保存时自动修正格式错误的js代码
       在配置里加入下面的json:
       "eslint.autoFixOnSave": true,
  (3).保存时自动格式化
       每次写完代码自己右键菜单格式化似乎有点麻烦，所以我们可以让它更智能用电，ctrl+s一保存就立马自动格式化:
       "editor.formatOnSave": true,
4.安装依赖npm install(可以使用安装依赖 cnpm install) 
5.最后运行 npm run dev或cnpm run dev
6.最后给出提示，打开浏览器输入下方提示的地址就可以访问了。
```
### Webstorm
```javascript
首先安装vue插件，安装方法：
setting  -->  plugin  ，点击plugin，在内容部分的左侧输入框输入vue，会出现两个关于vue的插件，点击安装即可。安装完成后，就可以看到，新建文件时，会有vue文件的提示。
设置vue新建文件模板:
步骤： settings  -->  file and code templates .在内容区域左侧点击vue file，修改对应的模板内容即可。
设置vue文件支持的编码格式(例如：支持的缩进是2):
步骤：settings --> code style,把code style 下面所有你认识、觉得会用到的内容都设置成2，当然也包括other file types，也是设置vue格式最关键的一步。
vue 使用的是es6语法， 所以要将javascript的版本改成es6:
步骤：settings --> languages& frameworks -- > javascript ,选择javascript,修改内容区域的javascript language version: ECMAScript 6 即可。
如果你在修改vue文件，ctrl+s 之后，dev不自动编译，请参考http://www.cnblogs.com/ssrsblogs/p/6155747.html。
安装依赖npm install(可以使用安装依赖 cnpm install) 
最后运行 npm run dev或cnpm run dev
最后给出提示，打开浏览器输入下方提示的地址就可以访问了。
```
## Vue项目建立

### Vue多页面项目
multi-pages框架
* Hello World
* 请假申请
* 权限管理介绍
每个页面里面的created事件里面都调用了重置刷新token的一个事件
在router里面每个跳转之前判断一次token是否存在，不存在就跳转登录。

### Vue单页面项目
single-page框架
* Hello World
* 请假申请
* 权限管理介绍

## UI库介绍
### 一、elementUI
https://element.eleme.cn/2.0/#/zh-CN/component/table
### 二、Mint UI
http://mint-ui.github.io/#!/zh-cn
### 三、iView
https://www.iviewui.com/

## Vue Router
### 一、Vue Router介绍
```
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：
•	嵌套的路由/视图表
•	模块化的、基于组件的路由配置
•	路由参数、查询、通配符
•	基于 Vue.js 过渡系统的视图过渡效果
•	细粒度的导航控制
•	带有自动激活的 CSS class 的链接
•	HTML5 历史模式或 hash 模式，在 IE9 中自动降级
•	自定义的滚动条行为
```
### 二、安装
##### 直接下载 / CDN

https://unpkg.com/vue-router/dist/vue-router.js

Unpkg.com 提供了基于 NPM 的 CDN 链接。上面的链接会一直指向在 NPM 发布的最新版本。你也可以像 https://unpkg.com/vue-router@2.0.0/dist/vue-router.js 这样指定 版本号 或者 Tag。

在 Vue 后面加载 vue-router，它会自动安装的：


```
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
```


#####  NPM

```
npm install vue-router
```


如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：


```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

如果使用全局的 script 标签，则无须如此 (手动安装)。

##### 构建开发版
如果你想使用最新的开发版，就得从 GitHub 上直接 clone，然后自己 build 一个 vue-router。

```
git clone https://github.com/vuejs/vue-router.git node_modules/vue-router
cd node_modules/vue-router
npm install
npm run build
```
### 三、开始使用
> 用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：

#### HTML

```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

#### JavaScript

```
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')
// 现在，应用已经启动了！

```
通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由：

```
// Home.vue
export default {
  computed: {
    username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
```

该文档通篇都常使用 router 实例。留意一下 this.$router 和 router 使用起来完全一样。我们使用 this.$router 的原因是我们并不想在每个独立需要封装路由的组件中都导入路由。

### 四、动态路由匹配

> 我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：


```
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```

现在呢，像 /user/foo 和 /user/bar 都将映射到相同的路由。

一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID：


```
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
```


你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中。例如：

模式| 匹配路径| $route.params
---|---|---
/user/:username	 | /user/evan| 	{ username: 'evan' }
/user/:username/post/:post_id | 	/user/evan/post/123 | 	{ username: 'evan', post_id: '123' }

除了 $route.params 外，$route 对象还提供了其它有用的信息，例如，$route.query (如果 URL 中有查询参数)、$route.hash 等等。你可以查看 API 文档 的详细说明。

#### 响应路由参数的变化
> 提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：

```
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

或者使用 2.2 中引入的 beforeRouteUpdate 导航守卫：

```
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```

#### 捕获所有路由或 404 Not found 路由
常规参数只会匹配被 / 分隔的 URL 片段中的字符。如果想匹配任意路径，我们可以使用通配符 (*)：


```
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```

当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由 { path: '*' } 通常用于客户端 404 错误。如果你使用了History 模式，请确保正确配置你的服务器。

当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分：

```
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```

#### 高级匹配模式
vue-router 使用 path-to-regexp 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配。

#### 匹配优先级
有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。

### 五、嵌套路由
实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

借助 vue-router，使用嵌套路由配置，就可以很简单地表达这种关系。

接着上节创建的 app：

```
<div id="app">
  <router-view></router-view>
</div>
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
```

这里的 <router-view> 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 <router-view>。例如，在 User 组件的模板添加一个 <router-view>：


```
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
```

要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置：


```
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

> 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。

你会发现，children 配置就是像 routes 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。

此时，基于上面的配置，当你访问 /user/foo 时，User 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个空的子路由：

```
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id', component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },

        // ···其他子路由
      ]
    }
  ]
})
```
### 六、编程式的导航
除了使用```<router-link>```
 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。

```
router.push(location, onComplete?, onAbort?)
```

> 注意：在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push。

想要导航到不同的 URL，则使用 ```router.push ```方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当你点击 ```<router-link> ```时，这个方法会在内部调用，所以说，点击 ```<router-link :to="..."> ```等同于调用 ```router.push(...)```。

声明式| 编程式
---|---
```<router-link :to="...">``` |  ```router.push(...)``` 

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
``````
注意：如果提供了 ```path```， ```params ```会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：
```
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```

同样的规则也适用于 router-link 组件的 to 属性。

在 2.2.0+，可选的在 ```router.push ```或``` router.replace ```中提供 onComplete 和 onAbort 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。

> 注意： 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 /users/1 -> /users/2)，你需要使用 beforeRouteUpdate 来响应这个变化 (比如抓取用户信息)。

```router.replace(location, onComplete?, onAbort?)```
跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

声明式 | 编程式
---|---
<router-link :to="..." >| 	router.replace(...)

#### router.go(n)
这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似``` window.history.go(n)```。

例子

```
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```

#### 操作 History
你也许注意到``` router.push```、 ```router.replace``` 和``` router.go``` 跟 ```window.history.pushState```、 ```window.history.replaceState``` 和 ```window.history.go```好像， 实际上它们确实是效仿``` window.history``` API 的。

因此，如果你已经熟悉 Browser History APIs，那么在 Vue Router 中操作 history 就是超级简单的。

还有值得提及的，Vue Router 的导航方法 (```push```、``` replace```、``` go```) 在各类路由模式 (```history```、``` hash ```和 ```abstract```) 下表现一致。

## Vuex
### 一、Vuex介绍
```javascript
Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension ，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。就是说，之前在vue实例内做的操作和数据的计算现在都不再自己做了，而是交由对象store来做了。
vuex解决了组件之间共享同一状态的麻烦问题。当我们的应用遇到多个组件共享状态时，会需要：
多个组件依赖于同一状态。传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。这需要你去学习下，vue编码中多个组件之间的通讯的做法。
来自不同组件的行为需要变更同一状态。我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。
缺点：这些模式非常脆弱，通常会导致无法维护的代码。由于vuex关键在于集中式存储管理。这意味着本来需要共享状态的更新是需要组件之间通讯的，而现在有了vuex，就组件就都和store通讯了。问题就自然解决了。
这就是为什么官网再次会提到Vuex构建大型应用的价值。如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式 就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。
```
### 二、Vuex开始
```javascript
项目创建后，安装vuex，使用命令 npm install vuex --save
执行npm run dev启动项目
在项目的src目录下新建一个目录store，在该目录下新建一个index.js文件，我们用来创建vuex实例，然后在该文件中引入vue和vuex，创建Vuex.Store实例保存到变量store中，最后使用export default导出store。
例：/store/index.js
import Vue from ‘vue’             //引入vue
import Vuex from ‘vue’            //引入vuex
Vue.use(Vuex);                    //使用vuex
  const store = new Vuex.Store({    //创建vuex实例
  })
  export default store              //导出store
然后我们在main.js文件中引入该文件，在文件里面添加 import store from ‘./store’;，再在vue实例全局引入store对象；
例：/main.js
    import store from ‘./store’       //默认会找到store文件的index.js
       new Vue({
         el: '#app',
         router,
         store,
           render: h => h(App)
       })
```
### 三、Vuex项目结构
```javascript
Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
应用层级的状态应该集中到单个 store 对象中。
提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
异步逻辑都应该封装到 action 里面。
只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。
对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：
    ├── index.html 
    ├── main.js 
    ├── api 
    │    └── ... # 抽取出API请求 
    ├── components 
    │    ├── App.vue 
    │    └── ... 
    └── store 
    ├── index.js # 我们组装模块并导出 store 的地方 
    ├── actions.js # 根级别的 action 
    ├── mutations.js # 根级别的 mutation 
    └── modules 
    ├── cart.js # 购物车模块 
    └── products.js # 产品模块
```
### 四、Vuex核心概念
在介绍Vuex的核心概念之前, 使用`vue-cli`初始化了一个demo, 准备以代码的形式来说明Vuex的核心概念, demo已上传可以查看，这个demo分别有两个组件`ProductListOne.vue`和`ProductListTwo.vue`, 在`App.vue`的`datat`中保存着共有的商品列表, 代码和初始化的效果如下图所示:
![初始化效果][3]

```javascript
//App.vue中的初始化代码

<template>
<div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
</div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
    name: 'app',
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    },
    data () {
        return {
            products: [
                {name: '鼠标', price: 20},
                {name: '键盘', price: 40},
                {name: '耳机', price: 60},
                {name: '显示屏', price: 80}
            ]
        }
    }
}
</script>


```

```javascript
//ProductListOne.vue
<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['products'],
    data () {
        return {

        }
    }
}
</script>

```

```javascript
//ProductListTwo.vue
<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['products'],
    data () {
        return {
            
        }
    }
}
</script>


```

#### **核心概念1: State**
Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT )”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
`state`就是Vuex中的公共的状态, 将`state`看作是所有组件的`data`, 用于保存所有组件的公共数据.
- 此时就可以把`App.vue`中的两个组件共同使用的data抽离出来, 放到`state`中,代码如下:
```javascript
//main.js
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const store = new Vuex.Store({
  state:{ 
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```

- 此时,`ProductListOne.vue`和`ProductListTwo.vue`也需要做相应的更改
```javascript
//ProductListOne.vue
export default {
    data () {
        return {
            products : this.$store.state.products //获取store中state的数据
        }
    }
}
```
```javascript
//ProductListTwo.vue
export default {
    data () {
        return {
            products: this.$store.state.products //获取store中state的数据
        }
    }
}
```
- 此时的页面如下图所示, 可以看到, 将公共数据抽离出来后, 页面没有发生变化.
![state效果][4]
#### **核心概念2: Getters**
> Vuex 允许我们在 store 中定义`getters`（可以认为是 store 的计算属性）。Getters相当于vue中的computed计算属性，getters 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义vuex的Getters来获取，Getters可以用于监听、state中的值的变化，返回计算后的结果。
将`getters`属性理解为所有组件的`computed`属性, 也就是计算属性. vuex的官方文档也是说到可以将getter理解为store的计算属性, getters的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

- 此时,我们可以在`main.js`中添加一个`getters`属性, 其中的`saleProducts`对象将`state`中的价格减少一半(除以2)
```javascript
//main.js
const store = new Vuex.Store({
  state:{
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters:{ //添加getters
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  } 
})
```

- 将`productListOne.vue`中的`products`的值更换为`this.$store.getters.saleProducts`

```javascript
export default {
    data () {
        return {
            products : this.$store.getters.saleProducts 
        }
    }
}
```

- 现在的页面中,Product List One中的每项商品的价格都减少了一半

![getters效果][5]
#### **核心概念3: Mutations**
> 更改 Vuex 的 store 中的状态的唯一方法是提交 `mutations`。将`mutaions`理解为`store`中的`methods`, `mutations`对象中保存着更改数据的回调函数,该函数名官方规定叫`type`, 第一个参数是`state`, 第二参数是`payload`, 也就会自定义的参数.

- 下面,我们在`main.js`中添加`mutations`属性,其中`minusPrice`这个回调函数用于将商品的价格减少`payload`这么多, 代码如下:

```javascript
//main.js
const store = new Vuex.Store({
  state:{
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters:{
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  mutations:{ //添加mutations
    minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    }
  }
})
```

- 在`ProductListTwo.vue`中添加一个按钮,为其添加一个点击事件, 给点击事件触发`minusPrice`方法
```javascript
//ProductListTwo.vue
<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
            <button @click="minusPrice">减少价格</button> //添加按钮
        </ul>
    </div>
</template>
```

- 在`ProductListTwo.vue`中注册`minusPrice`方法, 在该方法中commit`mutations`中的`minusPrice`这个回调函数
**注意:调用mutaions中回调函数, 只能使用store.commit(type, payload)**
```javascript
//ProductListTwo.vue
export default {
    data () {
        return {
            products: this.$store.state.products
        }
    },
    methods: {
        minusPrice() {
            this.$store.commit('minusPrice', 2); //提交`minusPrice,payload为2
        }
    }
}
```


- 添加按钮, 可以发现, Product List Two中的价格减少了2, 当然你可以自定义`payload`,以此自定义减少对应的价格.
![mutations效果][6]
(Product List One中的价格没有发生变化, 是因为`getters`将价格进行了缓存)
#### **核心概念4: Actions**
`actions` 类似于 `mutations`，不同在于：
- `actions`提交的是`mutations`而不是直接变更状态
- `actions`中可以包含异步操作, `mutations`中绝对不允许出现异步
- `actions`中的回调函数的第一个参数是`context`, 是一个与`store`实例具有相同属性和方法的对象

- 此时,我们在`store`中添加`actions`属性, 其中`minusPriceAsync`采用`setTimeout`来模拟异步操作,延迟2s执行 该方法用于异步改变我们刚才在`mutaions`中定义的`minusPrice`
```javascript
//main.js
const store = new Vuex.Store({
  state:{
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters:{
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  mutations:{
    minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    }
  },
  actions:{ //添加actions
    minusPriceAsync( context, payload ) {
      setTimeout( () => {
        context.commit( 'minusPrice', payload ); //context提交
      }, 2000)
    }
  }
})
```

- 在`ProductListTwo.vue`中添加一个按钮,为其添加一个点击事件, 给点击事件触发`minusPriceAsync`方法

```javascript
<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
            <button @click="minusPrice">减少价格</button>
            <button @click="minusPriceAsync">异步减少价格</button> //添加按钮
        </ul>
    </div>
</template>
```

- 在`ProductListTwo.vue`中注册`minusPriceAsync`方法, 在该方法中dispatch`actions`中的`minusPriceAsync`这个回调函数
```javascript
export default {
    data () {
        return {
            products: this.$store.state.products
        }
    },
    methods: {
        minusPrice() {
            this.$store.commit('minusPrice', 2);
        },
        minusPriceAsync() {
            this.$store.dispatch('minusPriceAsync', 5); //分发actions中的minusPriceAsync这个异步函数
        }
    }
}
```

- 添加按钮, 可以发现, Product List Two中的价格延迟2s后减少了5
![actions效果][7]
#### **核心概念5: Modules**

> 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割，使得结构非常清晰，便于管理。

```javascript
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```
1.在src 目录下新一个login文件夹，在里面新建index.js 用于存放login 模块的状态。 为了简单起见，我把模块下的state, actions,mutations, getters 全放在index.js文件中。
先简单给它增加一个状态，userName: “sam”
```javascript
const state = {
  useName: "sam"
};const mutations = {
 
};const actions = {
 
};const getters = {
 
};
 // 不要忘记把state, mutations等暴露出去。export default {
  state,
  mutations,
  actions,
  getters
}
```
2.在src 目录下，再新建一个 store.js 这是根store, 它通过modules 属性引入 login模块。
```javascript
import Vue from "vue";import Vuex from "vuex";
 
Vue.use(Vuex);
 // 引入login 模块import login from "./login"
 export default new Vuex.Store({
  // 通过modules属性引入login 模块。
  modules: {
    login: login
  }
})
```
3.在main.js中引入store, 并注入到vue 根实例中。
```javascript
import Vue from 'vue'import App from './App.vue'
 // 引入storeimport store from "./store"
 new Vue({
 el: '#app',
 store, // 注入到根实例中。
 render: h => h(App)
})
```
4.在 app.vue 中通过computed属性获取到login下的state. 这里要注意，在没有modules 的情况下，组件中通过 this.store.state.模块名.属性名，在这里是 this.$store.state.login.userName
```javascript
<template>
 <div id="app">
  <img src="./assets/logo.png">
  <h1>{{useName}}</h1>
 </div></template>
 <script>export default {
 // computed属性，从store 中获取状态state，不要忘记login命名空间。
 computed: {
  useName: function() {
   return this.$store.state.login.useName
  }
 }
}</script>
组件中成功获取到状态。项目目录如下
├── src 
    ├── assets 
    ├── login 
    │    └── index.js 
    ├── main.js 
    ├── App.vue  
    └── store.js
```

5.通过actions, mutations 改变名字， 这就涉及到dispatch action, commit mutations, mutations 改变state.
先在login 文件夹 index.js中添加changeName action 和 change_name mutations.
```javascript
const mutations = {
  change_name (state, anotherName) {
    state.useName = anotherName;
  }
};
 const actions = {
  changeName ({commit},anotherName) {
    commit("change_name", anotherName)
  }
};
```
在app.vue 中添加一个按钮：<button> change to json</button>， 点击时，dispatch 一个 action. 那在组件中怎么dispatch actions 呢？
> 在模块中，state 是被限制到模块的命名空间下，需要命名空间才能访问。 但actions 和mutations, 其实还有 getters 却没有被限制，在默认情况下，它们是注册到全局命名空间下的，所谓的注册到全局命名空间下，其实就是我们访问它们的方式和原来没有module 的时候是一样的。比如没有module 的时候，this.store.dispatch(“changeName”)， 组件中的getters, 也是通过 this.$store.getters.module中getters 来获取。
```javascript
<template>
 <div id="app">
  <img src="./assets/logo.png">
  <h1>{{useName}}</h1>
  <!-- 添加按钮 -->
  <div>
   <button @click="changeName"> change to json</button>
  </div>
 </div></template>
 <script>export default {
 // computed属性，从store 中获取状态state，不要忘记login命名空间。
 computed: {
  useName: function() {
   return this.$store.state.login.useName
  }
 },
 methods: {
 
　　// 和没有modules的时候一样，同样的方式dispatch action
  changeName() {
   this.$store.dispatch("changeName", "Jason")
  }
 }
}</script>
```
6.局部参数
> 虽然dispatch action和 commit mutations 可以全局使用，但是写在module 中的actions, mutations 和getters, 它们获得的默认参数却不是全局的，都是局部的，被限定在它们所在的模块中的。比如mutations和getters 会获得state 作为第一个默认参数，这个state参数，就是限定在mutations 和getters 所在模块的state对象，login 文件夹下的mutations 和getters 只会获取到当前index.js 中的 state 作为参数 。 actions 会获得一个context 对象作为参数，这个context 对象就是当前module 的实例，module 相当于一个小store.
那么怎样才能获取到根store 中的state 和 getters 呢？ Vuex 提供了 rootState, rootGetters 作为module 中 getters 中默认参数, actions中context 对象，也会多了两个属性,context.getters, context. rootState, 这些全局的默认参数，都排在局部参数的后面。
我们在store.js中添加 state, getters:
```javascript
export default new Vuex.Store({
  // 通过modules属性引入login 模块。
  modules: {
    login: login
  },
 
  // 新增state, getters
  state: {
    job: "web"
  },
  getters: {
    jobTitle (state){
      return state.job + "developer"
    }
  }
})
login 目录下的 index.js
const actions = {
  // actions 中的context参数对象多了 rootState 参数
  changeName ({commit, rootState},anotherName) {
    if(rootState.job =="web") {
      commit("change_name", anotherName)
    }
  }
};
 const getters = {
  // getters 获取到 rootState, rootGetters 作为参数。
  // rootState和 rootGetter参数顺序不要写反，一定是state在前，getter在后面，这是vuex的默认参数传递顺序， 可以打印出来看一下。
  localJobTitle (state,getters,rootState,rootGetters) { 
    console.log(rootState);
    console.log(rootGetters);
    return rootGetters.jobTitle + " aka " + rootState.job 
  }
};
app.vue 增加h2 展示 loacaJobTitle, 这个同时证明了getters 也是被注册到全局中的。
<template>
 <div id="app">
  <img src="./assets/logo.png">
  <h1>{{useName}}</h1>
 
  <!-- 增加h2 展示 localJobTitle -->
  <h2>{{localJobTitle}}</h2>
  <!-- 添加按钮 -->
  <div>
   <button @click="changeName"> change to json</button>
  </div>
 </div></template>
 <script>import {mapActions, mapState,mapGetters} from "vuex";export default {
 // computed属性，从store 中获取状态state，不要忘记login命名空间。
 computed: {
  ...mapState({
   useName: state => state.login.useName
  }),
 
  // mapGeter 直接获得全局注册的getters
  ...mapGetters(["localJobTitle"])
 },
 methods: {
  changeName() {
   this.$store.dispatch("changeName", "Jason")
  }
 }
}</script>
```
7.其实actions, mutations, getters, 也可以限定在当前模块的命名空间中。只要给我们的模块加一个namespaced 属性：
```javascript
const state = {
  useName: "sam"
};const mutations = {
  change_name (state, anotherName) {
    state.useName = anotherName;
  }
};const actions = {
  changeName ({commit, rootState},anotherName) {
    if(rootState.job =="web") {
      commit("change_name", anotherName)
    }
  },
  alertName({state}) {
    alert(state.useName)
  }
};const getters = {
  localJobTitle (state,getters,rootState,rootGetters) { 
    return rootGetters.jobTitle + " aka " + rootState.job 
  }
};// namespaced 属性，限定命名空间export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
```
> 当所有的actions, mutations, getters 都被限定到模块的命名空间下，我们dispatch actions, commit mutations 都需要用到命名空间。如 dispacth("changeName"), 就要变成 dispatch("login/changeName"); getters.localJobTitle 就要变成 getters["login/localJobTitle"]
app.vue 如下：
```javascript
<template>
 <div id="app">
  <img src="./assets/logo.png">
  <h1 @click ="alertName">{{useName}}</h1>
 
  <!-- 增加h2 展示 localJobTitle -->
  <h2>{{localJobTitle}}</h2>
  <!-- 添加按钮 -->
  <div>
   <button @click="changeName"> change to json</button>
  </div>
 </div></template>
 <script>import {mapActions, mapState,mapGetters} from "vuex";export default {
 // computed属性，从store 中获取状态state，不要忘记login命名空间。
 computed: {
  ...mapState("login",{
   useName: state => state.useName
  }),
 
   localJobTitle() {
    return this.$store.getters["login/localJobTitle"]
   }
 },
 methods: {
  changeName() {
   this.$store.dispatch("login/changeName", "Jason")
  },
  alertName() {
   this.$store.dispatch("login/alertName")
  }
 }
}</script>
```
> 有了命名空间之后，mapState, mapGetters, mapActions 函数也都有了一个参数，用于限定命名空间，每二个参数对象或数组中的属性，都映射到了当前命名空间中。
```javascript
<script>import {mapActions, mapState,mapGetters} from "vuex";export default {
 computed: {
  // 对象中的state 和数组中的localJobTitle 都是和login中的参数一一对应。
  ...mapState("login",{
   useName: state => state.useName
  }),
  ...mapGetters("login", ["localJobTitle"])
 },
 methods: {
  changeName() {
   this.$store.dispatch("login/changeName", "Jason")
  },
  ...mapActions('login', ['alertName'])
 }
}</script>
```
  [1]: http://static.zybuluo.com/leeahui424/p0v57hlvqg6qr5t9kbae159u/image_1bqru9fcu1pq917q61ktk18cn1sov9.png
  [2]: http://static.zybuluo.com/leeahui424/mpwwmoxknvaqxe02wfzmufyr/image_1bqruul922q0146t1tjr1u91173bm.png
  [3]: http://static.zybuluo.com/leeahui424/mh643lwsmg2ufxhwbe4yf66h/image_1bqs3mi8no0iv0t18qh1er0dks2a.png
  [4]: http://static.zybuluo.com/leeahui424/q30mdxsmt7v5dz7qu1cypz2q/image_1bqs5ai241no61uto1v6og3urtj2n.png
  [5]: http://static.zybuluo.com/leeahui424/p6jwqaf733rik4imrnoqfqx1/image_1bqse85kedec1qeqr761rp9ng134.png
  [6]: http://static.zybuluo.com/leeahui424/nh7widztlnwe60eqx6609k50/image_1bqsfvvv81bpc11to5tfb4917r23h.png
  [7]: http://static.zybuluo.com/leeahui424/hkktwcky7xn8tjvsxea51qlw/image_1bqshrq7ku1s5e44qc6551ehl4b.png

### 五、Vuex严格模式
    开启严格模式，仅需在创建 store 的时候传入 strict: true：
        const store = new Vuex.Store({
            // ...
            strict: true
        })
    在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
    开发环境与发布环境
    不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
    类似于插件，我们可以让构建工具来处理这种情况：
        const store = new Vuex.Store({
            // ...
            strict: process.env.NODE_ENV !== 'production'
        })
### 六、Vuex表单处理
    当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 v-model 会比较棘手：
        <input v-model="obj.message">
    假设这里的 obj 是在计算属性中返回的一个属于 Vuex store 的对象，在用户输入时，v-model 会试图直接修改 obj.message。在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误。
    用“Vuex 的思维”去解决这个问题的方法是：给 <input> 中绑定 value，然后侦听 input 或者 change 事件，在事件回调中调用 action:
        <input :value="message" @input="updateMessage">
        // ...
        computed: {
            ...mapState({
                message: state => state.obj.message
            })
        },
        methods: {
            updateMessage (e) {
                this.$store.commit('updateMessage', e.target.value)
            }
        }
        下面是 mutation 函数：
        // ...
        mutations: {
            updateMessage (state, message) {
                state.obj.message = message
        }}
    双向绑定的计算属性
    必须承认，这样做比简单地使用“v-model + 局部状态”要啰嗦得多，并且也损失了一些 v-model 中很有用的特性。另一个方法是使用带有 setter 的双向绑定计算属性：
        <input v-model="message">
        // ...
        computed: {
            message: {
                get () {
                    return this.$store.state.obj.message
                },
                set (value) {
                    this.$store.commit('updateMessage', value)
                }
            }
        }
## mockjs介绍
### 1.什么是mockjs
通过随机数据，模拟各种场景；不需要修改既有代码，就可以拦截 Ajax 请求，返回模拟的响应数据；支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等；支持支持扩展更多数据类型，支持自定义函数和正则。优点是非常简单方便, 无侵入性, 基本覆盖常用的接口数据类型。
### 2.安装
使用npm安装:npm install mockjs;
或直接<script src="http://mockjs.com/dist/mock.js"></script>;
### 3.使用方式
#### （1）基本语法
Mock.mock('地址',{ "dataname|rule":{"对应的值"} }) 
> 说明：地址就是我们通过ajax获取数据时候填写的地址，这里填写的地址可以是任意不存在的地址，第二个参数是我们要模拟的数据，以及相应的规则。
#### （2）语法规则
> 示例：
```javascript
Mock.mock('https://www.test.com',{
       "userInfo|4":[{    //生成|num个如下格式名字的数据
           "id|+1":1,   //数字从当前数开始后续依次加一
           "name":"@cname",    //名字为随机中文名字
           "ago|18-28":25,     //年龄为18-28之间的随机数字
           "sex|1":["男","女"],    //性别是数组中的一个，随机的
           "job|1":["web","UI","python","php"]    //工作是数组中的一个
       }]
    })
    最后通过ajax接收数据，形式如下：
    //ajax接收数据，通过jq
    $.get('https://www.test.com',function(data){
        console.log(JSON.parse(data));
    })
    注意：对于通过Random属性而来的一些随机数据-比如随机生成图片，使用方式如下：
        Mock.mock('http://www.test.com',{
            "ListInfo|5":[{
               "img":Mock.Random.image('200x100')
            }]
        });
//这里的图片数据就是随机生成的，只是大小被指定为200X100了
```
#### (3) 常用数据占位符
```javascript
//数据占位符使用
{
  "integer": "@integer(10, 30)",  //随机生成一个10～30之间的正整数
  "float": "@float(60, 100, 2, 2)",  //随机生成浮点数，参数分别为整数部分最小值和最大值、小数部分保留最小位数和最大位数
  "boolean": "@boolean",       //随机生成boolean
  "string|1-2": "@string",     //随机生成字符串
  "name":"@cname",             //随机生成名字
  "date": "@date(yyyy-MM-dd)", //按照格式随机生成时间
  "datetime": "@datetime",     //随机生成时间
  "now": "@now",               //当前时间
  "id": "@id",                 //随机生成一个 18 位身份证
  "guid": "@guid",             //随机生成一个 GUID
  "url": "@url",               //随机生成url字符串
  "email": "@email",           //随机生成邮箱
  "image": "@image(200x200)",  //随机生成一个大小为200x200的图片链接
  "title": "@title",           //随机生成一句标题，其中每个单词的首字母大写
  "upper": "@upper(@title)",   //把生随机成的标题全部转为大写
  "cparagraph": "@cparagraph", //随机生成一段中文文本
  "csentence": "@csentence",   //随机生成一段中文文本
  "range": "@range(2, 10)" ,   //返回一个内容从2开始到9的整型数组
  "region": "@region",         //随机生成地区 华中
  "province": "@province",     //随机生成省会 省
  "city": "@city",             //随机生成城市 市
  "county": "@county",         //随机生成一个（中国）县
}
```
## ESlint介绍
### 1.什么是ESlint
> ESLint 是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于2013年6月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。
JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。
ESLint 的初衷是为了让程序员可以创建自己的检测规则。ESLint 的所有规则都被设计成可插入的。ESLint 的默认规则与其他的插件并没有什么区别，规则本身和测试可以依赖于同样的模式。为了便于人们使用，ESLint 内置了一些规则，当然，你可以在使用过程中自定义规则。
ESLint 使用 Node.js 编写，这样既可以有一个快速的运行环境的同时也便于安装。
## Vue移动端开发

## 环境变量配置 
.env

## 浏览历史记录管理
需要回退多级如何实现
