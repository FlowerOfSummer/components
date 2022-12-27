import { errorHandling } from './error-handling/index'
import { watch, reactive } from 'vue'

const requestOptions = async (emits: any, props: any, labelKey: string, valueKey: string) => {
  const params: Record<string, any> = {}
  // 依赖筛选参数获取options
  props.optionsParams.forEach((key: string) => {
    params[key] = props.submitFileds[key]
  })
  let data: any[] = []
  await errorHandling(props.optionsRquest, params, (res) => {
    // res中options的字段
    const dataFiled = props.dataFiled || 'items'
    const items = props.isInData ? res.data : res.data[dataFiled]
    data = initOptions(emits, props, items, labelKey, valueKey)
  })
  return data
}
/**
 *
 * @param {*} props
 * @param {*} origin 原options数据
 * @param {*} labelKey
 * @param {*} valueKey
 * @returns
 */
const initOptions = (emits: any, props: any, origin: any[], labelKey: string, valueKey: string) => {
  let data = []
  // 是否拼接全部
  if (props.isShowAll) {
    data = [{
      [labelKey]: '全部',
      [valueKey]: '',
    },
    ...origin]
  } else {
    data = origin
  }
  // 是否取默认值 第一个
  if (props.isDefault0 && origin.length) {
    emits('update:modelValue', origin[0][valueKey])
    emits('search')
  }
  return data
}
export default (props: any, emits: any) => {
  const optionsState = reactive({
    options: [] as any[]
  })
  const labelKey = props.customAttrs?.fieldNames?.label || 'label'
  const valueKey = props.customAttrs?.fieldNames?.value || 'value'
  watch(() => props.options, () => {
    optionsState.options = initOptions(emits, props, props.options, labelKey, valueKey)
  }, {
    immediate: true
  })
  const getOptions = async () => {
    // console.log('props.optionsParams:', props.optionsParams)
    if (props.optionsParams.length) {
      props.optionsParams.forEach((key: any) => {
        watch(() => props.submitFileds[key], async () => {
          // 更新options前，先将数据置空
          emits('update:modelValue', props.isFixedDefault ? props.defaultValue : undefined)
          emits('search')
          optionsState.options = await requestOptions(emits, props, labelKey, valueKey)
        }, {
          immediate: true
        })
      })
    } else {
      props.optionsRquest && (optionsState.options = await requestOptions(emits, props, labelKey, valueKey))
    }
  }
  getOptions()
  return {
    optionsState
  }
}
