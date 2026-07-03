<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useCountdown } from "../../composables/useCountdown";

const FOCUS_MINUTES = 25;
const PAUSE_MINUTES = 5;

const currentPhase = ref<"fokus" | "pause">("fokus");
const startTime = ref<string | null>(null);
const isSessionStarted = ref(false);

const timer = useCountdown();

const startSession = () => {
  if (!isSessionStarted.value) {
    startTime.value = new Date().toISOString();
    console.log("DB-Eintrag: Session gestartet um", startTime.value);
    timer.restart(FOCUS_MINUTES);
    isSessionStarted.value = true;
  } else {
    timer.start();
  }
};

watch(timer.isExpired, (expired) => {
  if (expired && isSessionStarted.value) {
    handlePhaseChange();
  }
});

const handlePhaseChange = () => {
  console.log("Intervall abgelaufen!");

  if (currentPhase.value === "fokus") {
    currentPhase.value = "pause";
    timer.restart(PAUSE_MINUTES);
  } else {
    currentPhase.value = "fokus";
    timer.restart(FOCUS_MINUTES);
  }
};

const formattedMinutes = computed(() =>
  String(timer.minutes.value).padStart(2, "0"),
);
const formattedSeconds = computed(() =>
  String(timer.seconds.value).padStart(2, "0"),
);

const endWholeSession = () => {
  timer.pause();
  isSessionStarted.value = false;
  const endTime = new Date().toISOString();
  console.log("DB-Eintrag: Session beendet um", endTime);
  alert("Session erfolgreich gespeicert!");
};
</script>

<template>
  <div :class="['timer-page', `timer-page--${currentPhase}`]">
    <header class="timer-page__header">
      <h1 class="timer-page__title">
        {{ currentPhase === "fokus" ? "Fokus-Phase" : "Pausen-Phase" }}
      </h1>
      <p class="timer-page__subtitle">
        {{ currentPhase === "fokus" ? "Bleib produktiv!" : "Atme kurz durch." }}
      </p>
    </header>

    <main class="timer-page__main">
      <div class="timer-page__display">
        <span class="timer-page__digits">{{ formattedMinutes }}</span>
        <span class="timer-page__divider">:</span>
        <span class="timer-page__digits">{{ formattedSeconds }}</span>
      </div>

      <div class="timer-page__controls">
        <button
          v-if="!timer.isRunning.value"
          class="timer-page__btn timer-page__btn--start"
          @click="startSession"
        >
          Start
        </button>

        <button
          v-else
          class="timer-page__btn timer-page__btn--pause"
          @click="timer.pause()"
        >
          Pause
        </button>
      </div>
    </main>

    <footer class="timer-page__footer">
      <button
        class="timer-page__btn timer-page__btn--stop"
        @click="endWholeSession"
      >
        Session beenden & speichern
      </button>
    </footer>
  </div>
</template>

<style scoped>
.timer-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  transition: background-color 0.5s ease;
}

.timer-page--fokus {
  background-color: #121214;
  color: #ffffff;
}

.timer-page--pause {
  background-color: #1a233a;
  color: #818cf8;
}

.timer-page__header {
  text-align: center;
}

.timer-page__title {
  font-size: 2.5rem;
  margin: 0 0 8px 0;
}

.timer-page__subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  margin: 0;
}

.timer-page__display {
  font-size: 6rem;
  font-weight: bold;
  font-variant-numeric: tabular-nums;
  margin-bottom: 24px;
}

.timer-page__controls {
  display: flex;
  justify-content: center;
}

.timer-page__btn {
  padding: 12px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.timer-page__btn:active {
  transform: scale(0.98);
}

.timer-page__btn--start {
  background-color: #4f46e5;
  color: white;
}

.timer-page__btn--pause {
  background-color: #e11d48;
  color: white;
}

.timer-page__btn--stop {
  background-color: transparent;
  color: #6b7280;
  border: 2px solid #374151;
  font-size: 1rem;
}

.timer-page__btn--stop:hover {
  border-color: #e11d48;
  color: #e11d48;
}
</style>
