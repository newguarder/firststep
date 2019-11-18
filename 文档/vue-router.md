## vue-router

使用vue.js+vue-router构建单页面应用程序。

如何使用 vue-router？

1. 将组件components映射到routers中，然后告诉router在哪里渲染他们。
2. 注意router-link默认渲染成为一个 a标签。

### 嵌套路由

```js
routes:[
  path:'/index/:id',//动态路由绑定
  component:Home,
  children:[
  {path:profile,component:profile},
  {path:list,component:list}
	]
]//当router-link匹配到了index后面的:id,就会渲染特定的子组件。
```

### 编程式导航

除了使用router-link来创建a标签定义导航，也可以借助router的实例方法，通过编写代码来实现路由导航。

```js
//使用router.push方法(如果不引入就使用全局的this.$router.push方法)
//this.$router.push传递的参数是一个地址字符串，也可以是一个描述地址的对象。
router.push('home')   //字符串
router.push({path:"home"})  //对象
router.push({name:"home"})  //命名的路由。
//带查询参数的，结果会变成  /register？plan=private
router.push({path:'register',query:{plan:"private"}})

```

