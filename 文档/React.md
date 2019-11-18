# React

#### 本文档作为我的学习React的记录，包括对知识点的理解，以及不熟悉的知识点的记录。

---

## 1. react是什么

声明式的 构建JavaScript的库。

### 1.1 使用react

**在html中使用react的注意事项** 

```js
//引入三个库，一个React,一个ReactDOM，一个babel。（react核心库，reactDOM库，babel编译）
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone@7.6.4/babel.min.js"></script>

//必须指定一个容器作为react render的目标容器。
 <div id="firstTime"></div>


//写react的script 标签需要指定类型必须是text/babel
<script type="text/babel">
    const element = <h1>hello,world!</h1>;
    ReactDOM.render( element , document.getElementById('firstTime'))
    </script>

```



React将一些简短的、独立的代码片段组成复杂的UI界面，这些片段被称为组件。

react拥有很多不同类型的组件。

```js
class shoppingList extends React.component{
  render(){
    return (
    <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }
}
```

## JSX语法

react提供一些特别的api来创建特别的js对象（虚拟dom是js对象）

```js
//最简单的jsx语法
const name = '徐浩宇'
const element =  <h1>Hello, world!{name}</h1>;
//显示hello,world!徐浩宇
```

jsx通过{}  单花括号进行表达式的插入，任何有效的表达式都可以。

babel 会将jsx语法转化为普通的JavaScript语法。

## 元素渲染

```js
<div id="firstTime"></div>
//首先有一个根DOM节点，里面所有的内容都由reactDOM来管理
    <script type="text/babel">
    const element = <h1>hello,world!</h1>;
    ReactDOM.render( element , document.getElementById('firstTime'))
    </script>
</body>

//使用 ReactDOM.render 来渲染元素。
```

## 函数组件与class组件

### 定义组件（组件名称必须以大写字母开头）

1. 最简单的方式是使用函数来定义组件

   ```js
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
   ```

2. 还可以使用ES6中的class来定义组件。

   ```js
   class Welcome extends React.Component {
     render() {
       return <h1>Hello, {this.props.name}</h1>;
     }
   }
   ```

### 渲染组件

渲染单一的组件

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```



### 组合组件

渲染组合组件（道理都一样）

```js
  <div id="root"></div>
    
    <script type="text/babel">
    //定义一个组件Hello
      function Hello(props) {
        return <h1>hello,{props.name}</h1>;
      };
      //定义一个组件app
      function App() {
        //在app组件内部嵌套Hello组件
          return (<div>
            <Hello name="one" />
            <Hello name="two" />
            <Hello name="three" />
            </div>)
      } 
      const app = <App />
      ReactDOM.render( app, document.getElementById('root'))      
    </script>
```

### class 组件添加state

时钟案例中定义的class类型的组件

```js
class Clock extends React.Component {
        constructor(props){
            super(props),
            this.state= {time:new Date()}
        }
        //class组件中添加state属性 需要一个constructor构造器函数
  			//在this.state中 赋值
  			//在reactDOM.render 中也在不需要元素上添加属性。
        componentDidMount(){
            this.timeID=setInterval(() => {
                this.tick();
            }, 1000);
        }

        componentWillUnmount(){
            clearInterval(this.timeID)
        }

        tick() {
            this.setState({time:new Date()})
        }

        render(){
            return (
                <div>
                    <h1>timeClock</h1>
                    <h2>{this.state.time.toLocaleTimeString()}</h2>
                </div>
            )
        }
    }
    
    ReactDOM.render(<Clock />,document.getElementById('root'))
    //ReactDOM.render接收到Clock组件，调用其中的constructor。this.state中有time这个状态。
    //在DOM渲染完成之后会调用componentDidMount。其中设置了一个定时器，来每分钟调用函数tick
    //tick函数中调用this.steState来改变状态（只能通过这种方式改变）
    //在组件卸载的时候清除定时器。
```

```js
import React, { PureComponent } from "react";
import { connect } from "dva";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Drawer,
  Form,
  Input,
  Select,
  Radio,
  InputNumber,
  Checkbox,
  Icon,
  Modal
} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class ditScalingRule extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render(){
      const {} = this.props;
      const { getFieldDecorator } = this.props.form;
      return(
          <div>
          
          </div>
      );
  }
}
export default EditScalingRule
```







