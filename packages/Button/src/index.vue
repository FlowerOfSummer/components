<template>
  <button class="m-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>

<style scoped>
.m-button {

}
</style>