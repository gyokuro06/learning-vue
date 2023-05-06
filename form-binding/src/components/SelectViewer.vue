<script setup lang='ts'>
import { ref } from 'vue';

defineProps(['values'])

const selected = ref('')
</script>

<template>
  <select v-model="selected">
    <option value="" disabled>Please select one</option>
    <option v-for="value in values">{{ value }}</option>
  </select>
  <div class="select-view">
    Selected: {{ selected }}
  </div>
</template>

<style scoped></style>