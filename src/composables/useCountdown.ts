import { ref, computed, onUnmounted } from "vue";

export function useCountdown() {
    const totalSeconds = ref(0);
    const isRunning = ref(false);
    const isExpired = ref(false);
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const clear = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    const tick = () => {
        if (totalSeconds.value <= 0) {
            clear();
            isRunning.value = false;
            isExpired.value = true;
            return;
        }
        totalSeconds.value -= 1;
    };

    const start = (minutes?: number) => {
        if (minutes !== undefined) {
            totalSeconds.value = minutes * 60;
        }
        if (totalSeconds.value <= 0) return;
        isExpired.value = false;
        isRunning.value = true;
        clear();
        intervalId = setInterval(tick, 1000);
    };

    const pause = () => {
        clear();
        isRunning.value = false;
    };

    const restart = (minutes: number) => {
        clear();
        totalSeconds.value = minutes * 60;
        isExpired.value = false;
        isRunning.value = true;
        intervalId = setInterval(tick, 1000);
    };

    const minutes = computed(() => Math.floor(totalSeconds.value / 60));
    const seconds = computed(() => totalSeconds.value % 60);

    onUnmounted(clear);

    return {
        totalSeconds,
        minutes,
        seconds,
        isRunning,
        isExpired,
        start,
        pause,
        restart,
    };
}
