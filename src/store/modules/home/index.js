import Vue from 'vue';
import axios from 'axios';
import {
  ADD_TO_CART,
  TO_FAVORITE,
  DISABLE_LOADING,
  FETCH_ITEMS,
  REMOVE_IN_CART,
  ADD_ITEM_PRICE,
  CLEAR_CART
} from '@/store/mutationsVariables';

export default {
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
    },

    [ADD_TO_CART](state, uid) {
      const item = state.items.find((item) => item.uid === uid);

      if (!item.quantity) {
        Vue.set(item, 'quantity', 1);
      } else {
        Vue.set(item, 'quantity', item.quantity + 1);
      }
    },

    [REMOVE_IN_CART](state, uid) {
      const item = state.items.find((item) => item.uid === uid);

      if (item.quantity <= 1) {
        Vue.delete(item, 'quantity');
      } else {
        Vue.set(item, 'quantity', item.quantity - 1);
      }
    },

    [TO_FAVORITE](state, uid) {
      const item = state.items.find((item) => item.uid === uid);

      if (!item.isFavourite) {
        Vue.set(item, 'isFavourite', true);
      } else {
        Vue.delete(item, 'isFavourite');
      }
    },

    [ADD_ITEM_PRICE](state, { uid, price }) {
      const item = state.items.find((item) => item.uid === uid);
      Vue.set(item, 'price', price);
    },

    [CLEAR_CART](state) {
      state.items.forEach((item) => {
        if (item.quantity) {
          Vue.delete(item, 'quantity');
        }
      });
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
  getters: {
    favoritesItems: (state) => {
      return state.items.filter((item) => item.isFavourite);
    },

    cartItems: (state) => {
      return state.items.filter((item) => item.quantity);
    },

    fullCoast: (state) => {
      let initialValue = 0;

      state.items.forEach((item) => {
        if (item.quantity) {
          initialValue += item.price * item.quantity;
        }
      });

      return initialValue;
    }
  }
};
