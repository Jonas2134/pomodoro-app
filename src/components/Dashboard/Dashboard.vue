<script setup lang="ts">
import DashboardCalandar from "./Dashboard-calandar.vue";
import DashboardActivities from "./Dashboard-activities.vue";
</script>

<template>
    <div class="base-layout">
        <header class="dashboard-header">
            <h1>Dashboard</h1>
        </header>
        <section class="dashboard__section">
            <div class="div1 dashboard-card">Focus Time</div>
            <div class="div2 dashboard-card">All Sessions</div>
            <div class="div3 dashboard-card">Open Tasks</div>
            <div class="div4 dashboard-card">This Week</div>
            <dashboard-calandar />
            <dashboard-activities />
            <div class="div7 dashboard-card">Last Session</div>
        </section>
    </div>
</template>

<style lang="css" scoped>
.dashboard-header {
    display: flex;
    flex-shrink: 0;
}
.dashboard__section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 18px;
    flex-grow: 1;
}
</style>
