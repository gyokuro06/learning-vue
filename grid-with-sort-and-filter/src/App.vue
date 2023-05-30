<script setup lang='ts'>
import { ref } from 'vue';
import Search from './components/Search.vue';
import Grid from './components/Grid.vue';
import { GridRows } from './domain/Grid';

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData: GridRows = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]
</script>

<template>
  <Search class="search" v-model="searchQuery"></Search>
  <Grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></Grid>
</template>

<style scoped>
.search {
  margin: 0 0 24px 0;
}
</style>