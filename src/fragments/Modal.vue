<template>
  <div class="modal-overlay">
    <div id="modal">
      <h2>Leitor de ingredientes:</h2>
      <img v-bind:src="'../../backend/uploads/product-image/' + imageUrl" alt="" />

      <div class="cards-container" v-if="foundIngredients">
          <card v-for="ingredient in searchResult" :key="ingredient.searchedFor" :originalIngredient="ingredient.searchedFor" :ingredient="ingredient.ingredient" :intro="ingredient.intro"  ></card>
      </div>

      <loading v-if="loadingFlag"></loading>
    </div>
  </div>
</template>

<script>
import Loading from './Loading.vue';
import Tesseract from './../assets/scripts/tesseract.min.js';
import IngredientsService from './../services/IngredientsService.js';
import Card from "./Card.vue";

export default {
  name: "modal",

  components: {
    Loading,
    Card
  },

  props: ["imageUrl", "isTesseract"],

  data() {
    return {
      ingredients: [],
      foundIngredients: false,
      loadingFlag: true,
      searchResult: []
    };
  },

  created() {
    this.runTesseract();
  },

  methods: {
    runTesseract: function () {
      Tesseract.recognize(`../../backend/uploads/product-image/${this.imageUrl}`, "por", {
      }).then(({ data: { text } }) => {

        if (text) {
          this.foundIngredients = true;

          text = text.replace(/\r?\n|\r/g, '').replace(/ingredientes/gi, '').trim();

          // Split ingredients by "(",")", ",", " e ", " and ", ":", "."
          let splitText = text.split(/(\se\s)|(\sand\s)|[\(),:.]+/gi);
          let tempIngredients = [...splitText];

          this.ingredients = tempIngredients.filter(function(ingredient) {
            if ((ingredient !== undefined) && (ingredient !== " e ") && (ingredient !== " ") && (ingredient !== "")) {
              return ingredient;
            }
          });

          this.getIngredientData();
        }
      });
    },

    getIngredientData: function() {
      this.ingredients.forEach(ingredient => {
        IngredientsService.searchIngredient(ingredient).then((response) => {
          this.loadingFlag = false;
          this.searchResult.push(response);
        });
      });
    }
  },
};
</script>
