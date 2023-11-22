<template>
    <section class="mb-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-6">
                    <img :src="'./images/process-thumb.png'" alt="process-thumb">
                </div>
                <div class="col-6">
                    <AppTitleSection :sectionProps="store.titleSection.ourProcess" />
                    <div class="row">
                        <div v-for="item in 2" class="col-6">
                            AppCard carusel
                            <AppCard />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { store } from '../../data/store';
import AppCard from './AppCard.vue';
import AppTitleSection from './AppTitleSection.vue';

export default {
    name: "AppOurProcess",
    components: { AppTitleSection, AppCard },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    height: 100vh;
}

div.container {
    position: relative;

    img {
        position: relative;
        width: 120%;
        left: -60%;
        bottom: 0;
    }
}
</style>