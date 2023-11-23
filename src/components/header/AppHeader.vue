<template>
    <div>
        <AppNavBar :classTextColor="store.navBarHeader.classText" :src="store.navBarHeader.srcLogo"
            :tabsArray="store.navBarHeader.tabs" :btn="store.navBarHeader.btn" />

    </div>
</template>

<script>
import AppNavBar from './AppNavBar.vue';
import { store } from '../../data/store';

export default {
    name: "AppHeader",
    components: { AppNavBar },
    data() {
        return {
            store,


        }
    }
}
</script>

<style lang="scss" scoped>
div {
    margin-bottom: -60px;
    position: relative;
    z-index: 100;
}
</style>