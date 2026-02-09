import Vue from "vue";
import VueRouter from "vue-router";
import ItemView from "../views/ItemView.vue";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ChartView from "../views/ChartView.vue";
import bus from "../utills/bus";
import { store } from "../store/index";
// import createListView from "../views/CreateListview.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // path : url 주소
      path: "/news",
      name: "news",
      // component : url 주소로 갔을 때 표시될 컴포넌트
      // component: createListView("NewsView"), HOD 컴포넌트
      component: NewsView,
      beforeEnter: (to, from, next) => {
        // console.log("to", to);
        // console.log("from", from);
        // console.log("next", next);
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log(`${to.name} routes fetched`);
            bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      // component: createListView("AskView"), HOD 컴포넌트
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log(`${to.name} routes fetched`);
            // bus.$emit("end:spinner"); // 각 컴포넌트 mounted
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView("JobsView"), HOD 컴포넌트
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log(`${to.name} routes fetched`);
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/chart",
      name: "chart",
      component: ChartView,
    },
  ],
});
