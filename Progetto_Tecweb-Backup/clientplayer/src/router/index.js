import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Listagiochidev from "../views/Listagiochidev.vue";
import Gioco1 from "../views/Gioco1.vue";
import Gioco2 from "../views/Gioco2.vue";
import Gioco3 from "../views/Gioco3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/listagiochidev/gioco1",
    name:"Gioco1",
    component: Gioco1
  },
  {
    path: "/listagiochidev/gioco2",
    name:"Gioco2",
    component: Gioco2
  },
  {
    path: "/listagiochidev/gioco3",
    name:"Gioco3",
    component: Gioco3
  },
  {
    path: "/listagiochidev",
    name:"Listagiochidev",
    component: Listagiochidev
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
