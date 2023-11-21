<template>
    <section class="my-bg-counter my-text-secondary text-center fw-bold">
        <div class="container">
            <h2 class="fw-bold">
                Anidio QUick Facts
            </h2>
            <div class="row justify-content-between ">
                <div class="col-2 rounded-3 border d-flex flex-column justify-content-center align-items-center py-2"
                    v-for="item in 4">
                    <div><span class="num-counter">100+</span></div>
                    <div><span class="my-text-contrast">bla bla bla</span> </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'AppStats'
}
</script>

<style lang="scss" scoped>
section {
    height: 40vh;
}

.num-counter {
    font-size: 2.8em;
}
</style>