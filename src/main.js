import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store/index";
import ChartPlugin from "./plugins/ChartPlugin";

Vue.use(ChartPlugin); // ./plugins/ChartPlugin.js install 실행

Vue.config.productionTip = false;
Vue.config.devtools = true; // 이 줄을 추가하세요

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
