<template>
    <section class="my-bg-secondary my-text-primary mb-5">
        <div class="container pt-5">
            <div class="row">
                <div class="col-3">
                    <div class="img-container">
                        <img src="../../assets/images/smarttwo.png" alt="smart">
                    </div>
                </div>
                <div class="col d-flex flex-column align-items-start">
                    <div class="title-section mb-3">
                        <span class="my-text-terciary fw-bold">
                            Imagine, Create, Esperience
                        </span>
                        <h2 class="fw-bold">We Animate <br>
                            With Ninja-Like Precision</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, incidunt?</span>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="card">
                                <img src="../../assets/images/middle.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card">
                                <img src="../../assets/images/middle.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card">
                                <img src="../../assets/images/middle.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'AppPresent'
}
</script>

<style lang="scss" scoped>
div.card {
    width: 15rem;
}

section {
    position: relative;
    height: 100vh;

}

.img-container {
    img {
        position: absolute;
        left: -25%;
        top: -30%;
        width: 70%;
    }



}
</style>