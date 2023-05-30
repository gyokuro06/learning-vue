<script setup lang='ts'>
import { computed, ref } from 'vue';
import { GridRow, GridRows } from '../domain/Grid.ts'


const props = defineProps<{
  data: GridRows,
  columns: string[],
  filterKey: string,
}>()

const sortKey = ref('')
type SortOrders = { [key: string]: number }
const sortOrders = ref(
  props.columns.reduce<SortOrders>((acc, key) => ((acc[key] = 1), acc), {})
)
const filteredData = computed(() => {
  let { data, filterKey } = props
  if (filterKey) {
    filterKey = filterKey.toLowerCase()
    data = data.filter((row) => {
      return (Object.keys(row) as (keyof GridRow)[]).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }
  const key = sortKey.value as keyof GridRow
  if (key) {
    const order = sortOrders.value[key]
    data = data.slice().sort((a, b) => {
      const a2 = a[key]
      const b2 = b[key]
      return (a2 === b2 ? 0 : a2 > b2 ? 1 : -1) * order
    })
  }
  return data
})

const sortBy = (key: string) => {
  sortKey.value = key
  sortOrders.value[key] *= -1
}

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
          {{ capitalize(key) }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'desc'"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">{{ entry[key as keyof GridRow] }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>No matches found.</p>
</template>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
  color: #242424;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.desc {
  border-top: 4px solid #fff;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}
</style>