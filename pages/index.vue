<template>
  <div id="main-content">
    <Banner />
    <Featured/>
    <MediaInfos/>
    <Agenda/>
    <ChangeJob/>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Banner from '../components/Banner'
import MediaInfos from '../components/MediaInfos'
import Agenda from '../components/Agenda'
import Featured from '../components/Featured'
import ChangeJob from '../components/ChangeJob'

export default defineComponent({
  components: {
    Banner,
    MediaInfos,
    Agenda,
    Featured,
    ChangeJob
  },
  setup() {
  },
})
</script>
