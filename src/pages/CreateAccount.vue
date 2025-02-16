<template>
  <section class="section">
    <div class="ms-form-block-2 w-form">
      <form @submit.prevent="handleSubmit" id="wf-form-Signup-Form" name="wf-form-Signup-Form" data-name="Signup Form" method="get"
        data-ms-form="signup" class="ms-form" data-wf-page-id="6700d896774628cdac7e9e32"
        data-wf-element-id="161577da-0503-27e0-1e28-773f52117a3d">
        <h2 class="ms-form-heading">Create Account</h2>
        <div>
          <label for="Name" class="ms-input-label">Name</label>
          <input @input="onUserNameInput" class="ms-input w-input" maxlength="256" name="Name" data-name="Name" placeholder="e.g. John Doe"
             id="Name" data-ms-member="email" required="">
             <label for="Email-One-2" class="ms-input-label">Email Address</label>
            <input @input="onEmailInput" class="ms-input w-input" maxlength="256"
            name="Email-One-2" data-name="Email One 2" placeholder="e.g. email@gmail.com" type="email" id="Email-One-2"
            data-ms-member="email" required="">
            <p class="errMsg">{{ emailErrMsg  }}</p>
            
            </div>
        <div>
          <label for="Password-One-2" class="ms-input-label">Password</label>
          <input @input="onPasswordInput" class="ms-input w-input" maxlength="256" name="Password-One-2" data-name="Password One 2"
            placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕" type="password" id="Password-One-2" data-ms-member="password" required="">
          <p class="errMsg">{{ passwordErrMsg  }}</p>
        </div>
        <div>
          <label for="Password-One-3" class="ms-input-label">Confirm Password</label>
          <input @input="onPasswordCheckInput" class="ms-input w-input"
            maxlength="256" name="Password-One-2" data-name="Password One 2" placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕"
            type="password" id="Password-One-3" data-ms-member="password" required=""></div>
          <p class="errMsg">{{ passwordErrMsg  }}</p>
        <div>
          <button class="button-primary w-button">Sign Up</button>
        </div>
        <RouterLink to="/login"
          class="ms-button ms-is-light ms-is-small ms-is-documentation w-inline-block">
          <div class="ms-button-flex">
            <div>Already have an account?</div>
            <div class="ms-button-svg w-embed"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h240v240q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z"></path>
                </svg></div>
          </div>
        </RouterLink>
      </form>
    </div>
    <CustomPopup
  v-if="isModalOpen"
    :popupTitle="popupTitle"
    :buttonText="'Confirm'"
    :popupDetail="popupDetail"
    @buttonClick="closeModal"
    @close = "closeModal"
  />
  </section>

</template>

<script setup>
import CustomPopup from '@/components/layout/CustomPopup.vue';
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

const VUE_APP_API_URL = process.env.VUE_APP_API_URL;

const isModalOpen = ref(false);
const popupTitle = ref('');
const popupDetail = ref('');
const closeModal = ref(()=>{
  isModalOpen.value = false;
})

const userName = ref('');
const email = ref('');
const password = ref('');
const passwordCheck = ref('');
const emailErrMsg = ref('');
const passwordErrMsg = ref('');

function onUserNameInput(e) {
  userName.value = e.target.value;
}

function onEmailInput(e) {
  email.value = e.target.value;
}

function onPasswordInput(e) {
  password.value = e.target.value;
}
function onPasswordCheckInput(e) {
  passwordCheck.value = e.target.value;
}

function validateEmail (){
    const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    if(email.value ==''){
        emailErrMsg.value = 'Email is required.'
    }else if(!emailPattern.test(email.value)){
        emailErrMsg.value = 'Please try again in email format.'
    }else{
        emailErrMsg.value = ''
    }
}

function validatePassword (){
    const passwordPattern = /^(?=.*[A-Z]).+$/;
    if(password.value ==''){
        passwordErrMsg.value = 'Password is required.'
    }else if(password.value.length < 8){
        passwordErrMsg.value = 'Password must be 8+ characters.'
    }else if(!passwordPattern.test(password.value)){
        passwordErrMsg.value = 'Password needs to contain at least 1 capital letter.'
    }else{
        passwordErrMsg.value = ''
    }
}

async function handleSubmit(){
  validateEmail();
  validatePassword();
  if( emailErrMsg.value != '' || passwordErrMsg.value != ''){
    return;
  }
  try{
    const res = await axios.post(`${VUE_APP_API_URL}/api/user`, {id:email.value, name:userName.value, password:password.value })
    console.log(res.data);
    if(res.data === null){
      popupTitle.value = 'Create Failed';
      popupDetail.value = 'Cannot create account at the moment.';
      isModalOpen.value = true;
      
      closeModal.value = ()=>{isModalOpen.value = false}
      return;
    }
    popupTitle.value = 'Create Success';
    popupDetail.value = res.data.id + 'Your account has been created!';
    isModalOpen.value = true;
    closeModal.value = ()=>{router.replace('/')}
  }catch(e){
    //id 생성 실패
    console.log(e);
    if(e.status == 401){
      popupTitle.value = 'Create Failed';
      popupDetail.value = 'Already Existed Id';
      isModalOpen.value = true;
      closeModal.value = ()=>{isModalOpen.value = false}
    } else {
      popupTitle.value = 'Server Error';
      popupDetail.value = 'please try again later.';
      isModalOpen.value = true;
      closeModal.value = ()=>{isModalOpen.value = false}
    }
  }
}

</script>

<style scoped>
.ms-input{
  width: 100%;
  margin-bottom: 0px;
}

.errMsg{
  margin-bottom:1em;
}
</style>