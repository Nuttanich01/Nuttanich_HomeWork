// index.js
import Vue from "vue";
import Router from "vue-router";
import Profile from "../components/Profile";
import contact from "../components/contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Profile
    },
    {
      path: "/contact",
      component: contact
    }
  ]
});
