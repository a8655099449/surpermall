import Vue from "vue";
import Router from "vue-router";
const Home = () => import("views/home/Home");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
const Category = () => import("views/category/Category");
const Detail = () => import("views/detail/Detail");

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      // component: Home,
      redirect:'/home'
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/category",
      component: Category
    },
    {
      path: "/detail:iid",
      component: Detail
    }
  ],
  mode:'history'
  
});

export default router;
