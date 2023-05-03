<script setup lang='ts'>
const props = defineProps(['link', 'message'])

const notify = () => {
  alert(props.message ?? 'navigation was prevented.')
}
</script>

<template>
  <div class="alert-link">
    <a :href="link ?? 'https://vue.org'" @click.prevent="notify">
      <slot />
    </a>
  </div>
</template>

<style scoped></style>