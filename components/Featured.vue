<template>
    <div :class="state.featured.other_classes" class="featured-list">
      <div class="wrapper">
        <div v-for="(item, i) in state.featured.items" :key="i" class="item">
          <div v-if="item.card" class="featured-card">
            <h3 class="title-large">{{ item.card.title_large }}</h3>
            <div class="image">
              <img v-lazy-load :alt="item.card.image.alt" :src="item.card.image.src" />
            </div>
            <div class="info">
              <div class="list-button">
                <a v-for="(link, id) in item.card.buttons" :key="id" :href="link.button_link" :class="'btn-'+link.button_color" class="btn btn-icon"
                > {{ link.button_text }} <span class="icon"></span></a>
              </div>
            </div>
            <nuxt-link to="detail-actu" class="link-to"></nuxt-link>
          </div>
          <div v-if="item.flash_info" class="flash-info">
            <h3 class="title-large">{{ item.flash_info.title_large }}</h3>
            <div class="list-new">
              <div v-for="(itemfl, id2) in item.flash_info.news" :key="id2" class="news-item">
                <div class="date-time">
                  <div class="day">{{itemfl.day}}</div>
                  <div class="month">{{itemfl.month}}</div>
                </div>
                <div class="content">{{itemfl.content}}</div>
                <div class="link-arrow"></div>
                <a href="#" class="link-to"></a>
              </div>
              <a href="#" :class="'btn-'+item.flash_info.button.button_color" class="btn btn-icon">{{item.flash_info.button.button_text}}<span class="icon"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {defineComponent, onMounted, reactive, useContext} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Featured',
  setup() {
    const { $axios } = useContext()

    const state = reactive({
      featured: {},
    })

    const getFeatured = () => {
      $axios.get(`/featured.json`)
        .then(res => {
          if(res.data.code === 200) {
            state.featured = res.data.data.featured
          }
        })
    }

    onMounted(() => {
      getFeatured()
    })

    return {
      state,
    }
  }
})
</script>
