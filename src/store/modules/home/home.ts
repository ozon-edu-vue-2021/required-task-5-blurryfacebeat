import { Mutation, State, Action, Getter } from 'vuex-simple';
import Vue from 'vue';
import axios from 'axios';
import {
  ADD_TO_CART,
  TO_FAVORITE,
  DISABLE_LOADING,
  FETCH_ITEMS,
  REMOVE_IN_CART,
  ADD_ITEM_PRICE,
  CLEAR_CART,
  FETCH_ITEMS_ACTION
} from '@/store/mutationsVariables';
import { getRandomNumber } from '@/helpers/getRandomNumber';

export class HomeModule {
  @State()
  loading: boolean = true;

  @State()
  items: Array<any> = [];

  @Mutation()
  [FETCH_ITEMS](items: Array<any>) {
    this.items = items;
  }

  @Mutation()
  [DISABLE_LOADING](status: boolean) {
    this.loading = status;
  }

  @Mutation()
  [ADD_TO_CART](uid: string | number) {
    const item = this.items.find((item) => item.uid === uid);

    if (!item.quantity) {
      Vue.set(item, 'quantity', 1);
    } else {
      Vue.set(item, 'quantity', item.quantity + 1);
    }
  }

  @Mutation()
  [REMOVE_IN_CART](uid: string | number) {
    const item = this.items.find((item) => item.uid === uid);

    if (item.quantity <= 1) {
      Vue.delete(item, 'quantity');
    } else {
      Vue.set(item, 'quantity', item.quantity - 1);
    }
  }

  @Mutation()
  [TO_FAVORITE](uid: string | number) {
    const item = this.items.find((item) => item.uid === uid);

    if (!item.isFavourite) {
      Vue.set(item, 'isFavourite', true);
    } else {
      Vue.delete(item, 'isFavourite');
    }
  }

  @Mutation()
  [ADD_ITEM_PRICE]() {
    this.items.forEach((item) => {
      Vue.set(item, 'price', getRandomNumber(15, 999));
    });
  }

  @Mutation()
  [CLEAR_CART]() {
    this.items.forEach((item) => {
      if (item.quantity) {
        Vue.delete(item, 'quantity');
      }
    });
  }

  @Action()
  [FETCH_ITEMS_ACTION]() {
    axios
      .get('https://random-data-api.com/api/food/random_food?size=30')
      .then((response) => {
        this[FETCH_ITEMS](response.data);
        this[ADD_ITEM_PRICE]();
        this[DISABLE_LOADING](false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @Getter()
  get favoritesItems() {
    return this.items.filter((item) => item.isFavourite);
  }

  @Getter()
  get cartItems() {
    return this.items.filter((item) => item.quantity);
  }

  @Getter()
  get fullCoast() {
    let initialValue = 0;

    this.items.forEach((item) => {
      if (item.quantity) {
        initialValue += item.price * item.quantity;
      }
    });

    return initialValue;
  }
}
