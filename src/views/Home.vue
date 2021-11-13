<template>
  <div class="home">
    <div class="items-container">
      <card-item v-for="item in items" :key="item.uid" :item="item" />
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem';

export default {
  name: 'Home',
  components: { CardItem },
  computed: {
    items() {
      return this.$store.state.home.items;
    }
  }
};
</script>

<style scoped>
.items-container {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
}
</style>
