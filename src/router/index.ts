import { createRouter, createWebHistory } from "vue-router";
import { HomeView, ProfileView, DetailsView, NotFoundView } from "../views";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/article/:id",
    name: "article",
    component: DetailsView,
  },
  {
    path: "/404",
    name: "not-found",
    component: NotFoundView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
