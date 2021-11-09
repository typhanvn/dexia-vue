<template>
  <div class="reaserch" style="margin-top: 160px">
    <div class="page-top">
      <div class="wrapper-small">
        <ul class="breadcrumb">
          <li><a href="#">accueil</a></li>
          <li>Résultats de recherche</li>
        </ul>
        <div class="sub-title">
          Votre recherche pour
          <span>communication externe et réglementée</span>
        </div>
      </div>
    </div>
    <div v-if="state.data">
      <div class="bg-light featured-card-list list-research list-short">
        <div class="wrapper">
          <h2 class="title">
            {{ showDataSearch && showDataSearch.length }} résultats
          </h2>
          <div class="list-card">
            <div
              v-for="(items, i) in state.pageOfItems"
              :key="i"
              class="featured-card"
            >
              <div class="info">
                <p class="title">
                  <a href="#">{{ items.title }}</a>
                </p>
                <p class="date">{{ items.date }}</p>
                <p class="description">
                  {{ items.descriptions }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light pagination">
        <div class="wrapper">
          <jw-pagination
            :class="{ isNumber : AddClass }"
            :items="showDataSearch"
            :labels="state.customLabels"
            :styles="state.customStyles"
            @changePage="onChangePage"
          />
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <p>Not Found</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import JwPagination from 'jw-vue-pagination'

export default defineComponent({
  name: 'Search',
  components: {
    JwPagination,
  },

  props: {
    showDataSearch: {
      type: Array,
      default: () => [],
    }
  },
  
  setup(props) {
    const customLabels = {
      first: '',
      last: '',
      previous: '<',
      next: '>',
    }

    const state = reactive({
      customLabels,
      pageOfItems: [],
      isNumber: false,
      data: props.showDataSearch && props.showDataSearch.length
    })

    const AddClass = (() => {
      if ( state.isNumber >= 100) {
        state.isNumber = true
      }
    })

    const onChangePage = (pageOfItems) => {
      state.pageOfItems = pageOfItems
    }

    return {
      state,
      AddClass,
      onChangePage,
    }
  },
})
</script>

<style lang="scss" scoped>
.not-found {
  padding: 20px;
  text-align: center;
  display: block;
  font-size: 28px;
  font-weight: bold;
  color: black;
}

.reaserch {
  display: none;
}
</style>