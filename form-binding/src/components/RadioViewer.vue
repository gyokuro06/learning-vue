<script setup lang='ts'>
import { ref } from 'vue';

const props = defineProps(['values'])

const picked = ref(props.values[0] ?? 'No Value')
</script>

<template>
  <label v-for="value in values">
    <input type="radio" :value="value" v-model="picked">
    {{ value }}
  </label>
  <div class="radio-view" v-if="values.length">
    Picked: {{ picked }}
  </div>
  <div class="radio-view" v-else>
    No Values
  </div>
</template>

<style scoped></style>