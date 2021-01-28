import axios from "axios"

export default {
  async uploadPhoto(photo) {
    let res = await axios.post(`http://localhost:3000/upload-photo/`, photo);
    return res.data;
  }
}
