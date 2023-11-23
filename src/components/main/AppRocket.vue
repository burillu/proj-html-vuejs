<template>
    <div class="container-rocket">
        <img :src="'./images/smart4.png'" alt="rocket">
    </div>
</template>

<script>
export default {
    name: 'AppRocket'
}
</script>

<style lang="scss" scoped>
.container-rocket {
    height: 300px;
    position: relative;

    img {
        position: absolute;
        bottom: 0;
        right: 0;

    }


}
</style>