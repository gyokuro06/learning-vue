<script setup lang="ts">
import { ref } from 'vue';
import BlogPosts from './components/BlogPosts.vue'
import AlertBox from './components/AlertBox.vue';

const posts = ref([
  { id: 1, title: 'Learning js' },
  { id: 2, title: 'Learning TypeScript' },
  { id: 3, title: 'Learning Vue' },
])

const postFontSize = ref(1)
</script>

<template>
  <div id="app">
    <AlertBox>
      Error from Parent Component
    </AlertBox>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPosts v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize += 0.1" />
    </div>
  </div>
</template>
