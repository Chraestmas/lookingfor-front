<template>
  <section class="section">
    <div class="ms-form-block-2 w-form">
      <form id="wf-form-Signup-Form" name="wf-form-Signup-Form" data-name="Signup Form" method="get"
        data-ms-form="signup" class="ms-form" data-wf-page-id="67024f5715ea5801d54d451b"
        data-wf-element-id="161577da-0503-27e0-1e28-773f52117a3d">
        <h2 class="ms-form-heading">Edit Account</h2>
        <div class="box"><label for="Email-One-2" class="ms-input-label">New Email Address</label><input
            class="ms-input w-input" maxlength="256" name="Email-One-2" data-name="Email One 2"
            placeholder="e.g. email@gmail.com" type="email" id="Email-One-2" data-ms-member="email" required=""></div>
        <div class="box"><label for="Password-One-2" class="ms-input-label">New Password:</label><input
            class="ms-input w-input" maxlength="256" name="Password-One-2" data-name="Password One 2"
            placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕" type="password" id="Password-One-2" data-ms-member="password" required="">
        </div>
        <div class="box"><label for="Password-One-3" class="ms-input-label">Confirm New Password:</label><input
            class="ms-input w-input" maxlength="256" name="Password-One-2" data-name="Password One 2"
            placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕" type="password" id="Password-One-2" data-ms-member="password" required="">
        </div>
        <div>
          <button style="cursor: pointer;" class="button-primary w-button">Update Account</button>
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
            </svg></div>
        </div>
        <div class="f-alert-content">
          <div class="f-paragraph-regular f-text-weight-medium">Enter the 6-letter Code we just sent to your e-mail
            address.</div>
          <div class="w-form">
            <form id="wf-form-" name="wf-form-" data-name="" method="get" data-wf-page-id="67024f5715ea5801d54d451b"
              data-wf-element-id="6a176fda-e338-0eb5-f768-71ba31c82752"><label for="code">Code( 6 letters
                ):</label>
                <input class="w-input" maxlength="256" name="email" data-name="Email" placeholder=""
                type="email" id="code" required="">
                <input type="submit" data-wait="Please wait..."
                class="button-primary w-button" value="Submit"></form>
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
import { ref } from 'vue';

const codePopupOpen = ref(false);

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

#code{
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
</style>