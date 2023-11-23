<template>
    <section class="py-5">
        <div class="container">
            <AppTitleSection :sectionProps="store.titleSection.ourTeam" />
            <div class="row justify-content-between">
                <div v-for="items in store.cardContent.ourTeam" class="col-3">
                    <AppCardTeam :cardProps="items" />
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
    }
}
</script>

<style lang="scss" scoped></style>