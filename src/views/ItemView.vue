<template>
  <div class="item-view">
    <!-- <p>{{ askInfo }}</p> -->
    <user-profile :info="fetchedItem">
      <router-link slot="username" :to="`/user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
      </router-link>
      <template slot="time">posted : {{ fetchedItem.time_ago }}</template>
    </user-profile>
    <!-- <section>
      <div class="user-info">
        <i class="fa-solid fa-user"></i>
        <div class="user-info__rcont">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <span class="time-ago">{{ fetchedItem.time_ago }}</span>
        </div>
      </div>
    </section> -->
    <h2 class="ask-tit">{{ fetchedItem.title }}</h2>

    <section class="ask-detail" v-html="fetchedItem.content"></section>
    <section class="box-comment">
      <h2 class="comment-tit">comments</h2>
      <div class="comment-item" v-for="comment in comments" :key="comments.id">
        <div>
          <i class="fa-solid fa-user"></i>
          {{ comment.user }}
        </div>
        {{ comment.time_ago }}
        <div class="comment-html" v-html="comment.content"></div>
      </div>
    </section>
    <hr />
    <!-- {{ fetchedItem }} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchedItem"]),
    comments() {
      if (!this.fetchedItem || !this.fetchedItem.comments) return [];
      return this.fetchedItem.comments;
    },
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", userId);
  },
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
.item-view {
  padding: 20px;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  &__rcont {
    margin-right: auto;
  }
  .fa-user {
    font-size: 30px;
    margin-right: 5px;
  }
  .user-title {
    font-size: 20px;
  }
  .time-ago {
    display: block;
    margin-top: 3px;
    font-size: 11px;
    color: #000;
  }
  .ask-tit {
    border-top: 1px solid #eee;
  }
}
.ask-detail {
  margin-top: 20px;
  padding-top: 10px;
}
.box-comment {
  margin-top: 20px;
  padding: 10px;
}
.comment-tit {
  margin-bottom: 10px;
  font-size: 20px;
}
.comment-item {
  padding: 10px 20px 10px;
  border-bottom: 1px solid #eee;
  background: #ccc;
}
.comment-html {
  padding: 10px;
  font-size: 14px;
}
</style>
