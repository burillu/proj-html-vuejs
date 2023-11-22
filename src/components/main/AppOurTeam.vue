<template>
    <section class="py-5">
        <div class="container">
            <AppTitleSection />
            <div class="row justify-content-between">
                <div v-for="items in 3" class="col-3">
                    <AppCard />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppCard from './AppCard.vue';
import AppTitleSection from './AppTitleSection.vue';

export default {
    name: "AppOurTeam",
    components: { AppTitleSection, AppCard }
}
</script>

<style lang="scss" scoped></style>