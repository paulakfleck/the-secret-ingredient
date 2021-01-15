import axios from "axios"

export default {
  async searchIngredient(ingred) {
    let res = await axios.get(`http://localhost:3000/search-ingredient/${ingred}`);
    return res.data;
  }
}
