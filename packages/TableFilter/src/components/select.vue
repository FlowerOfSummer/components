<template>
  <el-select
    :value="props.modelValue"
    style="width: 100%"
    show-search
    v-bind="props.customAttrs"
    :options="optionsState.options"
    :filter-option="filterOption"
    @update:value="onUpdate"
    @change="onChange"
  />
</template>
<script setup lang="ts">
import getOptionsLogic from '../model/get-options'
const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: '' || (() => ([]))
  },
  customAttrs: {
    type: Object,
    default: () => ({})
  },
  options: {
    type: Array,
    default: () => ([])
  },
  // 获取options的接口方法
  optionsRquest: {
    type: Function,
    default: null
  },
  // 联动的字段
  optionsParams: {
    type: Array,
    default: () => ([])
  },
  // 最终的提交值
  submitFileds: {
    type: Object,
    default: () => ({})
  },
  isFixedDefault: {
    type: Boolean,
    default: false
  },
  defaultValue: {
    type: String || Array || Number,
    default: null
  },
  // 是否修改立即请求
  isImdateRequest: {
    type: Boolean,
    default: true
  },
  isShowAll: {
    type: Boolean,
    default: true
  },
  dataFiled: {
    type: String,
    default: 'items'
  },
  isDefault0:{
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:modelValue', 'search'])
const onUpdate = (val: any) => {
  emits('update:modelValue', val)
}
const filterOption = (input: string, option: Record<string, any>) => {
  const label = props.customAttrs?.optionFilterProp || 'label'
  return option[label].toLowerCase().indexOf(input.toLowerCase()) >= 0
  
}
const onChange = () => {
  emits('search')
}
const { optionsState } = getOptionsLogic(props, emits)

</script>
