<template>
  <div class="newsUser">
    
      <ul class="userList">
      <div v-for="(item,index) in info">
      <b class="letterTitle">{{item.initial}}</b>
      <li index="1" v-for="(items,index) in item.list">
      <router-link :to= "{path:'/News/Users/',query:{id:items.Name,name:index}}" > 
      <span class="imgs">
      <img v-bind:src="items.pic" alt="" />
      </span><i>{{items.Name}}</i>
       </router-link>
      </li>
      
      </div>
      </ul>
      <router-view class="messageBox"></router-view>
      
       
     
      
  </div>
</template>

<script>
    import {mapState} from "vuex"
    export default{
      data(){
        return{
          io:[]
          // infos:[]
          // show:"",
        //   info :[
        //     {"initial":"A",
        //     list:[
        //       {
        //         id:'01',
        //         Name:'阿三',
        //         email:'89546312@163.com',
        //         pic:require('../../../assets/t1.png'),
        //         profession:'H5'
        //       },
        //       {
        //         id:'02',
        //         Name:'阿四',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/header.png',
        //         profession:'H5',
        //         english:"A"
        //       }
        //     ]
        //   },
        //    {"initial":"B",
        //     list:[
        //       {
        //         id:'03',
        //         Name:'巴西',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/logo.png',
        //         profession:'H5'
        //       },
        //       {
        //         id:'04',
        //         Name:'芭莎',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/logo.png',
        //         profession:'H5'
               
        //       }
        //     ]
        //   }
        //   ,
        //   {"initial":"C",
        //     list:[
        //       {
        //         id:'05',
        //         Name:'陈咬金',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/header.png'
        //       },
        //       {
        //         id:'06',
        //         Name:'成龙',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/t1.png',
        //         profession:'H5'
        //      }
        //     ]
        //   }
        //   ,
        //   {"initial":"D",
        //     list:[
        //       {
        //       id:'07',
        //       Name:'大小龙',
        //       email:'89546312@163.com',
        //       pic:'../../../assets/header.png',
        //       profession:'H5'
        //       }
        //     ]
        //   }
        //   ,
        //   {"initial":"E",
        //     list:[
        //       {
        //         id:'08',
        //         Name:'额',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/logo.png',
        //         profession:'H5'
        //       }
        //     ]
        //   }
        //   ,
        //   {"initial":"F",
        //     list:[
        //       {
        //         id:'09',
        //         Name:'疯子',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/t1.png',
        //         profession:'H5'
        //       }
        //     ]
        //   }
        //   ,
        //   {"initial":"G",
        //     list:[
        //       {
        //         id:'10',
        //         Name:'高手',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/logo.png',
        //         profession:'H5'
        //       }
        //     ]
        //   }
        //   ,
        //   {"initial":"H",
        //     list:[
        //       {
        //         id:'11',
        //         Name:'红军',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/header.png',
        //         profession:'H5'
        //       },
        //       {
        //         id:'12',
        //         Name:'红人',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/t1.png',
        //         profession:'H5'
        //       },
        //       {
        //         id:'13',
        //         Name:'弘毅',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/logo.png',
        //         profession:'H5'
               
        //       }
        //     ]
        //   }
        //   ,
        //   {"initial":"J",
        //     list:[
        //       {
        //         id:'14',
        //         Name:'焦裕禄',
        //         email:'89546312@163.com',
        //         pic:'../../../assets/header.png',
        //         profession:'H5'
        //       },
        //       {
        //         id:'15',
        //         Name:'将军',
        //         email:'89546312@163.com',
        //          pic:'../../../assets/t1.png',
        //         profession:'H5'
        //       },
        //       {
        //         id:'16',
        //         Name:'蒋钦',
        //         email:'89546312@163.com',
        //          pic:'../../../assets/logo.png',
        //         profession:'H5'
        //       }
        //     ]
        //   }
        //   ,
        //   {"initial":"K",
        //     list:[
        //       {
        //         id:'17',
        //         Name:'康雷',
        //         email:'89546312@163.com',
        //         profession:'H5',
        //         pic:'../../../assets/logo.png',
        //         english:"K"
        //       },
        //       {
        //         id:'18',
        //       Name:'康康',
        //       email:'89546312@163.com',
        //       profession:'H5',
        //       pic:'../../../assets/logo.png',
        //       english:"K"
        //       }
        //         ]
        //   },
        //    {"initial":"L",
        //     list:[
        //         {
        //           id:'21',
        //           Name:'李达康',
        //           email:'89546312@163.com',
        //           pic:'../../../assets/logo.png',
        //           profession:'H5'
                 
        //         }
        //       ]
        //   }
        //   ,
        //   {"initial":"M",
        //     list:[
        //         {
        //           id:'22',
        //           Name:'猛汉',
        //           email:'89546312@163.com',
        //           pic:'../../../assets/logo.png',
        //           profession:'H5'
                  
        //         }
        //       ]
        //   }
        // ]
      }
    },
      // created(){
      //   console.log(this.info);
      //   for (var i = 0; i < this.info.length; i++) {
      //     if(this.io.indexOf(this.info[i].english) == -1){
      //       this.io.push(this.info[i].english);
      //     }
      //   }
      //   console.log(this.io)
      // },
      methods: {
          
          // showName (index) {
          //   console.log(index);
          //   this.show = index;
          //   console.log(this.show)
            
          // }
        },
        computed:mapState([
            "info"
          ])
        
      }

    
</script>

<style>
.newsUser {
  width: 100%;
  height: 100%;
  display: flex;
}
.userList{
  width: 22%;
  overflow-y: auto; 
  background:#eef1f6;
}
  .userList div{
    width: 100%;
  }
.userList li a{
  width: 100%;
  height: 56px;
  line-height: 56px;
   display: flex;
    align-items: center;
    padding:4px;
    color:#48576a;
    
  }
 .userList li a:hover{
  background: #fff;
  color:#20a0ff;
}
 .userList li a .imgs{
  
  text-align: center;
 display: flex;
 align-items: center;
 margin-right:10px; 
  height:56px; 
 

}
.userList li i{
  width: 100px;
  font-style: normal;
}
.userList .letterTitle{
  color: #211e1e;
  font-size: 12px;
}
.imgs img{
  width: 30px;
  height: 30px
}

</style>
