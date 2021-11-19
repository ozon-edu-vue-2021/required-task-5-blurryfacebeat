<template>
  <div class="home">
    <p v-if="!items.length">Список товаров пуст.</p>
    <div v-else class="items-container">
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
export default class Home extends Vue {
  public store: HomeModule = useStore(this.$store);

  public get items(): Array<any> {
    return this.store.items;
  }
}
</script>

<style scoped>
.items-container {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
}
</style>
