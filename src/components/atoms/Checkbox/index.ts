import { CheckStatus } from '^/types';

interface Props {
  checkStatus: CheckStatus;
  onClick: () => void;
}

export default function Checkbox({ checkStatus, onClick }: Props) {
  const rootElement = document.createElement('input');
  rootElement.type = 'checkbox';

  function render() {
    rootElement.checked = checkStatus === CheckStatus.FULL;
    rootElement.indeterminate = checkStatus === CheckStatus.PARTIAL;
    rootElement.addEventListener('click', (event) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
      onClick();
    });
  }

  render();
  return rootElement;
}
