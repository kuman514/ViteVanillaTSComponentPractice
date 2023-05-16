import Checkbox from '^/components/atoms/Checkbox';
import ComboboxBody from '^/components/atoms/ComboboxBody';
import EndTipArrow from '^/components/atoms/EndTipArrow';
import Text from '^/components/atoms/Text';
import { ComponentDataType } from '^/types';
import './style.scss';

interface Props {
  onClick: () => void;
  node: ComponentDataType;
}

export default function Combobox({ onClick, node }: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'combobox';

  function render() {
    rootElement.appendChild(ComboboxBody({
      children: [
        Checkbox({
          checkStatus: node.checkStatus,
          onClick,
        }),
        Text({ text: node.title }),
        EndTipArrow(),
      ],
    }));
  }

  render();
  return rootElement;
}
