<template>
  <main id="main-content" style="padding-top: 140px">
    <div class="page-top">
      <div class="wrapper-small">
        <ul class="breadcrumb">
          <li><a href="#">accueil</a></li>
          <li>mes événements</li>
        </ul>
        <h1 class="title">Mes événements</h1>
      </div>
    </div>
    <div class="wrap-list">
      <div class="bg-light featured-card-list list-event pb-5 pt-25">
        <div class="wrapper">
          <div class="list-card">
            <div class="featured-card">
              <div class="image">
                <img alt="i-actu0.jpg" src="~/assets/images/i-actu0.jpg" />
              </div>
              <div class="info">
                <p class="date">28.11.20</p>
                <p class="title">D-night</p>
                <p class="description">Lorem ipsum dolor sit</p>
                <a href="#" class="category">inscrit</a>
                <div class="list-button">
                  <a href="#" class="btn btn-icon btn-readmore"
                    >Voir l’événement <span class="icon"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="featured-card">
              <div class="image">
                <img alt="i-list6.jpg" src="~/assets/images/i-list6.jpg" />
              </div>
              <div class="info">
                <p class="date">28.11.20</p>
                <p class="title">Concours photo</p>
                <p class="description">
                  Lorem ipsum dolor sit admet adispicing
                </p>
                <div class="list-button">
                  <a href="#" class="btn btn-icon btn-readmore"
                    >Voir l’événement <span class="icon"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="featured-card">
              <div class="image">
                <img alt="i-actu1.jpg" src="~/assets/images/i-actu1.jpg" />
              </div>
              <div class="info">
                <p class="date">28.11.20</p>
                <p class="title">Management Board</p>
                <p class="description">Lorem ipsum dolor sit</p>
                <div class="list-button">
                  <a href="#" class="btn btn-icon btn-readmore"
                    >Voir l’événement <span class="icon"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="featured-card">
              <div class="image">
                <img alt="i-detail1.png" src="~/assets/images/i-detail1.png" />
              </div>
              <div class="info">
                <p class="date">28.11.20</p>
                <p class="title">Sport</p>
                <p class="description">
                  Lorem ipsum dolor sit admet adispicing
                </p>
                <div class="list-button">
                  <a href="#" class="btn btn-icon btn-readmore"
                    >Voir l’événement <span class="icon"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="featured-card">
              <div class="image">
                <img alt="i-actu5.jpg" src="~/assets/images/i-actu5.jpg" />
              </div>
              <div class="info">
                <p class="date">28.11.20</p>
                <p class="title">D-night</p>
                <p class="description">Lorem ipsum dolor sit</p>
                <div class="list-button">
                  <a href="#" class="btn btn-icon btn-readmore"
                    >Voir l’événement <span class="icon"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="featured-card">
              <div class="image">
                <img alt="i-actu0.jpg" src="~/assets/images/i-actu0.jpg" />
              </div>
              <div class="info">
                <p class="date">28.11.20</p>
                <p class="title">Concours photo</p>
                <p class="description">
                  Lorem ipsum dolor sit admet adispicing
                </p>
                <a href="#" class="category">inscrit</a>
                <div class="list-button">
                  <a href="#" class="btn btn-icon btn-readmore"
                    >Voir l’événement <span class="icon"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="wrapper">
          <ul class="pagination-list">
            <li class="pager__item disabled pager__item--previous">
              <a href="#"></a>
            </li>
            <li class="pager__item is-active"><a href="#">01</a></li>
            <li class="pager__item"><a href="#">02</a></li>
            <li class="pager__item"><a href="#">03</a></li>
            <li class="pager__item"><a href="#">04</a></li>
            <li class="pager__item pager__item--next"><a href="#"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ListEvent',
}
</script>