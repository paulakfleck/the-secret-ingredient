<template>
  <section>
  <h2>Quero evitar:</h2>
    <ul class="items-card">
      <li>
      <figure>
      </figure>
      <figcaption>
        Item 1
      </figcaption>
      </li>
      <li>
        <figure>
        </figure>
        <figcaption>
          Item 2
        </figcaption>
      </li>
      <li>
        +
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
