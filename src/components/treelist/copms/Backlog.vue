<template>
  <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="发布日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="指派人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="任务内容">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小一',
          address: '2017财务报表',
        }, {
          date: '2016-05-03',
          name: '王小二',
          address: '接收参数'
        }, {
          date: '2016-05-04',
          name: '王小三',
          address: '4月例会',
        }, {
          date: '2016-05-05',
          name: '王小虎',
          address: '放假安排'
        }]
      }
    }
  }
</script>