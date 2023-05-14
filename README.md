## vue - example project

### 1. 버전
- vue 2.6.14
- vue-router: 3.5.1,
- vuex: 3.6.2

### 2. 설명
vue 설치부터 초기 환경세팅, router, vuex를 실습해본다.

### 3. router, route 차이
- router는 웹 어플리케이션 전체에서 딱 하나만 존재하고 전반적인 라우터 기능을 관리하는 router 인스턴스. 
- route는 현재 라우터의 상태를 관리하는 객체. (현재 경로를 관리.)

### 4. Vue2.x lifecycle
- vue의 생명주기는 크게 Create, Mount, Update, Destroy 단계로 나눌 수 있음.

1. Create는 컴포넌트를 초기화 하는 단계이다. 가장 처음 실행되고 DOM에 추가 되기 전 단계이다. beforeCreate, created 훅이 있다.
- 1.1. beforeCreate: 가장 먼저 실행된다. data가 생기기 이전에 동작한다. data, methods 등 모두 사용할 수 없다.
- 1.2. created: data, methods를 사용할 수 있는 단계, templete, 가상돔은 마운트 및 렌더링 되지 않은 상태이다.
- created는 부모 -> 자식 순으로 실행됨.

2. Mount는 DOM에 추가되는 단계이다. 초기 렌더링 직전에 컴포넌트에 직접 접근이 가능하다. 렌더링 전 DOM을 변경하고자 한다면 Mount단계에서 지원하는 훅을 활용하면 된다.
- 하지만 컴포넌트 초기에 세팅해야할 데이터는 create 단계에서 하는게 좋다.
- 2.1. beforeMount: templete이 컴파일 되는 단계, 아직 DOM에 접근할 수는 없다.
- 2.2. mounted: templete, DOM에 직접적인 접근이 가능함. 
- mounted는 최하위 자식부터 mount된다. 부모는 자식의 mounted가 끝나기 전까지 실행되지 않음

3. Update는 재렌더링 시 실행되는 단계, 
- 3.1. beforeUpdate: 데이터 변화가 일어나지만 렌더링이 다시 일어나기 전에 추가 작업이 가능함. DOM이 리렌더링되고 패치되기 직전에 실행.
- 3.2. updated: 컴포넌트의 데이터가 변하여 리렌더링이 일어난 후에 실행 됨. 이때 data를 건드리게 되면 무한루프에 빠질 수 있음.

4. Destroy(Destruction)는 해체(소멸) 단계이다. beforeDestroy, destroyed 훅이 있다.
- 4.1. beforeDestroy: 컴포넌트가 소멸되기 직전에 호출된다. 해체 직전이기 떄문에 모든 속성에 접근이 가능하다.
- 4.2. destroyed: 컴포넌트가 제거된 후에 호출된다. 모든 이벤트 리스너가 제거되고 모든 하위 컴포넌트들도 제거된다.



