import { onMounted, onUnmounted, ref } from 'vue'
import { debounce } from 'lodash-es'

export const windowResize = () => {
  const clintWidth = ref(window.document.body.clientWidth)
  onMounted(() => {
    window.onresize = debounce(async () => {
      clintWidth.value = window.document.body.clientWidth
    }, 300)
  })

  onUnmounted(() => {
    // 组件销毁后解绑事件
    window.onresize = null
  })
  return {
    clintWidth
  }
}

