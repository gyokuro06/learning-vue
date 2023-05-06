<script setup lang='ts'>
import { ref } from 'vue';

const text = ref('')
</script>

<template>
  <input v-model="text" placeholder="Edit me">
  <div class="view">{{ text }}</div>
</template>

<style scoped></style>