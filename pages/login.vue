<template>
  <main style="padding-top: 140px">
    <div class="page-top">
      <div class="wrapper-small">
        <ul class="breadcrumb">
          <li>
            <a href="/" itemprop="url"><span itemprop="title">Home</span></a>
          </li>
          <li>User</li>
          <li>Log in</li>
        </ul>
        <h1 class="title">Log in</h1>
      </div>
    </div>
    <div class="wrapper-login">
      <div class="wrapper">
        <tabs
          :options="{ useUrlFragment: false }"
          @clicked="tabClicked"
          @changed="tabChanged"
        >
          <tab name="Login">
            <SignIn />
          </tab>
          <tab name="Create new account">
            <SignUp />
          </tab>

          <tab name="Reset your password"> </tab>
        </tabs>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { Tabs, Tab } from 'vue-tabs-component'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export default defineComponent({
  name: 'Login',
  components: {
    Tabs,
    Tab,
    SignIn,
    SignUp,
  },

  setup() {
    const tabClicked = (selectedTab) => {
      return selectedTab
    }
    const tabChanged = (selectedTab) => {
      return selectedTab
    }
    

    return {
      tabClicked,
      tabChanged,
    }
  },
})
</script>