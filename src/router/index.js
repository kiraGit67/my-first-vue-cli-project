import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/books",
    name: "books",
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/BooksView.vue"),
  },
  {
    path: "/books/:id",
    name: "booksDetail",
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/BooksDetailView.vue"),
  },
  {
    path: "/cars",
    name: "cars",
    component: () =>
      import(/* webpackChunkName: "cars" */ "../views/CarsView.vue"),
  },
  {
    path: "/cars/:id",
    name: "carsDetail",
    component: () =>
      import(/* webpackChunkName: "cars" */ "../views/CarsDetailView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
