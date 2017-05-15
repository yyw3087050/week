<template>
  <div class="dialoge">
      <el-popover  ref="popover5"  offset="-40" placement="top" width="100" v-model="visible2">
          <ul class="chooseTag">
            <li @click="showExpression"><i></i><b>表情</b></li>
            <li @click="open4"><i></i><b>截图</b></li>
            <li @click="open4"><i></i><b>传输文件</b></li>
          </ul>
      </el-popover>
      
      <div class="expressionBox" v-if="expressionOpen">
        <div class="expressionItem">
            <i>1</i>
            <i>1</i>
            <i>1</i>
            <i>1</i>
            <i>1</i>
        </div>
      </div>
      <div class="slideRight" >
      <NoInfo v-if="!this.$route.query.id"></NoInfo>
      <div class="slideChat" v-if="this.$route.query.id">
      <div class="slideContent">
        <h4>{{this.$route.query.id}}</h4>
        <p v-for="item in messageShow" >
          <i>{{item.userName}}</i>
          <b>{{item.meg}}</b>
        </p>
      </div>
      <div class="slideBottom">
      <el-button type="primary" icon="plus" class="add" v-popover:popover5 @click="tapAdd"></el-button>
      <input class="inptInfo" type="" name="" @keyup.enter="sendInfo" v-model="message">
      <span class="send" @click.stop="sendInfo(message)">send</span>
      </div> 
      </div> 
      </div>
 </div>
</template>
<script>
  import NoInfo from './noinfo.vue'
  export default {
    data() {
      return {
         visible2: false,
        activeName: 'first',
        expressionOpen:false,
        message:"",
        messageShow:[]
      };
    },
    methods:{
       tapAdd () {
          console.log(1)
        },
        showExpression () {
          this.expressionOpen = !this.expressionOpen;
        },
        open4() {
        this.$message.error('暂未开通此项功能');
        },
        sendInfo () {
            const userObj = {
              userName : this.$route.query.id,
              meg : this.message
            }
            this.messageShow.push(userObj);
            this.message = ''
            console.log(this.messageShow)
        }

    },
    components:{
      NoInfo
    }
  };
</script>
<style scoped>
    .dialoge{
      width: 78%;
      height: 100%;
      position: absolute;
      top:0px;
      left: 22%;
    }
    .dialoge .slideRight{
    background: #fff;
    width: 100%;
    height: 100%;
   
  }

  .dialoge .slideRight .slideChat{
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative
  }
  
   .el-popover .chooseTag li{
      width: 60px;
      line-height: 44px;
      text-align: center;
     
  }
  .el-popover .chooseTag li:hover{
    cursor: pointer;
  }
  .expressionBox{
    position: absolute;
    background: #ccc;
    left:180px;
    top:400px;
    z-index: 999;
  }
  .dialoge .slideRight .slideContent{
    flex: 1
  }
  .dialoge .slideRight .slideContent h4{
    text-align: center;
    font-weight: normal;
    border-bottom:solid 1px #ccc;
    line-height: 58px; 
    margin: 0 12 0 12px;
  }
  .dialoge .slideRight .slideBottom {
    height: 44px;
    display: flex;
    margin: 15px 30px 15px 30px;
    border-radius: 4px;
    border:solid 2px #ccc;
  }
  .dialoge .slideRight .slideBottom .add{
    width: 44px;
    height: 44px;
    text-align:center;
    border-radius: 0;
    background: none;
    border:none;
    color:#ccc;
  }
  .dialoge .slideRight .slideBottom .add:hover{
    background: #60B9F4;
    color: #fff; 
  }
  .dialoge .slideRight .slideBottom .inptInfo{
    flex: 1;
    border:none;
    border-left:solid 2px #ccc; 
  }
  .dialoge .slideRight .send{
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #ccc;
  }
  .el-select .el-input {
    width: 110px;
  }
    
</style>