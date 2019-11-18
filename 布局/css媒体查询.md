# css媒体查询

通过媒体查询显示在不同的分辨率下面的不同的样式

```js
 .box{
    background:black;
  	border:1px solid red;
  	}

@media screen and (max-width:2000px) and (min-width:1600px){
  .box{
    background:red;
  	border:1px solid #fff;
  		}
}
@media screen and (max-width:2000px) and (min-width:1600px){
  .box{
    background:yellow;
  	border:1px solid #f1f1f1;
  		}
}

```

