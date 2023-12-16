import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../views/HomeView.vue");
    },
  },
  {
    path: "/learn",
    name: "learn",
    component: function () {
      return import("../views/LearnView.vue");
    },
  },
  {
    path: "/track",
    name: "track",
    component: function () {
      return import("../views/TrackView.vue");
    },
  },
  {
    path: "/connect",
    name: "connect",
    component: function () {
      return import("../views/ConnectView.vue");
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: function () {
      return import("../views/SettingsView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
