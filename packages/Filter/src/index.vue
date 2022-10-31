<template>
  <div class="m-filter">
    <div class="filter-btn">filter</div>
    <div class="filter-show">
      <div class="filter-tags">tags</div>
      <div class="filter-select">
        <el-auto-complete
          v-model:value="value"
          :options="props.items"
          style="width: 200px"
          placeholder="input here"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
interface props {
  items: Array
}
const props = withDefaults(defineProps<props>(), {
  items: [
    {
      label: '名称',
      prop: 'name',
      options: []
    }, {
      label: '名称',
      prop: 'name',
      options: []
    }, {
      label: '名称',
      prop: 'name',
      options: []
    }, {
      label: '名称',
      prop: 'name',
      options: []
    }, {
      label: '名称',
      prop: 'name',
      options: []
    }, {
      label: '名称',
      prop: 'name',
      options: []
    }
  ]
})
const value = ref()
</script>

<style lang="less" scoped>
.m-filter {
  display: flex;
  .filter-btn {
    margin-right: 8px;
  }
}
.filter-show {
  display: flex;
  .filter-select {
    margin-left: 8px;
  }
}
</style>