interface Props {
  rootElement: HTMLElement;
  render: () => void;
}

export function useFunctionComponentHooks({ render, rootElement }: Props) {
  function clearAndRender() {
    rootElement.innerHTML = '';
    render();
  }

  function useState<T>(initState: T): [() => T, (newState: T) => void] {
    let stateValue = initState;

    function getState() {
      return stateValue;
    }

    function setState(newState: T) {
      if (stateValue === newState) {
        return;
      }

      stateValue = newState;
      clearAndRender();
    }

    return [getState, setState];
  }

  /**
   * @TODO
   * Implement useEffect
  */

  return { useState };
}
