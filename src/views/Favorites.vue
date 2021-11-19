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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardItem from '@/components/CardItem';
import { HomeModule } from '@/store/modules/home/home';
import { useStore } from 'vuex-simple';

@Component({
  components: {
    CardItem
  }
})
export default class Favorites extends Vue {
  public store: HomeModule = useStore(this.$store);

  public get items(): Array<any> {
    return this.store.favoritesItems;
  }
}
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
