<script setup lang='ts'>
import { ref } from 'vue';

defineProps(['values'])

const multiSelected = ref([])
</script>

<template>
  <select multiple v-model="multiSelected">
    <option v-for="value in values">{{ value }}</option>
  </select>
  <div class="view">
    Selected: {{ multiSelected }}
  </div>
</template>

<style scoped>
select {
  width: 100%
}
</style>