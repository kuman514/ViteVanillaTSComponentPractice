import Text from '^/components/atoms/Text';
import Button from '^/components/atoms/Button';

export default function Main() {
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
      render();
    }

    return [getState, setState];
  }

  const [counter, setCounter] = useState<number>(0);

  function increaseCounter(): void {
    setCounter(counter() + 1);
  }

  function decreaseCounter(): void {
    setCounter(counter() - 1);
  }

  const rootElement = document.createElement('div');
  function render() {
    rootElement.innerHTML = '';
    rootElement.appendChild(Text({
      text: `Current Value: ${counter()}`,
    }));
    rootElement.appendChild(Button({
      text: 'Increase',
      onClick: increaseCounter,
    }));
    rootElement.appendChild(Button({
      text: 'Decrease',
      onClick: decreaseCounter,
    }));
  }

  render();
  return rootElement;
}
