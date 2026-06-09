<script setup lang="ts">
import { ref } from "vue";
import { CalendarHeatmap } from "vue3-calendar-heatmap";
import "vue3-calendar-heatmap/dist/style.css";

const today = new Date();
const todayFormatted = today.toISOString().split("T")[0];
const customColors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

const pomodoroHistory = ref([
    { date: "2026-06-01", count: 2 },
    { date: "2026-06-02", count: 5 },
    { date: "2026-06-03", count: 0 },
    { date: "2026-06-04", count: 12 },
]);
</script>

<template>
    <calendar-heatmap
        :values="pomodoroHistory"
        :end-date="todayFormatted"
        :round="2"
        :range-color="customColors"
    />
</template>

<style lang="css" scoped></style>
