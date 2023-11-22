<template>
    <section>
        <div class="container py-5">
            <AppTitleSection :sectionProps="store.titleSection.whyUs" />
            <div class="row row-cols-5 flex-nowrap">
                <div class="col" v-for="(item, index) in store.sponsorList">
                    <img :src="store.sponsorList[index + counterSlide]" :alt="`sponsor${index + 1}`">
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
            store,
            counterSlide: 0
        }
    },
    methods: {

        sliderSponsor() {
            if (this.counterSlide < 6) {
                this.counterSlide++
            } else if (this.counterSlide === 6) {
                this.counterSlide = 0;
            }
            console.log(this.counterSlide);
        }
    },
    created() {
        setInterval(this.sliderSponsor, 1500)
    }
}
</script>

<style lang="scss" scoped>
div.row {
    overflow: hidden;
}
</style>