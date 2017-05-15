<template>
    <div id="friends" >
        <div class="create">
            <span style="display: inline-block; height: 50px; line-height: 50px; margin-left: 30px;">全部好友</span>
             <el-button type="text" @click="open4"><el-button type="primary">添加好友</el-button></el-button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane @tab-click.self="topAll" label="全部" name="0"></el-tab-pane>
          <el-tab-pane label="A" name="1"></el-tab-pane>
          <el-tab-pane label="B" name="2"></el-tab-pane>
          <el-tab-pane label="C" name="3"></el-tab-pane>
          <el-tab-pane label="D" name="4"></el-tab-pane>
          <el-tab-pane label="E" name="5"></el-tab-pane>
          <el-tab-pane label="F" name="6"></el-tab-pane>
          <el-tab-pane label="G" name="7"></el-tab-pane>
          <el-tab-pane label="H" name="8"></el-tab-pane>
          <el-tab-pane label="I" name="9"></el-tab-pane>
          <el-tab-pane label="J" name="10"></el-tab-pane>
          <el-tab-pane label="K" name="11"></el-tab-pane>
          <el-tab-pane label="L" name="12"></el-tab-pane>
          <el-tab-pane label="M" name="13"></el-tab-pane>
          <el-tab-pane label="N" name="14"></el-tab-pane>
          <el-tab-pane label="O" name="15"></el-tab-pane>
          <el-tab-pane label="P" name="16"></el-tab-pane>
          <el-tab-pane label="Q" name="17"></el-tab-pane>
          <el-tab-pane label="R" name="18"></el-tab-pane>
          <el-tab-pane label="S" name="19"></el-tab-pane>
          <el-tab-pane label="T" name="20"></el-tab-pane>
          <el-tab-pane label="U" name="21"></el-tab-pane>
          <el-tab-pane label="V" name="22"></el-tab-pane>
          <el-tab-pane label="W" name="23"></el-tab-pane>
          <el-tab-pane label="X" name="24"></el-tab-pane>
          <el-tab-pane label="Y" name="25"></el-tab-pane>
          <el-tab-pane label="Z" name="26"></el-tab-pane>
        </el-tabs>
        <p class="setting">
          <em>姓名</em>
          <em>邮箱</em>
          <em class="perfess" ref="perfess">职业</em>              
          <em>操作</em>
         </p>
        <div id="friends_list" >
            <dl v-for="item in io "> 
              <dd>
                <img src="../../../assets/t1.png" alt="">
                <span class="Name">{{item.Name}}</span>
                <span class="email">{{item.email}}</span>
                <span class="profession">H5</span>
                <span class="remove">
                  <el-button type="text" @click="remove"><i class="el-icon-edit"></i></el-button>                    
                </span>
              </dd>
            </dl>
          </div>
        </div>
    </div>
