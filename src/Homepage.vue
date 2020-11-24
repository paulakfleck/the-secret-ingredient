<template>
  <div id="page-homepage">
    <main>
      <div class="wrap-container">
        <section id="welcome-message">
          <h1>Olá, {{ user.name }}!</h1>
        </section>

        <form id="search-ingredients">
          <input type="text" placeholder="Buscar ingrediente..." />
          <button id="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="23.48" height="23.569" viewBox="0 0 23.48 23.569">
                <g id="loupe" transform="translate(-0.96)">
                  <g id="Group_5" data-name="Group 5" transform="translate(0.96)">
                    <path id="Path_12" data-name="Path 12" d="M23.647,18.573l-3.879-3.879a10.7,10.7,0,0,0,1.175-4.7,9.992,9.992,0,1,0-9.992,9.992,10.7,10.7,0,0,0,4.7-1.175l3.879,3.879a2.841,2.841,0,0,0,4.114,0A3.063,3.063,0,0,0,23.647,18.573Zm-12.7-.94a7.641,7.641,0,1,1,7.641-7.641A7.625,7.625,0,0,1,10.952,17.632Z" transform="translate(-0.96)" fill="#323979"/>
                  </g>
                </g>
              </svg>
          </button>
        </form>

        <avoid-items></avoid-items>
        <favorite-items></favorite-items>

        <router-link to="/photo-scan">
          <div id="camera-scan">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.576" height="43.576" viewBox="0 0 43.576 43.576">
              <g id="Group_1" data-name="Group 1" transform="translate(-373 -750)">
                <g id="qr-code" transform="translate(373 750)">
                  <path id="Path_1" data-name="Path 1" d="M377.376,0h-6.1a1.277,1.277,0,1,0,0,2.553h6.1a2.159,2.159,0,0,1,2.157,2.157v6.1a1.277,1.277,0,1,0,2.553,0V4.71A4.715,4.715,0,0,0,377.376,0Z" transform="translate(-338.51)" fill="#fff"/>
                  <path id="Path_2" data-name="Path 2" d="M1.277,12.085a1.277,1.277,0,0,0,1.277-1.277V4.71A2.159,2.159,0,0,1,4.71,2.553h6.1a1.277,1.277,0,1,0,0-2.553H4.71A4.715,4.715,0,0,0,0,4.71v6.1a1.277,1.277,0,0,0,1.277,1.277Z" transform="translate(0 0)" fill="#fff"/>
                  <path id="Path_3" data-name="Path 3" d="M10.809,379.532H4.71a2.159,2.159,0,0,1-2.157-2.157v-6.1a1.277,1.277,0,1,0-2.553,0v6.1a4.715,4.715,0,0,0,4.71,4.71h6.1a1.277,1.277,0,1,0,0-2.553Z" transform="translate(0 -338.51)" fill="#fff"/>
                  <path id="Path_4" data-name="Path 4" d="M380.809,370a1.277,1.277,0,0,0-1.277,1.277v6.1a2.159,2.159,0,0,1-2.157,2.157h-6.1a1.277,1.277,0,1,0,0,2.553h6.1a4.715,4.715,0,0,0,4.71-4.71v-6.1A1.277,1.277,0,0,0,380.809,370Z" transform="translate(-338.51 -338.51)" fill="#fff"/>
                </g>
                <g id="Path_5" data-name="Path 5" transform="translate(384 761)" fill="none">
                  <path d="M10.417,0A10.417,10.417,0,1,1,0,10.417,10.417,10.417,0,0,1,10.417,0Z" stroke="none"/>
                  <path d="M 10.41653442382813 2.000003814697266 C 5.775644302368164 2.000003814697266 2.000003814697266 5.775644302368164 2.000003814697266 10.41653442382813 C 2.000003814697266 15.05742454528809 5.775644302368164 18.83306503295898 10.41653442382813 18.83306503295898 C 15.05742454528809 18.83306503295898 18.83306503295898 15.05742454528809 18.83306503295898 10.41653442382813 C 18.83306503295898 5.775644302368164 15.05742454528809 2.000003814697266 10.41653442382813 2.000003814697266 M 10.41653442382813 3.814697265625e-06 C 16.16942405700684 3.814697265625e-06 20.83306503295898 4.663644790649414 20.83306503295898 10.41653442382813 C 20.83306503295898 16.16943359375 16.16942405700684 20.83306503295898 10.41653442382813 20.83306503295898 C 4.663644790649414 20.83306503295898 3.814697265625e-06 16.16943359375 3.814697265625e-06 10.41653442382813 C 3.814697265625e-06 4.663644790649414 4.663644790649414 3.814697265625e-06 10.41653442382813 3.814697265625e-06 Z" stroke="none" fill="#fff"/>
                </g>
                <g id="qr-code-2" data-name="qr-code" transform="translate(373 750)">
                  <path id="Path_1-2" data-name="Path 1" d="M377.376,0h-6.1a1.277,1.277,0,1,0,0,2.553h6.1a2.159,2.159,0,0,1,2.157,2.157v6.1a1.277,1.277,0,1,0,2.553,0V4.71A4.715,4.715,0,0,0,377.376,0Z" transform="translate(-338.51)" fill="#fff"/>
                  <path id="Path_2-2" data-name="Path 2" d="M1.277,12.085a1.277,1.277,0,0,0,1.277-1.277V4.71A2.159,2.159,0,0,1,4.71,2.553h6.1a1.277,1.277,0,1,0,0-2.553H4.71A4.715,4.715,0,0,0,0,4.71v6.1a1.277,1.277,0,0,0,1.277,1.277Z" transform="translate(0 0)" fill="#fff"/>
                  <path id="Path_3-2" data-name="Path 3" d="M10.809,379.532H4.71a2.159,2.159,0,0,1-2.157-2.157v-6.1a1.277,1.277,0,1,0-2.553,0v6.1a4.715,4.715,0,0,0,4.71,4.71h6.1a1.277,1.277,0,1,0,0-2.553Z" transform="translate(0 -338.51)" fill="#fff"/>
                  <path id="Path_4-2" data-name="Path 4" d="M380.809,370a1.277,1.277,0,0,0-1.277,1.277v6.1a2.159,2.159,0,0,1-2.157,2.157h-6.1a1.277,1.277,0,1,0,0,2.553h6.1a4.715,4.715,0,0,0,4.71-4.71v-6.1A1.277,1.277,0,0,0,380.809,370Z" transform="translate(-338.51 -338.51)" fill="#fff"/>
                </g>
              </g>
            </svg>
          </div>
        </router-link>

      </div>
    </main>
  </div>
</template>

<script>
  import AvoidItems from './fragments/AvoidItems.vue'
  import FavoriteItems from './fragments/FavoriteItems.vue'

export default {
  name: 'homepage',

  components: {
    AvoidItems,
    FavoriteItems
  },

  data () {
    return {
      user: {
        name: 'Paula'
      }
    }
  }
}
</script>
