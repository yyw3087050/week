<template>
  <div class="noInfo">
   <h1 class="infoTitle"></h1>
   <div class="infoScrib">
     <p class="infoTitle">
          没有聊天信息
        </p>
   </div>
   
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    }
  };
</script>
<style scoped>
    .noInfo{
      width: 100%;
      height: 100%;
     
    }
    .noInfo h1{
      width: 100%;
      height: 60px;
      border-bottom: solid 1px #ccc;
    }
    .infoScrib{
      width: 100%;
      height: 100%;
      position: relative;
      background: #fff;
    }

       .infoScrib .infoTitle{
        width: 200px;
        height: 200px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-top:-100px;
          margin-left: -100px; 
          color: #ccc;
       }
</style>