import EndTipArrow from '^/components/atoms/EndTipArrow';

export default function Main() {
  const rootElement = document.createElement('div');
  function render() {
    rootElement.appendChild(EndTipArrow({
      width: '100px',
      height: '100px',
    }));
  }

  render();
  return rootElement;
}
