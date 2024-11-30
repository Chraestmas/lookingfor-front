<template>
    <div class="waves-section-hero-6">
        <div class="hero-wrapper-two">
            <h1 class="heading-4">Lost &amp;&nbsp;Found</h1>
            <p class="margin-bottom-24px">Find your lost items lost within a building with the help of others. <br>If
                you find
                a lost item, then upload it for others to claim.</p>
                <RouterLink to="/item-search"
                class="button-primary w-button">Search Lost items</RouterLink>
                <RouterLink to="/upload-item"
                class="button-primary w-button">Upload lost item</RouterLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.waves-section-hero-6 {
    color: white;
    background-image: url(https://cdn.prod.website-files.com/66f8d5504594ca1c1fb8ded5/671dd0f28c5f3365de1d8415_yiss-campus-fall-2016.jpg);
    background-position: 50%;
    background-size: 1920px;
    padding-top: 158px;
    padding-bottom: 88px;
    position: relative;
}

.hero-wrapper-two {
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.heading-4 {
    padding-bottom: 20px;
    font-size: 60px;
}

h1 {
    margin-top: 20px;
    font-size: 38px;
    line-height: 44px;
}

.margin-bottom-24px {
    margin-bottom: 24px;
}

p {
    margin-top: 0;
    margin-bottom: 10px;
}

.button-primary {
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: #012f6c;
    width: 100%;
    margin-top: 5px;
    padding: 12px 25px;
    font-size: 12px;
    line-height: 20px;
    transition: all .2s;
    display: inline-block;
}


@media screen and (min-width: 1280px) {
    .button-primary {
        width: 100%;
    }
}

@media screen and (max-width: 991px) {
    .waves-section-hero-6 {
        padding-top: 240px;
    }
}


@media screen and (max-width: 767px) {
    .waves-section-hero-6 {
        padding-top: 160px;
    }
}
</style>