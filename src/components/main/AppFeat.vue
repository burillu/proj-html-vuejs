<template>
    <div class="container">
        <AppTitleSection :sectionProps="store.titleSection.feat" />
        <div class="row gy-3">
            <div v-for="item in 4" class="col-6">
                <img :src="`./images/work${item}.png`" :alt="'work' + item">
            </div>
        </div>
    </div>
</template>

<script>
import AppTitleSection from './AppTitleSection.vue';
import { store } from '../../data/store';

export default {
    name: "AppFeat",
    components: { AppTitleSection },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
div.col-6>img {
    width: 100%;
}
</style>