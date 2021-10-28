<template>
    <div class="media-infos">
      <div class="image">
        <img
          alt="img-media-infos.jpg"
          src="~/assets/images/img-media-infos.jpg"
        />
      </div>
      <div class="media-infos__body">
        <div class="btn-closed"></div>
        <h3 class="title">{{state.media_info.title}}</h3>
        <h4 class="sub-title">{{state.media_info.sub_title}}</h4>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="description" v-html="state.media_info.description"></div>
        <a href="#" class="btn btn-icon btn-readmore"> <span class="icon"></span></a>
      </div>
    </div>
</template>

<script>
import {defineComponent, onMounted, reactive, useContext} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MediaInfos',
  setup() {
    const { $axios } = useContext()

    const state = reactive({
      media_info: {},
    })

    const getMediaInfo = () => {
      $axios.get(`/media-info.json`)
        .then(res => {
          if(res.data.code === 200) {
            state.media_info = res.data.data.banner_info
          }
        })
    }

    onMounted(() => {
      getMediaInfo()
    })

    return {
      state,
    }
  }
})
</script>
