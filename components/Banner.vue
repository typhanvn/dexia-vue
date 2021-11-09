<template>
    <div v-if="state.sliders.length" class="banner">
        <div class="banner__slider">
          <VueSlickCarousel :arrows="true" :dots="false">
            <div v-for="(item,index) in state.sliders" :key="index" class="banner-item">
              <div class="image">
                <!-- after map data API -->
                <img v-lazy-load :alt="item.image.alt" :src="item.image.src" />
                </div>
              <div class="banner-item__content">
                <div class="date">{{item.date}}</div>
                <div class="title">{{item.title}}</div>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="description" v-html="item.description"></div>
                <div class="button-list">
                  <div v-for="(button, i) in item.buttons" :key="i" class="action-flag flag">
                    <a :href="button.button_link" :class="'btn-'+button.button_color" class="btn">{{button.button_text}}</a>
                  </div>
                </div>
              </div>
            </div>
        </VueSlickCarousel>
        </div>
        <div class="progressBarContainer"></div>
        <div class="group-arrow"></div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {defineComponent, onMounted, reactive, useContext} from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'Banner',
    components: { VueSlickCarousel },
    setup() {
      const { $axios } = useContext()

      const state = reactive({
        sliders: [],
      })

      const getSlider = () => {
        $axios.get(`/slider.json`)
        .then(res => {
          if(res.data.code === 200) {
            state.sliders = res.data.data.sliders
          }
        })
      }

      onMounted(() => {
        getSlider()
      })

      return {
        state,
      }
    }
})
</script>

<style lang="scss">
    .banner-item {
      display: flex !important;
    }
    .slick-next::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #002596;
      z-index: 2;
    }
</style>
