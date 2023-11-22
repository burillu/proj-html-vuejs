<template>
    <AppNavBar :classTextColor="store.navBarFooter.classText" :src="store.navBarFooter.srcLogo"
        :tabsArray="store.navBarFooter.tabs" />
</template>

<script>
import AppNavBar from '../header/AppNavBar.vue';
import { store } from '../../data/store';

export default {
    name: "AppFooter",
    data() {
        return {
            store,

        }
    },
    components: { AppNavBar }
}
</script>

<style lang="scss" scoped></style>