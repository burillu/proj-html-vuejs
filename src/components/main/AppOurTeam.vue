<template>
    <section class="py-5">
        <div class="container">
            <AppTitleSection :sectionProps="store.titleSection.ourTeam" />
            <div class="row row-cols-3 flex-nowrap justify-content-between" ref="rowTeam">
                <div v-for="items in store.cardContent.ourTeam" class="col">
                    <AppCardTeam :cardProps="items" />
                </div>
            </div>
            <div class="d-flex justify-content-center gap-2 py-2">
                <div class="d-flex justify-content-center align-items-center my-btn-slider">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-circle active"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-circle"></i>
                </div>
                <div class="d-flex justify-content-center align-items-center my-btn-slider">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../data/store';
import AppCardTeam from './AppCardTeam.vue';
import AppTitleSection from './AppTitleSection.vue';

export default {
    name: "AppOurTeam",
    components: { AppTitleSection, AppCardTeam },
    data() {
        return {
            store
        }
    },
    methods: {
        slidingTeam() {
            this.$refs.rowTeam.scrollBy({
                top: 0,
                left: -100,
                behavior: "smooth",
            })
        }
    },
    mounted() {
        //setInterval(this.slidingTeam, 2000)
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

div.container {
    overflow: hidden;
}

div.row {
    animation-name: sliding-team;
    animation-duration: 18s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.active {
    color: $color-my-contrast;
}

i {
    color: $color-my-gray;
}
</style>