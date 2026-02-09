import ListView from "./ListView.vue";
import bus from "../utills/bus.js";

export default function createListView(name) {
  console.log(name);
  return {
    // 재사용할 component 옵션이 들어갈 자리
    name,
    created() {
      bus.$emit("start:spinner");
      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
