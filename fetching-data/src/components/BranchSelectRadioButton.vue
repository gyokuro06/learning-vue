<script setup lang='ts'>
import { ref, onMounted, watch } from 'vue'
import { BranchesJson } from '../domain/Branch.ts'
import { fetchBranches } from '../driver/GithubApi.ts'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  owner: {
    type: String,
    default: 'vuejs'
  },
  repository: {
    type: String,
    default: 'core'
  }
})
const emits = defineEmits(['update:modelValue'])

let currentBranch = ref('')
let branches: BranchesJson;

watch(currentBranch, () => emits('update:modelValue', currentBranch.value))
onMounted(async () => {
  const res = await fetchBranches(props.owner, props.repository)
  branches = res
  currentBranch.value = res[0].name
})
</script>

<template>
  <div class="branch-container">
    <label class="branch-label" v-for="branch in branches">
      <input type="radio" :value="branch.name" v-model="currentBranch">
      {{ branch.name }}
    </label>
  </div>
</template>

<style scoped>
.branch-container {
  padding: 24px;
  font-size: 1em;
  height: 20em;
  overflow-y: scroll;
}

.branch-label {
  display: block;
  text-align: left;
  font-size: 1em;
}
</style>