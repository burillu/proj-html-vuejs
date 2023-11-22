<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppMain />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<script>
import AppFooter from './components/footer/AppFooter.vue';
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';

export default {
  name: "App",
  components: { AppMain, AppHeader, AppFooter }
}
</script>

<style lang="scss" scoped></style>


<!-- Milestone 1 completed -->