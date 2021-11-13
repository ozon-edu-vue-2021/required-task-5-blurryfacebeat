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
    component: () => import(/* webpackChunkName: 'Card' */ '@/views/Card')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
});

export default router;
