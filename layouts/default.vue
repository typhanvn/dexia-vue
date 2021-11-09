<template>
  <div>
    <Header :data-search="state.data_search"/>

    <nuxt></nuxt>

    <Footer />
  </div>
</template>

<script>
import { defineComponent, useContext, onMounted, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $axios } = useContext()

    const state = reactive({
      data_search: [],
    })

    const getDataSearch = () => {
      $axios.get(`/data_search.json`)
        .then(res => {
          if(res.data.code === 200) {
            state.data_search = res.data.data.list
          }
        })
    }

    onMounted(() => {
      getDataSearch()
    })

    return {
      state,
    }
  },
  
})
</script>
