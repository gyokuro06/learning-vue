<script setup lang='ts'>
import { ref } from 'vue';
import MarkdownEditor from './components/MarkdownEditor.vue';
import MarkdownPreview from './components/MarkdownPreview.vue';

const markdown = ref('')
</script>

<template>
  <MarkdownEditor class="editor" v-model="markdown"></MarkdownEditor>
  <MarkdownPreview class="preview" :markdown="markdown"></MarkdownPreview>
</template>

<style scoped>
.editor,
.preview {
  overflow: auto;
  width: 50%;
  height: 100%;
}
</style>