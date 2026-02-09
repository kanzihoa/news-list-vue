<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">joined : {{ userInfo.created }}</template>
      <template slot="karma">karma : {{ userInfo.karma }}</template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;

    this.$store.dispatch("FETCH_USER", userName);
    // axios
    //   .get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`)
    //   .then((resp) => {
    //     this.userInfo = resp.data;
    //     console.log(this.userInfo);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
