<template>
  <!-- <div>
    <div class="item" v-for="item in this.$store.state.jobs">
      <a :href="item.url">{{ item.title }}</a>
      <div>{{ item.time_ago }} , {{ item.domain }}</div>
    </div>
  </div> -->

  <div>
    <list-item></list-item>
    <!-- <ul class="jobs-item">
      <li class="jobs-item__post" v-for="item in this.$store.state.jobs">
        <div class="jobs-item__points">{{ item.points || 0 }}</div>
        <div class="jobs-item__contents">
          <a :class="'jobs-item__link'" :href="item.url">{{ item.title }}</a>
          <div class="jobs-item__user">
            {{ item.time_ago }}
            by
            <a :href="item.url">{{ item.domain }}</a>
          </div>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixins from "../mixins/ListMixin";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixins],
  // created() {
  //   bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_JOBS")
  //       .then(() => {
  //         console.log("fetched USER");
  //         bus.$emit("end:spinner");
  //       })
  //       .catch(() => {
  //         console.log(erorr);
  //       });
  //   }, 3000);
  // },
};
</script>
