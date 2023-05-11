# ViteVanillaTSComponentPractice
- Vite + Vanilla TypeScript + SCSS를 사용하여, 다단계 콤보박스를 제작해보는 연습.
- Atomic Design Pattern 사용.
- 작은 것부터 시작하여 큰 것으로 올라가는, Bottom-Up 방식으로 설계 후 구현.
- 컴포넌트의 의존성을 최소화하는 방향을 생각하며 설계할 것. 즉, 컴포넌트를 만들 때 다른 것에 의존하는 경우를 최대한 배제하기.
- 참고 자료: [복잡한 컴포넌트 유연하게 설계하기](https://velog.io/@moreso/%EB%B3%B5%EC%9E%A1%ED%95%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9C%A0%EC%97%B0%ED%95%98%EA%B2%8C-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0)

## 참고사항
- React같은 프레임워크나 상태 관리 라이브러리를 사용하거나 구현하지 않았기 때문에, Prop Drilling이 필연적으로 일어날 수 있음.
- useEffect 또한 구현되지 않았기 때문에, 오직 React와 유사하게 구현된 useState만을 사용.
