<template>
    <div id="right">
        <div class="block">
            <el-form :rules="rules" ref="ruleForm"  class="demo-ruleForm" :label-position="labelPosition" label-width="100px" :model="ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                </el-form-item>
                  <el-form-item label="密码" prop="pass">
                    <el-input type="password" placeholder="请输入" v-model="ruleForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" placeholder="请输入" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="email" label="邮箱">
                    <el-input v-model="ruleForm.email" placeholder="请输入"></el-input>
                </el-form-item>
                 <el-form-item  prop="mobile" label="手机绑定">
                    <el-input v-model="ruleForm.mobile" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
         </div>
    </div>
</template>
<script>
    export default {
        data () {
             var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
            return {
                labelPosition: 'top',
                ruleForm: {
                    name: '',
                    pass: '',
                    checkPass: '',
                    email: '',
                    mobile: ''

                },
                 rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }  
                    ],
                    pass: [
                        { required: true,validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { required: true,validator: validatePass2, trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    mobile:[
                        { required: true, message: '请输入手机号'},
                        { type: 'number',min: 11, max: 11, message: '请输入正确的手机号'}
                    ]
                },

               
            }
        },
        methods: {
        submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
      
    }
</script>
<style scoped>
    #right {
        height:100%;
        width:100%;
    }
    .block {
        height:100%;
        width:100%;
        background:#fff;
    }
    form {
        margin-left:60px;
        padding-top:40px;
    }
    form .el-input__inner {
        width: 300px;
    }
</style>