<template>
  <div class="conts">
	  <el-col :span="6">
        <ul class="list">
          <li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="{active:active===index}">
              {{tab.type}}       
         </li> 
        </ul>
    </el-col>
	  <el-col :span="18">
      <div class="grid-content bg-purple-light">
         <component :is="currentView"></component>
      </div>
    </el-col>
  </div>
</template>

<script>
import Vue from "vue";
import Allot from "./copms/Allot.vue";
import Friend from "./copms/Friend.vue";
import Tree from "./copms/Tree.vue";
import Workdeal from "./copms/Workdeal.vue";
import Group from "./copms/Group.vue";
/*
  state:0.将办 1.待办 2.已办
*/
var Event = new Vue();
  let id = 1000;
  export default {
    components:{
      Allot,
      Friend,
      Tree,
      Workdeal,
      Group
    },
    data() {
      return {
        currentView:'Friend',
        active: 0, 
        tabs: [   
            {       
                type: '好友',   
                view: 'Friend'  
              },     
            {       
                type: '群组',    
                view: 'Group'    
              },     
            {       
                type: '组织架构',    
                view: 'Allot'    
              }   
          ] 
      };
    },
    methods: {
       toggle(i, v){    
          this.active = i   
          this.currentView = v  
        } 
    }
  };
</script>

<style>
.conts {
  position: absolute;
  top:50px;
  left: 0;
  right: 0;
  bottom: 0;
}

.conts .bg-purple-dark {
  background: #99a9bf;
}
.conts .bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 360px;
}
.el-col {
  position: relative;
  height:100%;
  background-color: #dcdcdc; 
}
.grid-content {
  height:100%;
  background: #fff;
}
.list {
  text-align: center;
  overflow: hidden;
}
.list li{
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
}
.list li:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
}
.list li.active {
  background: #f3f3f3;
}
</style>

