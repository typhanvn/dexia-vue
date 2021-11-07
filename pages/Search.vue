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
    <div v-if="showDataSearch && showDataSearch.length">
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
                  {{ items.des }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light pagination">
        <div class="wrapper">
          <!-- <ul class="pagination-list">
            <li class="pager__item disabled pager__item--previous">
              <a href="#"></a>
            </li>
            <li class="pager__item is-active"><a href="#">01</a></li>
            <li class="pager__item"><a href="#">02</a></li>
            <li class="pager__item"><a href="#">03</a></li>
            <li class="pager__item"><a href="#">04</a></li>
            <li class="pager__item pager__item--next"><a href="#"></a></li>
          </ul> -->
          <jw-pagination
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
import { defineComponent, useRouter, reactive } from '@nuxtjs/composition-api'
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
  
  setup() {
    const router = useRouter()
    router.push('/Search')

    const customLabels = {
      first: '',
      last: '',
      previous: '<',
      next: '>',
    }

    const state = reactive({
      customLabels,
      pageOfItems: [],
    })

    const onChangePage = (pageOfItems) => {
      state.pageOfItems = pageOfItems
    }

    return {
      state,
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