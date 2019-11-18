# VUE知识总结

1. v-if 和 v-show 

   v-if 控制的是元素的有无，通过v-if渲染多个元素，可以将这些个元素使用template包裹起来，结果不会显示。

   v-show控制的是元素的显示与否。

2. v-for 循环渲染，v-model 双向数据绑定，v-bind 绑定html属性，后多用来父子传值。

3. 组件化应用构建

   使用小型的，通用的，独立的组件构建大型的应用。

4. 模版的使用

   引入---->注册---->使用。

5. 生命周期

   新建vue实例--new Vue（）

   beforeCreate

   ​		在这个钩子中，虚拟DOM并没有渲染，此时指定的$el,数据data,都没有定义。

   created

   ​		判断是否有el指定范围，有的话继续编译，没有的话停止编译，直到有vm.$mount(el)

   ​		vue实例内指定有template的话就渲染内部的模版，没有的话就渲染外部的模版。

   beforeMount

   ​		创建虚拟DOM，取代el指定范围内的DOM。

   mounted

   ​		数据更新		

   beforeUpdate

   ​		遍历虚拟DOM查找不同，虚拟DOM应用更新。

   updated

   ​		更新数据

   beforeDestory

   ​		接触绑定，销毁子组件以及事件监听器。

   destroy

   ​		销毁完毕。

6. 计算属性computed以及监听watch

   大多数情况下用computed更合适，

   watch更适合于：需要的数据发生变化的时候，执行异步或者开销较大的时候

7. 