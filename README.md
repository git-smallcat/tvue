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
    static：静态资源的存放位置，包括图片、字体。。。
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

### 一、Vuex介绍
    Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension ，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。就是说，之前在vue实例内做的操作和数据的计算现在都不再自己做了，而是交由对象store来做了。
    vuex解决了组件之间共享同一状态的麻烦问题。当我们的应用遇到多个组件共享状态时，会需要：
    多个组件依赖于同一状态。传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。这需要你去学习下，vue编码中多个组件之间的通讯的做法。
    来自不同组件的行为需要变更同一状态。我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。
    缺点：这些模式非常脆弱，通常会导致无法维护的代码。由于vuex关键在于集中式存储管理。这意味着本来需要共享状态的更新是需要组件之间通讯的，而现在有了vuex，就组件就都和store通讯了。问题就自然解决了。
    这就是为什么官网再次会提到Vuex构建大型应用的价值。如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式 就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。

### 二、Vuex开始
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

### 三、Vuex项目结构
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
### 四、Vuex核心概念
#### state（单一状态树）
    Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT )”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
    在 Vue 组件中获得 Vuex 状态：由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性 中返回某个状态。
    // 创建一个 Counter 组件 
    const Counter = { 
        template: `<div>{{ count }}</div>`,
            computed: { 
                count () { 
                    return store.state.count 
                } 
            } 
    }
    每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。然而，这种模式导致组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 state 的组件中需要频繁地导入，并且在测试组件时需要模拟状态。
    Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：
    const app = new Vue({ 
        el: '#app', 
        // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件 
        store, 
        components: { Counter }, 
        template: `<div class="app">
                    <counter></counter> 
                   </div> `
    })
    通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。让我们更新下 Counter 的实现。
    const Counter = { 
        template: `<div>{{ count }}</div>`, 
        computed: { 
            count () { 
                return this.$store.state.count 
            } 
        } 
    }
    组件仍然保有局部状态：使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。
    mapState 辅助函数:当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键。
    // 在单独构建的版本中辅助函数为 Vuex.mapState 
    import { mapState } from 'vuex' 
    export default { 
        // ... 
        computed: mapState({ 
            // 箭头函数可使代码更简练 
            count: state => state.count, 
            // 传字符串参数 'count' 等同于 `state => state.count` 
            countAlias: 'count', 
            // 为了能够使用 `this` 获取局部状态，必须使用常规函数 
            countPlusLocalState (state) { 
                return state.count + this.localCount 
            } 
        }) 
    }
    当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    computed: mapState([ 
            // 映射 this.count 为 store.state.count 
            'count' 
    ])
    对象展开运算符:mapState 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 computed 属性。但是自从有了对象展开运算符 （现处于 ECMAScript 提案 stage-4 阶段），我们可以极大地简化写法。
    computed: { 
        localComputed () { /* ... */ }, 
        // 使用对象展开运算符将此对象混入到外部对象中 
        ...mapState({ 
            // ...
        }) 
    }
    组件仍然保有局部状态：使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。
    例：/HelloWorld.vue
    <template>
        <div>
            <h2>页面直接获取{{this.$store.state.count}}</h2>
            <h2>Getters中计算后的值{{this.$store.getters.getStateCount}}</h2>
            <p>count的值：{{this.$store.state.count}}</p>
            <button @click=”addFun”>+</button>
            <button @click=”reductionFun”>-</button>
        <div>
        <div style=”border:1px solid red;margin-top:50px;”>
            {{count1}}
        </div>
    </template>
    <script>
    import {mapState,mapActions,mapGetters} from ‘vuex’
    export default{
        name:’Helloworld’,
        data(){},
        computed:{
            ...mapState({
                 count1.state=>state.count
            })
        },
        methods:{
            addFun(){
                this.$store.dispatch(“addFun”);
                //this.$store.commit(“add”);
            },
            reductionFun(){
                var n=10;
                this.$store.dispatch(“reductionFun”,n);
                //this.$store.commot(“reduction”);
            }
        }
    }
    </script>
    效果是一样的，我们就可以不再使用很长的写法来调用了。
    vuex中的数据源，我们需要保存的数据就保存在这里，可以在页面通过 this.$store.state来获取我们定义的数据；
    例：/store/index.js
    import Vue from ‘vue’           //引入vue
    import Vuex from ‘vue’          //引入vuex
    Vue.use(Vuex);                    //使用vuex
    const store = new Vuex.Store({    //创建vuex实例
        state:{
            count:1
        })
    export default store              //导出store
    /Helloworld.vue
    <template>
        <div>
            <h2>{{this.$store.state.count}}</h2>
        </div>
    </template>
    这样我们就得到了count的值。
#### Getter（计算）
    Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义vuex的Getter来获取，Getter可以用于监听、state中的值的变化，返回计算后的结果。
    Getter 接受 state 作为其第一个参数：
    const store = new Vuex.Store({ 
        state: { 
            todos: [ 
                { id: 1, text: '...', done: true }, 
                { id: 2, text: '...', done: false } 
            ] 
        }, 
        getters: { 
            doneTodos: state => { 
                return state.todos.filter(todo => todo.done) 
            } 
        } 
    })
    通过属性访问：Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值。
    store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
    Getter 也可以接受其他 getter 作为第二个参数：
    getters: { 
    // ...
        doneTodosCount: (state, getters) => { 
            return getters.doneTodos.length 
        } 
    }
    store.getters.doneTodosCount // -> 1
    我们可以很容易地在任何组件中使用它：
    computed: { 
        doneTodosCount () { 
        return this.$store.getters.doneTodosCount 
        } 
    }
    注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
    通过方法访问:你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
    getters: { 
    // ... 
        getTodoById: (state) => (id) => { 
            return state.todos.find(todo => todo.id === id) 
        } 
    }
    store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
    mapGetters 辅助函数:mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
    import { mapGetters } from 'vuex' 
    export default {
        // ... 
        computed: { 
            // 使用对象展开运算符将 getter 混入 computed 对象中 
            ...mapGetters([ 
                'doneTodosCount',
                'anotherGetter',
                // ... 
            ]) 
        } 
    }
    如果你想将一个 getter 属性另取一个名字，使用对象形式
    mapGetters({ 
        // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount` 
        doneCount: 'doneTodosCount' 
    })
    例：/HelloWorld.vue
    <template>
        <div>
            <h2>页面直接获取{{this.$store.state.count}}</h2>
            <h2>Getters中计算后的值{{this.$store.getters.getStateCount}}</h2>
        </div>
    </template>
    再修改index.js文件，其中getters中的getStateCount方法接收一个参数state，这个参数就是我们用来保存数据的那个对象。
    例：/store/index.js
    import Vue from ‘vue’               //引入vue
    import Vuex from ‘vue’              //引入vuex
    Vue.use(Vuex);                      //使用vuex
    const store = new Vuex.Store({      //创建vuex实例
        state:{
            count:1
        },
        Getters:{
            getStateCount:function(state){
                return state.count+1;
            }
        }
    })
    export default store                //导出store
#### Mutation
    更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。
    提交载荷（Payload）：你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）。在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读。
    mutations: { 
        increment (state, payload) { 
        state.count += payload.amount
        } 
    }
    store.commit('increment', { 
        amount: 10 
    })
    对象风格的提交方式：提交 mutation 的另一种方式是直接使用包含 type 属性的对象。
    store.commit({ 
        type: 'increment',
         amount: 10 
    })
    当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变：
    mutations: { 
        increment (state, payload) { 
            state.count += payload.amount 
        } 
    }
    Mutation 需遵守 Vue 的响应规则：既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：
        1.最好提前在你的 store 中初始化好所有所需属性。
        2.当需要在对象上添加新属性时，你应该使用 Vue.set(obj, 'newProp', 123), 或者以新对象替换老对象。
    Mutation 必须是同步函数：一条重要的原则就是要记住 mutation 必须是同步函数。
    在组件中提交 Mutation：你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
    我们现在Hello World.vue文件中添加两个按钮，一个加1，一个减1；这里我们点击按钮调用addFun（执行加的方法）和reductionFun（执行减法的方法），然后在里面直接提交mutations中的方法修改值。
    例：/HelloWorld.vue
    <template>
        <div>
            <h2>页面直接获取{{this.$store.state.count}}</h2>
            <h2>Getters中计算后的值{{this.$store.getters.getStateCount}}</h2>
            <p>count的值：{{this.$store.state.count}}</p>
            <button @click=”addFun”>+</button>
            <button @click=”reductionFun”>-</button>
        </div>
    </template>
    <script>
    export default{
        name:’Helloworld’,
        data(){},
        methods:{
            addFun(){
                this.$store.commit(“add”);
            },
            reductionFun(){
                this.$store.commit(“reduction”);
            }
        }
    }
    </script>
    修改index.js文件，添加mutations，在mutations中定义两个函数，用来对count加1和减1，这里定义的两个方法就是上面commit提交的两个方法如下：
    例：/store/index.js
    import Vue from ‘vue’               //引入vue
    import Vuex from ‘vue’              //引入vuex
    Vue.use(Vuex);                      //使用vuex
    const store = new Vuex.Store({      //创建vuex实例
        state:{
            count:1
        },
        Getters:{
            getStateCount:function(state){
                return state.count+1;
        },
        mutations:{
            add(state){//上面定义的state对象
            state.count = state.count+1;
        },
            reduction(state){//上面定义的state对象
                state.count = state.count - 1;
            }
        }
    })
    export default store              //导出store
#### Action
    Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
    const store = new Vuex.Store({ 
        state: { 
            count: 0 
        }, 
        mutations: { 
            increment (state) { 
                state.count++ 
            } 
        }, 
        actions: { 
            increment (context) { 
                context.commit('increment') 
            }
        }
    })
    Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
    分发 Action：Action 通过 store.dispatch 方法触发。store.dispatch('increment')
    因为有mutation 必须同步执行这个限制。Action 就不受约束！我们可以在 action 内部执行异步操作。
    actions: { 
        incrementAsync ({ commit }) { 
            setTimeout(() => { 
                commit('increment') 
            }, 1000) 
        } 
    }
    Actions 支持同样的载荷方式和对象方式进行分发。
    // 以载荷形式分发
    store.dispatch('incrementAsync', { 
        amount: 10 
    }) 
    // 以对象形式分发 
    store.dispatch({ 
    type: 'incrementAsync', 
    amount: 10 
    })
    在组件中分发 Action：你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）。
    import { mapActions } from 'vuex' 
    export default { 
        // ... 
        methods: { 
            ...mapActions([ 
                'increment', // 将`this.increment()映射为 `this.$store.dispatch('increment')` 
                // `mapActions` 也支持载荷：
                'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)` 
            ]), 
            ...mapActions({ 
                add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')` 
            }) 
        } 
    }
    组合 Action：Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？
    首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise。
    actions: { 
        actionA ({ commit }) { 
            return new Promise((resolve, reject) => { 
                setTimeout(() => { 
                    commit('someMutation')
                    resolve() 
                }, 1000) 
            }) 
        } 
    }
    现在你可以：
    store.dispatch('actionA').then(() => { 
    // ... 
    })
    在另外一个 action 中也可以：
    actions: { 
    // ... 
        actionB ({ dispatch, commit }) { 
            return dispatch('actionA').then(() => { 
                commit('someOtherMutation') 
            }) 
        } 
    }
    最后，如果我们利用 async / await ，我们可以如下组合 action：
    // 假设 getData() 和 getOtherData() 返回的是 Promise 
    actions: { 
        async actionA ({ commit }) { 
            commit('gotData', await getData()) 
        }, 
        async actionB ({ dispatch, commit }) {
            await dispatch('actionA') // 等待 actionA 完成 
            commit('gotOtherData', await getOtherData()) 
        } 
    }
    一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
    之前例子虽然达到了修改store中状态值的目的，但是官方并不介意我们这样直接去修改store里面的值，而是让我们去提交一个actions，在actions中提交mutation再去修改状态值，接下来我们修改index.js文件，先定义actions提交mutation的函数。
    例：/store/index.js
    import Vue from ‘vue’           //引入vue
    import Vuex from ‘vue’          //引入vuex
    Vue.use(Vuex);                    //使用vuex
    const store = new Vuex.Store({    //创建vuex实例
        state:{
            count:1
        },
        Getters:{
            getStateCount:function(state){
                return state.count+1;
        },
        mutations:{
            add(state){//上面定义的state对象
                state.count = state.count+1;
            },
            reduction(state){//上面定义的state对象
                state.count = state.count - 1;
            }
        },
        actions:{//注册actions，类似vue里的methods
            addFun(context){//接收一个与store实例具有相同方法的属性的context对象
                context.commit(“add”);
            },
            reductionFun(context){
                context.commit(“reduction”);
            }
        }
    })
    export default store              //导出store
    /HelloWorld.vue
    <template>
        <div>
            <h2>页面直接获取{{this.$store.state.count}}</h2>
            <h2>Getters中计算后的值{{this.$store.getters.getStateCount}}</h2>
            <p>count的值：{{this.$store.state.count}}</p>
            <button @click=”addFun”>+</button>
            <button @click=”reductionFun”>-</button>
        </div>
    </template>
    <script>
    export default{
        name:’Helloworld’,
        data(){},
        methods:{
            addFun(){
                this.$store.dispatch(“addFun”);
                //this.$store.commit(“add”);
            },
            reductionFun(){
                this.$store.dispatch(“reductionFun”);
                //this.$store.commot(“reduction”);
            }
        }
    }
    </script>
    把commit提交mutations修改为使用dispatch来提交actions,效果是一样的。
    如果我们需要指定加减的数值，那么我们直接传入dispatch中的第二个参数，然后在actions中的对应函数中接受参数在传递给mutations中的函数进行计算。
    例：/HelloWorld.vue
    <template>
        <div>
            <h2>页面直接获取{{this.$store.state.count}}</h2>
            <h2>Getters中计算后的值{{this.$store.getters.getStateCount}}</h2>
            <p>count的值：{{this.$store.state.count}}</p>
            <button @click=”addFun”>+</button>
            <button @click=”reductionFun”>-</button>
        </div>
    </template>
    <script>
    export default{
        name:’Helloworld’,
        data(){},
        methods:{
            addFun(){
                this.$store.dispatch(“addFun”);
            //this.$store.commit(“add”);
            },
            reductionFun(){
                var n=10;
                this.$store.dispatch(“reductionFun”,n);
                //this.$store.commot(“reduction”);
            }
        }
    }   
    </script>
    /store/index.js
    import Vue from ‘vue’           //引入vue
    import Vuex from ‘vue’          //引入vuex
    Vue.use(Vuex);                    //使用vuex
    const store = new Vuex.Store({    //创建vuex实例
        state:{
            count:1
        },
        Getters:{
            getStateCount:function(state){
                return state.count+1;
            }
        },
        mutations:{
            add(state){                //上面定义的state对象
                state.count = state.count + 1;
            },
            reduction(state,n){        //上面定义的state对象
                state.count = state.count - n;
            }
        },
        actions:{                          //注册actions，类似vue里的methods
            addFun(context){//接收一个与store实例具有相同方法的属性的context对象
                context.commit(“add”);
            },
            reductionFun(context,n){
                context.commit(“reduction”,n);
            }
        }
    })
    export default store              //导出store
#### Module
    由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
    为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割。
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
    模块的局部状态：对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
    const moduleA = { 
        state: { count: 0 }, 
        mutations: { 
            increment (state) { 
            // 这里的 `state` 对象是模块的局部状态 
                state.count++ 
            } 
        }, 
        getters: { 
            doubleCount (state) { 
                return state.count * 2 
            } 
        } 
    }
    同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState。
    const moduleA = { 
    // ...
        actions: { 
            incrementIfOddOnRootSum ({ state, commit, rootState }) { 
                if ((state.count + rootState.count) % 2 === 1) { 
                    commit('increment') 
                } 
            } 
        } 
    }
    对于模块内部的 getter，根节点状态会作为第三个参数暴露出来。
    const moduleA = { 
    // ... 
        getters: { 
            sumWithRootCount (state, getters, rootState) { 
                return state.count + rootState.count 
            } 
        } 
    }
    命名空间：默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
    如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
    const store = new Vuex.Store({ 
        modules: { 
            account: { 
                namespaced: true, 
                // 模块内容（module assets） 
                state: { ... }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响 
                getters: { 
                    isAdmin () { ... } // -> getters['account/isAdmin'] 
                }, 
                actions: { 
                    login () { ... } // -> dispatch('account/login') 
                }, 
                mutations: { 
                    login () { ... } // -> commit('account/login') 
                }, 
                // 嵌套模块 
                modules: { // 继承父模块的命名空间 
                    myPage: { 
                        state: { ... }, 
                        getters: { 
                            profile () { ... } // -> getters['account/profile'] 
                        } 
                    }, 
                    // 进一步嵌套命名空间 
                    posts: { 
                        namespaced: true, 
                        state: { ... }, 
                        getters: { 
                            popular () { ... } // -> getters['account/posts/popular'] 
                        } 
                    }
                } 
            } 
        } 
    })
    启用了命名空间的 getter 和 action 会收到局部化的 getter，dispatch 和 commit。换言之，你在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀。更改 namespaced 属性后不需要修改模块内的代码。
    模块动态注册：在 store 创建之后，你可以使用 store.registerModule 方法注册模块：
        // 注册模块 `myModule` 
        store.registerModule('myModule', { 
            // ... 
        })
        // 注册嵌套模块 `nested/myModule` 
        store.registerModule(['nested', 'myModule'], { 
            // ... 
        })
    之后就可以通过 store.state.myModule 和 store.state.nested.myModule 访问模块的状态。
    模块动态注册功能使得其他 Vue 插件可以通过在 store 中附加新模块的方式来使用 Vuex 管理状态。例如，vuex-router-sync 插件就是通过动态注册模块将 vue-router 和 vuex 结合在一起，实现应用的路由状态管理。
    你也可以使用 store.unregisterModule(moduleName) 来动态卸载模块。注意，你不能使用此方法卸载静态模块（即创建 store 时声明的模块）。
    保留 state：在注册一个新 module 时，你很有可能想保留过去的 state，例如从一个服务端渲染的应用保留 state。你可以通过 preserveState 选项将其归档：store.registerModule('a', module, { preserveState: true })。
    当你设置 preserveState: true 时，该模块会被注册，action、mutation 和 getter 会被添加到 store 中，但是 state 不会。这里假设 store 的 state 已经包含了这个 module 的 state 并且你不希望将其覆写。
    模块重用：有时我们可能需要创建一个模块的多个实例，例如：
        1.创建多个 store，他们公用同一个模块 (例如当 runInNewContext 选项是 false 或 'once' 时，为了在服务端渲染中避免有状态的单例 )
        2.在一个 store 中多次注册同一个模块
    如果我们使用一个纯对象来声明模块的状态，那么这个状态对象会通过引用被共享，导致状态对象被修改时 store 或模块间数据互相污染的问题。
    实际上这和 Vue 组件内的 data 是同样的问题。因此解决办法也是相同的——使用一个函数来声明模块状态（仅 2.3.0+ 支持）：
        const MyReusableModule = { 
            state () { 
                return { 
                    foo: 'bar' 
                } 
            }, 
            // mutation, action 和 getter 等等... 
        }
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

## ESlint介绍

## Vue移动端开发

## 环境变量配置 
.env

## 浏览历史记录管理
需要回退多级如何实现
