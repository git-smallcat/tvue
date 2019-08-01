# tvue
# Vue基础教程
## 运行环境介绍与安装
### 一、vue认识
        vue.js是一个是对JavaScript进行封装的渐进式前端框架，目前越来越多的项目实现了前后端分离的架构模式，为Vue的使用提供了契机。引自Vue官网的介绍【Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。】
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
        node_modules：存放项目使用的依赖包资源。
        build：项目最终发布资源。
        config：所有的配置。
        src：我们开发的主要文件资源，包括assess(资源包)官网下载的把logo放在里面了，components(演示的组件资源)我们自己也可以在里面尝试Demo，App.vue(项目入口文件，可以自行改造)，main.js(核心配置文件)全局配置也在这里。
        static：静态资源的存放位置，包括图片、字体。。。\<br>
        test：初始测试目录
        index.html：项目的主页
        package.json ：项目配置文件（管理本地的npm包）
        README.md：git版本管理服务文件
### 四、安装必备工具
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

### node.js
        官方网址：https://nodejs.org
        简单的说 Node.js 就是运行在服务端的 JavaScript。<br>
        Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。\<br>
        Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。\<br>
### npm
        官方网址：http://npm.taobao.org
        npm是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：<br>
        允许用户从NPM服务器下载别人编写的第三方包到本地使用。 \<br>
        允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。 \<br>
        允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。\<br>
        由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令出现版本提示表示安装成功;
### cnpm(可选)
        官方网址：http://npm.taobao.org
                安装：命令提示符执行npm install cnpm -g --registry=https://registry.npm.taobao.org<br>
                注意：安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误\<br>
                PS：cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm。
## 开发IDE搭建

### VsCode
        1.安装配置vscode (官网https://code.visualstudio.com/Download)
        2.Visual Studio Code编辑器在Windows上安装比较简单，直接setup.exe。安装好后首次启动配置插件，插件配置必须联网，从网上下载。通过左边的扩展，然后搜索相应插件安装。
        1).安装vetur插件，是vue语法的高亮插件。
        2).安装eslint插件，是智能错误检测插件。
        3).安装prettier插件，是代码格式化工具。
        3.配置:文件->首选项->设置
        1).代码错误实时提示
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
        2).ctrl+s保存时自动修正格式错误的js代码
        在配置里加入下面的json:
        "eslint.autoFixOnSave": true,
        3).保存时自动格式化
        每次写完代码自己右键菜单格式化似乎有点麻烦，所以我们可以让它更智能用电，ctrl+s一保存就立马自动格式化:
        "editor.formatOnSave": true,
        4.安装依赖npm install(可以使用安装依赖 cnpm install) 
        5.最后运行 npm run dev或cnpm run dev
        6.最后给出提示，打开浏览器输入下方提示的地址就可以访问了。
### Webstorm
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

## Vue Router

## Vuex

### Vuex介绍
        Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension ，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。就是说，之前在vue实例内做的操作和数据的计算现在都不再自己做了，而是交由对象store来做了。
        vuex解决了组件之间共享同一状态的麻烦问题。当我们的应用遇到多个组件共享状态时，会需要：
        多个组件依赖于同一状态。传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。这需要你去学习下，vue编码中多个组件之间的通讯的做法。
        来自不同组件的行为需要变更同一状态。我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。
        缺点：这些模式非常脆弱，通常会导致无法维护的代码。由于vuex关键在于集中式存储管理。这意味着本来需要共享状态的更新是需要组件之间通讯的，而现在有了vuex，就组件就都和store通讯了。问题就自然解决了。
        这就是为什么官网再次会提到Vuex构建大型应用的价值。如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式 就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。

### Vuex开始
        项目创建后，安装vuex，使用命令 npm install vuex --save
        执行npm run dev启动项目
        在项目的src目录下新建一个目录store，在该目录下新建一个index.js文件，我们用来创建vuex实例，然后在该文件中引入vue和vuex，创建Vuex.Store实例保存到变量store中，最后使用export default导出store。
        例：/store/index.js
        import Vue from ‘vue’           //引入vue
        import Vuex from ‘vue’          //引入vuex
        Vue.use(Vuex);                    //使用vuex
        const store = new Vuex.Store({    //创建vuex实例
        })
        export default store              //导出store
        然后我们在main.js文件中引入该文件，在文件里面添加 import store from ‘./store’;，再在vue实例全局引入store对象；
        例：/main.js
        import store from ‘./store’     //默认会找到store文件的index.js
        new Vue({
          el: '#app',
          router,
          store,
            render: h => h(App)
        })

### Vuex项目结构
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
### Vuex核心概念
#### state（单一状态树）
#### Getter（计算）
#### Mutation
#### Action
#### Module
## mockjs介绍

## ESlint介绍

## Vue移动端开发

## 环境变量配置 
.env

## 浏览历史记录管理
需要回退多级如何实现
