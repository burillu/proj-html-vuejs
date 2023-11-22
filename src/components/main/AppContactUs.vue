<template>
    <section class="my-bg-counter">
        <div class="container py-5">
            <AppTitleSection :sectionProps="store.titleSection.contactUs" />

            <div class="mb-3">

                <input type="text" class="form-control rounded-5" id="exampleFormControlInput1" placeholder="submit">
            </div>

        </div>
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
input {
    width: 80%;
    margin: 0 auto;
    //text-align: center;
}
</style>