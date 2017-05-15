<template>
  <div class="group" @click="go">
      <el-col :span="24">
          <div class="create">
            <span style="display: inline-block; height: 50px; line-height: 50px; margin-left: 30px;">我的群组</span>
             <el-button type="text" @click="open4"><el-button type="primary">创建新群组</el-button></el-button>
          </div>
          <p class="title">
            <em>群组名称</em>
            <em>创建人</em>             
            <em class="set">更多</em>
         </p>
         <el-popover
            ref="popover1"
            placement="bottom"
            trigger="hover"
            v-model="visible2">
                <p><img src="../../../assets/t1.png" alt=""><i>张三</i></p>
                <p>北信源</p>
                <p>移动互联部</p>
                <p>56568464@163.com</p>
          </el-popover>
         <div class="grouping" id="table1">
           <div class="headTitle">
              <img src="../../../assets/t1.png" alt="">
              <em>北信源群</em>
              <em v-popover:popover1>张三</em>
              <em @click.stop="chat();right()" id="test" class="chat" @mouseover="upHere=true" @mouseleave="upHere=false">
                <i class="el-icon-setting"></i>
              </em>
              
              <span v-show="upHere">
                <em class="much">更多</em>
                <i class="icons"></i>
              </span>   
           </div>
            <div class="opation"  v-bind:class="{ 'class-a' : isB, 'class-b': !isB}" @click.stop="well">
              <el-collapse v-model="activeName">
                <p class="more"><em>doudou</em><i class="el-icon-close" @click.stop="close"></i></p>
                <i class="logo"><img src="../../../assets/yes.png" alt=""></i>
                <el-collapse-item title="群介绍" name="3">
                  <div style="padding: 6px;">本群创建于2017/5/4:  群主张三,欢迎大家在此群畅聊知识</div>
                </el-collapse-item>
                <i class="logo"><img src="../../../assets/you.png" alt=""></i>
                <el-collapse-item title="群成员" name="1">
                  <ul>
                    <li>
                      <span>
                         <img src="../../../assets/t1.png" alt="">
                      </span>
                      <span class="persons">张三</span>
                    </li>
                    <li>
                      <span>
                         <img src="../../../assets/bing.jpg" alt="">
                      </span>
                      <span class="persons">张三</span>
                    </li>
                    <li>
                      <span>
                         <img src="../../../assets/header.jpg" alt="">
                      </span>
                      <span class="persons">张三</span>
                    </li>
                    <li>
                      <span>
                         <img src="../../../assets/t1.png" alt="">
                      </span>
                      <span class="persons">张三</span>
                    </li>
                    <li>
                      <span>
                         <img src="../../../assets/header.jpg" alt="">
                      </span>
                      <span class="persons">张三</span>
                    </li>
                    <li>
                      <span>
                         <img src="../../../assets/t1.png" alt="">
                      </span>
                      <span class="persons">张三</span>
                    </li>
                  </ul>
                </el-collapse-item>
                <i class="logo"><img src="../../../assets/yes.png" alt=""></i>
                <el-collapse-item title="群文件" name="2">
                  <div style="padding: 6px;">当前暂无群文件</div>
                </el-collapse-item>
              </el-collapse>
            </div>
         </div>
      </el-col>
  </div>
</template>

<script>
import Vue from "vue";
import News from "../../news/News.vue";
  export default {
    name:'group',
    components:{
      News
    },
    data() {
      return {
        isB: true,
        activeName: '1',
        msgName: false,
        visible2: false,
        upHere: false
        
      };
    },
    methods: {
      chat: function() {
        this.isB = !this.isB;
        // console.log('kkk')
      },
      right: function() {
        document.getElementById("test").onmousedown = function(e){
        　　if(e.button ==2){
               this.isB = !this.isB;
        　　　　console.log('右键')
        　　}else if(e.button ==0){
        　　　　console.log("你点了左键");
        　　}else if(e.button ==1){
        　　　　console.log("你点了滚轮");
        　　}
        }
        //去掉浏览器整个页面自带的右击事件
        document.oncontextmenu = function(){
        　　return false;
        }
      },
      go: function() {
        this.isB=true;
      },
      close: function() {
        this.isB = true;
      },
      well: function() {
          console.log('ok')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: '创建群组',
          message: h('div', [
            h('span', { style: 'float:left;height:36px;line-height:36px;margin-top:12px;padding: 0 10px;' },'请输入群名称',),
          ]),
          showInput:true,
          inputPlaceholder:'群组名称',
          showCancelButton: true,
          confirmButtonText: '创建',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 2000);
            } else {
              done();
            }
          }
        })
      },
    
    }
  };
