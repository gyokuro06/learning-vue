<script setup lang='ts'>
import { Ref, ref, toRef, watch } from 'vue'
import { fetchCommits } from '../driver/GithubApi.ts'
import { Commits, toCommits } from '../domain/Commit.ts'

const props = defineProps({
  branch: {
    type: String,
    default: ''
  },
  owner: {
    type: String,
    default: ''
  },
  repository: {
    type: String,
    default: ''
  }
})

const branch = toRef(props, 'branch')
const commits: Ref<Commits> = ref([])
watch(branch, async () => {
  const json = await fetchCommits(props.owner, props.repository, props.branch)
  commits.value = toCommits(json)
})

const truncate = (s: string): string => {
  const newlineIndex = s.indexOf('\n')
  return newlineIndex > 0 ? s.slice(0, newlineIndex) : s
}
const formatDate = (d: string): string => {
  return d.replace(/T|Z/g, ' ')
}
</script>

<template>
  <ul class="commit-list">
    <li v-for="{ html_url, sha, author, date, message } in commits">
      <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
      - <span class="message">{{ truncate(message) }}</span><br>
      by
      <span class="author">
        <a :href="html_url" target="_blank">{{ author.name }}</a>
      </span>
      at <span class="date">{{ formatDate(date) }}</span>
    </li>
  </ul>
</template>

<style scoped>
.commit-list {
  text-align: left;
}
</style>