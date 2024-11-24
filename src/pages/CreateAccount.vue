<template>
  <section class="section">
    <div class="ms-form-block-2 w-form">
      <form id="wf-form-Signup-Form" name="wf-form-Signup-Form" data-name="Signup Form" method="get"
        data-ms-form="signup" class="ms-form" data-wf-page-id="6700d896774628cdac7e9e32"
        data-wf-element-id="161577da-0503-27e0-1e28-773f52117a3d">
        <h2 class="ms-form-heading">Create Account</h2>
        <div><input class="ms-input w-input" maxlength="256" name="Name" data-name="Name" placeholder="e.g. John Doe"
            type="email" id="Name" data-ms-member="email" required=""><input class="ms-input w-input" maxlength="256"
            name="Email-One-2" data-name="Email One 2" placeholder="e.g. email@gmail.com" type="email" id="Email-One-2"
            data-ms-member="email" required=""></div>
        <div><input class="ms-input w-input" maxlength="256" name="Password-One-2" data-name="Password One 2"
            placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕" type="password" id="Password-One-2" data-ms-member="password" required="">
          <div class="ms-help-text">Password must contain 8+ characters and a capital letter</div>
        </div>
        <div><label for="Password-One-3" class="ms-input-label">Confirm Password</label><input class="ms-input w-input"
            maxlength="256" name="Password-One-2" data-name="Password One 2" placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕"
            type="password" id="Password-One-2" data-ms-member="password" required=""></div>
        <div>
          <a href="index.html" class="button-primary w-button">Log in</a>
        </div>
        <RouterLink to="/login" target="_blank"
          class="ms-button ms-is-light ms-is-small ms-is-documentation w-inline-block">
          <div class="ms-button-flex">
            <div>Already have an account?</div>
            <div class="ms-button-svg w-embed"><svg xmlns="http://www.w3.org/2000/svg" height="24"
                viewbox="0 -960 960 960" width="24">
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h240v240q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z">
                </path>
              </svg></div>
          </div>
        </RouterLink>
      </form>
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


</script>

<style scoped>
.ms-input{
  width: 100%;
  margin-top: 30px;
}
</style>