<template>
  <section class="hero-stack-2">
    <div class="container-4">
      <div class="hero-wrapper-two-2">
        <h1 class="heading-6">Item Name</h1>
      </div>
    </div>
    <div class="w-layout-blockcontainer container-7 w-container">
      <div class="f-section-large-2">
        <div class="f-container-regular-2">
          <div class="f-margin-bottom-48">
            <div class="f-title-wrapper-center">
              <h3 class="f-h3-heading">Images</h3>
            </div>
          </div>
          <div class="w-layout-grid f-gallery-three-column">
            <div v-for="i in prevImages" v-bind:key="i" class="f-gallery-lightbox w-inline-block w-lightbox">
              <div class="f-gallery-image-s"><img :src="i" loading="lazy" alt=""
                  class="f-image-cover"></div>
            </div>
            <label id="w-node-a779c83f-e568-e906-8a87-2dae4cda2496-e6b90512"
              class="f-gallery-lightbox w-inline-block w-lightbox">
              <div class="f-gallery-image-s">
                <img style="object-fit: contain;" src="../../assets/32339.png"
                  loading="lazy" width="Auto" height="Auto" alt="" class="f-image-cover">
              </div>
              <input type="file" accept="image/*" @change="handleImageUpload">
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref , defineEmits} from 'vue';


const prevImages = ref([]);
const imageFiles = ref([]);

const emit = defineEmits(['upload-image'])

const handleImageUpload = (event) => {
  console.log(event);
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      // 이미지 미리보기 이후, 배열에 추가 (이미지 갤러리용)
      prevImages.value.push(reader.result);
      imageFiles.value.push(file);
      emit('upload-image', imageFiles.value);
    };
    reader.readAsDataURL(file); // 파일을 Data URL로 읽음
  }
};


</script>

<style scoped>
.f-gallery-lightbox {
  cursor: pointer;
}

input[type="file"] {
  display: none;
}
</style>