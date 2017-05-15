<template>
  <div id="app">
    <div v-bind:class="classObject">
      <div class="navLeft">
        <el-menu v-bind:class="ClassObject" theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-dropdown :hide-on-click="false" style="transform-origin: top;">
            <span class="el-dropdown-link add">
              <img src="./assets/header.jpg">
            </span>
            <span class="lineing">
              <i :class="objectClass" ref="color"></i>
            </span>
            <el-dropdown-menu class="personal" slot="dropdown" >
                <el-row class="tac">
                  <el-col>
                    <el-menu default-active="1" class="el-menu-vertical-demo">
                          <el-radio-group :span="4">
                            <span @click.prevent="online('reds')"><el-radio-button label="在线"></el-radio-button></span>
                            <span @click.prevent="online('yellow')"><el-radio-button label="离开"></el-radio-button></span>
                            <span @click.prevent="online('blues')"><el-radio-button label="忙碌"></el-radio-button></span>
                            <span @click.prevent="online('white')"><el-radio-button label="离线"></el-radio-button></span>
                          </el-radio-group>
                      </el-submenu>
                      <router-link to="/User"><el-menu-item index="1">设置</el-menu-item></router-link>
                      <el-menu-item index="3" type="text" @click="dialogVisible = true">退出</el-menu-item>
                    </el-menu>
                  </el-col>
                </el-row>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="navRight">
            <el-dropdown :hide-on-click="true">
              <span class="el-dropdown-link add">
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown" id="slide">
                <el-dropdown-item>添加群</el-dropdown-item>
                <el-dropdown-item>
                   <span @click="addF">添加好友</span></el-dropdown-item>
                <el-dropdown-item>添加任务</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="navRight navIcon">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link add">
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown" id="slide">
                <el-dropdown-item>群消息</el-dropdown-item>
                <el-dropdown-item>好友信息</el-dropdown-item>
                <el-dropdown-item>
                    <span @click="excuse">{{msg}}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-menu-item default-active :index="item.index" v-for="item in items" :lable="item.title" :name="item.name" :key="item.id">
            <router-link :to="item.url">{{item.name}}</router-link>
          </el-menu-item>     
         <i class="el-icon-search" v-if="isB" @click="searchToggle" title="智能搜索"></i>
         <i class="el-icon-close" v-if="!isB" @click="searchToggle_close" title="智能搜索"></i>
          <div class="search" v-bind:class="{ 'class-a' : isB, 'class-b': !isB}">
            <el-input id="search" placeholder="智能搜索..." v-model="message" v-on:blur="changeCount()" :on-icon-click="handleIconClick" ref="iptValue"></el-input>      
          </div>  
          <el-dropdown @command="handleCommand" style="float: right;margin-top: 8px;margin-right: 50px;">
            <span class="el-dropdown-link ring">
              <img src="./assets/ring.png" alt="">
            </span>
            <el-dropdown-menu slot="dropdown" style="border-radius: 5px;">
              <el-dropdown-item command="a">30分钟</el-dropdown-item>
              <el-dropdown-item command="b">1小时</el-dropdown-item>
              <el-dropdown-item command="c">2小时</el-dropdown-item>
              <el-dropdown-item command="d">4小时</el-dropdown-item>
              <el-dropdown-item command="e" divided>永久</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu>
      </div>
     <router-view></router-view>          
      <el-dialog title="提示" v-model="dialogVisible" size="tiny">
        <span>确定要退出当前账号吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import addFriend from './export.js' 
export default {
  data () {
    return {
      activeIndex: '1',
      dialogVisible: false,
      input2: '',
      message:'',
      objectClass: {
        reds: false,
        blue:false,
        yellow:true,
        white:false
      },
      msg: '屏蔽群消息',
      classObject: localStorage.getItem('sty'),
      ClassObject: localStorage.getItem('nav'),
      isB: true,
      items: [
        { name: '消息' ,title: '1',index: '1',url: '/News',type:'1'},
        { name: '通讯录' ,title: '2',index: '2',url: '/Task',type:'2'},
        { name: '应用', title: '3',index: '3',url: '/Application',type:'3'}
      ]
    }
  },
   methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    handleIconClick(ev) {
        console.log(ev);
    },
    handleCommand(command) {
        // this.$message('click on item ' + command);
    },
    addF() {
      console.log('ooooooo')
      addFriend.$emit('msg',"h");
    },
    online:function(w) {
      this.$refs.color.className = w
    },
    mouseOver: function(){
        this.active = !this.active;   
    },
    searchToggle: function(){
        this.isB = false;
    },
    searchToggle_close: function(){
      if(this.$refs.iptValue.value===""){
        this.isB = true;
      }else{
        this.message="";
      }
    },
    changeCount: function() {
      if(this.$refs.iptValue.value===""){
        this.isB= true; 
      }else{
        this.isB= false;
      }
    },
    excuse: function() {
      if(this.msg === "屏蔽群消息"){
        this.msg = "开启群消息"
      }else{
        this.msg = "屏蔽群消息"
      }    
    }
  }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
