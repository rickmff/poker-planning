import Vue from "vue";
// @ts-ignore
import Chakra, {
  CThemeProvider,
  CReset,
  CBox,
} from "@chakra-ui/vue";

import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";
import "./styles.css"

import Index from "./routes/index.vue";
import Room from "./routes/room.vue";

// Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Chakra);

const routes = [
  { name: "index", path: "/", component: Index },
  { name: "room", path: "/r/:room", component: Room },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(CThemeProvider, [h(CBox, [h(CReset), h(App)])]),
}).$mount("#app");
