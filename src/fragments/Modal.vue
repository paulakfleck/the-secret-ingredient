<template>
  <div class="modal-overlay">
    <div id="modal">
      <h2>Leitor de ingredientes:</h2>
      <img v-bind:src="'../../backend/uploads/product-image/' + imageUrl" alt="" />

      <ul v-if="foundIngredients">
        <li v-for="ingredient in ingredients" :key="ingredient">
          {{ingredient}}
        </li>
      </ul>

      <loading></loading>
    </div>
  </div>
</template>

<script>
import Loading from './Loading.vue'
import Tesseract from './../assets/scripts/tesseract.min.js';

export default {
  name: "modal",

  components: {
    Loading
  },

  props: ["imageUrl", "isTesseract"],

  data() {
    return {
      ingredients: [],
      foundIngredients: false
    };
  },

  created() {
    this.runTesseract();
  },

  methods: {
    runTesseract: function () {
      console.log(this.imageUrl);

      Tesseract.recognize(`../../backend/uploads/product-image/${this.imageUrl}`, "por", {
        logger: (m) => console.log(m)

      }).then(({ data: { text } }) => {

        if (text) {
          this.foundIngredients = true;

          // Separate by comma
          let splitComma = text.split(',');

          let tempIngredients = [...splitComma];

          tempIngredients.forEach(ingredient => {
            // Separate by "e"
            if (ingredient.indexOf(' e ') > -1) {
              delete tempIngredients[ingredient];
              let splitAnd = ingredient.split(' e ');

              this.ingredients = [...this.ingredients, ...splitAnd];
            }
          });

          // Replace symbols
          tempIngredients.forEach(ingredient => {
            let re = new RegExp(/[^\w\s]/gi);

            if (re.test(ingredient)) {
              delete tempIngredients[ingredient];

              this.ingredients = [...this.ingredients, ingredient.trim()];
            }
          });



          this.getIngredientData();
        }
      });
    },

    getIngredientData: function() {
      // this.ingredients.forEach(ingredient => {
      //   console.log(`looking for: ${ingredient}`);

      //   IngredientsService.searchIngredient(ingredient).then((response) => {
      //     console.log(response);
      //   });
      // });
    }
  },
};
</script>
