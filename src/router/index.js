import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/StudentView.vue";
import TeachersView from "../views/TeachersView.vue";
import SingleUser from "../views/SingleUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/teachere",
    name: "teachers",
    component: TeachersView,
  },
  {
    path: "/student",
    name: "Student",
    component: StudentView,
  },
  { path: "/single/:category/:id", name: "single", component: SingleUser },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
