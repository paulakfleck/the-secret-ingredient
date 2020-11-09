<template>
  <div>
    <fixed-header></fixed-header>
    
    <main>
      <div class="wrap-container">
        <section id="welcome-message">
          <h1>Olá, {{ user.name }}!</h1>
        </section>

        <form id="search-ingredients">
          <input type="text" placeholder="Buscar ingrediente..." />
          <button>
            Search
          </button>
        </form>

        <avoid-items></avoid-items>
        <favorite-items></favorite-items>

        <div id="camera-scan"></div>

      </div>
    </main>
  </div>
</template>

<script>
  import FixedHeader from './fragments/FixedHeader.vue'
  import AvoidItems from './fragments/AvoidItems.vue'
  import FavoriteItems from './fragments/FavoriteItems.vue'

export default {
  name: 'homepage',

  components: {
    FixedHeader,
    AvoidItems,
    FavoriteItems
  },

  data () {
    return {
      user: {
        name: 'Paula'
      }
    }
  }
}
</script>
