<template>
    <section class="hero-stack-2">
        <div class="container-4">
            <div class="hero-wrapper-two-2">
                <h1 class="heading-6">{{item.name}}</h1>
            </div>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button v-for="(s,idx) in slides" v-bind:key="s.id" 
                    @click="moveTo(idx)"
                type="button" data-bs-target="#carouselExampleIndicators" :class="{active : currentIndex === idx}"></button>

            </div>
            <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div class="carousel-item" v-for="(image) in slides" :key="image.id">
                    <img :src="`http://localhost:8001${image.url}`" alt="Carousel Image" class="carousel-image" />
                </div>
            </div>
            <button @click="moveToPrevSlide" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button  @click="moveToNextSlide" class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    <section class="features-metrics">
        <div class="container-4">
            <div class="pricing-grid">
                <div id="w-node-c0e1a6ea-5db7-5b33-b0f3-d2d0229e5be0-9fe92ff8" class="pricing-card-three">
                    <h3>{{ item.categoryName }}</h3>
                    <p class="pricing-card-text">Category<br></p>
                </div>
                <div id="w-node-c0e1a6ea-5db7-5b33-b0f3-d2d0229e5bef-9fe92ff8" class="pricing-card-three">
                    <h3>{{ item.locationName }}</h3>
                    <p class="pricing-card-text">Current Location<br></p>
                </div>
                <div id="w-node-c0e1a6ea-5db7-5b33-b0f3-d2d0229e5bfe-9fe92ff8" class="pricing-card-three">
                    <h3>{{item.nameTag}}</h3>
                    <p class="pricing-card-text">Name Tag</p>
                </div>
                <div id="w-node-_2b8cbf2e-f4c0-3618-4877-b0b84973eb2a-9fe92ff8" class="pricing-card-three">
                    <h3>{{item.foundDate}}</h3>
                    <p class="pricing-card-text">Date Found</p>
                </div>
                <div id="w-node-_9b6af973-a9fb-a055-5a09-fea85fe176c3-9fe92ff8" class="pricing-card-three">
                    <h3 v-if="item.foundYn === 'Y'" >Found By:&nbsp;{{item.pickupPersonName}}</h3>
                    <h3 v-else >Not Found</h3>
                    <p class="pricing-card-text">Status &amp;&nbsp;Pickup person name</p>
                </div>
                <div id="w-node-e9382a67-ffad-90d1-e2e2-fc794f296439-9fe92ff8" class="pricing-card-three">
                    <h3 v-if="item.foundYn === 'Y'">{{item.foundDate}}</h3>
                    <h3 v-else>Not Found</h3>
                    <p class="pricing-card-text">Date Retrieved</p>
                </div>
            </div>
        </div>
    </section>

    <section class="hero-without-image-2">
        <div class="container-9">
            <div class="hero-wrapper-two-4">
                <h1>Description</h1>
                <p class="margin-bottom-24px-5">{{item.description}}</p>
            </div>
        </div>
    </section>

    <section class="section-2">
        <div class="w-layout-blockcontainer w-container">
            <RouterLink :to="`/item/${route.params.id}/update`" class="button-primary w-button">edit</RouterLink>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const currentIndex = ref(0); // 현재 슬라이드 인덱스
const slides = computed(()=>item.value.pictures.map(e=>({id : e.id, url : e.url})));
const route = useRoute();

const item = ref({
    id : 1,
    name : '',
    categoryId : '',
    categoryName : '',
    foundDate : '',
    nameTag : '',
    locationId :'',
    locationName :'',
    foundYn :'',
    pickupDate :'',
    pickupPersonName :'',
    description :'',
    pictures :[],
});

const moveTo = (idx) => {
    currentIndex.value = idx; // 첫 번째로 돌아갑니다.

};

const moveToNextSlide = () => {
    console.log(currentIndex.value)
  if (currentIndex.value < slides.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // 첫 번째로 돌아갑니다.
  }
};

const moveToPrevSlide = () => {
    console.log(currentIndex.value)
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = slides.value.length - 1; // 마지막으로 돌아갑니다.
  }
};

onMounted(async ()=>{
    const res = await axios.get('http://localhost:8001/api/item/' +  route.params.id)
    console.log(res.data);
    item.value = res.data;
});


</script>

<style scoped>
.carousel {
    max-width: 900px;
    height: 400px;
    margin: 50px auto 25px auto;
    overflow: hidden;
    
  display: flex;
  justify-content: center;
  align-items: center;
}

.bd-example> :last-child {
    margin-bottom: 0;
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

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button {
    border-radius: 0;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
    -webkit-appearance: button;
}
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 이미지 비율 유지하면서 모두 보이게 */
}

/* 고정된 크기 */
.carousel-item {
  height: 300px; /* 슬라이드의 고정된 높이 */
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}
.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
    display: block;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
    cursor: pointer;
}

.carousel-control-prev {
    left: 0;
}

.carousel-control-next {
    right: 0;
}

.carousel-control-next,
.carousel-control-prev {
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

[type="button"],
[type="reset"],
[type="submit"],
button {
    -webkit-appearance: button;
}

button,
select {
    text-transform: none;
}

button,
input,
optgroup,
select,
textarea {
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

.carousel-control-next-icon,
.carousel-control-prev-icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

.carousel-indicators .active{
    opacity: 1;
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


</style>