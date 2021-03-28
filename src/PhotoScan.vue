<template>
  <section>
    <div id="page-photo-scan">
      <h1>
        Selecione a imagem que deseja escanear, ou fotografe diretamente a
        partir da câmera.
      </h1>
      <h2>
        Lembre-se: quanto mais focada e com contraste a imagem, maiores as
        chances do leitor em conseguir escanear os ingredientes.
        <a
          href="../../backend/uploads/product-image/ingredientes.jpg"
          target="_blank"
          >Exemplo.</a
        >
      </h2>
      <input
        type="file"
        name="file"
        class="custom-file-input"
        ref="file"
        @change="onFileChanged"
        accept="image/*;capture=camera"
      />
    </div>
    <modal v-if="showModal" :imageUrl="modalImageUrl" :isTesseract="true"></modal>
  </section>
</template>

<script>
import PhotosService from "./services/PhotosService.js";
import Modal from "./fragments/Modal.vue";

export default {
  name: "photo-scan",

  components: {
    Modal,
  },

  data() {
    return {
      selectedFile: null,
      showModal: false,
      modalImageUrl: null,
    };
  },

  methods: {
    onFileChanged() {
      const file = this.$refs.file.files[0];
      this.selectedFile = file;

      this.onUpload();
    },

    onUpload() {
      console.log("onUpload");
      const formData = new FormData();
      formData.append("file", this.selectedFile);

      PhotosService.uploadPhoto(formData)
        .then((response) => {
          console.log("response");
          console.log(response);

          this.modalImageUrl = response.image;
          this.showModal = true;
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
