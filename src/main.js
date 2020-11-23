
import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from './Homepage.vue'
import PhotoScan from './PhotoScan.vue'

import './assets/styles/homepage.scss';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Homepage },
  { path: '/photo-scan', component: PhotoScan }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')