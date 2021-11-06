<template>
  <header id="header" class="header">
    <div class="header-top">
      <div class="header-top__left">
        <nuxt-link to="/" class="logo"
          ><img src="~/assets/images/logo.svg" alt="logo.svg"
        /></nuxt-link>
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
            <a href="#"
              ><span>{{ $t('header.welcome') }}</span
              ><i class="icon-user"></i
            ></a>
            <ul>
              <li><a href="/fr/user/220/edit">Profile</a></li>
              <li><a href="/fr/user/220/edit">Logout</a></li>
            </ul>
          </li>
          <li class="search">
            <a href="#"><i class="icon-search"></i></a>
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
        <form action="#" class="form-search">
          <div class="close-search"></div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Rechercher" />
            <div class="btn-search">
              <input type="submit" value="Search" class="input-search" /><i
                class="icon-search"
              ></i>
            </div>
          </div>
        </form>
        <a href="javascript: void(0);" class="btn-collapse" title="">
          <span class="left"></span>
          <span class="right"></span>
        </a>
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
          <div class="dropdown-language">
            <button class="dropdown-language__btn">Français</button>
            <ul class="dropdown-language__content">
              <li><a href="#">Australia</a></li>
              <li><a href="#">Germany</a></li>
              <li><a href="#">United States</a></li>
            </ul>
          </div>
        </div>
        <ul class="main-menu">
          <li class="has-sub">
            <nuxt-link to="mon-entreprise">{{
              $t('header.main_menu.li_enter')
            }}</nuxt-link>
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
</template>

<script>
import {
  defineComponent,
  ref,
  useStore,
  onMounted,
  useRouter
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Header',
  components: {},
  setup() {
    const store = useStore()
    const router = useRouter()
    const isOpenLang = ref(false)
    const languages = ref([])
    const langCurrent = ref()

    const openLang = () => {
      if (isOpenLang.value === false) {
        isOpenLang.value = true
      } else {
        isOpenLang.value = false
      }
    }

    const getLang = () => {
      languages.value = store.state.locales
      langCurrent.value = store.state.locale
    }

    const changeLang = (lang) => {
      store.commit('SET_LANG', lang)
      router.push({
        path: `${router.history.current.path}?lang=${lang}`
      })

      langCurrent.value = lang
    }

    onMounted(getLang)

    return {
      isOpenLang,
      languages,
      langCurrent,
      openLang,
      getLang,
      changeLang
    }
  }
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
</style>
