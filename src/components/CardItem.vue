<template>
  <div class="card-item">
    <div></div>
    <div class="item-text">
      <span class="item-price">{{ price }}₽</span>
    </div>
    <button>В корзину</button>
    <div v-if="false"></div>
  </div>
</template>

<script>
import { getRandomNumber } from '@/helpers/getRandomNumber';

export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      price: getRandomNumber(15, 999)
    };
  },
  created() {
    console.log(this.item);
  }
};
</script>

<style scoped>
.card-item {
  width: 190px;
  height: 190px;
}
</style>
