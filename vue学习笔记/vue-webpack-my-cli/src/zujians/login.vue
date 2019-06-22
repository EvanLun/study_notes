<template>
  <div>
    <h1>这是登录组件，使用 .vue 文件定义出来的 --- {{msg}}</h1>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      msg: "123224552"
    };
  },
  methods: {
    show() {
      console.log("调用了 login.vue组件里面的show 方法");
    }
  }
};
</script>
