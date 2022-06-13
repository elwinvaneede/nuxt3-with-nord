<script lang="ts" setup>
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <HelloWorld :text="data.api"></HelloWorld>
  </div>
</template>
