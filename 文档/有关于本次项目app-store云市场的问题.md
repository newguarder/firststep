## 有关于本次项目app-store云市场的问题

1. 熟悉路由

2. 路由中的登录鉴权问题

   为什么在我没有登录的情况下直接redirect到了登录页面。

   为什么在我登录过后直接去了我要去的页面而不是去了首页面，缓存了我的历史记录？

   **路由守卫,在路由钩子中，router.beforeEach中，判断这个meta标签设置的requuireAuth是否需要登录权限。不需要权限的不登录即可访问，需要权限，进行判断用户是否已经登录（这里使用了js-token插件。在utils下面的auth.js有关于cookie的工具函数）没有登录就nest到login页面。并用query将它要去的页面信息带了过去。**

3. meta标签中的元信息的问题。

4. 关于vue的问题(全局api)

   ```js
   //Vue.extend,vue构造器创造一个子类。参数是一个包含组件选项的对象。
   const header = Vue.extend(
   
   
   
   )
   
```
   

5. 在breadcrumb组件中设置的levellist console的话会显示levellist is not define

   位置在component下的breadcrunb下的index文件中

6. svg图片问题