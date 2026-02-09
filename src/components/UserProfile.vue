<template>
  <div>
    <section>
      <div class="user-info">
        <i class="fa-solid fa-user"></i>
        <div class="user-info__rcont">
          <slot name="username"></slot>
          <span class="time-ago">
            <slot name="time"></slot>
          </span>
          <span v-if="info.karma" class="karma">
            <slot name="karma"></slot>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    info: [],
  },
  // computed: {
  //   userInfo() {
  //     console.log(this.$store.state.user);
  //     return this.$store.state.user;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
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
  .karma {
    font-weight: 700;
    font-size: 12px;
  }
}
</style>
