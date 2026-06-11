<script setup lang="ts">
import { useStopwatch } from "vue-timer-hook";

const autoStart = false;
const stopwatch = useStopwatch(0, autoStart);
</script>

<template>
    <div class="base-layout">
        <h1 class="headline-center">Timer</h1>
        <div class="timer__section">
            <p>Stopwatch Demo</p>
            <div>
                <span>{{ stopwatch.days }}</span> :
                <span>{{ stopwatch.hours }}</span> :
                <span>{{ stopwatch.minutes }}</span> :
                <span>{{ stopwatch.seconds }}</span>
            </div>
            <p>{{ stopwatch.isRunning ? "Running" : "Not running" }}</p>
        </div>
        <menu class="timer__menu">
            <button @click="stopwatch.start()">Start</button>
            <button @click="stopwatch.pause()">Pause</button>
            <button @click="stopwatch.reset()">Reset</button>
        </menu>
    </div>
</template>

<style scoped>
.timer__section {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
}

.timer__menu {
    display: flex;
    gap: 20px;
    justify-content: center;
}
</style>
