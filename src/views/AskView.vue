<template>
  <div>
    <list-item></list-item>

    <!-- <ul class="ask-item">
      <li class="ask-item__post" v-for="item in askItems">
        <div class="ask-item__points">{{ item.points }}</div>
        <div class="ask-item__contents">
          <router-link :class="'ask-item__link'" :to="`/item/${item.id}`">{{
            item.title
          }}</router-link>
          <router-link :class="'ask-item__user'" :to="`/user/${item.user}`">
            by {{ item.user }}
          </router-link>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_ASKS")
  //       .then(() => {
  //         console.log("ASK fetched");
  //         bus.$emit("end:spinner");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // },
};
</script>
