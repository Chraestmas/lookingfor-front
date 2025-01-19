<template>
    <head>
        <meta charset="utf-8">
        <title>Grant_access</title>
        <meta content="Grant_access" property="og:title">
        <meta content="Grant_access" property="twitter:title">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta content="Webflow" name="generator">
        <link href="css/normalize.css" rel="stylesheet" type="text/css">
        <link href="css/webflow.css" rel="stylesheet" type="text/css">
        <link href="css/temp02.webflow.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com" rel="preconnect">
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
    <script type="text/javascript">WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  }});</script>
    <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script> -->
        <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon">
        <link href="images/webclip.png" rel="apple-touch-icon">
    </head>

    <body>
        <div class="f-section-large-5">
            <div class="f-container-regular-4">
                <div class="f-career-wrapper">
                    <div class="f-margin-bottom-59">
                        <div class="f-career-title-centre">
                            <div class="f-margin-bottom-57">
                                <h3 class="f-h3-heading-3">User Management</h3>
                            </div>
                            <p class="f-paragraph-regular-3">.</p>
                        </div>
                    </div>
                    <div class="f-margin-bottom-58">
                        <div class="w-layout-grid-all f-career-table">
                            <div id="w-node-_5ef2a9ad-6511-e366-c735-67bfc5f7693c-9a5c91e1"
                                class="f-career-position-block-title">
                                <div class="w-layout-grid f-career-row">
                                    <div>
                                        <h6 class="f-heading-detail-small-5 permit_userno">User no.</h6>
                                    </div>
                                    <div id="w-node-_8c89afc6-fb43-aac8-8e7c-b9572e16add9-9a5c91e1">
                                        <h6 class="f-heading-detail-small-5 permit_id">Id</h6>
                                    </div>
                                    <div id="w-node-_8c89afc6-fb43-aac8-8e7c-b9572e16addc-9a5c91e1">
                                        <h6 class="f-heading-detail-small-5 permit_name">name</h6>
                                    </div>
                                    <div id="w-node-_8c89afc6-fb43-aac8-8e7c-b9572e16addf-9a5c91e1">
                                        <h6 class="f-heading-detail-small-5 permit_authorized">Authorized</h6>
                                    </div>
                                </div>
                            </div>
                            <!-- 여기 반복 -->
                            <div v-for="(user , idx) in users" v-bind:key="user.id" id="w-node-_5ef2a9ad-6511-e366-c735-67bfc5f7693f-9a5c91e1" class="f-career-row-wrapper">
                                <div class="w-layout-grid f-career-row">
                                    <div>
                                        <div class="f-paragraph-regular-3">{{ idx +1 }}</div>
                                    </div>
                                    <div id="w-node-_28166595-c19e-c704-1a20-af36d3bb7ac7-9a5c91e1">
                                        <div class="f-paragraph-regular-3 data_id">aa@aa.com</div>
                                    </div>
                                    <div id="w-node-_5ef2a9ad-6511-e366-c735-67bfc5f76944-9a5c91e1">
                                        <div class="f-paragraph-regular-3 f-text-color-gray-501 data_name">aa</div>
                                    </div>
                                    <div id="w-node-_5ef2a9ad-6511-e366-c735-67bfc5f76947-9a5c91e1">
                                        <div class="f-toggle-wrap-2">
                                            <label class="toggle-container">
                                                <input type="checkbox" name="isFound" />
                                                <span class="slider"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div id="w-node-df661eb8-d5fa-9d7d-0de5-42937562e9ae-9a5c91e1">
                                        <div class="f-paragraph-regular-3 f-text-color-gray-501">
                                            <a href="item-search.html" class="button-primary w-button">Delete User</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66f8d5504594ca1c1fb8ded5" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="js/webflow.js" type="text/javascript"></script> -->
    </body>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);



onMounted(async ()=>{
    const res = await axios.get(`http://localhost:8001/api/users`);
    console.log(res.data)
    users.value = res.data;
});

</script>

<style scoped>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.f-paragraph-regular-3 {
    letter-spacing: -.02em;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.8;
}

.f-text-color-gray-501 {
    color: var(--flowui-component-library--gray-500);
}

.button-primary {
    width: 100%;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: #012f6c;
    width: 100%;
    margin-top: 5px;
    padding: 12px 25px;
    font-size: 12px;
    line-height: 20px;
    transition: all .2s;
    display: inline-block;
}

.w-button {
    border: 0;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
}

#w-node-_5ef2a9ad-6511-e366-c735-67bfc5f76947-9a5c91e1 {
    justify-self: end;
}

form {
    margin-block-end: 1em;
    display: block;
    margin-top: 0em;
}

.w-form {
    margin: 0 0 15px;
}

.w-layout-grid-all {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.f-career-position-block-title {
    border-bottom: 1px solid #e4e6f1;
    padding-top: 12px;
    padding-bottom: 12px;
}

.f-heading-detail-small-5 {
    color: var(--flowui-component-library--gray-500);
    letter-spacing: .08em;
    text-transform: uppercase;
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
}

.permit_userno  {
     text-align: center;
}

.permit_id, .permit_name, .permit_authorized {
    text-align: center;
}

.data_userno {
    text-align: center;
}

.data_id, .data_name {
    text-align: center;
}

.f-margin-bottom-58 {
    margin-bottom: 40px;
}

.f-container-regular-4 {
    width: 100%;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.f-margin-bottom-59 {
    margin-bottom: 48px;
}

.f-career-title-centre {
    z-index: 5;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
}

.f-h3-heading-3 {
    color: var(--flowui-component-library--gray-900);
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    line-height: 1.2;
}

.w-form-done {
    display: none;
    padding: 20px;
    text-align: center;
    background-color: #dddddd;
}

.w-form-fail {
    display: none;
    margin-top: 10px;
    padding: 10px;
    background-color: #ffdede;
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

input:checked+.slider {
    background-color: #012f6c;
    /* primary color */
}

input:checked+.slider:before {
    transform: translateX(25px);
}
/* 
#w-node-_5ef2a9ad-6511-e366-c735-67bfc5f76944-9a5c91e1 {
    place-self: center;
} */

#w-node-_5ef2a9ad-6511-e366-c735-67bfc5f76947-9a5c91e1[data-v-27f9f698] {
    justify-self: center;
}



.f-career-row-wrapper {
    border-bottom: 1px solid #e4e6f1;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
}
</style>