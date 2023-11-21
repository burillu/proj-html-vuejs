<template>
    <div class="my-bg-primary ">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="my-logo">
                <img src="../../assets/images/logo.png" alt="logo">
            </div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">


                    <div class=" " id="navbarNavDropdown">
                        <ul class="navbar-nav fw-bold ">
                            <li class="nav-item  ">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" role="button" aria-expanded="false">
                                    Our Process
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" role="button" aria-expanded="false">
                                    Pricing
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" role="button" aria-expanded="false">
                                    Blog
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" role="button" aria-expanded="false">
                                    Contact
                                </a>

                            </li>
                            <li class="nav-item">
                                <button class="my-btn my-btn-light">
                                    Get a Quote
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

li>a {
    color: $color-my-secondary;
}
</style>