</template>
<script>
import addFriend from './../../../export.js'
let syt = this;
  export default {
    data() {
      return {
        activeName: '0',
        io:[],
        info :[
        {
          Name:'阿三',
          email:'89546312@163.com',
          profession:'H5',
          english:"A"
        },
        {
          Name:'阿四',
          email:'89546312@163.com',
          profession:'H5',
          english:"A"
        },
        {
          Name:'巴西',
          email:'89546312@163.com',
          profession:'H5',
          english:"B"
        },
        {
          Name:'陈咬金',
          email:'89546312@163.com',
          english:"C"
        },
        {
          Name:'大小龙',
          email:'89546312@163.com',
          profession:'H5',
          english:"D"
        },
        {
          Name:'额',
          email:'89546312@163.com',
          profession:'H5',
          english:"E"
        },
        {
          Name:'疯子',
          email:'89546312@163.com',
          profession:'H5',
          english:"F"
        },
        {
          Name:'高手',
          email:'89546312@163.com',
          profession:'H5',
          english:"G"
        },
        {
          Name:'红军',
          email:'89546312@163.com',
          profession:'H5',
          english:"H"
        },
        {
          Name:'红军',
          email:'89546312@163.com',
          profession:'H5',
          english:"H"
        },
        {
          Name:'红人',
          email:'89546312@163.com',
          profession:'H5',
          english:"H"
        },
        {
          Name:'弘毅',
          email:'89546312@163.com',
          profession:'H5',
          english:"H"
        },
        {
          Name:'焦裕禄',
          email:'89546312@163.com',
          profession:'H5',
          english:"J"
        },
        {
          Name:'将军',
          email:'89546312@163.com',
          profession:'H5',
          english:"J"
        },
        {
          Name:'蒋钦',
          email:'89546312@163.com',
          profession:'H5',
          english:"J"
        },
        {
          Name:'康雷',
          email:'89546312@163.com',
          profession:'H5',
          english:"K"
        },
        {
          Name:'康康',
          email:'89546312@163.com',
          profession:'H5',
          english:"K"
        },
        {
          Name:'李达康',
          email:'89546312@163.com',
          profession:'H5',
          english:"L"
        },
        {
          Name:'猛汉',
          email:'89546312@163.com',
          profession:'H5',
          english:"M"
        }
          ]
      };
    },
    mounted () {
      console.log(1111)
      console.log(this.info+"是我")
      this.io = this.info
    },
    methods: {
      handleClick(tab, event,name,label) {
        this.io = [];
        if(tab.label == "全部"){
          this.io = this.info    
          return null
        }
         for (var i = 0 ;i<this.info.length;i++){
            if(this.info[i].english == tab.label){
                // console.log(this.info[i].Name)
                this.io.push(this.info[i]);
            }
         }
      },
      // tump:function() {
      //   this.$router.push('/News')
      // },
      open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: '邀请好友',
          message: h('div', [
            h('span', { style: 'float:left;height:36px;line-height:36px;margin-top:12px;padding:0 10px;' },'请输入好友账号',),
          ]),
          showInput:true,
          inputPlaceholder:'手机号/邮箱/QQ账号',
          showCancelButton: true,
          confirmButtonText: '搜索',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '搜索中...';
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
       remove() {
        this.$confirm('是否删除该联系人, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    created() {
      addFriend.$on('msg',(c)=>{
        this.open4();
      })
    },
  };
</script>
<style>
#friends {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#friends_list {
  position:absolute;
  left:0;
  right:0;
  bottom:20px;
  top:133px;
  overflow-y:scroll;
}
#friends_list dl {
  overflow:hidden;
  font-size:16px;
}
#friends_list dl:hover{
  background: #e3e3e3;
}
#friends_list dl dd {
  position: relative;
  height: 40px;
  line-height:40px;
  overflow: hidden;
}
#friends_list dl dd img {
  float: left;
  width: 32px;
  height: 32px;
  margin-top: 4px;
  margin-left: 8px;
}
#friends_list dl dd span {
  position: absolute;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
#friends_list dl dd .profession {
  left: 62%;
}
#friends_list dl dd .email {
  left: 22%;
}
#friends_list dl dd .Name {
  left: 7%;
}
#friends_list dl dd .remove {
  right: 4%;
}
#friends_list dl dd .remove span {
  top: 0;
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
.el-button--text {
  color: #828d95;
}
p {
  position: relative;
  height: 40px;
  line-height: 40px;
  background: #fff;
}
p em {
  position: absolute;
  font-style: normal;
  font-size: 16px;
}
p em:first-child {
  left: 6%;
}
p em:nth-child(2) {
  left: 28%;
}
p .perfess {
  left: 60%;
}
p em:last-child {
  right: 4%;
}
.el-tabs {
  width: 100%;
}
.el-tab-pane {
  height: 100%;
}
.el-tabs__nav {
  width: 100%;
  background: lightgrey;
} 
#friends .el-tabs__nav .el-tabs__item {
  padding: 0 1.2%;
}
.el-tabs__header {
  margin: 0;
}
</style>
