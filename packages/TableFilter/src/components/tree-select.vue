<template>
  <el-tree-select
    :value="props.modelValue"
    style="width: 100%"
    v-bind="props.customAttrs"
    tree-checkable
    allow-clear
    show-search
    :tree-data="treeData"
    tree-default-expand-all
    :filter-tree-node="true"
    :tree-node-filter-prop="props.customAttrs.fieldName.label || 'label'"
    @change="onChange"
    @update:value="onUpdate"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
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
  isShowAll: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:modelValue', 'search'])
const onUpdate = (val: any) => {
  emits('update:modelValue', val)
}
const onChange = () => {
  emits('search')
}
const treeData = computed(() => {
  const label = props.customAttrs?.fieldNames?.label || 'label'
  const value = props.customAttrs?.fieldNames?.value || 'value'
  if(props.isShowAll) {
    return [{
      [label]: '全部',
      [value]: 'all',
      children: props.options
    }]
  }
  return props.options
})
</script>
