<script setup lang="ts">
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

const handleCellClick = (date: any) => {
    alert(`Du hast auf den Tag geklickt: ${date.toLocaleDateString("de-DE")}`);
};
</script>

<template>
    <vue-cal
        active-view="week"
        :disable-views="['years', 'year', 'month', 'day']"
        :locale="'de'"
        :time="false"
        @cell-click="handleCellClick"
        class="vuecal--square dashboard-cal"
    />
</template>

<style lang="css" scoped>
.dashboard-cal {
    height: 250px;
    border: 1px solid #333;
    border-radius: 8px;
    overflow: hidden;
}
</style>
