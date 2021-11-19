<template>
  <div class="card-item">
    <HeartIcon @click="toFavorite(item.uid)" :class="cardFavoriteClasses" />
    <div class="item-image">
      <img src="../assets/images/6126040354.webp" alt="" />
    </div>
    <div class="item-text">
      <span class="item-price">{{ item.price }}₽</span>
      <span class="item-name">{{ item.dish }}</span>
    </div>
    <div class="item-actions">
      <button @click="addToCart(item.uid)" v-if="!item.quantity">
        В корзину
      </button>
      <div class="item-counter" v-else>
        <button @click="removeInCart(item.uid)" class="counter-minus">-</button>
        <span class="counter-text">{{ item.quantity }}</span>
        <button @click="addToCart(item.uid)" class="counter-minus">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  ADD_TO_CART,
  REMOVE_IN_CART,
  TO_FAVORITE
} from '@/store/mutationsVariables';

import HeartIcon from '@/assets/icons/heart.svg';
import { HomeModule } from '@/store/modules/home/home';
import { useStore } from 'vuex-simple';

@Component({
  components: {
    HeartIcon
  }
})
export default class CardItem extends Vue {
  public store: HomeModule = useStore(this.$store);

  @Prop({ type: Object, required: true }) item: any;

  public get cardFavoriteClasses(): Array<string> {
    return ['card-favorite', this.item.isFavourite ? 'active' : ''];
  }

  public addToCart(uid: string | number): void {
    this.store[ADD_TO_CART](uid);
  }

  public removeInCart(uid: string | number): void {
    this.store[REMOVE_IN_CART](uid);
  }

  public toFavorite(uid: string | number): void {
    this.store[TO_FAVORITE](uid);
  }
}
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  width: 190px;
  height: 250px;
  position: relative;

  border: 1px solid ghostwhite;
  box-shadow: 1px 5px 10px 5px rgba(0, 0, 0, 0.05);
}

.card-favorite {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 25px;
  height: 25px;

  cursor: pointer;
  transition: all 0.2s ease;
}

.card-favorite:hover {
  fill: #ff3838;
}

.card-favorite.active {
  fill: #ff3838;
}

.card-favorite:active {
  transform: scale(0.95);
}

.item-image {
  width: 100%;
  margin-bottom: 10px;
  height: 120px;

  object-fit: cover;
}

.item-image img {
  width: 100%;
  margin-bottom: 10px;
  height: 120px;

  object-fit: cover;
}

.item-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 0 20px;
}

.item-actions {
  margin-top: auto;
  padding: 0 20px 20px 20px;
}

.item-counter {
  display: flex;
  grid-gap: 10px;
}
</style>
