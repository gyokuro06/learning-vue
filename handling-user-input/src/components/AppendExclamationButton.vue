<script setup lang='ts'>
const emits = defineEmits(['append-exclamation'])
</script>

<template>
  <div class="append-exclamation-button">
    <button @click="emits('append-exclamation')">Append "!"</button>
  </div>
</template>

<style scoped></style>