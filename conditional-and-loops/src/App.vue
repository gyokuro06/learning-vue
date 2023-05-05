<script setup lang='ts'>
import { ref } from 'vue'
import Button from './components/Button.vue'

const show = ref(true)
const list = ref([1, 2, 3])

const pushItem = () => {
  list.value.push(list.value.length + 1)
}
const popItem = () => {
  list.value.pop()
}
const reverseList = () => {
  list.value.reverse()
}
</script>

<template>
  <div class="buttons-container">
    <Button @click="show = !show">Toggle List</Button>
    <Button @click="pushItem">Push Number</Button>
    <Button @click="popItem">Pop Number</Button>
    <Button @click="reverseList">Reverse List</Button>
    <main>
      <ul v-if="show && list.length">
        <li v-for="item of list">{{ item }}</li>
      </ul>
      <p v-else-if="list.length">List is not empty, but hidden.</p>
      <p v-else>List is empty.</p>
    </main>
  </div>
</template>

<style scoped>
Button {
  margin: 0 8px 8px 0;
}
</style>