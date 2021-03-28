<template>
  <article class="card" :class='{active: expandCard}'>
    <h3 class="card-title">{{ingredient}} - <span>{{originalIngredient}}</span> </h3>
    <button class="card-expand-collapse" @click="expandCard = !expandCard">{{expandCard ? 'Collapse' : 'Expand' }}</button>

    <div class="card-description">
      <p>{{intro}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "card",

  props: ['originalIngredient', 'ingredient', 'intro'],


  data() {

    return {
      expandCard: false
    }
  },
};
</script>
