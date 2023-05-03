<script setup lang='ts'>
const emits = defineEmits(['reverse-message'])
</script>

<template>
  <div class="reverse-message-button">
    <button @click="emits('reverse-message')">Reverse Message</button>
  </div>
</template>

<style scoped></style>