</script>

<style>
.group {
  width: 100%;
  height: 100%;
}
.group .el-col {
  background: #fff;
}
.group .el-menu--dark {
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.el-message-box .el-icon-close{
  color:#ccc;
  margin-top: -20px;
}
.el-icon-close:hover {
  color: #20a0ff;
}
.create .el-message-box__input {
  padding-left: 110px;
}
.create {
  width: 100%;
  height: 50px;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.create .el-button--primary {
  position: absolute;
  top: 7px;
  right: 10px;
  background-color: #424242;
  border-color: #424242;
}
.title {
  position: relative;
  width: 100%;
}
em {
  cursor: pointer;
}
.title em {
  position: absolute;
  font-size: 14px;
  
}
.title em:first-child {
  left: 4%;
}
.title em:nth-child(2) {
  left: 34%;
}
.title em:last-child {
  right: 4%;
}
.grouping {
  width: 100%;
  height: 50px;
}
.grouping:hover {
  background: #f3f3f3;
}
.grouping .headTitle {
  position: relative;
}
.grouping .headTitle img {
  position: absolute;
  width: 32px;
  height: 32px;
  line-height: 32px;
  padding: 12px 0;
  left: 2%;
}
.el-popover p {
  height: 28px;
  padding-left: 10px;
  font-size: 10px;
  background: none;
}
.el-popover p img {
  width: 36px;
}
.el-popover p:nth-of-type(2) {
  margin-top: 10px;
}
.el-popover p i {
  float: right;
  font-style: normal; 
  margin-right: 60px;
  margin-top: -2px;
  font-size: 16px;
}
.grouping .headTitle em {
  position: absolute;
  display: inline-block;
  font-style: normal;
  margin-top: 17px;
  font-size: 12px;
}
.grouping .headTitle em:nth-of-type(1) {
  left: 7%;
}
.grouping .headTitle em:nth-of-type(2) {
  left: 35%;
}
.grouping .headTitle .chat {
  padding: 0 20px;
  right: 2%;
}
.grouping .headTitle span {
  width: 40px;
  height: 40px;
  position: relative;
  float: right;
  right: 20px;
  top: 36px;
}
.grouping .headTitle span em {
  position: absolute;
}
.grouping .headTitle .much {
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 30px;
  line-height: 30px;
  background: #787878;
  color: #fff;
  right: 18px;
  top: -8px;
  border-radius: 4px;
}
.grouping .headTitle .icons {
    position: absolute;
    left: 16px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 10px solid #787878;
}
.grouping .el-collapse-item__header__arrow {
  float: right;
  margin-top: 16px;
}
.grouping .opation {
  position: absolute;
  width: 260px;
  height: 100%;
  background: #e7e7e7; 
  top: 83px;
  z-index: 2;
}
.grouping .el-collapse-item__header {
  padding-left: 42px;
  color: #4c4c4c;
}
.opation .logo {
  display: inline-block;
  width: 50px;
  height: 50px;
  position: absolute;
}
.opation .logo img {
  width: 24px;
  margin-top: 9px;
  margin-left: 10px;
}
.grouping .class-b {
  transition: 300ms ease;
  right: -12px;
}
.grouping .class-a {
  transition: 300ms ease;  
  right: -260px;
}
.grouping .opation p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: #e7e7e7;
}
.grouping .opation p i {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: #7b7b7b;
}
.grouping .opation p i:hover {
  color: #48576a;
}
.grouping .opation ul {
  height: 200px;
  overflow-y: auto;
}
.grouping .opation ul li {
  height: 40px;
  line-height: 40px;
}
.grouping .opation ul li:hover {
  background: #f7f7f7;
}
.el-collapse-item__content {
  padding: 0;
}
.grouping .opation ul li span img{
  float: left;
  width: 30px;
  height: 30px;
  padding: 5px;

}
.grouping .opation ul li .persons {
  margin-left: 2px;
}
.el-collapse-item__header:hover {
  color:#000;
}

</style>
