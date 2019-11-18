# Ant Design Pro 管理后台api接口学习



+ 以查询团队信息为例

  ```js
   //在组件中定义了 loadTeamInfo方法
  loadTeamInfo = () => {
    //结构赋值获取state中的teanID,以及父级组件传递下来的dispatch函数
      const { teamId } = this.state;
      const { dispatch } = this.props;
    //调用this.state方法将loading设置为true。
      this.setState({ loading: true }, () => {
        dispatch({
          type: 'manage/fetchTeamInfo',
          payload: {
            teamId,
          },
          callback: res => {
            this.setState({
              teamData: res,
              loading: false,
            });
          },
        });
      });
    };
  
  ```

  ```js
  //这里是上面type定义的方法，它需要一个payload，一个callback函数
    *fetchTeamInfo({ payload, callback }, { call }) {
        const response = yield call(fetchTeamInfo, payload);
        if (callback) {
          callback(response);
        }
      //当前是在module下定义的接口函数。在这个文件下再次调用了services下的fetchTeamInfo方法。
  ```

  ```js
  //services下的方法获取config.js中的baseURl参数返回一个request
  //通过拼接字符串来请求这个地址。method定义了方法。
  export async function fetchTeamInfo(payload) {
    return request(`${apiconfig.baseUrl}/api/v1/teams/${payload.teamId}`, {
      method: 'GET',
    });
  }
  ```

### 以上这是资源管理后台的一个例子

##  