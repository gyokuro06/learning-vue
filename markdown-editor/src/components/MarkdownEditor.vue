<script setup lang='ts'>
import { ref } from 'vue';
import { debounce } from 'lodash-es';

defineProps({
  modelValue: {
    type: String,
    default: '',
  }
})
const emits = defineEmits(['update:modelValue'])

const text = ref('')
const update = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    text.value = event.target.value
  }
  console.log(`MarkdownEditor updated: ${text.value}`);
  emits('update:modelValue', text.value);
  debounce(() => {
    console.log(`MarkdownEditor updated: ${text.value}`);
    emits('update:modelValue', text.value);
  }, 100)
}
</script>

<template>
  <textarea class="input" v-model="text" @input="update($event)"></textarea>
</template>

<style scoped>
.input {
  padding: 20px;
  border: none;
  border-right: 1px solid #ccc;
  font-size: 1em;
  font-family: 'Monaco', courier, monospace;
}

::-webkit-resizer {
  display: none;
}
</style>
