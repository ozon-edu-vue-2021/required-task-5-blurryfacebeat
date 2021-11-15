<template>
  <div id="app">
    <MainLayout>
      <loader v-if="loading" />
      <keep-alive>
        <router-view v-if="!loading" />
      </keep-alive>
    </MainLayout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FETCH_ITEMS_ACTION } from '@/store/mutationsVariables';
import MainLayout from '@/layouts/MainLayout';
import Loader from '@/components/Loader';

export default Vue.extend({
  name: 'App',
  components: { Loader, MainLayout },
  created() {
    this.$store.dispatch(FETCH_ITEMS_ACTION);
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  }
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  color: #005bff;
  text-decoration: none;
  transition: all 0.2s ease;
}
a.active {
  color: #001a34;
  text-decoration: underline;
}
a:hover,
a:active {
  color: #001a34;
}
html,
body,
#app {
  height: 100%;
  color: #001a34;
  font-weight: 500;
  font-family: 'Raleway', sans-serif;
}
</style>
