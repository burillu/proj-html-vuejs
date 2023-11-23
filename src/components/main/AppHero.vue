<template>
    <section class="my-bg-hero my-text-secondary">
        <div class="container text-center pt-3">
            <div class="globe1">
                <img :src="'./images/globe1.png'" alt="globe1">
            </div>
            <div class="globe2">
                <img :src="'./images/globe2.png'" alt="globe2">
            </div>
            <div class="globe3">
                <img :src="'./images/globe3.png'" alt="globe3">
            </div>
            <div class="light">
                <img :src="'./images/light.png'" alt="light">
            </div>
            <div class="title-section pt-5">
                <span class="my-text-contrast fw-bold">
                    Imagine, Create, Esperience
                </span>
                <h1 class="fw-bold">We Animate <br>
                    With Ninja-Like Precision</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, incidunt?</span>
                <div class="py-5">
                    <button class="my-btn my-btn-light">Start any</button>
                    <button class="my-btn my-btn-primary"> any</button>
                </div>

            </div>



            <img class="my-img-middle" src="../../assets/images/middle.png" alt=" img-middle">
        </div>
        <div>

            <img class="img-shape" src="../../assets/images/bottom-shape.png" alt="shape-bottom">
        </div>
    </section>
</template>

<script>

export default {
    name: 'AppHero'
}
</script>

<style lang="scss" scoped>
section {
    //height: 100vh;
    position: relative;
}

img {
    width: 100%;
}

.globe1 {
    width: 150px;
    position: absolute;
    top: 100px;
    left: 100px;
}

.globe2 {
    width: 100px;
    position: absolute;
    top: 160px;
    right: 400px;
}

.globe3 {
    width: 280px;
    position: absolute;
    top: -30%;
    right: 50%;
}

.light {
    width: 120px;
    position: absolute;
    top: 150px;
    right: 150px;
}

.img-shape {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;


}

.my-img-middle {
    width: 100%;
    // padding-bottom: 160px;
    position: relative;
    z-index: 10;
}
</style>