import './style.scss';

interface Props {
  onClick: () => void;
}

export default function EndTipArrow({ onClick }: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'end-tip-arrow';
  rootElement.textContent = '▶';

  rootElement.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    onClick();
  });

  return rootElement;
}
