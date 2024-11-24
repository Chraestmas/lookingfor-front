<template>
  <h1 class="heading-7">Search Items</h1>
  <button @click="changeModalStatus" style="cursor: pointer;" class="button-primary w-button">Search Settings V</button>
  <div v-if="isModalOpen" class="f-modal-base-large dropdown">
    <div class="f-modal-title-wrapper">
      <div class="f-sub-heading-regular">Categories</div>
    </div>
    <div class="f-line-regular"></div>
    <div class="w-form">
      <form id="email-form" name="email-form" data-name="Email Form" method="get">
        <div class="w-layout-grid f-account-input-grid">
          <label v-for="category in categories" v-bind:key="category.id" class="w-checkbox f-checkbox-field-2">
            <input :value="category.id" type="checkbox" v-model="selectedCategories" :true-value="category.id" :false-value="null" style="opacity:0;position:absolute;z-index:-1">
            <div class="w-checkbox-input w-checkbox-input--inputType-custom f-checkbox-2"></div>
            <div id="w-node-_788641d8-5a1d-0b39-91b8-dad1651f5bdf-b81c6c6d" class="f-modal-checkbox-wrapper">
              <p class="f-paragraph-regular-2 f-text-weight-medium-2">{{ category.name }}</p>
            </div>
          </label>
        </div>
      </form>
    </div>
    <div class="f-line-regular"></div>
    <div class="f-modal-title-wrapper">
      <div class="f-sub-heading-regular">Search Settings</div>
    </div>
    <div class="f-line-regular"></div>
    <div class="w-form">
      <form id="email-form" name="email-form" data-name="Email Form" method="get">
        <div class="w-layout-grid f-account-input-grid">
          <label class="w-checkbox f-checkbox-field-2">
            <input type="checkbox" v-model="unclaimedOnly" name="Checkbox-2" style="opacity:0;position:absolute;z-index:-1">
            <div class="w-checkbox-input w-checkbox-input--inputType-custom f-checkbox-2"></div>
            <div id="w-node-_93041657-890f-09f2-afb2-b153cc994b6a-b81c6c6d" class="f-modal-checkbox-wrapper">
              <p class="f-paragraph-regular-2 f-text-weight-medium-2">Unclaimed items only</p>
            </div>
          </label>
        </div>
      </form>
    </div>
    <div class="f-modal-wrapper-right">
      <button @click="cancelChanges" style="cursor: pointer;" class="f-button-secondary-3 w-button">Cancel</button>
      <button @click="saveChanges" style="cursor: pointer;" class="f-button-primary w-button">Save</button>
    </div>
  </div>
  <div class="gallery-sticky-2">
    <div class="form-block-2 w-form">
      <div id="email-form" name="email-form" data-name="Email Form" method="get">
        <div class="f-field-wrapper">
          <div class="f-field-icon-wrapper">
            <div class="f-field-icon w-embed">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input @input="(e)=>itemName = e.target.value" class="f-field-input-icon w-input" maxlength="256" name="Input-Field-Icon-L" data-name="Input Field Icon L" placeholder="Search Items" type="text" id="Input-Field-Icon-L">
            <button @click="onItemNameSearch" class="button w-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const isModalOpen = ref(false);
const categories = ref([{id:1, name:'aaa'}, {id:2, name:'bbb'}, {id:3, name:'ccc'}]);
const itemName = ref('');

const emit = defineEmits(['update-filter'])


// 선택한 체크박스 정보를 담아줄 배열
const selectedCategories = ref([]);
// uclaimedOnly 선택 여부
const unclaimedOnly = ref(false);


// 초기 상태 저장
let initialSelectedCategories = [];
let initialUnclaimedOnly = false;

function changeModalStatus() {
  isModalOpen.value = !isModalOpen.value
  if (isModalOpen.value) {
    // 모달이 열릴 때 초기 상태를 저장
    initialSelectedCategories = [...selectedCategories.value];
    initialUnclaimedOnly = unclaimedOnly.value;
  }else{
    selectedCategories.value = [...initialSelectedCategories];
    unclaimedOnly.value = initialUnclaimedOnly;
    isModalOpen.value = false;
  }
}

function cancelChanges() {
  // Cancel 버튼을 눌렀을 때 초기 상태로 되돌리기
  selectedCategories.value = [...initialSelectedCategories];
  unclaimedOnly.value = initialUnclaimedOnly;
  isModalOpen.value = false;

}

function saveChanges() {
  // Save 버튼을 눌렀을 때 변경된 체크박스를 기반으로 API 요청
  isModalOpen.value = false;
  
  emit('update-filter', { categoryId : selectedCategories.value, foundYn: unclaimedOnly.value, itemName:itemName.value});
}

function onItemNameSearch(){
  emit('update-filter', { categoryId : selectedCategories.value, foundYn: unclaimedOnly.value , itemName:itemName.value});

}


</script>

<style scoped>
.gallery-sticky-2 {
  position: sticky;
  top: 0;
}

.heading-7 {
  margin: 50px;
}

input[type="checkbox"]:checked + .w-checkbox-input{
  background-color: var(--flowui-component-library--gray-900);
    background-size: 12px;
    border-style: none;
    border-radius: 4px;
    background-image: url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg);
    background-position: 50%;
    background-repeat: no-repeat;
}
</style>