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
    </div>
  </div>
</template>

<script>
import Tesseract from "./../assets/scripts/tesseract.min.js";

export default {
  name: "modal",

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
        console.log(text);

        if (text) {
          this.foundIngredients = true;

          let parseIngredients = text.split(',');
          this.ingredients = [...parseIngredients];

          this.getIngredientData();
        }
      });
    },

    getIngredientData: function() {
      this.ingredients.forEach(ingredient => {
        IngredientsService.searchIngredient(ingredient).then((response) => {
        console.log(response);
      });
      });
    }
  },
};
</script>
