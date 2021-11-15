<template>
  <form
    id="user-register-form"
    class="confirm-parent password-parent user-form user-register-form"
    accept-charset="UTF-8"
  >
    <label class="form-required js-form-required" for="edit-mail"
      >Email address</label
    >
    <input
      id="edit-mail"
      v-model="state.email"
      type="email"
      name="mail"
      data-drupal-selector="edit-mail"
      class="required form-email"
      aria-required="true"
      maxlength="254"
      required=""
      size="60"
      aria-describedby="edit-mail--description"
      value=""
    />
    <div id="edit-mail--description" class="description">
      A valid email address. All emails from the system will be sent to this
      address. The email address is not made public and will only be used if you
      wish to receive a new password or wish to receive certain news or
      notifications by email.
    </div>
    <label class="form-required js-form-required" for="edit-name"
      >Username</label
    >
    <input
      id="edit-name"
      v-model="state.username"
      type="text"
      name="name"
      data-drupal-selector="edit-name"
      class="required form-text username"
      aria-required="true"
      maxlength="60"
      required=""
      size="60"
      aria-describedby="edit-name--description"
      value=""
      autocapitalize="off"
      spellcheck="false"
      autocorrect="off"
    />
    <div id="edit-name--description" class="description">
      Several special characters are allowed, including space, period (.),
      hyphen (-), apostrophe ('), underscore (_), and the @ sign.
    </div>
    <label class="form-required js-form-required" for="edit-pass-pass1"
      >Password</label
    >
    <input
      id="edit-pass-pass1"
      v-model="state.password"
      type="password"
      name="pass[pass1]"
      data-drupal-selector="edit-pass-pass1"
      class="required form-text js-password-field password-field"
      aria-required="true"
      maxlength="128"
      required=""
      size="25"
      autocomplete="new-password"
    />
    <label class="form-required js-form-required" for="edit-pass-pass2"
      >Confirm password</label
    >
    <input
      id="edit-pass-pass2"
      v-model="state.password"
      type="password"
      name="pass[pass2]"
      data-drupal-selector="edit-pass-pass2"
      class="required form-text js-password-confirm password-confirm"
      aria-required="true"
      maxlength="128"
      required=""
      size="25"
      autocomplete="new-password"
    />
    <div id="edit-pass--description" class="description">
      Provide a password for the new account in both fields.
    </div>
    <input
      type="hidden"
      name="form_build_id"
      data-drupal-selector="form-jhrpv00jkvieawsnnhmj7wfbdnvscmvrlgtt-7fzbxg"
      value="form-jhRPv00jkVIeAWsnNhMj7wfBDnvSCMvRlgTT_7FZbXg"
      autocomplete="off"
    />
    <input
      type="hidden"
      name="form_id"
      data-drupal-selector="edit-user-register-form"
      value="user_register_form"
    />
    <input
      type="submit"
      name="op"
      value="Create new account"
      class="button form-submit js-form-submit button--primary"
    />
    <div
      class="js-password-confirm password-confirm js-password-confirm-message"
      aria-atomic="true"
      aria-live="polite"
    >
      Passwords match: <span></span>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SignIn',
  setup() {
    const state = reactive({
      email: '',
      username: '',
      password: '',
    })

    // const parOptions = {
    //   username: state.username,
    //   password: state.password,
    //   email: state.email
    // }

    // const login = () => {
    //   $axios.post('accounts/token/',{parOptions})
    //     .then(res => {
    //       this.$auth.setToken('local', "Bearer " + response.data.access);
    //       this.$auth.setRefreshToken('local', response.data.refresh);
    //       this.$auth.setUserToken(response.data.access);
    //     })
    // }

    onMounted(() => {
      
    })

    return {
      state,
      // login
    }
  },

  methods: {
      // async login() {
      //   try {
      //     const response = await this.$axios.post('accounts/token/', {
      //       username: this.username,
      //       password: this.password,
      //       email: this.email
      //     });

      //     await this.$auth.setToken('local', "Bearer " + response.data.access);
      //     await this.$auth.setRefreshToken('local', response.data.refresh);
      //     await this.$auth.setUserToken(response.data.access);  
      //     alert(1)
      //     console.log(response.data, '1')
      //   } catch (e) {
      //     this.error = 'Username or Password not valid'
      //   }
      // }
    }
})
</script>