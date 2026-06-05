import { createMemoryHistory, createRouter } from "vue-router";

import Dashboard from "./components/Dashboard/Dashboard.vue";
import Timer from "./components/Timer/Timer.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/timer", component: Timer },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
