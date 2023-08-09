import { createRouter, createWebHistory } from "vue-router";
import Profile from "../components/Profile.vue";

const routes = [
  { path: "/", component: Profile },
  { path: "/home", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "bg-gray-700",
});

export default router;
