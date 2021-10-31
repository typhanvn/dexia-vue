import Vuex from 'vuex'

const changeLanguage = () => {
    return new Vuex.Store({
        state: {
            langs: [] 
        },
        mutations: {
            SET_LANG (state, payload) {
                state.langs = payload
            }
        },
        actions: {
            setLang(vuexContext, payload) {
                vuexContext.commit('SET_LANG', payload)
            }
        },
        getters: {
            langs(state) {
                return state.langs
            }
        }
    })
}

export default changeLanguage