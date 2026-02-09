<template>
  <div class="header">
    <ul class="toolbar-list">
      <li class="toolbar-list__item">
        <router-link to="news">NEWS</router-link>
      </li>
      <li class="toolbar-list__item">
        <router-link to="ask">ASK</router-link>
      </li>
      <li class="toolbar-list__item">
        <router-link to="jobs">JOBS</router-link>
      </li>

      <li class="toolbar-list__item">
        <router-link to="chart">CAHRT</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  padding: 15px;
  border-bottom: 1px solid #ccc;
  background-color: #42b883;
}
.toolbar-list {
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 20px;
  &__item {
    list-style: none;
    & > a,
    & > button {
      text-decoration: none;
      padding: 10px 5px;
      color: #fff;
      font-weight: bold;
      &:active {
        color: #fff;
      }
      &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }
  }
}
</style>
