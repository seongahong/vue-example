<template>
  <div class="app">
    <!-- left가 full-size이므로 left를 기준으로. -->
    <LayLeft />
    <div class="app__container">
      <LayHeader />
      <div class="app__container__box">
        <!-- 경로에 따라 렌더링될 부분 -->
        <router-view></router-view>
        <LayRight />
      </div>
    </div>
  </div>
</template>

<script>
import { LayHeader, LayLeft, LayRight } from "./components/layouts";

export default {
  components: {
    LayHeader,
    LayRight,
    LayLeft,
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  width: 100%;
  height: 100%;
  &__container {
    &__box {
      display: flex;
      width: 100vw;
      height: calc(100vh - 50px);
    }
  }
}
</style>
