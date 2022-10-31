<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 表格筛选组件

基于列表的筛选组件

## 基础用法
<Preview comp-name="TableFilter" demo-name="demo">
  <demo />
</Preview>

## tableFilter属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`searchLoading` | 查询的按钮的loading | Boolean | - | false | 否 
`isSearchImdate` | 是否立即搜索 | Boolean | - | true | 否
`isShowReset` | 是否显示重置  | Boolean  |  - | true | 否 
`filterWidth` | 自定义filteritem的宽度 | Number | - | null | 否
`labelWidth` | 自定义label的宽度 | String | - | '' | 否
`maxLineCount` | 最多显示行数 | Number | - | 2 | 否


## tableFilter-input属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`customAttrs` | 原生el-input属性 | Object | - | null | 否 
`defaultValue` | 默认值 | String | - | null | 否 

## tableFilter-select属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`customAttrs` | 原生el-input属性 | Object | - | null | 否 
`defaultValue` | 默认值 | String/Array/Number | - | null | 否 

## tableFilter-timeRange属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`customAttrs` | 原生el-input属性 | Object | - | null | 否 
`defaultValue` | 默认值 | String | - | null | 否 

## tableFilter-treeSelect属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`customAttrs` | 原生el-input属性 | Object | - | null | 否 
`defaultValue` | 默认值 | String | - | null | 否 

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
