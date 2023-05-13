import ComboboxBody from '^/components/atoms/ComboboxBody';
import Checkbox, { CheckStatus } from '^/components/atoms/Checkbox';

export default function Main() {
  const rootElement = document.createElement('div');
  function render() {
    rootElement.appendChild(ComboboxBody({
      children: [
        Checkbox({
          checkStatus: CheckStatus.NONE,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick: () => {},
        }),
      ],
    }));
  }

  render();
  return rootElement;
}
