<template>
  <div class="change-job">
    <div class="image">
      <img alt="img-change-job.jpg" src="~/assets/images/img-change-job.jpg" />
    </div>
    <div class="content">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="title" v-html="state.change_job.title"></div>
      <a href="#" class="btn btn-light">Voir toutes les annonces</a>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, reactive, useContext} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ChangeJob',
  setup() {
    const { $axios } = useContext()

    const state = reactive({
      change_job: {},
    })

    const getChangeJob = () => {
      $axios.get(`/change-job.json`)
        .then(res => {
          if(res.data.code === 200) {
            state.change_job = res.data.data.change_job
          }
        })
    }

    onMounted(() => {
      getChangeJob()
    })

    return {
      state,
    }
  }
})
</script>
