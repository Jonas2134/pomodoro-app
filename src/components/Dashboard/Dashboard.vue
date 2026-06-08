<script setup lang="ts">
import DashboardCalander from "./Dashboard-calander.vue";
import DashboardActivities from "./Dashboard-activities.vue";
</script>

<template>
    <div class="dashboard">
        <h1 class="dashboard__title">Mein Dashboard</h1>
        <section class="dashboard__section">
            <dashboard-calander />
            <dashboard-activities />
        </section>
    </div>
</template>

<style lang="css" scoped>
.dashboard {
    max-width: 1200px;
    padding: 18px;
    margin: 0 auto;
    display: flex;
    gap: 24px;
    flex-direction: column;
}

.dashboard__title {
    text-align: center;
    text-decoration: underline;
}
.dashboard__section {
    display: flex;
    gap: 20px;
    flex-direction: column;
}
</style>
