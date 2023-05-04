interface Props {
  text?: string;
}

export default function Text({ text }: Props) {
  const rootElement = document.createElement('div');

  function render() {
    rootElement.innerHTML = '';
    rootElement.textContent = text ?? null;
  }

  render();
  return rootElement;
}
