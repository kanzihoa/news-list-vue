<template>
  <div id="app">
    <div>
      <ToolBar />
      <button type="button" @click="loginUser1">Login</button>
    </div>
    <ul>
      <li v-for="item in todoData" v-bind:key="item.id">
        <p>{{ item.title }}</p>
      </li>
    </ul>

    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="isLoading"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utills/bus";
import axios from "axios";

export default {
  name: "App",
  components: { ToolBar, Spinner },
  methods: {
    fetchData() {
      console.log("hello");
    },
  },
  data() {
    return {
      isLoading: false,
      todoData: [],
    };
  },
  methods: {
    startSpinner() {
      this.isLoading = true;
    },
    endSpinner() {
      this.isLoading = false;
    },
    loginUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          console.log(response.data);
          if (response.data.id === 1) {
            console.log("사용자가 인증 되었습니다.");
            axios
              .get("https://jsonplaceholder.typicode.com/todos")
              .then((response) => {
                console.log(response.data);
                this.todoData = response.data;
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async loginUser1() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1",
        );
        if (response.data.id === 1) {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos",
          );
          this.todoData = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
