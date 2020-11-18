<template>
  <section id="avoid-items">

  <h2>Quero evitar:</h2>
    <ul class="items-card">
      <li>
        <figure>
          a
        </figure>
        <figcaption>
          Item 1
        </figcaption>
      </li>
      <li>
        <figure>
          b
        </figure>
        <figcaption>
          Item 2
        </figcaption>
      </li>
      <li>
        <figure>
          <span id="addAvoidItem">+</span>
        </figure>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'avoid-items',
  data () {
    return {
      user: {
        name: 'Paula'
      }
    }
  }
}
</script>
