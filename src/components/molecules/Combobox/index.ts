import Checkbox from '^/components/atoms/Checkbox';
import ComboboxBody from '^/components/atoms/ComboboxBody';
import EndTipArrow from '^/components/atoms/EndTipArrow';
import Text from '^/components/atoms/Text';
import { CheckStatus, ComponentDataType } from '^/types';
import './style.scss';

interface Props {
  node: ComponentDataType;
  checkStatus: CheckStatus;
  onClick: () => void;
  onChangeExpand: () => void;
}

export default function Combobox({
  onClick, node, checkStatus, onChangeExpand,
}: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'combobox';

  function render() {
    const children = [
      Checkbox({ checkStatus, onClick }),
      Text({ text: node.title }),
    ];

    if (node.children.length > 0) {
      children.push(EndTipArrow({ onClick: onChangeExpand }));
    }

    rootElement.appendChild(ComboboxBody({ children }));
  }

  render();
  return rootElement;
}
