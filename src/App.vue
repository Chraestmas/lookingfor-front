<template>
  <PageHeader/>
  <Router-view/>
</template>

<script setup>

import PageHeader from './components/layout/PageHeader.vue';
</script>


<style>
/* @import url('./assets/normalize.css'); */
@import url('./assets/temp02.webflow.css');
/* @import url('./assets/webflow.css'); */

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
  font-family:  "Roboto", sans-serif;
}

a{
  font-size: 12px;
  color: #7C8BA0;
  text-decoration: none;
}

ul, li{
  list-style: none;
}
</style>