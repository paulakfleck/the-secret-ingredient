<template>
  <div>
    <fixed-header>
      <header>
        <div class="wrap-container">
          <ul id="side-bar-menu">
            <li>
              Menu 1
            </li>
            <li>
              Menu 2
            </li>
          </ul>
          <a href="./" id="logo">The Secret Ingredient</a>
        </div>
      </header>
    </fixed-header>
    <main>
    <div class="wrap-container">
      <div id="welcome-message">
      <h1>Olá, {{ user.name }}!</h1>
      </div>
        <search>
          <form>
            <input type="text" placeholder="Buscar ingrediente..." />
            <button>
              Search
            </button>
          </form>
        </search>
        <avoid-items>
          <ul>
            <li>
              Item 1
            </li>
            <li>
              Item 2
            </li>
          </ul>
        </avoid-items>
        <favorite-items>
          <ul>
            <li>
              Item 1
            </li>
            <li>
              Item 2
            </li>
          </ul>
        </favorite-items>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user: {
        name: 'Paula'
      }
    }
  }
}
</script>
