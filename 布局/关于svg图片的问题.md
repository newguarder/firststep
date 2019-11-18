# 关于svg图片的问题

svg图片的hover颜色变换问题，要实现的是鼠标悬停的时候，svg颜色更换。

+ 第一次尝试，发现没有效果。

```js
    svg:hover{
      fill: #00e3ab;
    } 
```

+ 上网查了一下发现需要在hover 后面添加path

  ```js
      svg:hover path{
        fill: #00e3ab;
      }
  ```

+ 如果需要在写成`svg path :hover` 这样的形式

  ```js
      svg path :hover{
        cursor:pointer;
        fill: #00e3ab;
      }
  ```

+ svg的path属性详见[菜鸟教程](https://www.runoob.com/svg/svg-tutorial.html)



