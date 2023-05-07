import './style.scss';

interface Props {
  text?: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: Props) {
  const rootElement = document.createElement('button');

  function render() {
    rootElement.innerHTML = '';
    rootElement.textContent = text ?? null;
    rootElement.addEventListener('click', onClick);
  }

  render();
  return rootElement;
}
