<template>
    <AppNavBar :classTextColor="classTextColor" :src="srcLogo" />
</template>

<script>
import AppNavBar from '../header/AppNavBar.vue';

export default {
    name: "AppFooter",
    data() {
        return {
            classTextColor: 'my-text-primary',
            srcLogo: './images/footer-logo.png'
        }
    },
    components: { AppNavBar }
}
</script>

<style lang="scss" scoped></style>