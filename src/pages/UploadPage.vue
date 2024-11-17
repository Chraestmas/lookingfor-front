<template>
  <SearchImageSection @upload-image="handleImageUpload"/>
  <SearchDetailSection/>
</template>

<script setup>

import SearchDetailSection from '@/components/section/UploadDetailSection.vue';
import SearchImageSection from '@/components/section/UploadImageSection.vue';
import { ref } from 'vue';
const imagesToUpload = ref([]);

const handleImageUpload = (uploadedFiles) => {
  imagesToUpload.value = uploadedFiles;
};

</script>

<style coped>

</style>