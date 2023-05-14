## vue - example project

### 1. 버전

- vue 2.6.14
- vue-router: 3.5.1,
- vuex: 3.6.2

### 2. 설명

vue 설치부터 초기 환경세팅, router, vuex를 실습해본다.

### 3. 프로젝트 구성 파일에 대한 키워딩 및 설명

#### [설치 및 환경세팅]

1. node 설치(node는 webpack으로 구성되어있음, node위에 라이브러리를 올려서 사용.)
2. vue cli 설치
3. `create vue`
4. 설치할 때 선택 속성 키워드 (babel, progressive, vuex(store)… 등등)
5. 속성 선택할 때 (Y/n)일 경우, 대문자 선택.
6. 프로젝트의 시작, 가장 먼저 봐야할 파일:
   1. 자바스프링: `pom.xml, application.yml`
   2. node기반: `package.json`
7. package.json에서 dependency와 devdependency의 차이
   1. 선자는 빌드할 때, 들어가고 후자는 빌드할 때는 빠짐 - 데브 디펜던시는 개발할 때 도움이 되는 패키지들
8. npm 라이브러리 확인 - dev에 있냐 아니냐 → 배포 때 문제가 있을 수 있음.
9. vue 2.6.XX 버전 설치하기
10. **babel**
    - babel이란?
      - 현재 및 이전 브라우저 또는 환경에서 ES5+코드를 이전 버전과 호환되는 js 버전으로 변환하는 데 주로 사용되는 도구체인.
      - babel은 구문 변환기를 통해 최신 버전의 js를 지원함.
      - jsx 구문을 변환할 수 있음.
11. `browserslist`
    - `>1%` → 전세계 브라우저 점유율 1프로 이상인것만
    - not dead → 없어진 브라우저는 제외
12. `eslintConfig, prettier` → package.json에 설정되어 있는 부분을 별도로 파일을 만들게 되면 파일을 우선 시해서 적용됨.
13. `.gitignore` 확인 → env 파일 적용되어있는지 확인
14. `.env` → 환경변수 관리해주는 파일 (.모드)
15. `vue.config.js`
    - webpack 설정.
    - `@/ ~~`를 하기 위해선(경로설정) webpack 설정해야함.
16. `js.config.json`
    - module: “esnext” → 자바스크립트 엔진
    - baseUrl: “./” → 이프로젝트 안에서 경로를 지정했을 때, 최상위 루트
    - paths → 절대경로, 상대경로를 설정함 → 여기서 적용이 안되면 webpack 설정.
    - lib: { dom: iterable } → 가상돔
17. `package.lock.json`
    1. node 모듈 안에 있는 구성들을 관리함.
    2. pakage.json에서 사용하는 것을 구성하는 라이브러리들을 관리함.
    3. pakage.lock..json이 없어도 실행은 되지만, 버전에서 차이가 있음.
18. index
    1. index로 되어있는 경우의 경우, 하위 레벨의 파일들을 직접 만들어라 라는 의도가 담김
19. view 디렉토리→ pages 디렉토리.
