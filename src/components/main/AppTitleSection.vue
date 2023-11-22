<template>
    <div class="mb-3" :class="{ 'title-section': sectionProps.center }">
        <span class="fw-bold" :class="sectionProps.classHead">
            {{ sectionProps.headText }}
        </span>
        <h2 class="fw-bold" :class="sectionProps.classText">{{ sectionProps.textH2 }}</h2>
        <span :class="sectionProps.classText">{{ sectionProps.subtitle }}</span>
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

<style lang="scss" scoped></style>