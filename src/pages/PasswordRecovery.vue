<template>
  <section class="section">
    <div class="ms-form-block-2 w-form">
      <form id="wf-form-Signup-Form" name="wf-form-Signup-Form" data-name="Signup Form" method="get"
        data-ms-form="signup" class="ms-form" data-wf-page-id="67024f5715ea5801d54d451b"
        data-wf-element-id="161577da-0503-27e0-1e28-773f52117a3d" @submit.prevent="submitFormData">
        <h2 class="ms-form-heading">Password Recovery</h2>
        <div class="box"><label for="Email-One-2" class="ms-input-label">Email Address</label>
          <input :disabled="codePopupOpen" :readonly="isChecked" @input="onEmailInput" class="ms-input w-input"
            maxlength="256" name="Email-One-2" data-name="Email One 2" placeholder="e.g. email@gmail.com" type="email"
            id="Email-One-2" data-ms-member="email" required="">
        </div>
        <div v-if="isChecked" class="box"><label for="Password-One-2" class="ms-input-label">New Password:</label>
          <input @input="onPasswordInput"
            class="ms-input w-input" maxlength="256" name="Password-One-2" data-name="Password One 2"
            placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕" type="password" id="Password-One-2" data-ms-member="password" required="">
            <p class="errMsg">{{ passwordErrMsg  }}</p>
        </div>
        <div v-if="isChecked" class="box"><label for="Password-One-3" class="ms-input-label">Confirm New
            Password:</label>
            <input @input="onPasswordCheckInput" class="ms-input w-input" maxlength="256" name="Password-One-2"
            data-name="Password One 2" placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕" type="password" id="Password-One-2"
            data-ms-member="password" required="">
            <p class="errMsg">{{ passwordErrMsg  }}</p>
        </div>
        <div>
          <button v-if="isChecked" style="cursor: pointer;" class="button-primary w-button">Update Account</button>
          <button v-else :disabled="codePopupOpen" style="cursor: pointer;" class="button-primary w-button">Send
            Code</button>
        </div>
      </form>
      <div v-if="codePopupOpen" class="f-alert-regular-2">
        <div class="f-alert-information">
          <div class="f-alert-icon w-embed">
            <svg style="flex-shrink: 0;" width="24" height="24" viewbox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
                fill="currentColor"></path>
            </svg>
          </div>
        </div>
        <div class="f-alert-content">
          <div class="f-paragraph-regular f-text-weight-medium">Enter the 6-letter Code we just sent to your e-mail
            address.</div>
          <div class="w-form">
            <form id="wf-form-" name="wf-form-" data-name="" method="get" data-wf-page-id="67024f5715ea5801d54d451b"
              data-wf-element-id="6a176fda-e338-0eb5-f768-71ba31c82752" @submit.prevent="submitCodeData">
              <label for="code">Code( 6 letters ):</label>
              <input @input="onCodeInput" class="w-input" maxlength="256" name="code" data-name="code" placeholder="" id="code" required="">
              <input type="submit" data-wait="Please wait..." class="button-primary w-button" value="Submit">
            </form>
            <!-- <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div> -->
          </div>
        </div>
      </div>
      <!-- <div class="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div class="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const codePopupOpen = ref(false);
const isChecked = ref(false);

const email = ref('');
const code = ref('');
const password = ref('');
const passwordCheck = ref('');
const passwordErrMsg = ref('');

function onEmailInput(e) {
  email.value = e.target.value;
}
function onCodeInput(e) {
  code.value = e.target.value;
}
function onPasswordInput(e) {
  password.value = e.target.value;
}
function onPasswordCheckInput(e) {
  passwordCheck.value = e.target.value;
}

function openCodePopup() {
  codePopupOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeCodePopup() {
  codePopupOpen.value = false;
  document.body.style.overflow = 'auto';
}

async function submitCodeData() {
  // 서버로 인증 코드 보내기
  // 인증 코드 보내기 성공하면
  try{
    let res = await axios.post('http://localhost:8001/api/email/verifyCode', {email:email.value, code:code.value})
    closeCodePopup();
    isChecked.value = true;
    alert(res.data);
  }catch(e){
    //인증코드가 잘못되었다면
    alert('Invalid code.');
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

async function submitFormData() {
  validatePassword();
  if (!isChecked.value) { // 코드 보내기
    // email로 코드보내기 api 요청
    //email로 코드 보내기가 성공하면
    try {
      let res = await axios.post("http://localhost:8001/api/email/sendCode", { email: email.value });
      alert(res.data);
      openCodePopup();

    } catch (e) {
      // email로 코드보내기가 실패하면
      //실패 처리
      console.log(e);
      alert("Cannot send verification code.");
    }

  } else { 
    // 비밀번호와 비밀번호 확인 일치하는지 확인
    if(password.value !== passwordCheck.value){
      alert("Password does not match!");
      password.value = '';
      passwordCheck.value = '';
      return;
    } else if(passwordErrMsg.value != ''){
      return;
    }

    // 재설정할 비밀번호 보내기
    try{
      // 비밀번호 재설정이 성공하면
      let res = await axios.post("http://localhost:8001/api/user/resetPassword", {id:email.value, password:password.value});
      alert(res.data);
    }catch(e){
      // 실패하면
      console.log(e);
      alert('Failed to reset password.');
    }
  }
}

</script>

<style scoped>
.f-alert-regular-2 {
  position: fixed;
  top: 30%;
}

.box {
  display: flex;
  flex-direction: column;
}

#code {
  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  vertical-align: middle;
  background-color: #ffffff;
  border: 1px solid #cccccc;
}

.button-primary[disabled] {
  color: #fff;
  background-color: #32343a;
}

.ms-input .w-input{
  margin-bottom: 0px;
}
</style>