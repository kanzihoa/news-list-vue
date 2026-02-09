<template>
  <div>
    <!-- id, title,  -->
    <ul class="news-item">
      <li class="news-item__post" v-for="item in listItems">
        <div class="news-item__points">{{ item.points || 0 }}</div>
        <div class="news-item__contents">
          <template v-if="item.domain">
            <a :class="'news-item__link'" :href="item.url">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :class="'news-item__link'" :to="`/item/${item.id}`">{{
              item.title
            }}</router-link>
          </template>
          <div class="news-item__etc">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :class="'news-item__user'"
              :to="`/user/${item.user}`"
            >
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url">{{ item.domain }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    // let disPatchName = "";
    // switch (this.$route.name) {
    //   case "news": {
    //     disPatchName = "FETCH_NEWS";
    //     break;
    //   }
    //   case "ask": {
    //     disPatchName = "FETCH_ASKS";
    //     break;
    //   }
    //   case "jobs": {
    //     disPatchName = "FETCH_JOBS";
    //     break;
    //   }
    // }
    // this.$store.dispatch(disPatchName);
  },
  computed: {
    listItems() {
      return this.$store.state.list;
      // const state = this.$store.state;
      // switch (this.$route.name) {
      //   case "news": {
      //     return state.news;
      //   }
      //   case "ask": {
      //     return state.asks;
      //   }
      //   case "jobs": {
      //     return state.jobs;
      //   }
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
.news-item {
  &__post {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  &__contents {
  }
  &__link {
    display: block;
    color: #34495e;
    text-decoration: none;
    &:hover {
      color: #42b883;
      text-decoration: underline;
    }
    &:active {
      color: #34495e;
      text-decoration: underline;
    }
  }
  &__points {
    width: 50px;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    color: #42b883;
  }
  &__time-ago {
    font-size: 12px;
  }
  &__user {
    display: block;
    font-size: 12px;
    color: #444;
    text-decoration: none;
  }
  &__etc {
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: 12px;
    & > a,
    & > button {
      padding-left: 3px;
    }
  }
}
</style>
