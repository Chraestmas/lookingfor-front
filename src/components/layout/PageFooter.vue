<template>
  <div class="waves-footer-1">
    <div class="waves---main-container-2 w-container">
      <div class="waves-divider-footer-1"></div>
      <div class="waves-bottom-footer-1">
        <div class="waves---paragraph-small">Copyright© 2024 - 2024 Jaewoo Chun. All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.waves-footer-1 {
    background-color: var(--waves-library--white);
    padding-top: 0;
    padding-bottom: 0;
}
.waves---main-container-2 {
    max-width: 1352px;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-left: 24px;
    padding-right: 24px;
}

.waves-divider-footer-1 {
    background-color: #13131333;
    width: 100%;
    height: 1px;
    margin-top: 64px;
    margin-bottom: 32px;
}

.waves-bottom-footer-1 {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    display: flex;
}

.waves---paragraph-small {
    font-size: 10px;
    line-height: 130%;
}
@media screen and (max-width: 991px) {
    .waves-footer-1 {
        padding-top: 0;
    }

    .w-container {
        max-width: 728px;
    }

    .waves-divider-footer-1 {
        margin-top: 40px;
    }

    .waves-bottom-footer-1 {
        grid-row-gap: 32px;
        text-align: center;
        flex-direction: column;
        align-items: center;
    }
}


@media screen and (max-width: 767px) {
    .waves-footer-1 {
        padding-top: 0;
    }

    .waves---main-container-2 {
        padding-left: 16px;
        padding-right: 16px;
    }
}


</style>