<template>
  <section class="pricing-overview">
    <div class="container-9">
      <h2 class="centered-heading-4">Recently Found Items</h2>
      <div class="pricing-grid">
        <div v-for="item in items" v-bind:key="item.id" id="w-node-a20b9ec8-b7c6-c966-54ff-098afd2bff9b-1fb8dede" class="pricing-card-three">
          <RouterLink :to="`/item-details/${item.id}`"
          class="text-link-arrow-2 w-inline-block">
          <img
            :src="item.pictures == null || item.pictures.length ==0 ? `https://cdn.prod.website-files.com/66f8d5504594ca1c1fb8ded5/671dd8500f7c9d454b070281_Screenshot%202024-10-27%20at%203.05.48%E2%80%AFPM.png` : 
            `${VUE_APP_API_URL}${item.pictures[0].url}?t=${new Date().getTime()}`"
            loading="lazy" alt="" class="pricing-image">
          </RouterLink>
          <h3>{{item.name}}</h3>
          <p class="pricing-card-text">{{item.categoryName}}<br>{{item.locationName}}<br>Found {{item.foundDate}}<br></p>
            
        </div>
      </div>
    </div>
    <div class="w-layout-blockcontainer container-10 w-container">
      <RouterLink to="/item-search" class="button-primary-9 w-button">search
        More Items</RouterLink>
    </div>
  </section>
  <div class="waves---section-medium-2"></div>
</template>

<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue';

const items = ref([]);
const VUE_APP_API_URL = process.env.VUE_APP_API_URL;

onMounted(async () => {
  try {
    const response = await axios.get(`${VUE_APP_API_URL}/api/item?foundYn=N`);
    // console.log(response.data);
    items.value = response.data.list;
  } catch (e) {
    console.log(e);
  }
})
</script>

<style scoped>
.waves---section-medium-2 {
  background-color: #0000;
  padding-top: 100px;
  padding-bottom: 60px;
}

.pricing-overview {
  border-bottom: 1px solid #e4ebf3;
  padding: 80px 30px;
  position: relative;
}

.container-9 {
  width: 100%;
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.container-10 {
  width: 30%;
  display: flex;
}

.w-layout-blockcontainer {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.centered-heading-4 {
  text-align: center;
  margin-bottom: 16px;
}

h2 {
  margin-top: 20px;
  font-size: 32px;
  line-height: 36px;
}

.pricing-grid {
  grid-column-gap: 64px;
  grid-row-gap: 50px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
}

#w-node-a20b9ec8-b7c6-c966-54ff-098afd2bff9b-1fb8dede,
#w-node-a20b9ec8-b7c6-c966-54ff-098afd2bffa5-1fb8dede,
#w-node-a20b9ec8-b7c6-c966-54ff-098afd2bffaf-1fb8dede,
#w-node-_81797aca-46a5-ed04-a2e3-02e29091ee49-eb2a68ec,
#w-node-a338c854-02c8-bb9b-a560-0ebedd0bca6c-eb2a68ec,
#w-node-c58d3ffc-3e5e-1c80-0ce2-ba2eb5ec8160-eb2a68ec,
#w-node-_52b9b06a-eb83-be9d-5119-0f7eaa6808fc-eb2a68ec,
#w-node-_56dfeda4-b9a9-3314-3218-355c98290089-eb2a68ec,
#w-node-f2aaf3b3-1150-fe6e-d4b3-b625416b5e23-eb2a68ec,
#w-node-_788641d8-5a1d-0b39-91b8-dad1651f5bdf-eb2a68ec,
#w-node-cd40d225-427d-abf2-f884-c55a3dbd6439-eb2a68ec,
#w-node-_93041657-890f-09f2-afb2-b153cc994b6a-eb2a68ec {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

.pricing-image {
  object-fit: cover;
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
}

img {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}

h3 {
  margin-top: 20px;
  font-size: 24px;
  line-height: 30px;
}

.pricing-card-text {
  margin-bottom: 20px;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}


.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.text-link-arrow-2 {
  color: #1a1b1f;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  display: flex;
}

a {
  background-color: #0000;
}

.pricing-card-three {
  text-align: center;
  border: 1px #000;
  border-radius: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10px;
  display: flex;
}

.button-primary-9 {
  color: #fff;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #1a1b1f;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding: 12px 20px 12px 25px;
  font-size: 12px;
  line-height: 20px;
  transition: all .2s;
  display: flex;
  position: static;
}

.button-primary-9:hover {
  color: #fff;
  background-color: #32343a;
}

@media screen and (min-width: 1280px) {
  .button-primary-9 {
    text-align: center;
    background-color: #012f6c;
    margin: 40px auto 0;
    padding-left: 25px;
  }

  .pricing-overview {
    margin-top: auto;
  }

  .pricing-grid {
    grid-row-gap: 25px;
  }

  #w-node-a20b9ec8-b7c6-c966-54ff-098afd2bff9b-1fb8dede,
  #w-node-c0e1a6ea-5db7-5b33-b0f3-d2d0229e5be0-9a08dfa8,
  #w-node-_85436dbd-cb03-5a38-7065-81d64eb7ac4f-e6b90512,
  #w-node-fabe12dd-78dd-0081-106a-94a6d1231d58-b81c6c6d,
  #w-node-d23f231b-6837-de3f-a3d7-c773089d1bed-b81c6c6d,
  #w-node-_642a2a8c-5113-b291-dcb8-01160ce55a35-b81c6c6d {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }

  .pricing-card-three {
    background-color: #0000;
    border: 1px #000;
    border-radius: 0;
    padding: 20px 10px;
  }
}


@media screen and (max-width: 991px) {
  .container-9 {
    max-width: 728px;
  }

  .w-layout-blockcontainer {
    max-width: 728px;
  }

  .pricing-grid {
    grid-column-gap: 30px;
  }
}


@media screen and (max-width: 767px) {

  .pricing-overview,
  .pricing-comparison {
    padding: 60px 15px;
  }

  .container-9 {
    max-width: 728px;
  }

  .w-layout-blockcontainer {
    max-width: none;
  }

  .waves---section-medium-2 {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
</style>