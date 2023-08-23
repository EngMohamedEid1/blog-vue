import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";
import BlogViewVue from "@/views/BlogView.vue";
import AboutViewVue from "@/views/AboutView.vue";
import SinglePostVue from "@/views/SinglePost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogViewVue,
  },
  {
    path: "/about",
    name: "about",
    component: AboutViewVue,
  },
  {
    path: "/blog/:id",
    name: "singlepost",
    component: SinglePostVue,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
