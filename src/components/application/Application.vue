<template>  
  <div class="head">  
    <p> {{ this.$store.state.num}} </p>   
  </div>  
</template>  
  
<script type="text/javascript">  
  export default {  
      data() {  
        return {  
          title: "应用"  
        }  
      } 
  }  
</script> 
<style> 
  .head{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background:#fff;
  }
</style>