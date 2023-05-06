<script setup lang='ts'>
import TextInputViewer from './components/TextInputViewer.vue';
import CheckboxViewer from './components/CheckboxViewer.vue';
import MultiCheckboxViewer from './components/MultiCheckboxViewer.vue';
import RadioViewer from './components/RadioViewer.vue';
import SelectViewer from './components/SelectViewer.vue';
import MultiSelectViewer from './components/MultiSelectViewer.vue';

const multiCheckboxValues = ['Jack', 'John', 'Mike']
const radioValues = ['One', 'Two']
const selectValues = ['A', 'B', 'C']
const multiSelectValues = ['A', 'B', 'C']
</script>

<template>
  <div class="text-input-container">
    <h2>Text Input</h2>
    <TextInputViewer></TextInputViewer>
  </div>
  <div class="checkbox-container">
    <h2>Checkbox</h2>
    <CheckboxViewer></CheckboxViewer>
  </div>
  <div class="multi-checkbox-container">
    <h2>Multi Checkbox</h2>
    <MultiCheckboxViewer :values="multiCheckboxValues"></MultiCheckboxViewer>
  </div>
  <div class="radio-container">
    <h2>Radio</h2>
    <RadioViewer :values="radioValues"></RadioViewer>
  </div>
  <div class="select-container">
    <h2>Select</h2>
    <SelectViewer :values="selectValues"></SelectViewer>
  </div>
  <div class="multi-select-container">
    <h2>Multi Select</h2>
    <MultiSelectViewer :values="multiSelectValues"></MultiSelectViewer>
  </div>
</template>

<style scoped></style>