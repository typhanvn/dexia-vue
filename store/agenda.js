// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// const store = new Vuex.Store({
//     state: () => ({
//       data: [
        
//       ]
//     }),

//     getters: () =>({
//       getDataBanner (state) {
//         return state.data
//       }
//     }),

//     mutations: () => ({
//       SET_AGENDA (state, data) {
//         state.data = data
//       }
//     }),

//     actions: () => ({
//       async getBanner ({ commit }) {
//         try {
//           const http = 'http://www.drupal.msa.staging.fides.io/'
//           const json = '?_format=json'

//           const { data } = await this.$axios.get(`${http}node/246${json}`)
//           commit('SET_AGENDA', data)
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     })
//   })

// export default store; 