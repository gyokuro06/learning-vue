<script setup lang='ts'>
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps({
  markdown: {
    type: String,
    default: '',
  }
})

const htmlOutput = computed(() => {
  return marked(props.markdown)
})
</script>

<template>
  <div class="output" v-html="htmlOutput"></div>
</template>

<style scoped>
.output {
  padding: 20px;
  border: none;
  resize: none;
  outline: none;
}

:deep(code) {
  color: #f66;
}
</style>