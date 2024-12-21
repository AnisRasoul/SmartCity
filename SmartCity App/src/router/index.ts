import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/home",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home/home.vue"),
      },
      {
        path: "/home",
        component: () => import("@/views/Home/home.vue"),
      },
      {
        path: "/home/:id",
        component: () => import("@/views/Home/homeDetails.vue"),
        props: true,
      },
      {
        path: "/about",
        component: () => import("@/views/about.vue"),
      },

      {
        path: "/landmark",
        component: () => import("@/views/Landmarks/landmark.vue"),
      },
      {
        path: "/landmarks/:id",
        component: () => import("@/views/Landmarks/landmarkDetails.vue"),
        props: true,
      },
      {
        path: "/recommendations",
        component: () => import("@/views/Landmarks/recommendations.vue"),
      },
    ],
  },
  {
    path: "/reservation",
    component: () => import("@/views/Home/reservationPage.vue"),
  },
  {
    path: "/transport",
    component: () => import("@/views/Transport/index.vue"),
  },

  // BLANK LAYOUT
  {
    path: "",
    component: () => import("@/layouts/blank.vue"),
    children: [
      {
        path: "/blank",
        component: () => import("@/views/blank.vue"),
      },
      {
        path: "/login",
        component: () => import("@/views/login.vue"),
      },
      {
        path: "/register",
        component: () => import("@/views/register.vue"),
      },
    ],
  },

  // NOT FOUND
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
