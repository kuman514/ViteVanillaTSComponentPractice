import './style.scss';

interface Props {
  children?: HTMLElement[];
}

export default function ComboboxBody({ children }: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'combobox-body';

  function render() {
    rootElement.innerHTML = '';
    if (children !== undefined) {
      children.forEach(child => {
        rootElement.appendChild(child);
      });
    }
  }

  render();
  return rootElement;
}
