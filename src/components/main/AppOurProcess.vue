<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <img :src="'./images/process-thumb.png'" alt="process-thumb">
            </div>
            <div class="col-6">
                <AppTitleSection />
                <div class="row">
                    <div v-for="item in 2" class="col-6">
                        AppCard carusel
                        <AppCard />
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import AppCard from './AppCard.vue';
import AppTitleSection from './AppTitleSection.vue';

export default {
    name: "AppOurProcess",
    components: { AppTitleSection, AppCard }
}
</script>

<style lang="scss" scoped>
div.container {
    position: relative;

    img {
        position: absolute;
        left: -35%;
    }
}
</style>