import {
  useFunctionComponentHooks,
} from '^/hooks/useFunctionComponentHooks';
import Checkbox from './components/atoms/Checkbox';

export default function Main() {
  const rootElement = document.createElement('div');
  function render() {
    rootElement.appendChild(Checkbox({
      isChecked: isChecked(),
      onClick: handleOnClickCheckbox,
    }));
  }

  const { useState } = useFunctionComponentHooks({ rootElement, render });

  const [isChecked, setIsChecked] = useState<boolean>(false);
  function handleOnClickCheckbox() {
    setIsChecked(!isChecked());
  }

  render();
  return rootElement;
}
