<script setup lang='ts'>
import { ref, watch } from 'vue';
import searchWhiteIcon from '../assets/search-white.png'
import searchBlackIcon from '../assets/search-black.png'

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:modelValue'])

const query = ref('')
watch(query, () => emits('update:modelValue', query.value))
</script>

<template>
  <div class="search-container">
    <picture class="search-icon">
      <source media="(prefers-color-scheme: dark)" :srcset="searchWhiteIcon">
      <img :src="searchBlackIcon">
    </picture>
    <input type="search" class="search" v-model="query">
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  height: 2em;
  text-align: center;
  border: 1px solid;
  border-radius: 8px;
  background: #2b2a33;
  padding: 0 8px;
}

.search-container:focus {
  outline: 4px auto -webkit-focus-ring-color;
}

.search-icon {
  display: flex;
  width: 2em;
}

.search-icon img {
  padding: 8px;
}

.search {
  border: none;
  width: 100%;
  outline: none;
}
</style>