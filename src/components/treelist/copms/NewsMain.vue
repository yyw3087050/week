<template>
  <div class="newsMain">
   
    <Newslist />
  
    <router-view ></router-view> 
  </div>
</template>

<script>
 import Newslist from './newslist.vue';
    export default{
      data(){
        return{
         
        }
      },
       methods: {
        open4() {
          this.$message.error('暂无开通此功能');
        },
        showIndex() {
          console.log(1);
        }
      },
      components:{
        Newslist
      }
    }
</script>

<style scoped>
  .newsMain{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
</style>
