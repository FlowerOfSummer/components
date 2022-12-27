<template>
  <a-input
    :value="props.modelValue"
    v-bind="props.customAttrs"
    @update:value="onInput"
    @press-enter="onSearch"
  />
</template>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  customAttrs: {
    type: Object,
    default: () => ({})
  }
})
const emits = defineEmits(['update:modelValue', 'search'])
const onInput = (val: string) => {
  emits('update:modelValue', val)
}
const onSearch = () => {
  emits('search')
}
</script>
