<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <nord-header slot="header">
    <nord-button variant="plain" size="s" id="toggle-button" class="nav-toggle" aria-describedby="toggle-tooltip">
      <nord-icon
        color="var(--n-color-icon)"
        name="navigation-toggle"
        class="nav-unlock"
        label="Menu"
      ></nord-icon>
      <nord-icon color="var(--n-color-text)" name="navigation-toggle-lock" class="nav-lock"></nord-icon>
    </nord-button>
    <nord-tooltip id="toggle-tooltip" position="inline-end">
      Lock navigation open
      <div slot="shortcut">
        <nord-icon name="keyboard-option" size="s" label="Alt/Option key"></nord-icon>
      </div>
      <span slot="shortcut">L</span>
    </nord-tooltip>
    <h1 class="n-typescale-l">{{ route.meta.title }}</h1>
  </nord-header>
</template>
