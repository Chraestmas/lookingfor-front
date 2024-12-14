<template>
  <div id="w-node-_9dc50200-216d-849e-5912-4c0c849340b0-eb2a68ec" class="gallery-grid-2">
    <div v-for="item in itemList" v-bind:key="item.id" class="pricing-card-three">
      <RouterLink :to="`/item-details/${item.id}`" class="text-link-arrow-2 w-inline-block">
        <img :src="item.pictures == null || item.pictures.length == 0 ? `https://cdn.prod.website-files.com/66f8d5504594ca1c1fb8ded5/671dd8500f7c9d454b070281_Screenshot%202024-10-27%20at%203.05.48%E2%80%AFPM.png` :
          `http://localhost:8001${item.pictures[0].url}?t=${new Date().getTime()}`" loading="lazy" alt="item image"
          class="pricing-image">
      </RouterLink>
      <h3>{{ item.name }}</h3>
      <p class="pricing-card-text">{{ item.categoryName }}<br>{{ item.locationName }}<br>Found {{ item.foundDate }}<br></p>

    </div>
  </div>



</template>

<script setup>
import { defineProps } from 'vue';
defineProps(['itemList']);

</script>

<style scoped>
.gallery-grid-2 {
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