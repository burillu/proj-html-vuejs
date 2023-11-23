<template>
    <section class="my-bg-counter">
        <img :src="'./images/shape-top.png'" alt="shape-top" class="shape">
        <div class="container py-5">
            <AppTitleSection :sectionProps="store.titleSection.contactUs" />

            <div class="mb-3 input-container">

                <div class="input-group mb-3">

                    <input type="email" class="form-control rounded-start-5" placeholder="Insert your email"
                        aria-label="Username" aria-describedby="basic-addon1">
                    <span class="input-group-text rounded-end-5" id="basic-addon1">Submit</span>
                </div>
            </div>

        </div>
        <img :src="'./images/shape-bottom.png'" alt="shape-bottom" class="shape-bottom">
    </section>
</template>

<script>
import { store } from '../../data/store';
import AppTitleSection from './AppTitleSection.vue';

export default {
    name: "AppContactUs",
    data() {
        return {
            store,
            classTitle: "my-text-terciary"
        };
    },
    components: { AppTitleSection }
}
</script>

<style lang="scss" scoped>
section {
    position: relative;
}

.input-container {
    width: 80%;
    margin: 0 auto;

    span {
        cursor: pointer;
    }



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
</style>