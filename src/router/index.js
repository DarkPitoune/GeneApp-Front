import { createRouter, createWebHistory } from "vue-router";
import { HomeView, ProfileView, EditProfileView } from "../views";

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
    path: "/profile/:id/edit",
    name: "profile-edit",
    component: EditProfileView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
