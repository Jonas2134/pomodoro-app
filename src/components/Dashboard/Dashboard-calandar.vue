<script setup lang="ts">
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

const handleCellClick = (date: any) => {
    alert(`Du hast auf den Tag geklickt: ${date.toLocaleDateString("de-DE")}`);
};
</script>

<template>
    <div class="dashboard-card calendar">
        <vue-cal
            hide-view-selector
            active-view="week"
            :disable-views="['years', 'year', 'month', 'day']"
            :locale="'de'"
            :time="false"
            @cell-click="handleCellClick"
            class="vuecal--square"
        />
    </div>
</template>

<style lang="css" scoped>
.calendar {
    overflow: hidden;
    grid-column: 1 / 5;
    grid-row: 2;
    flex-grow: 1;
}
</style>
