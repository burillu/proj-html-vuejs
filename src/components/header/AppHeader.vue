<template>
    <div class="my-bg-primary ">
        <AppNavBar :classTextColor="classTextColor" :src="srcLogo" />

    </div>
</template>

<script>
import AppNavBar from './AppNavBar.vue';

export default {
    name: "AppHeader",
    components: { AppNavBar },
    data() {
        return {
            classTextColor: 'my-text-secondary',
            srcLogo: './images/logo.png'
        }
    }
}
</script>

<style lang="scss" scoped></style>