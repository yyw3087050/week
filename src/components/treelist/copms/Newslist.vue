<template>
  <div class="newslist">
 
     <ul class="slideLibs">
        <router-link :to="{name:'News.info'}" exact>
          <li @click="showIndex" data-id = "1">新消息</li>
        </router-link>
        <router-link :to="{name:'News.users'}"> 
          <li >联系人</li>
        </router-link>
        <a  @click="open4">
          <li >收藏</li>
        </a>
      </ul>
      
   
  
  </div>
</template>

<script>
    export default{
      data(){
        return{
         
        }
      },
       methods: {
        tapAdd () {
          console.log(1)
        },
        open4() {
          this.$message.error('暂无开通此功能');
        },
        showIndex() {
          console.log(1);
        }
      }
    }
</script>

<style scoped>
  .newslist{
    width: 22%;
    height: 60px;
    position: relative;
   
    background: #324157;
  }
  .newslist .slideLibs{
    width: 100%;
    height: 60px;
    position: absolute;
    left: 0px;
    top: 0px;

    display: flex;
   
  }
   .slideLibs a{
    width: 100%;
    height: 60px;

    color: black;
  }
   .slideLibs li{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 6px 6px 0 0 ;
  }
  .slideLibs a:hover {
    cursor: pointer;
    
  }
  .slideLibs .router-link-active{
      
      color: #fff;
      height: 60px;
  }

</style>
