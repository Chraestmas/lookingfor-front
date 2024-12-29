<template>
    <section class="section">
        <div class="ms-form-block-2 w-form">
        <form @submit.prevent="login" id="wf-form-Signup-Form" name="wf-form-Signup-Form" data-name="Signup Form" method="get" data-ms-form="signup" class="ms-form" data-wf-page-id="66f8dbee4594ca1c1fbef796" data-wf-element-id="161577da-0503-27e0-1e28-773f52117a3d" aria-label="Signup Form">
            <h2 class="ms-form-heading">Log in</h2>
            <div>
                <label for="Email-One-2" class="ms-input-label">Email Address</label>
                <input @input="(e)=>{email=e.target.value}" class="ms-input w-input" maxlength="256" name="Email-One-2" data-name="Email One 2" placeholder="e.g. email@gmail.com" id="Email-One-2" data-ms-member="email">
                <p class="errMsg">{{ emailErrMsg  }}</p>
            </div>
            <div>
                <label for="Password-One-2" class="ms-input-label">Password Input</label>
                <input @input = "(e)=>{password=e.target.value}" class="ms-input w-input" maxlength="256" name="Password-One-2" data-name="Password One 2" placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕" type="password" id="Password-One-2" data-ms-member="password">
                <p class="errMsg">{{ passwordErrMsg  }}</p>
            </div>
            <div>
            <button class="button-primary w-button login-btn">Log in</button>
            </div>
            <router-link to="/create-account" class="ms-button ms-is-light ms-is-small ms-is-documentation w-inline-block">
            <div class="ms-button-flex">
                <div>Don't have an account?</div>
                <div class="ms-button-svg w-embed"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h240v240q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z"></path>
                </svg></div>
            </div>
            </router-link>
            <router-link to="/password-recovery" class="ms-button ms-is-light ms-is-small ms-is-documentation w-inline-block">
            <div class="ms-button-flex">
                <div>Forgot Password?</div>
                <div class="ms-button-svg w-embed"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h240v240q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z"></path>
                </svg></div>
            </div>
            </router-link>
        </form>
        <!-- <div class="w-form-done" tabindex="-1" role="region" aria-label="Signup Form success">
            <div>Thank you! Your submission has been received!</div>
        </div> -->
        <!-- <div class="w-form-fail" tabindex="-1" role="region" aria-label="Signup Form failure">
            <div>Oops! Something went wrong while submitting the form.</div>
        </div> -->
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const email = ref('');
const password = ref('');
const emailErrMsg = ref('');
const passwordErrMsg = ref('');

const store = useStore();
const router = useRouter();

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


async function login(){
    validateEmail();
    validatePassword();
    if(emailErrMsg.value != '' || passwordErrMsg.value != ''){
        return;
    }
    try{
        const response = await axios.post('http://localhost:8001/api/login', { id: email.value, password: password.value });
        const res = response.data;
        console.log(response.data);
        // vuex(전역상태관리)에 저장
        store.dispatch('login', {userId : res.id, jwtToken : res.authToken});
        console.log(res)
        router.push('/');
    }catch(e){
        //로그인 실패
        console.log(e);
        if(e.status == 401){
            alert('check id or password')
        }else if(e.status == 400){
            alert('check id or password')
        }else if(e.status == 403){
            alert('Not allowed user')
        }else{
            alert('server 오류 발생')
        }
    }

}

</script>

<style scoped>

.section {
    aspect-ratio: auto;
    object-fit: fill;
    justify-content: center;
    width: 100%;
    height: 880px;
    margin: auto;
    display: flex;
    overflow: visible;
    background-image: none;
}

.ms-form-block-2 {
    flex-flow: row;
    justify-content: flex-start;
    margin-top: 15px;
    margin-bottom: 15px;
    display: inline-flex;
}

.ms-form-heading {
    color: #000;
    text-align: center;
    -webkit-text-stroke-color: #000;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.4em;
}

.w-form {
    margin: 0 0 15px;
}

.ms-input-label, .ms-form-heading {
    color: #000;
}

h2 {
    font-size: 32px;
    line-height: 36px;
    margin-top: 20px;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.ms-input {
    border: 1px solid var(--memberstack-library--ms-border-color);
    box-shadow: 0 5px 10px -5px var(--memberstack-library--ms-shadow-color);
    color: var(--memberstack-library--ms-main-text-color);
    background-color: #fff;
    border-radius: 5px;
    min-height: 40px;
    margin-bottom: 1.333em;
    padding: 8px 12px;
    transition: box-shadow .2s, color .2s, box-shadow .2s, border-color .2s;
    position: relative;
}

.w-input, .w-select {
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

input {
    line-height: normal;
}

button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

textarea, progress, meter, input:not([type="button"], [type="submit"], [type="reset"], [type="file"]) {
    writing-mode: horizontal-tb;
}

input {
    appearance: auto;
    color: canvastext;
    background-color: canvas;
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-top-style: inset;
    border-right-style: inset;
    border-bottom-style: inset;
    border-left-style: inset;
    border-top-color: gray;
    border-right-color: gray;
    border-bottom-color: gray;
    border-left-color: gray;
    border-image-source: none;
    border-image-slice: 100%;
    border-image-width: 1;
    border-image-outset: 0;
    border-image-repeat: stretch;
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    -webkit-rtl-ordering: logical;
    -webkit-user-select: text;
    cursor: auto;
}
.login-btn{
    color: white;
    text-align: center;
    cursor: pointer;
}
input, textarea, select, button {
    margin-top: 0em;
    margin-right: 0em;
    margin-bottom: 0em;
    margin-left: 0em;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
}

.errMsg{
    color: red;
    margin-bottom: 15px;
}

</style>