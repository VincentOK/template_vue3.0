export default {
  //get| 表示 get 请求  |  隔开请求url
  'get|/parameter/query':  option => {
    return {
      status: 200,
      message: 'success',
      data: [{
        id: 1,
        name: 'zs',
        age: '23',
        job: '前端工程师'
      },{
        id: 2,
        name: 'ww',
        age: '24',
        job: '后端工程师'
      }]
    };
  },
  'get|/parameter/test':option=>{
    return {}
  }
}
