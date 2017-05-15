<template>  
  <div class="head">  
    
      <NewsMain />
    
      
      
    </div>  
</template>  
  <script type="text/javascript">
  import NoInfo from "../treelist/copms/noinfo.vue" 
  import NewsMain from "../treelist/copms/NewsMain.vue"  
  export default {  
      data() {  
        return {  
          title: "这是消息" ,
           active: 0, 
           visible2:false
        }  
      },
      components:{
        NoInfo,
        NewsMain
      } 
  }

</script>

<style scoped> 
  .head{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background:#ccc;
    z-index: 999;
    display: flex;
  }
 
   
  
  
</style>
