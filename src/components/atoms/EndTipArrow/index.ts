import './style.scss';

interface Props {
  isExpanded: boolean;
  onClick: () => void;
}

export default function EndTipArrow({ isExpanded, onClick }: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'end-tip-arrow';
  rootElement.textContent = isExpanded ? '▼' : '▶';

  rootElement.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    onClick();
  });

  return rootElement;
}
