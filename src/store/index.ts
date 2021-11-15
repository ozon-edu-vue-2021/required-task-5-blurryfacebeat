import Vue from 'vue';
import Vuex from 'vuex';
import { createVuexStore } from 'vuex-simple';

// @ts-ignore
import { HomeModule } from './modules/home/home.ts';

Vue.use(Vuex);

const store = createVuexStore(new HomeModule());

export default store;
