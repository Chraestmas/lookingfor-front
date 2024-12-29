<template>
  <LoginInputSection/>
  <CustomPopup/>
</template>

<script setup>
  import CustomPopup from "@/components/layout/CustomPopup.vue";
import LoginInputSection from "@/components/section/LoginInputSection.vue";
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
}
</style>