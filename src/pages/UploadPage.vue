<template>
  <SearchImageSection :existingImages="formData.pictures" @upload-image="handleImageUpload"/>
  <SearchDetailSection :errMsgs="errMsgs" :locationErrMsg="locationErrMsg" :isEdit="isEdit" @update-form="handleFormUpdate" :initialData="formData" />
  <section class="section-2">
    <div class="w-layout-blockcontainer w-container">
      <button @click="handleSubmit" class="button-primary w-button">{{isEdit ? "save" : "create"}}</button>
    </div>
  </section>
</template>

<script setup>

import SearchDetailSection from '@/components/section/UploadDetailSection.vue';
import SearchImageSection from '@/components/section/UploadImageSection.vue';
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const route = useRoute();
// Props로 전달받은 isEdit 상태
const isEdit = computed(()=>route.params.id ? true : false);

const store = useStore();  // Vuex 스토어 가져오기
const userId = computed(() => store.getters.getUserId);  // 로그인한 userId 가져오기

const VUE_APP_API_URL = process.env.VUE_APP_API_URL;

const errMsgs = ref({
  categoryErrMsg :'',
  locationErrMsg : '',
  nameErrMsg : '',
  nameTagErrMsg : '',
  foundDateErrMsg : '',
  descriptionErrMsg : '',
})


// formData의 초기 상태
const formData = ref({
  id:'',
	name:'',
	categoryId:'',
	categoryName:'',
	foundDate:'',
	nameTag:'',
	locationId:'',
	locationName:'',
	foundYn:'N',
	pickupDate:'',
	pickupPersonName:'',
	description:'',
	userId :'',
  pictures:[]
});

// 이미지 업로드 처리
const imagesToUpload = ref([]); // 업로드할 이미지를 저장할 배열

const handleImageUpload = (uploadedFiles) => {
  imagesToUpload.value = uploadedFiles;
};
function validateCategory (){
    if(formData.value.categoryId == ''){
        errMsgs.value.categoryErrMsg = 'Category is required.'
      }else{
        errMsgs.value.categoryErrMsg = ''
    }
}

function validateLocation (){
    if(formData.value.locationId == ''){
        errMsgs.value.locationErrMsg = 'Location is required.'
      }else{
        errMsgs.value.locationErrMsg = ''
    }
}

function validateName(){
  if(!formData.value.name){
    errMsgs.value.nameErrMsg = 'Name is required.';
  }else{
    errMsgs.value.nameErrMsg = '';
  }
}

function validateNameTag(){
  if(!formData.value.nameTag){
    errMsgs.value.nameTagErrMsg = 'NameTag is required.';
  }else{
    errMsgs.value.nameTagErrMsg = '';
  }
}

function validateFoundDate(){
  if(!formData.value.foundDate){
    errMsgs.value.foundDateErrMsg = 'FoundDate is required.';
  }else{
    errMsgs.value.foundDateErrMsg = '';
  }
}

function validateDescription(){
  if(!formData.value.description){
    errMsgs.value.descriptionErrMsg = 'Description is required.';
  }else{
    errMsgs.value.descriptionErrMsg = '';
  }
}

// 서버에서 데이터를 가져오는 함수 (예시)
const fetchFormData = async () => {

  try {
    // 서버에서 기존 데이터 가져오는 예시
    // 실제로는 axios나 fetch로 API 호출을 해야 합니다.
    const response = await axios.get(`${VUE_APP_API_URL}/api/item/${route.params.id}`); // 예시 URL

    // 데이터를 formData에 할당
    formData.value = response.data;
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching form data:', error);
  }
};

// Form 데이터 업데이트 (SearchDetailSection에서 발생하는 이벤트 처리)
const handleFormUpdate = (data) => {
  formData.value = data;
  console.log(formData.value)
};

const handleSubmit = async () => {
  if (!userId.value) {
    alert('You must be logged in to upload an item.');
    router.push('/login');  // 로그인 페이지로 리디렉션
    return;
  }

  validateCategory();
  validateLocation();
  validateName();
  validateNameTag();
  validateFoundDate();
  validateDescription();
  if(errMsgs.value.categoryErrMsg || errMsgs.value.descriptionErrMsg || errMsgs.value.foundDateErrMsg || 
   errMsgs.value.locationErrMsg || errMsgs.value.nameErrMsg || errMsgs.value.nameTagErrMsg
  ){
    return;
  }

  // 로그인된 userId를 formData에 추가
  formData.value.userId = userId.value;  // 로그인한 userId를 formData에 추가

  const formDataToSend = new FormData();
  
  // 이미지 파일들을 FormData에 추가
  if(imagesToUpload.value == null || imagesToUpload.value.length===0){
    formDataToSend.append('photos', []);

  }else{
    imagesToUpload.value.forEach(file => {
      formDataToSend.append('photos', file);
    });
  }

  // JSON 데이터를 FormData에 추가
  formDataToSend.append('formData', JSON.stringify(formData.value)); // 'formData'도 파라미터명입니다.
  
  //formdata 잘 되어있는지 조회
  formDataToSend.forEach((value, key) => {
    console.log(key, value);
  });
  try {
    let url = `${VUE_APP_API_URL}/api/item`;
    let response = null;
    if(isEdit.value === true){
      url = `${VUE_APP_API_URL}/api/item/${route.params.id}`
      response = await axios.put(url, formDataToSend, {headers: {
          'Content-Type': 'multipart/form-data' // 요청 헤더에 멀티파트로 지정
        }});
    }else{
      response = await axios.post(url, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // 요청 헤더에 멀티파트로 지정
        }
      });
    }
    console.log('Response:', response.data);
    router.replace(`/item-details/${response.data.id}`)
  } catch (error) {
    console.error('Error uploading data:', error);
  }
};



// 컴포넌트가 마운트될 때 isEdit 상태에 따라 서버에서 데이터를 불러옴
onMounted(() => {
  if (isEdit.value) {
    fetchFormData();
  } 
});
</script>

<style coped>
.section-2 {
  padding: 10px 0 60px;
}
</style>