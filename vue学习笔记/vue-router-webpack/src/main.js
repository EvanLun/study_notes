import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './App.vue'
import router from './router.js'




var vm = new Vue({
  el: '#app',
  render: function(createElements){
    return createElements(app)
  },
  router
})



// 这个是使用export default 导出来的 只能暴露一次console.log(login);
// export 可以暴露几次但是要用花括号 引用