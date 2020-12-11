import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";
import axios from 'axios'
import VueAxios from 'vue-axios'

export const socket = io("http://localhost:3000/", {
  withCredentials: true,
  extraHeaders: {
    "data-from-twitter": "data-from.twitter",
  },
});

Vue.use(VueAxios, axios);

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
