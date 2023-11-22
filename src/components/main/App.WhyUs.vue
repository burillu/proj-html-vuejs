<template>
    <section>
        <div class="container py-5">
            <AppTitleSection :sectionProps="store.titleSection.whyUs" />
            <div class="row row-cols-5 justify-content-between">
                <div v-for="item in 5" class="col-2 ">

                    <img :src="'./images/sponsor1.png'" alt="sponsor1">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../data/store';
import AppTitleSection from './AppTitleSection.vue';

export default {
    name: "AppWhyUs",
    components: { AppTitleSection },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>