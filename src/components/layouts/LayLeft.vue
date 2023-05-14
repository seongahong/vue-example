<template>
  <div class="left">
    <div class="left__view">Left</div>
    <div class="left__button">
      <button @click="$store.commit('increaseCount', 5)">increase</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayLeft",
};
</script>

<style lang="scss" scoped>
.left {
  width: 200px;
  min-width: 200px;
  background-color: rgb(252, 197, 197);
  height: 100vh;
  &__view {
    margin-bottom: 10px;
    font-size: 20px;
  }
  button {
    width: 100px;
  }
}
</style>
