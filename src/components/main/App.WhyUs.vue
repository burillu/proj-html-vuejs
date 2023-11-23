<template>
    <section>
        <div class="container py-5">
            <AppTitleSection :sectionProps="store.titleSection.whyUs" />
            <div class="row row-cols-5 flex-nowrap">
                <div class="col" v-for="(item, index) in store.sponsorList" ref="sponsor">
                    <!-- senza counterSlide -->
                    <img :src="store.sponsorList[index]" :alt="`sponsor${index + 1}`">
                    <!-- con counterSlide -->
                    <!-- <img :src="store.sponsorList[index + counterSlide]" :alt="`sponsor${index + 1}`"> -->

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
            counterSlide: 2
        }
    },
    methods: {

        sliderSponsor() {
            if (this.counterSlide < 6) {
                this.counterSlide++
            } else if (this.counterSlide === 6) {
                this.counterSlide = 1;
            }
            // this.$refs.sponsor[this.counterSlide].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

        },

    },
    mounted() {

    },
    created() {


    }
}
</script>

<style lang="scss" scoped>
div.container {
    overflow: hidden;
}

div.row {
    //overflow: hidden;
    animation-name: sliding-sponsor;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
</style>

Milestone 2 completed