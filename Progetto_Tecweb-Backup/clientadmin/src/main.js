import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

export const socket = io("http://localhost:3000/", {
  withCredentials: true,
  extraHeaders: {
    "data-from-twitter": "data-from.twitter",
  },
});
Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
