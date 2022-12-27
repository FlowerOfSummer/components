<template>
  <div class="m-table-filter">
    <div
      v-for="item in showItems"
      :key="item.prop"
      class="table-filter-item"
      :style="{width: `${itemWidth}%`}"
    >
      <div
        class="table-filter-item-label"
        :style="{width: computedLabelWidth, 'margin-left': (!props.labelWidth && props.items.length > 3) ? '' : '10px'}"
      >
        <TooltipOver
          :content="item.label"
          :width="computedLabelWidth === 'auto' ? '90px' : 'calc(100% - 18px)'"
        />
        ：
      </div>
      <div
        class="table-filter-item-component"
      >
        <component
          :is="componentType[item.type]"
          v-model="state.submitFileds[item.prop]"
          v-bind="item"
          @search="onSearch"
        />
      </div>
    </div>
    <div
      class="table-filter-item table-filter-btn"
      :style="{width: `${itemWidth}%`}"
    >
      <a-button
        type="primary"
        :loading="props.searchLoading"
        ghost
        @click="onSearch"
      >
        查询
      </a-button>
      <a-button
        v-if="props.isShowReset"
        @click="onReset"
      >
        重置
      </a-button>
      <a-button
        v-if="isShowExpand"
        type="text"
        size="small"
        @click="changeExpand"
      >
        <down-outlined v-if="state.isExpand" />
        <up-outlined v-else />
        {{ state.isExpand ? '展开' : '收起' }}
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TooltipOver from './components/tooltip-over.vue'
import FilterInput from './components/input.vue'
import FilterSelect from './components/select.vue'
import FilterTreeSelect from './components/tree-select.vue'
import FilterTimeRange from './components/time-range.vue'
import FilterTextarea from './components/textarea.vue'
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue'
import { windowResize } from './model/window-resize'
import stateModelLogic from './model/index'
const componentType: Record<string, any> = {
  input: FilterInput,
  select: FilterSelect,
  'tree-select': FilterTreeSelect,
  'time-range': FilterTimeRange,
  'textarea': FilterTextarea
}
const props = defineProps({
  items: {
    type: Object,
    default: () => {
      return [
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
            placeholder: '请选择'
          }
        }, {
          label: '名称',
          prop: 'name2',
          type: 'tree-select',
          defaultValue: [],
          options: [
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
            placeholder: '请选择'
          }
        }, {
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
          type: 'time-range',
          defaultValue: []
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
    }
  },
  // 查询的loading
  searchLoading: {
    type: Boolean,
    default: false
  },
  // 是否立即搜索
  isSearchImdate: {
    type: Boolean,
    default: true
  },
  // 是否显示重置
  isShowReset: {
    type: Boolean,
    default: true
  },
  // 自定义filteritem的宽度
  filterWidth: {
    type: Number,
    default: null
  },
  // 自定义label的宽度
  labelWidth: {
    type: String,
    default: ''
  },
  maxLineCount: {
    type: Number,
    default: 2
  }
})
const emit = defineEmits(['onSearch'])
const { clintWidth } = windowResize()
const { state, showItems, itemWidth, changeExpand, onSearch, onReset, isShowExpand, changeFiledData } = stateModelLogic(props, clintWidth, emit)
const computedLabelWidth = computed(() => {
  return props.labelWidth || (props.items.length > 3 ? '110px' : 'auto')
})
defineExpose({
  changeFiledData
})
</script>

<style lang="less" scoped>
.m-table-filter {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  // border-bottom: 1px solid #f2f2f2;
  // padding-bottom: 8px;
  // margin-bottom: 24px;
}

.table-filter-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .table-filter-item-label {
    width: 110px;
    text-align: right;

    :deep(.content) {
      vertical-align: bottom;
    }
  }

  .table-filter-item-component {
    flex: 1;
  }
}

.table-filter-btn {
  justify-content: end;
  margin-left: auto;
}

</style>
