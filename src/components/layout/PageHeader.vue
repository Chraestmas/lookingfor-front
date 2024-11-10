<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="container-regular">
        <router-link>Company Logo</router-link>
        <nav>
          <ul>
            <li>
              <router-link class="nav-link2">
                Home
              </router-link>
            </li>
            <li>
              <router-link class="nav-link2">
                Upload
              </router-link>
            </li>
            <li>
              <router-link class="nav-link2">
                Search
              </router-link>
            </li>
            <li>
              <router-link class="auth-btn">SIGN UP / LOG IN</router-link>
            </li>
          </ul>
        </nav>
        <div class="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50">
            <path
              d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z">
            </path>
          </svg>
        </div>

      </div>
    </div>
    <div class="navbar-overlay">
      <nav class="menu">
        <ul>
            <li>
              <router-link class="nav-link2">
                Home
              </router-link>
            </li>
            <li>
              <router-link class="nav-link2">
                Upload
              </router-link>
            </li>
            <li>
              <router-link class="nav-link2">
                Search
              </router-link>
            </li>
            <li>
              <router-link class="auth-btn">SIGN UP / LOG IN</router-link>
            </li>
          </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
nav.menu{
  text-align: center;
    background: #c8c8c8;
    min-width: 200px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: visible;
    display: block !important;
}
.navbar{
  position: relative;
}
.navbar-overlay{
  background-color: red;
  position: absolute;
  top: 100%;
    left: 0;
    right: 0;
    width: 100%;
}
.navbar-container {
  z-index: 5;
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  background-color: transparent;
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
  margin-left: 120px;
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

@media screen and (max-width: 991px) {
  .menu-icon {
    display: block;
  }

  nav {
    display: none;
  }
}
</style>