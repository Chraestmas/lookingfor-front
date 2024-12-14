<template>
  <section class="hero-stack-2">
    <div class="w-layout-blockcontainer container-7 w-container">
      <div class="f-section-large-2">
        <div class="f-container-regular-2">
          <div class="f-margin-bottom-48">
            <div class="f-title-wrapper-center">
              <h3 class="f-h3-heading">Images</h3>
            </div>
          </div>
          <div class="w-layout-grid f-gallery-three-column">
            <div 
              v-for="(i, index) in prevImages" 
              :key="index" 
              class="f-gallery-lightbox w-inline-block w-lightbox"
              @mouseover="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            >
              <div class="f-gallery-image-s">
                <img :src="i" loading="lazy" alt="" class="f-image-cover" />
              </div>
              <button 
                v-if="hoveredIndex === index" 
                class="delete-button" 
                @click="removeImage(index)"
              >
                X
              </button>
            </div>
          </div>
          <label 
          v-if="imageFiles.length < 3"
            id="w-node-a779c83f-e568-e906-8a87-2dae4cda2496-e6b90512"
            class="f-gallery-lightbox w-inline-block w-lightbox"
          >
            <div class=" upload-btn">
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 8L12 3M12 3L7 8M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              Upload Images
            </div>
            <input ref="fileInput" type="file" accept="image/*" @change="handleImageUpload" />
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const prevImages = ref([]);
const imageFiles = ref([]);
const hoveredIndex = ref(null);  // 현재 마우스가 올려진 이미지의 인덱스
const fileInput = ref(null);  // input 엘리먼트 참조
const emit = defineEmits(['upload-image']);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      // 이미지 미리보기 이후, 배열에 추가 (이미지 갤러리용)
      prevImages.value.push(reader.result);
      imageFiles.value.push(file);
      emit('upload-image', imageFiles.value);
      fileInput.value.value = null;
    };
    reader.readAsDataURL(file); // 파일을 Data URL로 읽음
  }

};

// 이미지 삭제 함수
const removeImage = (index) => {
  prevImages.value.splice(index, 1);
  imageFiles.value.splice(index, 1);
  emit('upload-image', imageFiles.value); // 삭제 후, 부모 컴포넌트로 최신 이미지 배열을 전달
};
</script>

<style scoped>
.f-gallery-lightbox {
  cursor: pointer;
  position: relative;
}

.delete-button {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 100%;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;
}

.delete-button:hover {
  background-color: rgba(255, 0, 0, 0.7);
}

input[type="file"] {
  display: none;
}

.upload-btn{
  background-color: blueviolet;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 12px 15px;
  column-gap: 15px;
  margin-top: 15px;


}
</style>
