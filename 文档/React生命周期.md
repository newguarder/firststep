# React生命周期

## Initialization(初始化）

定义的类继承component类，才会有render方法，生命周期等，所以**函数组件不能够使用这些方法**

+ constructor（）函数，用来做一些组件初始化的工作。比如定义this.state

+ super（）调用基类的构造方法constructor（），也将父组件的props注入子组件。

  

## Mounting(组件挂载)

+ **分为三个时期，componentWillMount，render,componentDidMount**
  1. componentWillMount: 在组件挂在DOM前调用，且只会调用一次。
  2. render： 根据组件的props，state，return一个react元素（组件 || UI）不负责渲染，之后由react自身去根据此元素渲染DOM。函数的返回结果只依赖于它的参数；函数执行过程里面没有副作用，不能在里面执行this.setState，会有改变组件状态的副作用。
  3. componentDidMount： 组件挂在到DOM后调用，且只会被调用一次。

## Updation（组件更新）

+ state的改变（调用this.setState()方法）以及从父组件接受的props发生变化时，会导致组件重渲染

+ 造成更新的三种方式

  1. 父组件重新render造成的子组件重新render

     + 直接使用，当父组件重新render导致的重传props，无论props是否有变化，都会重新渲染，可以使用shouldComponentUpdate来优化

       ```js
       class Child extends Component {
          shouldComponentUpdate(nextProps){ // 应该使用这个方法，否则无论props是否有变化都将会导致组件跟着重新渲染
               if(nextProps.someThings === this.props.someThings){
                 return false
               }
           }
           render() {
               return <div>{this.props.someThings}</div>
           }
       }
       ```

       

     + 在componentWillReceiveProps中将props转化成自己的值。

       ```js
       class Child extends Component {
           constructor(props) {
               super(props);
               this.state = {
                   someThings: props.someThings
               };
           }
           componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
               this.setState({someThings: nextProps.someThings});
           }
           render() {
               return <div>{this.state.someThings}</div>
           }
       }
       //在该函数(componentWillReceiveProps)中调用 this.setState() 将不会引起第二次渲染。
       ```

+ 此阶段分为**componentWillReceiveProps，shouldComponentUpdate，componentWillUpdate，render，componentDidUpdate**

  1. componentWillReceiveProps（nextProps）

     此方法只调用于props引起的组件的更新的过程中。参数nextProps是父组件传给当前组件的心的props。

  2. shouldComponentUpdate（nextProps,nextState）

     此方法通过比较nextProps,nextState以及thisProps，thisState。返回true继续渲染，返回false停止渲染。

     减少不必要的渲染，优化性能。

  3. componentWillUpdate

     可以执行一些更新前的操作，一般不常用。

  4. render

     同上，只是再次调用。

  5. componentDidUpdate(prevProps, prevState)

     此方法在组件更新后被调用，可以操作组件更新的DOM，prevProps和prevState这两个参数指的是组件更新前的props和state

## Unmounting（组件卸载）

+ 只有一个生命周期函数

  1. componentWillUnmount

     卸载前调用，执行一些清理工作。比如清楚组件的定时器