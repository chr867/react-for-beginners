기술이 해결하려는 문제를 알지 못하고 배우려 한다면 기술의 장점을 이해하지 못할 것.

React.js의 목표 → interactive한 UI를 쉽게 만들기

interactive한 어플리케이션에서 하는 작업들 모두가 event들을 감지하는 일이다.

### React 규칙

HTML을 직접 작성하지않는다.

### React Js Element를 만드는 방법

React.createElement(tag-name. {prop: “”}, “Content”)

prop에 EventListener, style 설정 가능

React-dom을 활용해 HTML에 배치할 수 있음 → ReactDOM.render(Element, Target)

### JSX를 사용한 Element 만들기

HTML 태그를 정의하는 것으로 React Element를 만들 수 있음

Component로 만들기 위해선 함수로 바꿔주면 됨.

Component는 대문자로 시작

### HTML을 업데이트하는 방법(State)

State: 중괄호 안에 변수를 사용

**Vanilla JS와는 달리 React.js는 바뀐 부분만 업데이트 함**

렌더링을 발생시키는 방법

React.useState() → 배열 디스트럭처링 활용 [0] 초기값, [1] setState 함수

핸들러 함수를 활용해 State를 변경하면 컴포넌트를 리렌더링

Input 과 State → value에 state, eventListener를 활용한 UnitConverter

### Props

부모 컴포넌트에서 자식 컴포넌트에 넘겨주는 Properties

자식 컴포넌트에 의해 부모 컴포넌트의 스테이트 변경이 일어난다면 부모 컴포넌트의 리렌더링 발생

불필요한 렌더링을 막기위한 Memo 기능 → Prop에 변경이 없다면 리렌더링을 하지 않는다.

무한한 컴포넌트 확장성, 부모 컴포넌트와 자식 컴포넌트

### Props Types

타입 체크

prop-types 패키지 필요

Component.propTypes ={

name: PropTypes.type

}

### create-react-app

css module화 

### 컴포넌트가 처음 렌더링 될 때만 작동해야 하는 코드

ex) API를 호출할 때 

useEffect 함수 사용.

**Deps(useEffect 함수 2번째 argument)**

- 배열을 사용, 특정 state가 변했을 때만 실행될 코드

**CleanUpFunction**

- 컴포넌트가 삭제될 때 실행될 코드
- effectFunction 안에서 return function으로 구현

Array

```jsx
  const [toDoList, setToDoList] = useState([]);
  setToDoList(toDoList => [toDo, ...toDoList]);
```

### Router
URL을 보고 있는 컴포넌트
Link -> **새로고침** 없이 컴포넌트간 이동

### gh-pages를 사용하면 쉽게 배포 가능