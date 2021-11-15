export const state = () => ({
  locales: ['fr', 'en'],
  locale: 'fr',

})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

// export const getters = {
//   isAuthenticated(state) {
//     return state.auth.loggedIn
//   },

//   loggedInUser(state) {
//     console.log(state.auth.user, '123')
//     return state.auth.user
//   }
// };