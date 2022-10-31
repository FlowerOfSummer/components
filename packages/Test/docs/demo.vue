<template>
  <div>
    <m-test ref="table" :request="requestData" :columns="columns" :isShowSelect="true" rowKey="task_id" :scroll="{x: 1000}" size="small" @change="() => {console.log(111)}">
      <template #toolbar-left>
        <el-button type="primary">
           新建
        </el-button>
        <el-button>删除</el-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a class="ant-dropdown-link">
            修改
          </a>
          <el-divider type="vertical" />
          <el-button type="text">删除</el-button>
        </template>
      </template>
    </m-test>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const columns = reactive([
  {title: '名称', width: 180, dataIndex: 'task_name', key: 'task_name', ellipsis: true},
  // {title: '描述', width: 120, dataIndex: 'desc', key: 'desc', ellipsis: true},
  {title: '任务类型', width: 120, dataIndex: 'task_type', key: 'task_type'},
  {
    width: 120,
    title: '操作',
    key: 'action',
    fixed: 'right'
  }
])
const requestData = (filters) => {
  return new Promise(resolve => {
    resolve({
      data: {
        items: [{
          task_name: 'test'
        }],
        totle: 1
      }
    })
  })
}
const change = () => {
  console.log(12331)
}
</script>