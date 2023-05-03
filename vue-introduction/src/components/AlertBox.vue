<script setup lang="ts">
</script>

<template>
  <div class="aleart-box">
    <strong>This is an Error for Demo Purpose</strong>
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  box-sizing: border-box;
  border: 1px solid red;
  border-radius: 8px;
  color: rgba(235, 235, 235, 0.6);
}
</style>