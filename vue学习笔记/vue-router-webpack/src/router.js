import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'


import login from './subcom/login.vue'
import res from './subcom/res.vue'

var router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'res', component: res }
      ]
    },
    { path: '/goodslist', component: goodslist }
  ]
})


export default router