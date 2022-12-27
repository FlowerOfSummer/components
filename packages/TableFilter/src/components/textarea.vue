<template>
  <div class="filter-textarea">
    <a-textarea
      :value="props.modelValue"
      :auto-size="{ minRows: 1, maxRows: 1 }"
      v-bind="props.customAttrs"
      :allow-clear="true"
      @update:value="onUpdate"
    />
    <slot
      name="icon"
      :date="props.modelValue"
    />
  </div>
</template>
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
const onUpdate = (val: string) => {
  emits('update:modelValue', val)
}
</script>
<style lang="less" scoped>
:deep(.ant-input) {
  padding: 4px 24px 4px 11px;
}

:deep(.ant-input-affix-wrapper-textarea-with-clear-btn .ant-input-clear-icon) {
  top: 11px;
  right: 23px;
}

.filter-textarea {
  position: relative;
}

</style>
