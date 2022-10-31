<template>
  <el-tooltip
    effect="dark"
    :content="props.tooltipContent ? props.tooltipContent : props.content"
    placement="top"
    :visible="isShow"
    :mouse-enter-delay="0.3"
    color="#fff"
  >
    <template #title>
      <slot name="tooltipContent">
        {{ props.tooltipContent ? props.tooltipContent : props.content }}
      </slot>
    </template>
    <div
      class="content"
      :style="{ 'max-width': props.width }"
      @mouseover="isShowTooltip"
      @mouseleave="
        () => {
          isShow = false
        }
      "
    >
      <span ref="contentRef">
        <!-- 给一个没有写插槽的默认值，兼容纯文本的情况 -->
        <slot name="content">{{ props.content }}</slot>
      </span>
    </div>
    <slot name="prefix" />
  </el-tooltip>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 使用withDefaults来给props赋默认值
const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  tooltipContent: {
    type: String,
    default: ''
  }
})
// 使用isShow来控制tooltip是否显示
let isShow = ref(false)
// 在span标签上定义一个ref
const contentRef = ref()
const isShowTooltip = function () {
  // 计算span标签的offsetWidth与盒子元素的offsetWidth，给isShow赋值
  if (contentRef.value.parentNode.offsetWidth >= contentRef.value.offsetWidth) {
    isShow.value = false
  } else {
    isShow.value = true
  }
}
</script>
<style scoped>
.content {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}
</style>
