<template>
  <div>
    <m-table-filter :items="fileds" @onSearch="onSearch" :max-line-count="3"/>
  </div>
</template>
<script setup lang="ts">
const fileds = [
  {
    label: 'ip',
    prop: 'searchIpRef',
    type: 'textarea',
    defaultValue: '',
    customAttrs: {
      placeholder: '支持多个IP, 一行一个',
      allowClear: true
    }
  }, {
    label: '标签',
    prop: 'searchTag',
    type: 'select',
    // defaultValue: [],
    options: [
      {
        value: '',
        label: '所有'
      },
      {
        value: 'RUNNING',
        label: '运行中'
      },
      {
        value: 'TERMINATED',
        label: '已关机',
      },
      {
        value: 'CREATE_FAIL',
        label: '创建失败',
      },
    ],
    customAttrs: {
      placeholder:  '请选择'
    }
  },
  //  {
  //   label: '名称',
  //   prop: 'name2',
  //   type: 'tree-select',
  //   defaultValue: [],
  //   options: [
  //     {
  //       value: 'RUNNING',
  //       label: '运行中'
  //     },
  //     {
  //       value: 'TERMINATED',
  //       label: '已关机',
  //     },
  //     {
  //       value: 'CREATE_FAIL',
  //       label: '创建失败',
  //     },
  //   ],
  //   customAttrs: {
  //     placeholder: '请选择'
  //   }
  // }, 
  {
    label: '名称',
    prop: 'name3',
    type: 'textarea',
    defaultValue: '',
    customAttrs: {
      placeholder: '支持多个IP',
      allowClear: true
    }
  },
  {
    label: '时间',
    prop: 'time',
    type: 'time-range'
  },
  {
    label: '名称',
    prop: 'name5',
    type: 'input',
    defaultValue: 'test',
    customAttrs: {
      placeholder: '请输入'
    }
  }, {
    label: '名称',
    prop: 'name6',
    type: 'input',
    defaultValue: 'test',
    customAttrs: {
      placeholder: '请输入'
    }
  }, {
    label: '名称',
    prop: 'name7',
    type: 'input',
    defaultValue: 'test',
    customAttrs: {
      placeholder: '请输入'
    }
  }, {
    label: '名称',
    prop: 'name8',
    type: 'input',
    customAttrs: {
      placeholder: '请输入'
    }
  }, {
    label: '名称',
    prop: 'name9',
    type: 'input',
    customAttrs: {
      placeholder: '请输入'
    }
  }, {
    label: '名称',
    prop: 'name10',
    type: 'input',
    customAttrs: {
      placeholder: '请输入'
    }
  }, {
    label: '名称',
    prop: 'name11',
    type: 'input',
    customAttrs: {
      placeholder: '请输入'
    }
  }
]
const onSearch = (filters) => {
  console.log('filters', filters)
}
</script>
