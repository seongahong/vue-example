<template>
  <div class="right">
    <div class="right__view">Right</div>
    <div class="right">
      <button @click="decrease">decrease</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayRight",
  methods: {
    decrease() {
      this.$store.state.count--;
    },
  },
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
