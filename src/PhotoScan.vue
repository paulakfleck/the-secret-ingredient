<template>
  <div id="page-photo-scan">
     <input type="file" class="custom-file-input" @change="onFileChanged" />
  </div>
</template>

<script>
import PhotosService from "./services/PhotosService.js";

export default {
  name: 'photo-scan',

  data () {
    return {
      selectedFile: null
    }
  },

  methods: {
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
    },

 onUpload() {
      PhotosService.uploadPhoto(this.selectedFile).then((response) => {
        console.log('response');
        console.log(response);
      });
    }
  }
}
</script>
