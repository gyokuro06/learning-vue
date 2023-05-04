<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps(['color'])
const emits = defineEmits(['switch-color'])

const colorStyle = computed(() => {
  return {
    color: props.color ?? ''
  }
})

</script>

<template>
  <p class="switch-color-message" :style="colorStyle" @click="emits('switch-color')">
    <slot />
  </p>
</template>

<style scoped></style>