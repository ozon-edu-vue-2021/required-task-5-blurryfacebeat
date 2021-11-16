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
import { Component, Vue } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';

import { FETCH_ITEMS_ACTION } from '@/store/mutationsVariables';

import MainLayout from '@/layouts/MainLayout';
import Loader from '@/components/Loader';
import { HomeModule } from '@/store/modules/home/home';

@Component({
  components: { Loader, MainLayout }
})
export default class App extends Vue {
  public store: HomeModule = useStore(this.$store);

  public get loading(): boolean {
    return this.store.loading;
  }

  created() {
    this.store[FETCH_ITEMS_ACTION]();
  }
}
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
