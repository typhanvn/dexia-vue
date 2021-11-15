<template>
<div>
  <header id="header" class="header" :class="{ 'open-menu': isActiveMenu }" >
    <div class="header-top">
      <div class="header-top__left">
        <a class="logo" href=""
          @click.prevent="hideSearch()"><img src="~/assets/images/logo.svg" alt="logo.svg"
        /></a>
        <div class="contact">
          <div class="contact__text">
            <i class="icon-phone"></i>
            {{ $t('header.label_phone') }}
          </div>
          <a href="tel:112" class="contact__phone">112</a>
        </div>
      </div>
      <div class="header-top__right">
        <div class="date-time">{{ $t('header.label_date') }}</div>
        <ul class="list-icon">
          <li class="user">
            <nuxt-link to="login" class="link-to"></nuxt-link>
            <a
              ><span>{{ $t('header.welcome') }} </span
              ><i class="icon-user"></i
            >
            </a>
            <!-- <ul>
              <li><a href="/fr/user/220/edit">Profile</a></li>
              <li><a href="/fr/user/220/edit">Logout</a></li>
            </ul> -->
          </li>
          <li class="search">
            <a href @click.prevent="isOpen()"><i class="icon-search"></i></a>
          </li>
          <li>
            <a href="#"><i class="icon-heart-empty"></i></a>
          </li>
        </ul>
        <div
          class="dropdown-language"
          :class="{ open: isOpenLang }"
          @click="openLang"
        >
          <button class="dropdown-language__btn">{{ langCurrent }}</button>
          <ul class="dropdown-language__content">
            <li
              v-for="(item, index) in languages"
              :key="index"
              @click="changeLang(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <form action="#" class="form-search" :class="{ 'is-open': isActive }">
          <div class="close-search" @click="closeSearch()"></div>
          <div class="form-group">
            <input
              v-model.trim="search"
              type="text"
              class="form-control"
              placeholder="Rechercher"
            />
            <div class="btn-search">
              <input
                type="submit"
                value="Search"
                class="input-search"
                @click.prevent="isResault()"
              />
              <i class="icon-search">
              </i>
            </div>
          </div>
        </form>

        <div class="btn-collapse" :class="{ active : isActiveMenu }"
           @click="openMenu()" title="">
          <span class="left"></span>
          <span class="right"></span>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="wrapper">
        <div class="menu-top-mb">
          <div class="user-date">
            <div class="name">Bonjour Sophie</div>
            <div class="date-time">Mardi 12 décembre 2020</div>
          </div>
          <div class="contact">
            <div class="contact__text">
              <i class="icon-phone"></i>
              N° d’urgence local
            </div>
            <a href="tel:0101010101" class="contact__phone"
              >FR : 01 01 01 01 01</a
            >
          </div>
        </div>
        <ul class="main-menu">
          <li class="has-sub is-active">
            <nuxt-link to="mon-entreprise" :class="{ show : isActiveMenu }"
                       @click="openSubMenu()"
              >{{ $t('header.main_menu.li_enter') }}
            </nuxt-link>
            <ul class="submenu">
              <li><a href="#">Le comité de direction</a></li>
              <li class="has-child">
                <a href="#">Les filières</a>
                <ul class="submenu-child">
                  <li>
                    <a href="#">Les filières</a>
                    <ul>
                      <li><a href="#">Actifs</a></li>
                      <li><a href="#">Finance</a></li>
                      <li><a href="#">Financement & marchés</a></li>
                      <li>
                        <a href="#">Opérations et systèmes d’information</a>
                      </li>
                      <li><a href="#">Risques</a></li>
                      <li><a href="#">Audit</a></li>
                      <li><a href="#">Group Strategy and Structuring</a></li>
                      <li>
                        <a href="#"
                          >Secrétariat général, Juridique et Conformité</a
                        >
                      </li>
                      <li><a href="#">Communication</a></li>
                      <li><a href="#">Ressources humaines</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Les entités internationales</a></li>
              <li>
                <a href="#">Les instances représentatives du personnel</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">{{ $t('header.main_menu.li_act') }}</a>
          </li>
          <li>
            <a href="#">{{ $t('header.main_menu.li_act') }}</a>
          </li>
          <li>
            <a href="#">{{ $t('header.main_menu.li_eve') }}</a>
          </li>
          <li>
            <a href="#">{{ $t('header.main_menu.li_info') }}</a>
          </li>
          <li>
            <a href="#">{{ $t('header.main_menu.li_poli') }}</a>
          </li>
          <li>
            <a href="#">{{ $t('header.main_menu.li_app') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div v-if="search !=''" :class="{ hide: hide }">
      <Search :show-data-search="showDataSearch" />
    </div>
</div>
</template>

<script>
import {
  defineComponent,
  ref,
  useStore,
  onMounted,
  useRouter,
  reactive,
  toRefs,
  computed,
} from '@nuxtjs/composition-api'
import Search from '../../pages/Search'

export default defineComponent({
  name: 'Header',
  components: {
    Search,
  },
  props: {
    dataSearch: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const store = useStore()
    const router = useRouter()
    const isOpenLang = ref(false)
    const languages = ref([])
    const langCurrent = ref()

    const state = reactive({
      isActive: false,
      isActiveMenu: false,
      hide: true,
      search: '',
      toogle: '',

      showDataSearch: computed(() => {
        if (state.search) {
          return props.dataSearch.filter((item) => {
            return item.title.toLowerCase().includes(state.search.toLowerCase())
          })
        }
      }),
    })

    const isOpen = () => {
      state.isActive = true
      state.search = ''
    }

    const closeSearch = () => {
      state.isActive = false
      state.search = ''
    }

    const isResault = () => {
      state.hide = false
      state.isActive = false
      if(state.search !== '') {
        router.push({
          path: `/Search`,
        })
      }
    }

    const hideSearch = () => {
      state.hide = true
      router.push({
          path: `/`,
        })
    }

    const openLang = () => {
      if (isOpenLang.value === false) {
        isOpenLang.value = true
      } else {
        isOpenLang.value = false
      }
    }

    const openMenu = () => {
      state.isActiveMenu = !state.isActiveMenu
      const el = document.getElementsByTagName( 'html' )[0];
      state.isActiveMenu ? el.classList.add("open-menu") : el.classList.remove("open-menu");
    }

    const openSubMenu = () => {
      state.isActiveMenu = !state.isActiveMenu
    }

    const getLang = () => {
      languages.value = store.state.locales
      langCurrent.value = store.state.locale
    }

    const changeLang = (lang) => {
      store.commit('SET_LANG', lang)
      router.push({
        path: `${router.history.current.path}?lang=${lang}`,
      })

      langCurrent.value = lang
    }

    onMounted(getLang)

    return {
      ...toRefs(state),
      isOpen,
      closeSearch,
      isResault,
      isOpenLang,
      openMenu,
      openSubMenu,
      languages,
      langCurrent,
      openLang,
      getLang,
      changeLang,
      hideSearch
    }
  },
})
</script>

<style lang="scss" scoped>
.main-menu {
  .nuxt-link-exact-active {
    background-color: #0296c4;
  }
}

.dropdown-language__content li,
.dropdown-language__btn {
  text-transform: uppercase;
}

.dropdown-language__content li {
  padding: 0.1875rem 0.3125rem;
}

.reaserch {
  display: block;
}
</style>
