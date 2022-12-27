<template>
  <a-range-picker
    :value="props.modelValue"
    value-format="x"
    style="width: 100%;"
    v-bind="props.customAttrs"
    @update:value="onUpdate"
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
