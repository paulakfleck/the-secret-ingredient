<template>
  <div>
    <fixed-header>
      <header>
        <ul>
          <li>
            Menu 1
          </li>
          <li>
            Menu 2
          </li>
        </ul>
      </header>
    </fixed-header>
    <main>
    <div id="welcome-message">
    Olá, {{ user.name }}!
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
