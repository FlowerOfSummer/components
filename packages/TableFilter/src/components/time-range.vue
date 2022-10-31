<template>
  <el-date-picker
    :modelValue="props.modelValue"

    style="width: 100%"
    type="daterange"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    v-bind="props.customAttrs"
    @update:modelValue="onUpdate"
    @change="onChange"
  />
</template>
<script setup lang="ts">
// import dayjs from 'dayjs'
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
  }
})
const emits = defineEmits(['update:modelValue', 'search'])
const onUpdate = (val: any) => {
  emits('update:modelValue', val)
}
const onChange = () => {
  emits('search')
}
</script>
