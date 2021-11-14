import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import(/* webpackChunkName: 'Card' */ '@/views/Cart')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () =>
      import(/* webpackChunkName: 'Favorites' */ '@/views/Favorites')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
});

export default router;
