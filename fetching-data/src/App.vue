<script setup lang='ts'>
import { ref, watch } from 'vue';
import BranchSelectRadioButton from './components/BranchSelectRadioButton.vue';
import CommitList from './components/CommitList.vue';

const owner = 'vuejs'
const repository = 'core'
const currentBranch = ref('')
watch(currentBranch, () => console.log(`currentBranch changed: ${currentBranch.value}`))
</script>

<template>
  <h1>Latest Vue Core Commits</h1>
  <BranchSelectRadioButton :owner="owner" :repository="repository" v-model="currentBranch"></BranchSelectRadioButton>
  <p>{{ owner }}/{{ repository }}@{{ currentBranch }}</p>
  <CommitList :owner="owner" :repository="repository" :branch="currentBranch"></CommitList>
</template>

<style scoped></style>