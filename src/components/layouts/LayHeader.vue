<template>
  <div class="header">
    Header
    <!-- 경로를 지정해 사용할 수 있다.  -->
    <!-- v-bind는 v-bind:to="`/user/${item.username}`"와 같이 동적으로 라우팅 경로를 생성시킬 수 있음 -->
    <!-- <router-link to="/content">Hello</router-link> -->
    <router-link to="/" class="header__tohome">Home</router-link>
    <router-link to="/content">Content</router-link>
  </div>
</template>

<script>
export default {
  name: "LayHeader",
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  background-color: rgb(255, 255, 218);
  &__tohome {
    margin: 0 15px 0 10px;
  }
}
</style>
