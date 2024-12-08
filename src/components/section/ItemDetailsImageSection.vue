<template>
    <section class="hero-stack-2">
        <div class="container-4">
            <div class="hero-wrapper-two-2">
                <h1 class="heading-6">Item Name</h1>
            </div>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../../assets/dark-background-abstract-background-network-3d-background-3840x2160-8324-p-500.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../assets/Screenshot-2024-10-27-at-3.05.48-PM.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../assets/Screenshot-2024-10-27-at-3.05.48-PM.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <div class="user-items-list-banner-slideshow__arrow-icon-background
                            user-items-list-banner-slideshow__arrow-icon-background-area">
                </div>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    <section class="features-metrics">
        <div class="container-4">
            <div class="pricing-grid">
                <div id="w-node-c0e1a6ea-5db7-5b33-b0f3-d2d0229e5be0-9fe92ff8" class="pricing-card-three">
                    <h3>Mobile Device</h3>
                    <p class="pricing-card-text">Category<br></p>
                </div>
                <div id="w-node-c0e1a6ea-5db7-5b33-b0f3-d2d0229e5bef-9fe92ff8" class="pricing-card-three">
                    <h3>Secondary Library</h3>
                    <p class="pricing-card-text">Current Location<br></p>
                </div>
                <div id="w-node-c0e1a6ea-5db7-5b33-b0f3-d2d0229e5bfe-9fe92ff8" class="pricing-card-three">
                    <h3>N/A</h3>
                    <p class="pricing-card-text">Name Tag</p>
                </div>
                <div id="w-node-_2b8cbf2e-f4c0-3618-4877-b0b84973eb2a-9fe92ff8" class="pricing-card-three">
                    <h3>2/2/2024</h3>
                    <p class="pricing-card-text">Date Found</p>
                </div>
                <div id="w-node-_9b6af973-a9fb-a055-5a09-fea85fe176c3-9fe92ff8" class="pricing-card-three">
                    <h3>Found By:&nbsp;Jake</h3>
                    <p class="pricing-card-text">Status &amp;&nbsp;Pickup person name</p>
                </div>
                <div id="w-node-e9382a67-ffad-90d1-e2e2-fc794f296439-9fe92ff8" class="pricing-card-three">
                    <h3>2/3/2024</h3>
                    <p class="pricing-card-text">Date Retrieved</p>
                </div>
            </div>
        </div>
    </section>

    <section class="hero-without-image-2">
        <div class="container-9">
            <div class="hero-wrapper-two-4">
                <h1>Description</h1>
                <p class="margin-bottom-24px-5">Slightly cracked screen, jelly case w/ ornaments inside, out of battery when found</p>
            </div>
        </div>
    </section>

    <section class="section-2">
        <div class="w-layout-blockcontainer w-container">
            <a href="/item-search" class="button-primary w-button">edit</a>
        </div>
    </section>
</template>

<script setup>



</script>

<style scoped>

.carousel{
    width: 900px;
    height: 400px;
    margin: 50px auto 25px auto;
    overflow: hidden;
}

.bd-example > :last-child {
    margin-bottom: 0;
}

.carousel {
    position: relative;
}

.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1rem;
    margin-left: 15%;
    list-style: none;
}

.carousel-indicators [data-bs-target] {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    padding: 0;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
}

button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button {
    border-radius: 0;
}

[type="button"], [type="reset"], [type="submit"], button {
    -webkit-appearance: button;
}

.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.carousel-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: transform .6s ease-in-out;
}

.carousel-item-next, .carousel-item-prev, .carousel-item.active {
    display: block;
}

[type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

.carousel-control-prev {
    left: 0;
}

.carousel-control-next {
    right: 0;
}

.carousel-control-next, .carousel-control-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    padding: 0;
    color: #fff;
    text-align: center;
    background: 0 0;
    border: 0;
    opacity: .5;
    transition: opacity .15s ease;
}

[type="button"], [type="reset"], [type="submit"], button {
    -webkit-appearance: button;
}

button, select {
    text-transform: none;
}

button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button {
    border-radius: 0;
}

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon, .carousel-control-prev-icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
}

.visually-hidden, .visually-hidden-focusable:not(:focus):not(:focus-within) {
    position: absolute!important;
    width: 1px!important;
    height: 1px!important;
    padding: 0!important;
    margin: -1px!important;
    overflow: hidden!important;
    clip: rect(0,0,0,0)!important;
    white-space: nowrap!important;
    border: 0!important;
}

@media (min-width: 1200px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.bd-placeholder-img-lg {
    font-size: calc(1.475rem + 2.7vw);
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.w-100 {
    width: 100%!important;
}

.d-block {
    display: block!important;
}

img, svg {
    vertical-align: middle;
}

.user-items-list-banner-slideshow .user-items-list-banner-slideshow__arrow-icon-background {
    background-color: var(--list-section-banner-slideshow-arrow-background-color);
}

.user-items-list-banner-slideshow .user-items-list-banner-slideshow__arrow-icon-background-area {
    position: absolute;
    width: 100%;
    z-index: 3;
    height: 100%;
    left: 0;
    top: 0;
    opacity: .7;
    transition: opacity .3s;
}


</style>