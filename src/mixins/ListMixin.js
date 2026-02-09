import bus from "../utills/bus";
import store from "../store/index";
// mixin
export default {
  mounted() {
    bus.$emit("end:spinner");
    console.log(`${this.$route.name} end:spinner ~~~`);
  },
  // 재사용할 컴포넌트 옵션
  // created() {
  //   bus.$emit("start:spinner");
  //   this.$store
  //     .dispatch("FETCH_LIST", this.$route.name)
  //     .then(() => {
  //       console.log("fetched");
  //       bus.$emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
