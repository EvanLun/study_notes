import Vue from 'vue'
import login from './zujians/login.vue'

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  render: function(createElements){
    return createElements(login)
  }
})

// 这个是使用export default 导出来的 只能暴露一次console.log(login);
// export 可以暴露几次但是要用花括号 引用