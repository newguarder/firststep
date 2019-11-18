# VUEX

## 关于vuex的官方文档阅读后的进阶。

*以下是核心概念*

### state（状态）

可以通过store.state来获取状态。

```js

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
store.commit('increment')//通过store.commit来提交方法来改变状态。
console.log(store.state.count)//可以获取到这个state中定义的count。

```



### Getter（可以认为是store的计算属性）

getter 的返回值会被缓存起来只有当getter 的依赖值发生改变的时候才会重新计算。

getter接受state作为第一参数。

通过store.getters可以来访问这些经过了计算的值。

getter也可以接受其他getter来作为参数。

可以通过this.$store.getters.function来在任意的组件中使用它。

通过让getter返回一个函数来实现给getter传参数。

mapGetters辅助函数是将getter映射到局部计算属性当中。

使用拓展运算符将这个getter混入到computed中

### Mutation（同步方法）

更改vuex中sotre状态唯一的方法就是提交mutation

```js
//通过store.commit('mutationFuction')调用mutation中的同步方法。
store.commit('increment')
//也可以向commit中传递第二个参数，即提交载荷(payload)
//多数情况下，payload应该是一个对象，这样其中包含多个字段，并且记录的mutation 会更加的易读。
store.commit('increment', {
  amount: 10
})
```

在组件中可以直接使用 this.$store.commit来使用mutation中的方法。

可以使用辅助函数mapMutations来映射为store.commit来调用这个

### Action（异步方法）

使用this.$store.dispatch来调用action中的方法。

或者使用辅助函数mapActions来将action映射到局部中使用，映射为store.dispatch

### Module

当应用比较复杂的时候我们的store就会很大，所以需要分割管理。分割成模块（module）

每一个模块都是完整的。都有state、mutation、action、getter、甚至可以有子模块一直嵌套下去。

```js
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

