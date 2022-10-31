/**
 * 筛选每一项的字段类型定义
 */
interface FiledsItems {
  label: string,
  prop: string,
  options?: Array<any>,
  defaultValue?: any,
  customAttrs?: any
}
/**
 * props的类型定义
 */
export interface PropsValidation {
  items: Array<FiledsItems>,
  searchLoading: boolean
}
