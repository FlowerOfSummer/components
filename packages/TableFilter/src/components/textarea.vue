<template>
  <div class="filter-textarea">
    <el-input
      :value="props.modelValue"
      :auto-size="{ minRows: 1, maxRows: 1 }"
      v-bind="props.customAttrs"
      :allow-clear="true"
      @update:value="onUpdate"
      type="textarea"
    />
    <slot
      name="icon"
      :date="props.modelValue"
    >
      <span
        class="copy-color"
      ><el-icon><CopyDocument /></el-icon></span>
    </slot>
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

.copy-color {
  cursor: pointer;
  // color: @primary-color;
  font-size: 16px;
  position: absolute;
  z-index: 2;
  right: 4px;
  top: 6px;
}
</style>
