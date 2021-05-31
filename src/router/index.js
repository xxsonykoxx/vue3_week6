import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/pages/Login.vue';
import Index from '../views/pages/Index.vue';
import Products from '../views/pages/Products.vue';
import AdminProducts from '../views/pages/admin pages/Admin_products.vue';

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/Login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/',
        name: 'Index',
        component: Index,
      },
      {
        path: '/Products',
        name: 'Products',
        component: Products,
      },
      {
        path: '/AdminProducts',
        name: 'AdminProducts',
        component: AdminProducts,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  // {
  //   path: '*',
  //   redirect: '/',
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
