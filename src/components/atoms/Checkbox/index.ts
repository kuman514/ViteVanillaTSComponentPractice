interface Props {
  isChecked: boolean;
  onClick: () => void;
}

export default function Checkbox({ isChecked, onClick }: Props) {
  const rootElement = document.createElement('input');
  rootElement.type = 'checkbox';

  function render() {
    rootElement.checked = isChecked;
    rootElement.addEventListener('click', (event) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
      onClick();
    });
  }

  render();
  return rootElement;
}
