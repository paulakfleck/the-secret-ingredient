<template>
  <div id="page-photo-scan">
    <form action="" enctype="multipart/form-data" @submit.prevent="onUpload">
      <input
        type="file"
        name="file"
        class="custom-file-input"
        ref="file"
        @change="onFileChanged"
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import PhotosService from "./services/PhotosService.js";

export default {
  name: "photo-scan",

  data() {
    return {
      selectedFile: null,
    };
  },

  methods: {
    onFileChanged(event) {
      // this.selectedFile = event.target.files[0];
      const file = this.$refs.file.files[0];
      this.selectedFile = file;

      console.log(this.selectedFile);

      console.log("onFileChanged");
    },

    onUpload(event) {
      const formData = new FormData();
      formData.append("file", this.selectedFile);

      console.log(formData);

      PhotosService.uploadPhoto(formData).then((response) => {
        console.log('response');
        console.log(response);
      });
    },
  },
};
</script>
