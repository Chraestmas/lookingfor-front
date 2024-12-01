<template>
  <h1>Login</h1>
  <LoginBannerSection/>
  <LoginInputSection/>
</template>

<script setup>
  import LoginBannerSection from "@/components/section/LoginBannerSection.vue";
  import LoginInputSection from "@/components/section/LoginInputSection.vue";
</script>

<style coped>
.box{
  display: flex;
  flex-direction: column;
}
</style>