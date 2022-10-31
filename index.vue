<template>
  <TableFilter
    :items="state.filterItems"
    class="content-container"
    :max-line-count="4"
    @on-search="onSearch"
  />
  <div class="card-container content-container">
    <div
      v-for="(item, key) in customerConfig"
      :key="key"
      class="card-item"
    >
      <div>{{ item }}</div>
      <div
        class="card-item-data"
        @click="searchItem(key)"
      >
        {{ state.cardData[key] }}
      </div>
    </div>
  </div>
  <div class="content-container">
    <TableListLayout
      ref="tableRef"
      :request="requestData"
      :columns="columns"
      row-key="id"
      :is-show-search="false"
    >
      <template #toolbar-left>
        <el-button
          type="primary"
          @click="goCreate"
        >
          <template #icon>
            <PlusOutlined />
          </template>
          新建客户
        </el-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <el-button
            type="text"
            @click="goEdit"
          >
            编辑
          </el-button>
          <el-divider type="vertical" />
          <el-button
            type="text"
            @click="showComfirmModal(getDeleteConfig([record]), GacDeleteWebhook, {ids: [record.id]})"
          >
            删除
          </el-button>
        </template>
      </template>
    </TableListLayout>
    <ComfirmModel
      v-model:visible="confirmState.visible"
      :config="confirmState.config"
      :comfirm-request="handleComfirm"
      @handle-close="comfirmClose"
      @handle-success="handleSuccess"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue'
import { columns,filterFileds, getDeleteConfig } from '@/views/pages/crm/customer-manage/config'
import TableFilter from '@/common-components/table-filter/index.vue'
import TableListLayout from '@/common-components/new-common-table/index.vue'
import ComfirmModel from '@/common-components/comfirm-model.vue'
import { GacDeleteWebhook } from '@/api/gac/index'
import { useRouter } from 'vue-router'
import comfirmModalLogic from '@/models/delete-modal/index'
import { FilterConfigType } from '@/types/filter-config.d'
interface State  {
  tableFilters: Record<string, any>,
  cardData: Record<string, number>,
  cardFilters: Record<string, boolean>,
  filterItems: FilterConfigType[]
}
const state = reactive<State>({
  tableFilters: {},
  cardData: {},
  cardFilters: {},
  filterItems: []
})
const requestData = (params: any) => {
  console.log(params)
  return Promise.resolve({
    data: {
      items: [{ id: 1 }],
      total: 1
    }
  })
}
const getDefaultParams = () => {
  state.filterItems = filterFileds.map(item => {
    if(item.prop === 'operator') {
      item.defaultValue = 'test'
    }
    return item
  })
}
getDefaultParams()
const customerConfig = {
  total: '客户',
  effectivity: '有效',
  expire: '即将过期',
  expired: '已过期'
}
const tableRef = ref()
const onSearch = (filters: any) => {
  state.tableFilters = filters
  nextTick(() => {
    tableRef.value?.getList(filters)
    getCardData()
  })
}
const getCardData = () => {
  state.cardData = {
    total: 5,
    effectivity: 3,
    expire: 1,
    expired: 1
  }
}
const fetchList = () => {
  tableRef.value?.getList({ ...state.tableFilters, ...state.cardFilters })
}
const {
  confirmState,
  showComfirmModal,
  comfirmClose,
  handleSuccess,
  handleComfirm
} = comfirmModalLogic(fetchList)

const router = useRouter()
const goCreate = () => {
  router.push({ path: '/crm/customer-manage/create' })
}
const goEdit = () => {
  router.push({ path: '/crm/customer-manage/edit' })
}

const searchItem = (key: string) => {
  state.cardFilters = { [key]: true }
  fetchList()
}
</script>
<style lang="less" scoped>
.colum-url--copy {
  display: none;
  // vertical-align: super;
}
.colum-url:hover {
  .colum-url--copy {
    display: inline-block;
    cursor: pointer;
    color: @primary-color;
    font-size: 14px;
  }
}
.card-container {
  display: flex;
  margin: 16px 0;
  .card-item {
    width: 25%;
    .card-item-data {
      font-weight: 600;
      font-size: 20px;
      margin-top: 8px;
      cursor: pointer;
    }
  }
}
</style>
