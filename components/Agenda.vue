<template>
    <div class="agenda-list">
      <div class="wrapper">
        <h2 class="title">{{state.agenda.title}}</h2>
        <div class="list-item">
          <div v-for="(item, i) in state.agenda.items" :key="i" class="agenda-item">
            <div class="date"> {{ item.d_date }} </div>
            <div class="title"> {{ item.title }} </div>
          </div>

        </div>
        <div
          class="progress"
          aria-valuemax="100"
          aria-valuemin="0"
          role="progressbar"
        >
          <span class="inProgress"></span>
        </div>
      </div>

    </div>
</template>

<script>
import {defineComponent, onMounted, reactive, useContext} from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'Agenda',
  setup() {
    const { $axios } = useContext()

    const state = reactive({
      agenda: {},
    })

    const getChangeJob = () => {
      $axios.get(`/agenda.json`)
        .then(res => {
          if(res.data.code === 200) {
            state.agenda = res.data.data.agenda
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
