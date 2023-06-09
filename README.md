# ViteVanillaTSComponentPractice
- Vite + Vanilla TypeScript + SCSS를 사용하여, 다단계 콤보박스를 제작해보는 연습.
- Atomic Design Pattern 사용.
- 작은 것부터 시작하여 큰 것으로 올라가는, Bottom-Up 방식으로 설계 후 구현.
- 컴포넌트의 의존성을 최소화하는 방향을 생각하며 설계할 것. 즉, 컴포넌트를 만들 때 다른 것에 의존하는 경우를 최대한 배제하기.
- 참고 자료: [복잡한 컴포넌트 유연하게 설계하기](https://velog.io/@moreso/%EB%B3%B5%EC%9E%A1%ED%95%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9C%A0%EC%97%B0%ED%95%98%EA%B2%8C-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0)

## 참고사항
- React같은 프레임워크나 상태 관리 라이브러리를 사용하거나 구현하지 않았기 때문에, Prop Drilling이 필연적으로 일어날 수 있음.
- useEffect 또한 구현되지 않았기 때문에, 오직 React와 유사하게 구현된 useState만을 사용.

## 구현 후기 (2023년 5월 26일 시점)
- 어떤 어려움이 있었는가?
  - 상위 컴포넌트에 State가 있는데 그 하위 컴포넌트에 State를 사용하면, 상위 컴포넌트가 재렌더링 될 때마다 하위 컴포넌트가 완전 소멸되는 문제가 있었다.
  - 그래서 하위 컴포넌트는 Prop만 두게 되었고, State는 최상위 컴포넌트에만 두게 되었다.
  - 이에 따라, Prop Drilling이 필연적으로 발생했기 때문에, 하위 컴포넌트로 내려갈수록 상위 컴포넌트로부터 받아와야 할 Prop이 무지막지하게 많아져버렸다.
- 그럼 이 어려움을 어떻게 해결하지?
  - Proxy 객체를 사용하여 상태 관리를 하면 된다고 들었다.
  - 그러나, React나 Vue의 컴포넌트의 상태 관리에 Proxy를 사용한다는 얘기를 최근에 들었을 정도로 아직 Proxy를 사용한 경험이 없어 학습이 필요한 상태.
  - 참고: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
