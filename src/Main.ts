import Text from '^/components/atoms/Text';
import Button from '^/components/atoms/Button';
import {
  useFunctionComponentHooks,
} from '^/hooks/useFunctionComponentHooks';

export default function Main() {
  const rootElement = document.createElement('div');
  function render() {
    rootElement.appendChild(Text({
      text: `Current Value 1: ${counter()}`,
    }));
    rootElement.appendChild(Button({
      text: 'Increase',
      onClick: increaseCounter,
    }));
    rootElement.appendChild(Button({
      text: 'Decrease',
      onClick: decreaseCounter,
    }));

    rootElement.appendChild(Text({
      text: `Current Value 2: ${counter2()}`,
    }));
    rootElement.appendChild(Button({
      text: 'Increase',
      onClick: increaseCounter2,
    }));
    rootElement.appendChild(Button({
      text: 'Decrease',
      onClick: decreaseCounter2,
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

  const [counter2, setCounter2] = useState<number>(0);
  function increaseCounter2(): void {
    setCounter2(counter2() + 1);
  }
  function decreaseCounter2(): void {
    setCounter2(counter2() - 1);
  }

  render();
  return rootElement;
}
