import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/configs/firebase";

//Auth guards
const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) next({ name: "Login", params: {} });
  else next();
}

const routes = [
  {
    path: "/home",
    name: "Home",
    meta: {
      text: "Hey User",
      leading: true,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New Transaction",
      leading: false,
      isShowFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "transaction" */ "../views/new-transaction.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
