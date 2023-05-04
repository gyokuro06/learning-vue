<script setup lang='ts'>
import SwitchColorMessage from './components/SwitchColorMessage.vue';
import { ref } from 'vue';

const switchRedMessageColor = ref('')
const switchGreenAndBlueMessageColor = ref('green')

const switchRedOrNot = () => {
  switchRedMessageColor.value = switchRedMessageColor.value === ''
    ? 'red'
    : ''
}

const switchGreenOrBlue = () => {
  switchGreenAndBlueMessageColor.value = switchGreenAndBlueMessageColor.value === 'green'
    ? 'blue'
    : 'green'
}
</script>

<template>
  <SwitchColorMessage :color="switchRedMessageColor" @switch-color="switchRedOrNot">
    This should be red... but click me to toggle it
  </SwitchColorMessage>
  <SwitchColorMessage :color="switchGreenAndBlueMessageColor" @switch-color="switchGreenOrBlue">
    This should be green, and should toggle between green and blue on click.
  </SwitchColorMessage>
</template>

<style scoped></style>