body {
  font-family: Helvetica, sans-serif;
}
ol,ul {
  list-style:none;
  margin:0 !important;
}
#app {
  overflow:hidden;
}
.Cont {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e2e2e2;
  overflow:hidden;
}
.Cont1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d0a555;
  overflow:hidden; 
}
.Cont2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:url(./assets/bing.jpg); 
  overflow:hidden;
}
.navLeft {
  width: 100%;
  position: relative;
  float: left;
  height:50px;
  color:#000;
}
.lineing {
  position: relative;
  overflow: hidden;
}
.lineing i {
  display: inline-block;
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  top: 2px;
  left: -44px;
}
.lineing .reds {
  background: #52ef92;
}
.lineing .yellow {
  background: yellow;
}
.lineing .blues {
  background: red;
}
.lineing .white {
  background: #ccc;
}
.el-menu--dark1 {
  background: #50411e;
}
.el-menu--dark2 {
  background-color:#666763;
}
.el-menu--dark3 {
  background: rgb(50,65,87);
}
.navRight {
  position: relative;
  float:left;
  top: 40px;
  z-index: 99999;
  left: 212px;
  text-align: center;
}
.navIcon {
  position: relative;
  float:left;
  top: 40px;
  z-index: 99999;
  left: 110px;
}
.navLeft .ring img {
  width: 20px;
  height: 20px;
}
.navRight .add {
  display: inline-block;
  position: absolute;
  width: 20px;
  left: -40px;
  top: -21px;
  vertical-align: center;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 5px solid #20a0ff;
}
.el-dropdown {
  float:left;
}
#slide {
  font-size: 12px;
}
.tac {
  margin-top: -20px;
  margin-left: 0;
}
.addThing {
  position: absolute;  
  top: 36px;
  right: -16px;
  z-index: 99;
  overflow: hidden;
}
.addThing a {
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background: #FFF;
  color: #000;
}
.addThing a:hover {
  transition: 500ms ease;
  background: #ccc;
}
a {
  text-decoration: none;
}
span:hover {
  cursor: pointer;
}
.el-dropdown-menu {
  width: 80px;
}
.el-submenu__title {
  font-size:16px;
}
.el-submenu__title a{
  color: inherit;
}
.el-menu--horizontal .el-menu-item a {
  padding: 18px 0;
} 
.search {
  float: right;
  position:relative;
}
.search  .el-input__inner {
  background: none;
  border: 1px solid #fff;
}
.el-input__inner  {
  width:200px;
}
.search .el-input {
  line-height: 50px;
  text-align: center; 
}
.el-input {
  width:200px;
}
.pict {
  float: left;
  background: #324157;
  border: none;
}
.navLeft img {
  width: 36px;
  height: 36px;
  padding: 7px 0 7px 17px;
  float:left;
  cursor:pointer;
}
.navLeft img:hover {
  transition: 300ms ease;
  transform: scale(1.1);
}
.el-radio-group span:hover {
  background: #20a0ff;
}
.el-menu--horizontal .el-menu-item {
  height:50px;
  line-height:50px;
}

.personal {
  width: 90px;
  position: absolute;
  left: 0;
  top: 50px;
  z-index: 99999;
}
.el-radio-button__inner { 
  border:none;
  background:#fff !important;
  line-height:40px;
  padding:0;
}
.el-menu--dark .el-menu-item {
  margin-left: 20px;
}
.el-radio-button:first-child .el-radio-button__inner {
  border:none;
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner{
  color:#fff;
  border:none;
  background:skyblue !important; 
  line-height:40px !important;
}
.el-menu--horizontal .el-menu-item a {
  color: #dbdbdb;
}
.el-menu--horizontal .el-menu-item a.is-active {
  color:#fff;
}
.el-menu--horizontal.el-menu--dark .el-menu-item:hover {
  background-color:rgba(255,255,255,0.3);
}

.el-menu--horizontal.el-menu--dark .el-menu-item.is-active {
    background-color:rgba(255,255,255,0.3); 
}
.personal li {
  width: 100%;
  text-align: center;
  background:#fff;
  line-height:50px;
}
.el-radio-group {
  width:100%;
}
.el-radio-group label {
  width:100%;
  height:40px;
  line-height:40px;
}
.tac .el-radio-group label span {
  width:100%;
}
.el-form-item__label {
  font-size:16px;
}
.el-icon-search {
  position: absolute;
  right: 18px;
  height: 50px;
  line-height: 50px;
  color: #dbdbdb;
  z-index: 99;
  cursor:pointer;
}
.el-icon-close {
  position: absolute;
  display: inline-block;
  right: 18px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  z-index: 99;
  cursor:pointer;
  font-size:12px;
}
.el-icon-search:hover {
  color: #fff;
  transition: 300ms ease;
}
.search input::-webkit-input-placeholder{
  color: #fff;
}
.el-icon-caret-bottom {
  font-size: 12px;
  color: #ccc;
}
.el-icon-caret-bottom:hover {
  color: #fff;
}
.class-a {
  width: 0;
  margin:8px 0 0 0;
  transition: 300ms ease;
}
.class-b {
  width: 200px;
  margin:8px 10px 0 0;
  transition: 300ms ease;  
}
#personal {
  position:absolute;
  top:50px;
  left:0;
  right:0;
  bottom:0;
  min-width:800px;
}

/* 滚动条样式 */
div::-webkit-scrollbar,ul::-webkit-scrollbar{width: 6px;}
div::webkit-scrollbar-track-piece,ul::webkit-scrollbar-track-piece{background-color:black;}
div::-webkit-scrollbar-thumb,ul::-webkit-scrollbar-thumb{border-radius: 10px;background-color: rgb(112, 137, 212);   }
div::-webkit-scrollbar-track,ul::-webkit-scrollbar-track{background-color: #e5f1fa;}
</style>
