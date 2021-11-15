<template>
  <div class="user-login-form">
    <form
      id="user-login-form"
      action=""
      class="user-login-form"
      accept-charset="UTF-8"
      data-drupal-selector="user-login-form"
    >
      <label class="form-required js-form-required" for="edit-name"
        >Username</label
      >
      <input
        id="edit-name"
        v-model="state.username"
        type="text"
        name="name"
        data-drupal-selector="edit-name"
        class="required form-text"
        aria-required="true"
        maxlength="60"
        required=""
        size="60"
        aria-describedby="edit-name--description"
        value=""
        autocapitalize="none"
        spellcheck="false"
        autofocus=""
      />
      <div id="edit-name--description" class="description">
        Enter your Dexia username.
      </div>
      <label class="form-required js-form-required" for="edit-pass"
        >Password</label
      >
      <input
        id="edit-pass"
        type="password"
        name="pass"
        data-drupal-selector="edit-pass"
        class="required form-text"
        aria-required="true"
        maxlength="128"
        required=""
        size="60"
        aria-describedby="edit-pass--description"
      />
      <div id="edit-pass--description" class="description">
        Enter the password that accompanies your username.
      </div>
      <input
        type="hidden"
        name="form_build_id"
        value="form-YGaRcASwd0WFjbxXcOyPenap4dq5AltiAJc2QU6n-mE"
        autocomplete="off"
      />
      <input
        type="hidden"
        name="form_id"
        data-drupal-selector="edit-user-login-form"
        value="user_login_form"
      />
      <input
        id="edit-submit"
        type="submit"
        name="op"
        data-drupal-selector="edit-submit"
        class="button form-submit js-form-submit"
        value="Log in"
      />
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@nuxtjs/composition-api"

export default defineComponent({
    name: 'SignIn',
    setup() {
        const state = reactive({
            username: '',
            password: '',
        })

        return {
            state
        }
    }
})
</script>