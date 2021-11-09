  <template>
  <div class="change-job">
    <div class="image">
      <img v-lazy-load :alt="state.alt" :src="state.src" />
    </div>
    <div class="content">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="title" v-html="state.change_job.title"></div>
      <a href="#" class="btn btn-light">{{ state.btn }}
        <nuxt-link to="ListEvent" class="link-to"/>
      </a>
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
      alt: '',
      src: '',
      btn: ''
    })

    const getChangeJob = () => {
      $axios.get(`/change-job.json`)
        .then(res => {
          if(res.data.code === 200) {
            state.change_job = res.data.data.change_job
            state.alt = state.change_job.image && state.change_job.image.alt
            state.src = state.change_job.image && state.change_job.image.src
            state.btn = state.change_job.button && state.change_job.button.button_text
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
