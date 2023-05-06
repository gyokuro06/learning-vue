<script setup lang='ts'>
import { ref } from 'vue';

const checked = ref(false)
</script>

<template>
  <label>
    <input type="checkbox" v-model="checked">
    Checked: {{ checked }}
  </label>
</template>

<style scoped></style>