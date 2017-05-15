<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="任务名称">
    <el-input style="width: 80%" v-model="form.name" ref="input1"></el-input>
  </el-form-item>
  <el-form-item label="完成时间">
    <el-date-picker type="date" style="margin-top: -12px" placeholder="选择日期" v-model="form.date1" ></el-date-picker>  
    <el-time-picker type="fixed-time" style="width:20%;left: 200px;margin-top: -12px" placeholder="选择时间" v-model="form.date2" ></el-time-picker>
  </el-form-item>
  <el-form-item label="任务性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="性质1" name="type"></el-checkbox>
      <el-checkbox label="性质2" name="type"></el-checkbox>
      <el-checkbox label="性质3" name="type"></el-checkbox>
      <el-checkbox label="性质4" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="任务内容">
    <el-input type="textarea" style="width: 80%" v-model="form.desc" ref="input2"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="allot">任务发布</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import Vue from "vue";
var Event = new Vue();
  export default {
    props:['data1'],
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      allot(){
        this.$msgbox({
          title: this.$refs.input1.value,
          message: this.$refs.input2.value,
          showCancelButton: true,
          confirmButtonText: '发送',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              if(this.$refs.input2.value===""||this.$refs.input1.value===""){
               this.$message({
                message: '警告,任务名称或内容不能为空',
                type: 'warning'
              });
              }else{
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = '执行中...';
                  setTimeout(() => {
                    done();
                    setTimeout(() => {
                      instance.confirmButtonLoading = false;
                    }, 300);
                    this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                  });
                }, 1000);
               
                  let newdata =[{
                          id:35,
                          children: [{
                            id:4,
                            label: '行动1',
                            state:'0'
                          },
                          {
                            id:7,
                            label:'行动2',
                            state:'0'
                          },
                          {
                            id:8,
                            label:'行动3',
                            state:'0'
                          }
                          ]
                        }];

// [{id:35,children:[{id:4,label:行动1,state:"0"},{id:7,label:"行动2",state:"0"},{id:8,label:"行动3",state:"0"}]}]
                    let x = JSON.stringify(newdata);
                    localStorage.setItem("taskTitle",this.$refs.input1.value);
                    location.reload();
                    this.$emit("aim",newdata)
                    let z = localStorage.getItem("taskTitle");
                    //let y = JSON.stringify(z);
                      // alert(z)
               //this.data1.children = newdata.children;
                }
            } else {
              done();
            }
          }
        }).then(action => {
          if(action==="confirm"){
            action = "成功"
          }else{
            action = "取消"
          }
          this.$message({
            type: 'info',
            message: '发送' + action
          });
        });
      },
    }
  }
</script>
<style scoped>
.el-input {
    width: 30%;
    line-height: 60px;
    text-align: center;
    position: absolute;
    left: 0px;
}
.el-radio-group label span {
    width: 18px; 
    height: 18px;
}
.el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 7px;
    line-height: 1.5;
    width: 80%;
    font-size: 14px;
    color: #1f2d3d;
    background-image: none;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.el-input__icon+.el-input__inner {
    margin-top: 2px;
    border-radius: 18px;
}
.el-input__icon {
    position: absolute;
    width: 35px;
    height: 100%;
    right: 0;
    top: -8px;
    text-align: center;
    color: #bfcbd9;
    -webkit-transition: all .3s;
    transition: all .3s;
}
</style>