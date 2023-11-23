<template>
    <section class="my-bg-counter my-text-secondary text-center">
        <img :src="'./images/shape-top.png'" alt="shape-top" class="shape">
        <div class="container py-3">

            <h2 class="fw-bold mb-4">
                Anidio Quick Facts
            </h2>
            <div class="row justify-content-between">
                <div class="col-2 " v-for="item in store.cardContent.stats">
                    <AppCardStats :cardProps="item" />

                </div>
            </div>
        </div>
        <div class="globe">
            <img :src="'./images/globe.png'" alt="globe">
        </div>
        <img :src="'./images/shape-bottom.png'" alt="shape-bottom" class="shape-bottom">
    </section>
</template>

<script>
import AppCardStats from './AppCardStats.vue';
import { store } from '../../data/store';

export default {
    name: "AppStats",

    components: { AppCardStats },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    height: 70vh;
    position: relative;
    overflow: hidden;
}

div.container {
    position: relative;
    z-index: 100;
}

.shape-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
}

.shape {
    position: relative;
    z-index: 100;
}

.globe {
    width: 400px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);


    img {
        width: 100%;
    }
}
</style>