<template>
  <div class="content">
    <div class="content__view">Count: {{ count }}</div>
    <button @click="$store.commit('resetCount')">reset</button>
  </div>
</template>

<script>
export default {
  name: "Content",
  // state를 화면에 출력시키기 위해 computed 속성을 사용한다.
  computed: {
    count() {
      return this.$store.state.count;
    },
    // age() {
    //   return this.$store.state.age;
    // },
    // isLogin() {
    //   return this.$store.state.isLogin;
    // }

    // [위와 같이 this.$store.state. 가 반복될 경우]
    // mapState라는 helper를 사용할 수 있다.
    // 중복되는 코드를 줄일 수 있음.
    // mapState를 기존 로컬의 computed와 함께 사용하려면 spread 문법 사용
    // computed: {
    // localComputed () {
    //기존의 computed
    // },
    // ...mapState({
    // ...
    //   })
    // }

    // ex) count 상태를 다음과 같이 가져올 수 있다.
    // computed: mapState({
    // #1. 화살표 함수 형태
    // count: state => state.count,

    // #2. 문자열형태 === `state => state.count`
    // countString: 'count',

    // #3. this를 사용해 로컬 상태에 액세스 -> 일반 항수 사용
    // countLocalState (state) {
    //   return state.count + this.localCount
    // }

    // #4. this.count를 store.state.count에 매핑.
    // 'count'
    //})

    // #
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: calc(100vw - 400px);
  background-color: rgb(187, 187, 255);
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
  &__view {
    margin-bottom: 10px;
    font-size: 20px;
  }
  button {
    width: 80px;
  }
}
</style>
