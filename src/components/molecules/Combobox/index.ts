import Checkbox from '^/components/atoms/Checkbox';
import ComboboxBody from '^/components/atoms/ComboboxBody';
import EndTipArrow from '^/components/atoms/EndTipArrow';
import Text from '^/components/atoms/Text';
import { CheckStatus, ComponentDataType } from '^/types';
import './style.scss';

interface Props {
  onClick: () => void;
  checkStatus: CheckStatus;
  node: ComponentDataType;
}

export default function Combobox({ onClick, node, checkStatus }: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'combobox';

  function render() {
    rootElement.appendChild(ComboboxBody({
      children: [
        Checkbox({ checkStatus, onClick }),
        Text({ text: node.title }),
        EndTipArrow(),
      ],
    }));
  }

  render();
  return rootElement;
}
