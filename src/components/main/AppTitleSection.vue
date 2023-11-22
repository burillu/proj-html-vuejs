<template>
    <div class="mb-3 d-flex flex-column align-items-center" :class="{ 'title-section': sectionProps.center }">
        <span class="fw-bold" :class="sectionProps.classHead">
            {{ sectionProps.headText }}
        </span>
        <div>
            <h2 class="fw-bold" :class="sectionProps.classText">{{ sectionProps.textH2 }}</h2>
            <div :class="sectionProps.classText">{{ sectionProps.subtitle }}</div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AppTitleSection',
    props: {
        sectionProps: Object,
    },
    created() {
        console.log(this.sectionProps);
    }
}
</script>

<style lang="scss" scoped>
h2,
div>div>div {
    width: 30vw;
}
</style>