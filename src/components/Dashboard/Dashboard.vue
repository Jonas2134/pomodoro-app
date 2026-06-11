<script setup lang="ts">
import DashboardCalander from "./Dashboard-calander.vue";
import DashboardActivities from "./Dashboard-activities.vue";
</script>

<template>
    <div class="base-layout">
        <h1 class="headline-center">Mein Dashboard</h1>
        <section class="dashboard__section">
            <dashboard-calander />
            <dashboard-activities />
        </section>
    </div>
</template>

<style lang="css" scoped>
.dashboard__section {
    display: flex;
    gap: 20px;
    flex-direction: column;
}
</style>
