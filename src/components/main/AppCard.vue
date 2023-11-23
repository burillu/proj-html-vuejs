<template>
    <div class="card text-center py-2 rounded-4">
        <img :src="cardProps.image" class="card-img-top" :alt="cardProps.title">
        <div class="card-body">
            <h5 class="card-title">{{ cardProps.title }}</h5>
            <p class="card-text">{{ cardProps.text }}</p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCard',
    props: {
        cardProps: Object
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 50%;
    margin: 0 auto;
}
</style>