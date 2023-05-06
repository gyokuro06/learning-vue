<script setup lang='ts'>
import { ref } from 'vue';

defineProps(['values'])

const checkedValue = ref([])
</script>

<template>
  <label v-for="value in values">
    <input type="checkbox" :value="value" v-model="checkedValue">
    {{ value }}
  </label>
  <div class="multi-checkbox-view">
    Checked names:
    <pre v-if="checkedValue.length">{{ checkedValue }}</pre>
  </div>
</template>

<style scoped></style>