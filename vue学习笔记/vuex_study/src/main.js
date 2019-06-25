import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        zizeng(state) {
          state.count++
        },
        zijian(state,c) {
          state.count -= c
        }
      },
      getters: {
        aa: function(state) {
          return '当前的值' + state.count
        }
      }
})


const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store
})