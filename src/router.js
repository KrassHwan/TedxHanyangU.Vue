import Vue from "vue";
import Router from "vue-router";

//  Intro View
import Home from "@views/Home.vue";
import About from "@views/About.vue";
import Organizers from "@views/Organizers.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Home
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/organizers",
      name: "organizers",
      component: Organizers
    }
  ]
});