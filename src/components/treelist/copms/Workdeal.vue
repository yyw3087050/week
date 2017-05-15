<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="工作内容" name="first">工作内容</el-tab-pane>
    <el-tab-pane label="工作指南" name="second">工作指南</el-tab-pane>
    <el-tab-pane label="工作分解" name="third">工作分解</el-tab-pane>
    <el-tab-pane label="报告要点" name="fourth">报告要点</el-tab-pane>
    <div class="foot-tools">
    <a>工具组件</a>
    <el-button type="primary" icon="search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
    .foot-tools{
        margin-top: 240px;
    }
</style>