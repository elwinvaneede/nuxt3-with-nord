<template>
  <nord-layout nav-toggle="toggle-button">
    <PrimaryNavigation />
    <PageHeader />
    <NuxtPage />
    <nord-command-menu></nord-command-menu>
  </nord-layout>
</template>

<style>
  /* Nav header toggle */
  .nav-lock {
    display: none;
  }
  @media (min-width: 768px) {
    nord-layout[nav-open] .nav-toggle {
      display: none;
    }
    .nav-toggle:hover .nav-lock {
      display: block;
    }
    .nav-toggle:hover .nav-unlock {
      display: none;
    }
  }

  /* Nav header prototype */
  .has-logo nord-icon {
    display: none;
  }
  .has-logo .n-clinic-img {
    opacity: 1;
    visibility: visible;
  }
  .has-logo .n-clinic-name,
  .has-logo .n-clinic-icon {
    opacity: 0;
    visibility: hidden;
  }
  .n-clinic-img {
    max-width: 200px;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    margin-left: calc(var(--n-space-s) / 1.2);
    background: transparent;
    height: calc(var(--n-space-xl) / 1.2);
    background-position: 0 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .n-logo-contents,
  .n-clinic-name {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }

  /* Responsive settings */
  @media (max-width: 550px) {
    .filter {
      display: none;
    }
  }
  @media (max-width: 450px) {
    .export {
      display: none;
    }
  }
  @media (max-width: 370px) {
    .new {
      display: none;
    }
  }
</style>
