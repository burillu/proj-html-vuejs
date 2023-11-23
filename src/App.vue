<template>
  <Transition>
    <div v-if="loader">
      <AppLoaderIntro />
    </div>
    <div v-else>
      <header>
        <AppHeader />
      </header>
      <main>
        <AppMain />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  </Transition>
</template>

<script>
import AppFooter from './components/footer/AppFooter.vue';
import AppHeader from './components/header/AppHeader.vue';
import AppLoaderIntro from './components/main/AppLoaderIntro.vue';
import AppMain from './components/main/AppMain.vue';

export default {
  name: "App",
  components: { AppMain, AppHeader, AppFooter, AppLoaderIntro },
  data() {
    return {
      loader: true
    }
  },
  methods: {
    stopLoader() {
      this.loader = false;
    }

  },
  mounted() {
    setTimeout(this.stopLoader, 2000);
  }
}
</script>

<style lang="scss" scoped></style>


<!-- Milestone 1 completed -->