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
                        <div v-for="item in store.cardContent.ourProcess" class="col-6">

                            <AppCard :cardProps="item" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <AppRocket />
    </section>
</template>

<script>
import { store } from '../../data/store';
import AppCard from './AppCard.vue';
import AppRocket from './AppRocket.vue';
import AppTitleSection from './AppTitleSection.vue';

export default {
    name: "AppOurProcess",
    components: { AppTitleSection, AppCard, AppRocket },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
// section {
//     height: 100vh;
// }

div.col-6 {
    position: relative;

    img {
        position: absolute;
        //width: 120%;
        left: -70%;
        top: 0;
        transition: all 1s;
        z-index: 100;

    }

    img:hover {
        transform: translate(50px, 0);
    }
}
</style>