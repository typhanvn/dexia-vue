<template>
  <main id="main-content" style="padding-top: 140px;">
    <div class="page-top">
      <div class="wrapper-small">
        <ul class="breadcrumb">
          <li><a href="#">accueil</a></li>
          <li><a href="#">mes actualités</a></li>
          <li>Titre H1 Lorem ipsum dolor sit amet consectetur</li>
        </ul>
        <h1 class="title">Titre H1 Lorem ipsum dolor sit amet consectetur</h1>
      </div>
    </div>

    <div class="block-detail">
      <div class="wrapper-small">
        <p class="date icon">PUBLIÉ LE 02.01.2020</p>
        <p class="sub-title">
          Chapô Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum non molestie purus, posuere porta nunc.
        </p>
        <div class="image">
          <img alt="i-detail1.png" src="~/assets/images/i-detail1.png" />
        </div>
        <div class="quote-text">
          <div class="quote">
            <p>
              Exergue lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum non molestie purus, posuere porta nunc.
            </p>
          </div>
          <div class="description">
            <p>
              Nunc nibh neque, tempus at consectetur non, fringilla ut neque.
              Etiam auctor, urna eu aliquam convallis, diam lacus interdum sem,
              ac tristique nisi tortor id metus. Nullam semper felis vitae
              bibendum tempus.Nunc nibh neque, tempus at consectetur non,
              fringilla ut neque. Etiam auctor, urna eu aliquam convallis, diam
              lacus interdum sem, ac tristique nisi tortor id metus.
            </p>
          </div>
        </div>
        <div>
          <h2>H2 Lorem ipsum dolor sit amet</h2>
          <h3>H3 Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
            fermentum sem, eget hendrerit dolor. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam tristique, justo eget ultricies ullamcorper, risus ex tempor
            ex, eu fermentum massa lorem sed mi. Donec et varius nulla. Nam eget
            faucibus nulla, vel finibus libero. Donec in venenatis dolor. Proin
            sit amet tristique dolor, at molestie arcu. Mauris rhoncus bibendum
            semper. Vestibulum in accumsan neque. Proin dignissim nibh velit,
            nec condimentum leo ornare non. Quisque interdum vulputate lorem
            feugiat malesuada. In congue dapibus aliquet. In scelerisque felis
            et bibendum ullamcorper.
          </p>
        </div>
        <div class="image-text">
          <div class="wrap-image">
            <img alt="i-detail1.png" src="~/assets/images/i-detail2.jpg" />
          </div>
          <div class="description">
            <p>
              Nunc nibh neque, tempus at consectetur non, fringilla ut neque.
              Etiam auctor, urna eu aliquam convallis, diam lacus interdum sem,
              ac tristique nisi tortor id metus. Nullam semper felis vitae
              bibendum tempus.Nunc nibh neque, tempus at consectetur non,
              fringilla ut neque. Etiam auctor, urna eu aliquam convallis, diam
              lacus interdum sem.
            </p>
          </div>
        </div>
        <div class="image-text right">
          <div class="wrap-image">
            <img alt="i-detail1.png" src="~/assets/images/i-detail3.jpg" />
          </div>
          <div class="description">
            <p>
              Nunc nibh neque, tempus at consectetur non, fringilla ut neque.
              Etiam auctor, urna eu aliquam convallis, diam lacus interdum sem,
              ac tristique nisi tortor id metus. Nullam semper felis vitae
              bibendum tempus.Nunc nibh neque, tempus at consectetur non,
              fringilla ut neque. Etiam auctor, urna eu aliquam convallis, diam
              lacus interdum sem, ac tristique nisi tortor id metus.
            </p>
          </div>
        </div>
        <div class="video">
          <iframe
            height="500"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&amp;loop=1"
          ></iframe>
        </div>
        <div>
          <p>
            Nulla facilisi. Nunc consectetur urna lacinia ex rutrum, eget ornare
            massa vulputate. Vestibulum ligula quam, lobortis lobortis semper
            eget, ornare ac dolor. Suspendisse luctus rutrum magna sed
            vestibulum. Etiam vel est porttitor, porta eros a, lacinia massa.
            Fusce eu odio leo. Vestibulum commodo tempus arcu, in facilisis eros
            tincidunt a. Integer suscipit lectus in sapien tristique, a eleifend
            massa finibus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </div>
        <div class="tags">
          <a href="#" download="">Communication interne</a>
          <a href="#" download="">Communication externe et réglementée</a>
          <a href="#" download="">Communication de crise</a>
          <a href="#" download="">audit</a>
          <a href="#" download="">Conformité</a>
          <a href="#" download="">risques</a>
          <a href="#" download="">Gestion d’actifs</a>
          <a href="#" download="">Communication</a>
          <a href="#" download="">Finance</a>
          <a href="#" download="">Financement et marchés</a>
        </div>
        <div class="list-button list-favorite">
          <a href="#" class="btn btn-favorite">ajouter à mes favoris </a
          ><a href="#" class="btn btn-like">j’aime</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {defineComponent, onMounted, reactive, useContext} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DetailActu',
  components: {},
  setup() {
    const { $axios } = useContext()

    const state = reactive({
      detail: [
          
      ],
      images: {
        url: '/_nuxt/assets/images/img-act-1.jpg',
        alt: 'img-media-infos.jpg'
      }
    })

    const getDetail = () => {
      $axios.get(`/detail.json`)
        .then(res => {
          if(res.data.code === 200) {
            state.detail = res.data.data.detail
          }
        })
    }

    onMounted(() => {
      getDetail()
    })

    return {
      state,
    }
  }
})
</script>