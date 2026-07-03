<script setup lang="ts"></script>

<template>
  <aside class="app-aside">
    <nav class="app-nav">
      <RouterLink to="/">Go to Dashboard</RouterLink>
      <RouterLink to="/timer">Start Timer</RouterLink>
    </nav>
    <button>Settings</button>
  </aside>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.app-aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid;
  padding: 18px 0;
  background-color: var(--aside-bg-color);
}
.app-nav {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
</style>
