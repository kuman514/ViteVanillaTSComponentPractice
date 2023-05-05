import Text from '^/components/atoms/Text';
import Button from '^/components/atoms/Button';
import {
  useFunctionComponentHooks,
} from '^/hooks/useFunctionComponentHooks';

export default function Main() {
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

  const { useState } = useFunctionComponentHooks({ rootElement, render });

  const [counter, setCounter] = useState<number>(0);

  function increaseCounter(): void {
    setCounter(counter() + 1);
  }

  function decreaseCounter(): void {
    setCounter(counter() - 1);
  }

  render();
  return rootElement;
}
