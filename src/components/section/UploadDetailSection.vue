<template>
  <section class="features-metrics">
    <div class="container-4">
      <div class="pricing-grid">
        <!-- Category Dropdown -->
        <div class="pricing-card-three">
          <select v-model="category" @input="updateParent">
            <option value="" disabled>Select Category</option>
            <option v-for="(cat, index) in categories" :key="index" :value="cat">{{ cat }}</option>
          </select>
          <p class="pricing-card-text">Category</p>
        </div>

        <!-- Location Dropdown -->
        <div class="pricing-card-three">
          <select v-model="location" @input="updateParent">
            <option value="" disabled>Select Location</option>
            <option v-for="(loc, index) in locations" :key="index" :value="loc">{{ loc }}</option>
          </select>
          <p class="pricing-card-text">Current Location</p>
        </div>

        <!-- Other fields as is -->
        <div class="pricing-card-three">
          <input type="text" v-model="nameTag" @input="updateParent" placeholder="Enter Name Tag" />
          <p class="pricing-card-text">Name Tag</p>
        </div>
        <div class="pricing-card-three">
          <input type="date" v-model="dateFound" @input="updateParent" />
          <p class="pricing-card-text">Date Found</p>
        </div>
        <div class="pricing-card-three">
          <input type="text" v-model="pickupPersonName" @input="updateParent" placeholder="Enter Status" />
          <div class="f-toggle-wrap-2">
            <label class="toggle-container">
              <input type="checkbox" v-model="foundYn" @input="updateParent" />
              <span class="slider"></span>
            </label>
            <div>Found?</div>
          </div>
          <p class="pricing-card-text">Status & Pickup Person Name</p>
        </div>

        <div class="pricing-card-three">
          <input type="date" v-model="dateRetrieved" @input="updateParent" />
          <p class="pricing-card-text">Date Retrieved</p>
        </div>
      </div>
    </div>
  </section>

  <section class="hero-without-image-2">
    <div class="container-9">
      <div class="hero-wrapper-two-4">
        <h1 id="desc-h1">Description</h1>
        <textarea v-model="description" @input="updateParent" placeholder="Enter Description"></textarea>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

// props로 부모 컴포넌트에서 전달받은 데이터
const props = defineProps({
  initialData: {
    type: Object,
    required: true
  }
});

// 드롭다운 데이터
const categories = ref(['Electronics', 'Clothing', 'Furniture', 'Books']);
const locations = ref(['New York', 'Los Angeles', 'Chicago', 'San Francisco']);

// 내부 데이터와 v-model 바인딩
const category = ref(props.initialData.categoryId || '');
const location = ref(props.initialData.locationId || '');
const nameTag = ref(props.initialData.nameTag || '');
const dateFound = ref(props.initialData.foundDate || '');
const pickupPersonName = ref(props.initialData.pickupPersonName || '');
const foundYn = ref(props.initialData.foundYn || false); // Default to false
const dateRetrieved = ref(props.initialData.pickupDate || '');
const description = ref(props.initialData.description || '');

// 부모 컴포넌트에 전달할 업데이트 함수
const emit = defineEmits(['update-form']);

// input 값이 변경될 때마다 부모에게 데이터 전달
const updateParent = () => {
  emit('update-form', {
    categoryId: category.value,
    locationId: location.value,
    nameTag: nameTag.value,
    foundDate: dateFound.value,
    pickupPersonName: pickupPersonName.value,
    foundYn: foundYn.value,
    pickupDate: dateRetrieved.value,
    description: description.value
  });
};

// 초기 데이터를 props로 받아왔을 때, 데이터가 바뀌면 반영하도록 watch 설정
watch(() => props.initialData, (newData) => {
  category.value = newData.categoryId;
  location.value = newData.locationId;
  nameTag.value = newData.nameTag;
  dateFound.value = newData.foundDate;
  pickupPersonName.value = newData.pickupPersonName;
  foundYn.value = newData.foundYn;
  dateRetrieved.value = newData.pickupDate;
  description.value = newData.description;
}, { immediate: true });
</script>

<style scoped>
#desc-h1 {
  font-size: 38px;
  line-height: 44px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.section-2 {
  padding: 10px 0 60px;
}

/* input과 textarea 공통 스타일 */
input,
textarea,
select {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* focus 상태 */
input:focus,
textarea:focus,
select:focus {
  border-color: #012f6c;
  /* primary color로 테두리 색상 변경 */
  box-shadow: 0 0 5px rgba(1, 47, 108, 0.2);
  /* primary color로 포커스 효과 */
  outline: none;
  /* 기본 outline 제거 */
}

/* textarea는 줄바꿈을 지원하므로 여유 있게 */
textarea {
  min-height: 100px;
  resize: vertical;
}

/* 입력 요소의 기본 라벨 스타일 */
label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
  display: block;
}

/* select 스타일 */
select {
  background-color: #f9f9f9;
  cursor: pointer;
  border: 1px solid #ccc;
}

select:focus {
  border-color: #012f6c;
}

.f-toggle-wrap-2 {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 3px;
  column-gap: 5px;
}

.toggle-container {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

.toggle-container input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 50px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #012f6c; /* primary color */
}

input:checked + .slider:before {
  transform: translateX(25px);
}

.slider {
  background-color: #ccc;
}

input:checked + .slider {
  background-color: #012f6c;
}
</style>
