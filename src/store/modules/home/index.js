import axios from 'axios';
import { DISABLE_LOADING, FETCH_ITEMS } from '@/store/mutationsVariables';

export default {
  namespaced: true,
  state: {
    loading: true,
    items: []
  },
  mutations: {
    [FETCH_ITEMS](state, items) {
      state.items = items;
    },

    [DISABLE_LOADING](state, status) {
      state.loading = status;
    }
  },
  actions: {
    [FETCH_ITEMS]({ commit }) {
      axios
        .get('https://random-data-api.com/api/food/random_food?size=30')
        .then((response) => {
          commit(FETCH_ITEMS, response.data);
          commit(DISABLE_LOADING, false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  getters: {}
};
