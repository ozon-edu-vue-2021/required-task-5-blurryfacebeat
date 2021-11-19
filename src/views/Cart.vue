<template>
  <div class="cart">
    <div class="cart-container">
      <div v-if="!cartItems.length" class="cart-empty">
        <p>Корзина пуста.</p>
        <router-link to="/">Добавьте товары в корзину!</router-link>
      </div>
      <div v-else class="cart-items">
        <card-item v-for="item in cartItems" :key="item.uid" :item="item" />
      </div>
    </div>
    <div class="cart-info">
      <h2>Итого: {{ fullCoast }}</h2>
      <button v-if="cartItems.length" @click="clearCart">
        Очистить корзину
      </button>
      <button v-if="cartItems.length" @click="getOrder">Оформить заказ</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { CLEAR_CART } from '@/store/mutationsVariables';

import CardItem from '@/components/CardItem';
import { HomeModule } from '@/store/modules/home/home';
import { useStore } from 'vuex-simple';

@Component({
  components: {
    CardItem
  }
})
export default class Card extends Vue {
  public store: HomeModule = useStore(this.$store);

  public clearCart(): void {
    this.store[CLEAR_CART]();
  }

  public getOrder(): void {
    let items = 'Ваш заказ:';
    this.cartItems.forEach((item) => {
      items += `\n${item.dish} (${item.quantity})`;
    });
    window.alert(items);
  }

  public get cartItems(): Array<any> {
    return this.store.cartItems;
  }

  public get fullCoast(): number {
    return this.store.fullCoast;
  }
}
</script>

<style scoped>
.cart {
  display: flex;
}

.cart-container {
  margin-right: 100px;
  max-width: 610px;
}

.cart-empty {
  display: flex;
  grid-gap: 5px;
}

.cart-items {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
}

.cart-info {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 500px;
  height: 700px;
  padding: 30px;

  border: 1px solid ghostwhite;
  box-shadow: 1px 5px 10px 5px rgba(0, 0, 0, 0.05);
}
</style>
