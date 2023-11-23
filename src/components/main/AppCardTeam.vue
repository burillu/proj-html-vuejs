<template>
    <div class="card text-center py-2 border-0 rounded-4 h-100">
        <img :src="cardProps.image" class="card-img-top" :class="cardProps.classBg" :alt="cardProps.title">
        <div class="card-body">
            <h5 class="card-title">{{ cardProps.title }}</h5>
            <p class="card-text">{{ cardProps.text }}</p>
            <ul class="nav justify-content-center gap-2">
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCardTem',
    props: {
        cardProps: Object
    }
}
</script>

<style lang="scss" scoped>
img {
    height: 200px;
    width: 200px;
    margin: 0 auto;
}

li {
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>