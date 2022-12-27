<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 业务筛选组件

支持各种类型的高级搜索组件

## 基础用法

- 组件响应式布局，默认显示两行，可以通过 maxLineCount 配置最多显示行数
- 每行个数： 如果含有 time-range，则在<1600,显示 3 个，否则显示 4 个；如果不含有 time-range，则在<1600,显示 4 个，否则显示 5 个；每行固定显示几个也可以自己配置 filterCount,默认值即是前面的 [3, 4, 5]
- label：默认 label 110px（约 6 个中文字符，超出...tooltip 显示），固定宽度也可以自己配置 labelWidth

  <Preview comp-name="TableFilter" demo-name="demo">
  <demo />
  </Preview>

## YTableFilter

### 属性

|       参数       |                 说明                  |   类型   | 可选值 | 默认值  | 是否必填 |
| :--------------: | :-----------------------------------: | :------: | :----: | :-----: | :------: |
| `searchLoading`  |           查询按钮 loading            | boolean  |   -    | `false` |    否    |
| `isSearchImdate` |             是否立即搜索              | boolean  |   -    | `true`  |    否    |
|  `isShowReset`   |             是否显示重置              | boolean  |   -    | `true`  |    否    |
|  `filterCount`   | 自定义 每行显示个数,配置必须 3 位数组 | number[] |   -    | [3,4,5] |    否    |
|   `labelWidth`   |          自定义 label 的宽度          |  string  |   -    |  110px  |    否    |
|  `maxLineCount`  |             最多显示行数              |  bumber  |   -    |   `2`   |    否    |

### 事件

|   事件名   |   说明   | 参数列表 | 参数说明 |
| :--------: | :------: | :------: | :------: |
| `onSearch` | 查询方法 |    -     |    -     |

### 方法

|      事件名       |                   说明                   |         参数列表          |                参数说明                 |
| :---------------: | :--------------------------------------: | :-----------------------: | :-------------------------------------: |
| `changeFiledData` | 修改 prop 字段值，清空其他字段值，并搜索 | (prop: tring, value: any) | prop: 对应的字段名；value: 对应字段的值 |

## FilterItem

### 属性（主要针对 select 类型的属性）

|       参数        |                   说明                   |          类型           | 可选值 | 默认值 | 是否必填 |
| :---------------: | :--------------------------------------: | :---------------------: | :----: | :----: | :------: |
|  `defaultValue`   |                  默认值                  | [String, Array, Number] |   -    |   -    |    否    |
| `isImdateRequest` |            是否修改后立即请求            |         boolean         |   -    |  true  |    否    |
|   `customAttrs`   |               组件原生属性               |         Object          |   -    |   -    |    否    |
|     `options`     |  组件（select/tree-select）绑定 options  |          Array          |   -    |   []   |    否    |
|  `optionsRquest`  |         获取 options 的接口方法          |        Function         |   -    |   -    |    否    |
|  `optionsParams`  |           联动的字段(联动请求)           |          Array          |   -    |   []   |    否    |
| `isFixedDefault`  |    更新 options 后，使用默认值 value     |         boolean         |   -    | false  |    否    |
|    `isInData`     | options 请求返回数据是否直接在 data 返回 |         boolean         |   -    | false  |    否    |
|    `isShowAll`    |       是否给 options 新增全部选项        |         boolean         |   -    |  true  |    否    |
|    `dataFiled`    |   options 数据请求返回在 data 中的字段   |         string          |   -    | items  |    否    |
|   `isDefault0`    |          是否用第一项作为默认值          |         boolean         |   -    | false  |    否    |
