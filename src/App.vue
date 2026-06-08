<script setup lang="ts"></script>

<template>
    <nav class="nav">
        <RouterLink to="/">Go to Dashboard</RouterLink>
        <RouterLink to="/timer">Start Timer</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 18px 0;
}
</style>
