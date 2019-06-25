<template>
  <div>
    <input type="button" value="减少" @click='remove'>
    <input type="button" value="增加" @click='add'>
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    add: function(){
        // this.$store.state.count++;
        this.$store.commit('zizeng');
      },
      remove: function(){
        // this.$store.state.count--;
        this.$store.commit("zijian", 2 )
      }
  },
  computed:{

  }
};
</script>

<style lang="scss" scoped>

</style>
