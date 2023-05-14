import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// vue 인스턴스에 router.js 주입
// vue 인스턴스에 store.js 주입
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app"); // **mount 되는 시점은 render 함수가 콜되는 시점임.

// [참고]
// 위에서 render: (h) => h(App)은 다음과 같은 단계에 거쳐 ES6로 변형된 메소드임.

// #1
// render: function (createElement) {
//   return createElement(App);
// };

// #2
// render (createElement) {
//   return createElement(App);
// };

// #3 -> h는 hyperscript의 약자 (HTML 구조를 생성하는 스크립트.)
// render (h){
//   return h(App);
// };

// #4 -> ES6의 화살표 함수로.
// render: h => h(App);

// render()는 createElement()의 반환값이라고 할 수 있음.
// createElement()는 Virtual DOM (가상돔)을 만들어 렌더링하는 메소드.
