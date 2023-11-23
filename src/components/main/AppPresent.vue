<template>
    <section class="my-bg-secondary my-text-primary mb-5">
        <div class="container pt-5">
            <div class="row">
                <div class="col-3">
                    <div class="img-container">
                        <img src="../../assets/images/smarttwo.png" alt="smart">
                    </div>
                </div>
                <div class="col-9 d-flex flex-column align-items-start">
                    <AppTitleSection :sectionProps="store.titleSection.present" />
                    <div class="row w-100 justify-content-between">
                        <div v-for="item in store.cardContent.present" class="col-4">
                            <AppCard :cardProps="item" />
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
    name: "AppPresent",
    components: { AppTitleSection, AppCard },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
div.card {
    width: 13rem;
}

section {
    position: relative;
    height: 100vh;

}

.img-container {
    img {
        position: absolute;
        left: -25%;
        top: -30%;
        width: 70%;
    }



}
</style>