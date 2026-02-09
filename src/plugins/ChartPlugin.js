import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
    console.log("Chart Plugin installed");
  },
};
