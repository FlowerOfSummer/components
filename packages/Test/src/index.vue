<template>
<div class="toolbar">
  <div class="toolbar--left">
    <slot name="toolbar-left"></slot>
  </div>
  <div class="toolbar--right">
    <el-button @click="refresh" type="link" v-if="props.isRefresh"><i class="iconfont icon-refresh" /></el-button>
    <slot name="toolbar-right">
    </slot>
  </div>
</div>
<div class="search" v-if="props.isShowSearch">
  <slot name="search">
    <el-input
      v-model:value="keyword"
      :placeholder="props.placeholder"
      @pressEnter="pressEnter">
        <template #prefix>
          <search-outlined />
        </template>
      </el-input>
  </slot>
</div>
<div class="table">
  <slot name="table">
      <el-table :columns="columns" :datel-source="dataSource"
      :rowKey="rowKey"
      :loading="loading"
      :scroll="props.scroll"
      v-bind="$attrs"
      :pagination="props.isPagination ? {
        current: tableCurrent,
        total: total,
        showTotal: (total) => `共 ${total} 条`,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'],
        onShowSizeChange: onShowSizeChange} : false"
        @change="onChange"
        :row-selection="isShowSelect ? { selectedRowKeys: selectedRowKeys, onChange: onSelectChange } : null"
        >
        <template #headerCell="{ column }">
          <slot name="headerCell" :column="column"></slot>
        </template>
        <template #bodyCell="{ column, record }">
          <slot name="bodyCell" :column="column" :record="record" />
        </template>
      </el-table>
  </slot>
</div>
</template>
<script>
// 普通 <script>, 在模块范围下执行(只执行一次)
// runSideEffectOnce()
export default {
  inheritAttrs: false
}
</script>
<script setup>
import { ref, reactive, computed, onMounted } from 'vue'


const props = defineProps({
  columns: {
    type: Array,
    default: []
  },
  request: Function,
  placeholder: {
    type: String,
    default: '请输入关键词搜索'
  },
  isShowSearch: {
    type: Boolean,
    default: true
  },
  isPagination: {
    type: Boolean,
    default: true
  },
  isRefresh: {
    type: Boolean,
    default: true
  },
  isShowSelect: {
    type: Boolean,
    default: false
  },
  rowKey: {
    type: String,
    default: 'id'
  },
  scroll: {
    type: Object,
    default: {}
  }
})
let total = ref(20)
let tableCurrent = ref(1)
let keyword = ref('')
let tablePageSize = ref(10)
let dataSource = reactive([])
let selectedRowKeys = reactive([])
const emit = defineEmits(['onSelectChange'])
onMounted(() => {
  getList()
})
let loading = ref(false)
const getList = () => {
  const filters = getFilters();
  loading.value = true;
  props.request(filters).then(res => {
    dataSource.length = 0;
    dataSource.push(...res.data.items);
    total.value = res.data.total;
  }).finally(() => {
    loading.value = false;
  })
}
const pressEnter = () => {
  getList()
}
const onShowSizeChange = (cur, size) => {
  tableCurrent.value = cur;
  tablePageSize.value = size;
  getList();
}
const onChange = ({current, pageSize}) => {
  tableCurrent.value = current;
  tablePageSize.value = pageSize;
  getList();
}
const getFilters = () => {
  return {
    filters: props.isShowSearch ? {
      keyword: keyword.value
    } : undefined,
    page: {
      current: tableCurrent.value,
      pageSize: tablePageSize.value
    }
  }
}
const refresh = () => {
  getList();
}
const onSelectChange = (selectedKeys, rows) => {
  selectedRowKeys.length = 0;
  selectedRowKeys.push(...selectedKeys);
  emit('onSelectChange', selectedRowKeys, rows)
}
defineExpose({
  refresh
})
</script>
<style scoped>
.toolbar {
  display: flex;
}
.toolbar--right {
  flex: 1;
  text-align: right;
}
.search {
  margin-top: 16px;
}
.table {
  margin: 16px 0;
}
</style>
