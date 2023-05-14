<template>
  <div class="right">
    <div class="right__view">Right</div>
    <div class="right">
      <button @click="$store.commit('decreaseCount', 5)">decrease</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayRight",
};
</script>

<style lang="scss" scoped>
.right {
  background-color: rgb(156, 235, 197);
  width: 200px;
  min-width: 200px;
  &__view {
    margin-bottom: 10px;
    font-size: 20px;
  }
  button {
    width: 100px;
  }
}
</style>
