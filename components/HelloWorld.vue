<script lang="ts" setup>
defineProps({
  text: String
})
</script>

<template>
  <div>
    <p>{{ $props.text }}</p>
    <nord-button variant="primary">Nord Button</nord-button>
  </div>
</template>
