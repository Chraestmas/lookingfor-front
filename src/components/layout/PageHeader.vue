<template>
  <div class="navbar">
    <div class="navbar-container" :class="{search:isSearch}">
      <div class="container-regular">
        <router-link to="/">
          <img src="../../assets/lookingfor-logo.png" width="226" alt="">
        </router-link>
        <nav class="menu-web">
          <ul>
            <li>
              <router-link class="nav-link2" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="nav-link2" to="/upload-item">Upload</router-link>
            </li>
            <li>
              <router-link class="nav-link2" to="/item-search">Search</router-link>
            </li>
            <li>
              <router-link class="auth-btn web" to="/login">SIGN UP / LOG IN</router-link>
            </li>
          </ul>
        </nav>
        <div class="menu-icon" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50">
            <path
              d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z">
            </path>
          </svg>
        </div>
      </div>
    </div>
    <div class="navbar-overlay" :class="{ 'active': isMenuOpen }">
      <nav class="menu">
        <ul class="mobile-menu">
          <li>
              <router-link class="nav-link2" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="nav-link2" to="/upload-item">Upload</router-link>
            </li>
            <li>
              <router-link class="nav-link2" to="/item-search">Search</router-link>
            </li>
            <li>
              <router-link class="auth-btn" to="/login">SIGN UP / LOG IN</router-link>
            </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const isSearch = ref(false);
const route = useRoute();

const router = useRouter();

const toggleMenu = (event) => {
  event.stopPropagation();
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (event) => {
  if (!event.target.closest('.navbar-overlay') && !event.target.closest('.menu-icon')) {
    isMenuOpen.value = false;
  }
};


onMounted(() => {
  router.afterEach(() => {
    console.log(route.path);
    if(route.path === '/item-search'){
      isSearch.value =true;
    }else{
      isSearch.value =false;
    }
    isMenuOpen.value = false; // 페이지 이동 후 메뉴 닫기
  });
});
onMounted(() => {
  document.addEventListener('click', closeMenu);

});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu);
});

</script>

<style scoped>
.menu {
  width: 100%;
}
.mobile-menu {
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar {
  position: relative;
  z-index: 10;
}
.navbar-overlay {
  background-color: white;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  display: none;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-200%);
  z-index: 1;
}

.navbar-overlay.active {
  display: block;
  transform: translateY(0);
}

.navbar-container {
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  background-color: transparent;
  background-color: white;
}

.navbar-container.search{
  background-color: #f5f7fa;
}

.container-regular {
  width: 100%;
  max-width: 1260px;
  min-height: 30px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  display: flex;
  align-items: center;
}

.auth-btn {
  padding: 12px 25px;
  background-color: rgb(1, 47, 108);
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: ease;
  color: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.auth-btn.web {
  margin-left: 120px;
}

.nav-link2 {
  margin-right: 5px;
  margin-left: 5px;
  padding: 5px 10px;
  color: rgb(26, 27, 31);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-decoration: none;
}

.nav-link2:hover {
  color: rgba(26, 27, 31, 0.75);
}

.auth-btn:hover {
  background-color: rgb(50, 52, 58);
  color: rgb(255, 255, 255);
}

.menu-icon {
  font-size: 24px;
  cursor: pointer;
  display: none;
  padding: 12px;
}

@media screen and (max-width: 767px) {
  .mobile-menu {
    flex-direction: column;
    padding-bottom: 30px;
    padding-left: 0;
  }

  .nav-link2 {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media screen and (max-width: 991px) {
  .menu-icon {
    display: block;
  }

  .menu-web {
    display: none;
  }

  .navbar-overlay {
    display: block;
  }
}
</style>
