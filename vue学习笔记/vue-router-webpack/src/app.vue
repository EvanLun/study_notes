<template>
  <div>
    <h1>这是app组件，使用 .vue 文件定义出来的 --- {{msg}}</h1>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      msg: "123224552"
    };
  }
};
</script>
