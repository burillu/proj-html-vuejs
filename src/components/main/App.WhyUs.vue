<template>
    <section>
        <div class="container">
            <AppTitleSection />
            <div class="row row-cols-5 justify-content-between">
                <div v-for="item in 5" class="col-2 ">

                    <img :src="'./images/sponsor1.png'" alt="sponsor1">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppTitleSection from './AppTitleSection.vue';

export default {
    name: "AppWhyUs",
    components: { AppTitleSection }
}
</script>

<style lang="scss" scoped></style>