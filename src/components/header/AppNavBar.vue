<template>
    <div class="container d-flex justify-content-between align-items-center">
        <div class="my-logo">
            <img :src="src" alt="logo">
        </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">


                <div class=" " id="navbarNavDropdown">
                    <ul class="navbar-nav fw-bold ">
                        <li class="nav-item  ">
                            <a class="nav-link" :class="classTextColor" aria-current="page" href="#">Home</a>
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
</template>

<script>
export default {
    name: 'AppNavBar',
    props: {
        src: String,
        classTextColor: String
    }

}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

// li>a {
//     color: $color-my-secondary;
// }
</style>