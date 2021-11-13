<template>
  <div class="main-layout">
    <header>
      <router-link to="/" exact>Главная</router-link>
      <router-link to="/card">Корзина</router-link>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
};
</script>

<style scoped>
.main-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
}

header {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
}

main {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: calc(100vh - 79px);
}
</style>
