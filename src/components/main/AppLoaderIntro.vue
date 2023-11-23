<template>
    <div class="my-bg-loader">
        <div class="d-flex justify-content-center align-items-center">
            <img :src="'./images/rocket-banner.png'" alt="rocket-banner">
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppLoaderIntro',
}
</script>

<style lang="scss" scoped>
div {
    height: 100vh;
}

img {
    animation-name: fly-loader;
    animation-duration: 3s;
}
</style>