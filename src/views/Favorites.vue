<template>
  <div class="favorites">
    <div v-if="!items.length" class="favorites-empty">
      <p>В избранном сейчас пусто.</p>
      <router-link to="/">Добавьте товары в избранное!</router-link>
    </div>
    <div class="items-container">
      <card-item v-for="item in items" :key="item.uid" :item="item" />
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem';

export default {
  name: 'Favorites',
  components: { CardItem },
  computed: {
    items() {
      return this.$store.getters.favoritesItems;
    }
  }
};
</script>

<style scoped>
.favorites-empty {
  display: flex;
  grid-gap: 5px;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
}
</style>
