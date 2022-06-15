<script lang="ts" setup>
// FIXME: Temp fix until custom NuxtLink's are possible (https://github.com/nuxt/framework/issues/3657)
function navigate(path: string){
  return navigateTo({ path })
}

const route = useRoute();
</script>

<template>
  <nord-navigation slot="nav">
    <nord-dropdown slot="header" expand>
      <nord-button slot="toggle" expand variant="switch">
        <span slot="start" aria-hidden="true" class="n-clinic-icon"><span>B</span></span>
        Bath Clinic
        <nord-icon slot="end" class="n-margin-i-s" color="var(--n-color-icon)" name="interface-dropdown-small" size="s"></nord-icon>
      </nord-button>
      <nord-dropdown-group style="min-inline-size: 270px" heading="laura.williams@nordhealth.com">
        <nord-dropdown-item>
          <span aria-hidden="true" slot="start" style="--n-icon-size: calc(var(--n-size-icon-l) / 1.2)" class="n-clinic-icon">B</span>
          Bath Clinic
          <nord-icon slot="end" name="interface-checked" size="s"></nord-icon>
        </nord-dropdown-item>
        <nord-dropdown-item>
          <span aria-hidden="true" style="--n-icon-color: var(--n-color-status-success); --n-icon-size: calc(var(--n-size-icon-l) / 1.2)" slot="start" class="n-clinic-icon">O</span>
          Ocean Beach Clinic
        </nord-dropdown-item>
        <nord-dropdown-item>
          <span aria-hidden="true" style="--n-icon-color: var(--n-color-status-info); --n-icon-size: calc(var(--n-size-icon-l) / 1.2)" slot="start" class="n-clinic-icon">P</span>
          Park Animal Hospital
        </nord-dropdown-item>
        <nord-dropdown-item>
          <span aria-hidden="true" style="--n-icon-color: var(--n-color-status-danger); --n-icon-size: calc(var(--n-size-icon-l) / 1.2)" slot="start" class="n-clinic-icon">B</span>
          Balboa Pet Hospital
        </nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-group>
        <nord-dropdown-item>Add another clinic</nord-dropdown-item>
        <nord-dropdown-item>Customize style</nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
    </nord-dropdown>
    <nord-nav-group>
      <nord-nav-item aria-describedby="search" icon="navigation-search">Search</nord-nav-item>
      <nord-tooltip id="search" position="inline-end">
        Search
        <div slot="shortcut">
          <nord-icon name="keyboard-option" size="s" label="Option key"></nord-icon>
        </div>
        <span slot="shortcut">S</span>
      </nord-tooltip>
      <nord-nav-item icon="navigation-notifications" aria-describedby="notifications" badge="12">
        Notifications
      </nord-nav-item>
      <nord-tooltip id="notifications" position="inline-end">
        Notifications
        <div slot="shortcut">
          <nord-icon name="keyboard-option" size="s" label="Option key"></nord-icon>
        </div>
        <span slot="shortcut">N</span>
      </nord-tooltip>
      <nord-nav-item icon="navigation-tasks" aria-describedby="tasks">My tasks</nord-nav-item>
      <nord-tooltip id="tasks" position="inline-end">
        My tasks
        <div slot="shortcut">
          <nord-icon name="keyboard-option" size="s" label="Option key"></nord-icon>
        </div>
        <span slot="shortcut">M</span>
      </nord-tooltip>
    </nord-nav-group>
    <nord-nav-group heading="Workspace">
      <nord-nav-item :active="route.name === 'index' || null" icon="navigation-dashboard" @click="navigate('/')">Dashboard</nord-nav-item>
      <nord-nav-item icon="navigation-payments">
        Payments
        <nord-nav-group slot="subnav">
          <nord-nav-item href="#">All transactions</nord-nav-item>
          <nord-nav-item href="#">Payments</nord-nav-item>
          <nord-nav-item href="#">Disputes</nord-nav-item>
        </nord-nav-group>
      </nord-nav-item>
      <nord-nav-item icon="navigation-reports">
        Reports
        <nord-nav-group slot="subnav">
          <nord-nav-item href="#">Payments</nord-nav-item>
          <nord-nav-item href="#">Disputes</nord-nav-item>
          <nord-nav-item href="#">Payouts</nord-nav-item>
        </nord-nav-group>
      </nord-nav-item>
      <nord-nav-item :active="route.name === 'settings' || null" icon="navigation-settings" @click="navigate('/settings')">Settings</nord-nav-item>
    </nord-nav-group>
    <nord-dropdown expand slot="footer">
      <nord-button
        slot="toggle"
        expand
        style="
          --n-button-text-align: start;
          --n-button-color: var(--n-color-text-weak);
          --n-button-padding-x: calc(var(--n-space-s) / 2);
          --n-button-background-color: transparent;
          --n-button-border-color: transparent;
          --n-button-box-shadow: transparent;
          --n-button-gradient: none;
        "
      >
        <nord-avatar aria-hidden="true" name="Laura Williams" slot="start"></nord-avatar>
        <nord-icon slot="end" color="var(--n-color-icon)" name="interface-dropdown-small" size="s"></nord-icon>
        Laura Williams
      </nord-button>
      <nord-dropdown-group style="min-inline-size: 250px">
        <nord-dropdown-item href="#">View profile</nord-dropdown-item>
        <nord-dropdown-item>Settings</nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-group>
        <nord-dropdown-item>
          Show keyboard shortcuts
          <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
        </nord-dropdown-item>
        <nord-dropdown-item>Help & Support</nord-dropdown-item>
        <nord-dropdown-item>API</nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-item>
        Sign out
        <nord-icon slot="end" name="interface-logout" size="s"></nord-icon>
      </nord-dropdown-item>
    </nord-dropdown>
  </nord-navigation>
</template>