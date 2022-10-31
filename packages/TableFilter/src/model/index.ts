/*
 * @Author: yangyuchun yangyuchun@meshcloud.com
 * @Date: 2022-10-10 17:49:09
 * @LastEditors: yangyuchun yangyuchun@meshcloud.com
 * @LastEditTime: 2022-10-10 17:49:20
 * @FilePath: /workbench-web/src/common-components/table-filter/model/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, reactive, watch } from 'vue'
import { debounce } from 'lodash-es'
const defaultValue: Record<string, any> = {
  input: '',
  select: '',
  'tree-select': [],
  'single-select': ''
}
export default (props: any, clintWidth: any, emit: any) => {
  const state = reactive({
    isExpand: true, // 展开收起
    hasTimeRange: false,
    showItems: [] as any[],
    submitFileds: {} as Record<string, any>
  })
  const initFilterData = (data: any[]) => {
    data.forEach(item => {
      state.submitFileds[item.prop] = item.defaultValue ? item.defaultValue : defaultValue[item.type]
    })
  }
  const getData = (firstData: any, secondData: any, thirdData: any) => {
    if (state.hasTimeRange) {
      return clintWidth.value <= 1600 ? firstData : secondData
    } else {
      return clintWidth.value <= 1600 ? secondData : thirdData
    }
  }
  const itemWidth = computed(() => {
    return props.filterWidth ? props.filterWidth : getData(33.33, 25, 20)
  })
  const showItems = computed(() => {
    if (!state.isExpand) {
      return props.items
    }
    return props.items.slice(0, Math.floor(100 / itemWidth.value) * props.maxLineCount - 1)
  })
  const isShowExpand = computed(() => {
    return props.items.length > Math.floor(100 / itemWidth.value) * props.maxLineCount - 1
  })
  const changeExpand = () => {
    state.isExpand = !state.isExpand
  }
  const onSearch = debounce(() => {
    console.log(12312313)
    const filterData: Record<string, any> = {}
    for (const key in state.submitFileds) {
      filterData[key] = typeof state.submitFileds[key] == 'string' ? state.submitFileds[key]?.trim() : state.submitFileds[key]
    }
    emit('onSearch', filterData)
  }, 500)
  const onReset = () => {
    initFilterData(props.items)
    onSearch()
  }
  const changeFiledData = (prop: any, value: any) => {
    state.submitFileds[prop] = value
    onSearch()
  }
  watch(() => props.items, (val: any[]) => {
    if (!val.length) return
    state.hasTimeRange = false
    val.forEach(item => {
      if (item.type === 'time-range') {
        state.hasTimeRange = true
      }
      state.submitFileds[item.prop] = item.defaultValue ? item.defaultValue : defaultValue[item.type]
    })
    initFilterData(val)
    props.isSearchImdate && onSearch()
  }, {
    immediate: true
  })
  return {
    state,
    itemWidth,
    showItems,
    changeExpand,
    onSearch,
    onReset,
    isShowExpand,
    changeFiledData
  }
}

