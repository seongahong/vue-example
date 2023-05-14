import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { Content } from "@/components/layouts";
// [router와 route의 차이] - node modules > vue-router > vue-router.js에서 확인할 수 있음.
// - $router는 vue-router 인스턴스 -> go, back, forward 메서드 등 사용가능 -> 전역에서 관리하는 라우터
// - $route는 현재 라우터의 상태를 관리하는 객체 -> 현재경로를 관리하는 라우트
// => this.$router.currentRoute._value 와 this.$route는 같다.
// - 여기서 '$'는 전역객체속성을 의미함
// - 여기서 '_'는 private한 속성을 의미함

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      // 여기에 라우팅 되는 컴포넌트 path, name, component 작성.
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/content",
    name: "Content",
    component: Content,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
