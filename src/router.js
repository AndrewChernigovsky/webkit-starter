// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Catalog from './pages/Catalog.vue';
import Cart from './pages/Cart.vue';
import Sellers from './pages/Sellers.vue';

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/sellers',
    name: 'Sellers',
    component: Sellers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
