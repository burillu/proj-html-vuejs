<template>
    <section class="my-bg-hero my-text-secondary">
        <div class="container text-center">
            <div class="title-section mb-3">
                <span class="my-text-contrast fw-bold">
                    Imagine, Create, Esperience
                </span>
                <h1 class="fw-bold">We Animate <br>
                    With Ninja-Like Precision</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, incidunt?</span>
            </div>


            <button class="my-btn my-btn-light">Start any</button>
            <button class="my-btn my-btn-primary"> any</button>
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

.img-shape {
    width: 100%;
    height: 160px;
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