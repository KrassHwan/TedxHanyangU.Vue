import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router";
import store from "@/store";
import axios from "axios"

// Vuetify
import vuetify from '@/plugins/vuetify';
import "@mdi/font/css/materialdesignicons.css";

// Copy
import VueClipboard from "vue-clipboard2";

// Third Party
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VuePlayerPlugin from 'vue-youtube-iframe-api'
import VueTyperPlugin from 'vue-typer'

// Global Setting
import Header from "@components/common/Header.vue";


// import style
import 'swiper/css/swiper.css'
import "@assets/common.css";


// Event Bus
export const bus = new Vue();

Vue.config.productionTip = false;
Vue.component("Header", Header);
Vue.use(VueClipboard);
Vue.use(VueAwesomeSwiper)
Vue.use(VueTyperPlugin)
Vue.use(VuePlayerPlugin)


new Vue({
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount("#app");