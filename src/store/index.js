import Vue from "vue";
import Vuex from "vuex";

// [Vuex란?] - vue의 상태관리 라이브러리 , 상태: data()
// - 여러 컴포넌트가 공통의 상태를 공유하기 위해 관리 되어짐.
// - vuex 상태는 메모리에 저장되는 것이기 때문에 새로고침 시, 초기화 됨.

// [Vuex 사용하기]
// 1. Vue.use()를 통해 Vue가 Vuex 사용함을 선언, store 인스턴스 생성: new Vuex.Store({})
Vue.use(Vuex);

// 2. Store 내에는 속성이 크게 5가지가 있음.
// 2.1. state: 상태의 집합.
// 2.2. getters: state의 값을 변환 시킬 때 사용. computed에 등록. 반환값이 있어야함, 전달인자를 따로 받을 수 없음. (함수를 반환해서 전달인자를 전달할 수는 있음.), default 전달인자는 현재 state를 나타내는 state, getters, rootState, rootGetters. - default 전달인자는 옵션임
// 2.3. mutations: state의 값을 변환 시킬 때 사용. 전달인자를 받을 수 있음. methods에 등록. 동기적(순차적)으로 로직을 다루기 때문에 this.$store.state.mutations.add 등으로 호출할 수 없고, store.commit으로 호출해야함 -> 동기적이기 때문에 state의 추적이 가능함. payload 객체 형식의 전달인자 넘길 수 있음.
// 2.4. actions: state의 값 변화를 비동기적으로 다룰 때 사용. 비동기적 상태 추적을 위해 commit을 사용. 인자로 context를 받음. -> state, getters를 모두 포함함 객체. $store.dispatch를 사용해 호출한다.
// 2.5. modules: 저장소를 모듈화 할 수 있음. 각각 state, mutations, getters를 포함하고 있는 저장소 여러개로 모듈화 할 수 있음.
// 2.5.1. modules 예시
// const moduleA = {
//   state: () => ({...}),
//   getters: {...},
//   mutations: {...},
//   actions: {...},
// }
//
// const moduleB = {
//   state: () => ({...}),
//   getters: {...},
//   mutations: {...},
//   actions: {...},
// }

export default new Vuex.Store({
  state: {
    count: 0,
  },
  // 상태값에 접근해 조작할 때 - computed 역할?
  getters: {
    // increase(state) {
    //   return state.count++;
    // },
  },
  // store의 상태값을 변경함. - method 역할?
  mutations: {
    increaseCount(state, n = 1) {
      state.count += n;
    },
    decreaseCount(state, n = 1) {
      state.count -= n;
    },
    resetCount(state) {
      state.count = 0;
    },
  },
  // 비동기 처리 담당
  actions: {},
  modules: {
    // a: moduleA,
    // b: moduleB
  },
});

// store.state.a
// store.state.b
