<template>
  <SearchImageSection @upload-image="handleImageUpload"/>
  <SearchDetailSection :isEdit="isEdit" @update-form="handleFormUpdate" :initialData="formData" />
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

const router = useRouter();
const route = useRoute();
// Props로 전달받은 isEdit 상태
const isEdit = computed(()=>route.params.id ? true : false)

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
	userId :''
});

// 이미지 업로드 처리
const imagesToUpload = ref([]);
const handleImageUpload = (uploadedFiles) => {
  imagesToUpload.value = uploadedFiles;
};

// 서버에서 데이터를 가져오는 함수 (예시)
const fetchFormData = async () => {
  try {
    // 서버에서 기존 데이터 가져오는 예시
    // 실제로는 axios나 fetch로 API 호출을 해야 합니다.
    const response = await axios.get(`http://localhost:8001/api/item/${route.params.id}`); // 예시 URL

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
    let url = 'http://localhost:8001/api/item';
    let response = null;
    if(isEdit.value === true){
      url = `http://localhost:8001/api/item/${route.params.id}`
      response = await axios.put(url, formData.value);
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