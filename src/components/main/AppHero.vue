<template>
    <section class="my-bg-hero my-text-secondary">
        <div class="container text-center">
            <span class="my-text-contrast fw-bold">
                Imagine, Create, Esperience
            </span>
            <h1 class="fw-bold">We Animate <br>
                With Ninja-Like Precision</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, incidunt?</span><br>
            <button class="my-btn my-btn-light">Start any</button>
            <button class="my-btn my-btn-primary"> any</button>
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
    height: 100vh;
    position: relative;
}

.img-shape {
    width: 100%;
    height: 160px;
    position: absolute;
    bottom: 0;
    left: 0;

}
</style>