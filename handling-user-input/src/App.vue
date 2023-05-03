<script setup lang="ts">
import { ref } from 'vue'
import UserMessage from './components/UserMessage.vue'
import ReverseMessageButton from './components/ReverseMessageButton.vue';
import AppendExclamationButton from './components/AppendExclamationButton.vue';
import AlertLink from './components/AlertLink.vue';

const message = ref('Hello World!')

const reverseMessage = () => {
  message.value = message.value.split('').reverse().join('')
}
const appendExclamation = () => {
  message.value = message.value.concat('!')
}
</script>

<template>
  <UserMessage>{{ message }}</UserMessage>
  <ReverseMessageButton @reverse-message="reverseMessage"></ReverseMessageButton>
  <AppendExclamationButton @append-exclamation="appendExclamation"></AppendExclamationButton>
  <ul class="alert-links">
    <li>
      <AlertLink>Default Link</AlertLink>
    </li>
    <li>
      <AlertLink link="https://www.google.com" message="You kidding me wwwwww">A link with e.preventDefault()</AlertLink>
    </li>
  </ul>
</template>

<style scoped>
.reverse-message-button,
.append-exclamation-button {
  margin: 0 0 16px 0;
}

.alert-link {
  text-align: left;
}
</style>
