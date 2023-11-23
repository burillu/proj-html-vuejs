<template>
    <div class="border rounded-3 d-flex flex-column justify-content-center align-items-center py-2">
        <div><span class="num-counter fw-bold">{{ cardProps.data }}</span></div>
        <div><span class="my-text-contrast">{{ cardProps.text }}</span> </div>
    </div>
</template>

<script>
export default {
    name: 'AppCardStats',
    props: {
        cardProps: Object
    }
}
</script>

<style lang="scss" scoped>
.num-counter {
    font-size: 2.8em;
}
</style>