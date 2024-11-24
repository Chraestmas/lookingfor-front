<template>
  <section class="gallery-scroll-2">
    <div class="container-3">
      <SearchSettingSection @update-filter="onUpdateFilter"/>
      <SearchResultSection :itemList="itemList" />
      <div class="f-breadcrumb-2">
        <div class="f-breadcrumb-wrapper-2">
          <div style="display: contents;" v-if="currentPage > 1">


            <RouterLink to="#" @click="changePage(1)" class="f-breadcrumb-link-2 w-inline-block">
              <div>&lt;&lt;</div>
            </RouterLink>
            <div class="f-breadcrumb-seperator-2 w-embed"><svg width="32" height="32" viewbox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9766 16.0001L12.8516 11.8751L14.0299 10.6968L19.3332 16.0001L14.0299 21.3034L12.8516 20.1251L16.9766 16.0001Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
          <div style="display: contents;" v-if="currentPage > 1">


            <RouterLink to="#" @click="changePage(currentPage - 1)" class="f-breadcrumb-link-2 w-inline-block">
              <div>&lt;</div>
            </RouterLink>
            <div class="f-breadcrumb-seperator-2 w-embed"><svg width="32" height="32" viewbox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9766 16.0001L12.8516 11.8751L14.0299 10.6968L19.3332 16.0001L14.0299 21.3034L12.8516 20.1251L16.9766 16.0001Z"
                  fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <div v-for="page in totalPages" style="display: contents;" :key="page">
            <RouterLink to="#" :class="['f-breadcrumb-link-2', { 'active': currentPage === page }]"
              @click="changePage(page)" class="f-breadcrumb-link-2 w-inline-block">
              <div>{{ page }}</div>
            </RouterLink>
            <div v-if="page !== totalPages" class="f-breadcrumb-seperator-2 w-embed"><svg width="32" height="32"
                viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9766 16.0001L12.8516 11.8751L14.0299 10.6968L19.3332 16.0001L14.0299 21.3034L12.8516 20.1251L16.9766 16.0001Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
          <div v-if="currentPage < totalPages" style="display: contents;">
            <div class="f-breadcrumb-seperator-2 w-embed"><svg width="32" height="32" viewbox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9766 16.0001L12.8516 11.8751L14.0299 10.6968L19.3332 16.0001L14.0299 21.3034L12.8516 20.1251L16.9766 16.0001Z"
                  fill="currentColor"></path>
              </svg></div>
            <RouterLink to="#" @click="changePage(currentPage + 1)" class="f-breadcrumb-link-2 w-inline-block">
              <div>&gt;</div>
            </RouterLink>
          </div>
          <div v-if="currentPage < totalPages" style="display: contents;">
            <div class="f-breadcrumb-seperator-2 w-embed"><svg width="32" height="32" viewbox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9766 16.0001L12.8516 11.8751L14.0299 10.6968L19.3332 16.0001L14.0299 21.3034L12.8516 20.1251L16.9766 16.0001Z"
                  fill="currentColor"></path>
              </svg></div>
            <RouterLink to="#" @click="changePage(totalPages)" class="f-breadcrumb-link-2 w-inline-block">
              <div>&gt;&gt;</div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SearchSettingSection from '@/components/section/SearchSettingSection.vue';
import SearchResultSection from '@/components/section/SearchResultSection.vue';

const itemList = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);

// 페이지 변경 시 API 요청
async function apiRequest(categories, unclaimedOnly = false, itemName = null, page = 1) {
  console.log("Sending API request with", { categories, unclaimedOnly, page });
 
  const res = await axios.get(`http://localhost:8001/api/item`, {
    params: {
      categoryId: categories && categories.length != 0 ? categories.join(',') : null,
      foundYn: unclaimedOnly ? 'N' : null ,
      itemName: itemName,
      page: page,
      size: 12
    }
  });

  itemList.value = res.data.list;
  totalPages.value = res.data.totalPages;  // 페이지 수 갱신
}

// 페이지 이동 함수
function changePage(page) {
  if (page < 1 || page > totalPages.value) return;  // 유효하지 않은 페이지는 무시
  currentPage.value = page;
  apiRequest([], false, null, page);  // 여기서 필터링 조건을 그대로 전달
}

function onUpdateFilter(test){
  console.log(test);
  apiRequest(test.categoryId, test.foundYn, test.itemName)
}

// 컴포넌트 마운트 시 첫 API 요청
onMounted(() => {
  apiRequest();
});

</script>

<style coped>
.f-breadcrumb-link-2.active {
  color: var(--flowui-component-library--primary-base);
  font-weight: bold;
}
</style>