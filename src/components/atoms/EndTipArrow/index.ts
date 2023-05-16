import './style.scss';

export default function EndTipArrow() {
  const rootElement = document.createElement('div');
  rootElement.className = 'end-tip-arrow';
  rootElement.textContent = '▶';
  return rootElement;
}
