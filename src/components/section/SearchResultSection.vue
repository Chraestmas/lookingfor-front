<template>
  <div id="w-node-_9dc50200-216d-849e-5912-4c0c849340b0-eb2a68ec" class="gallery-grid-2">
      <div v-for="item in itemList" v-bind:key="item.id" class="pricing-card-three">
        <img :src="item.pictures == null || item.pictures.length ==0 ? `https://cdn.prod.website-files.com/66f8d5504594ca1c1fb8ded5/671dd8500f7c9d454b070281_Screenshot%202024-10-27%20at%203.05.48%E2%80%AFPM.png` : 
            `http://localhost:8001${item.pictures[0].url}?t=${new Date().getTime()}`" loading="lazy" alt="item image" class="pricing-image">
        <h3>{{item.name}}</h3>
        <p class="pricing-card-text">{{item.categoryName}}<br>{{item.locationName}}<br>Found {{item.foundDate}}<br></p>
        <RouterLink :to="`/item-details/${item.id}`" class="text-link-arrow-2 w-inline-block">
          <div>Learn more</div>
          <div class="arrow-embed-2 w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z"
                fill="currentColor"></path>
            </svg></div>
        </RouterLink>
      </div>
  </div>
  


</template>

<script setup>
import { defineProps } from 'vue';
defineProps(['itemList']);

</script>

<style scoped>
.gallery-grid-2{
  color: black;
}

@media screen and (min-width: 1280px) {
    .gallery-grid-2 {
        grid-row-gap: 40px;
        grid-template-rows: 1fr auto;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
        font-size: 14px;
    }
}
</style>