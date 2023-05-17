import Combobox from '^/components/molecules/Combobox';
import { CheckStatus, ComponentDataType } from '^/types';
import './style.scss';

interface Props {
  nodes: ComponentDataType[];
  onClick: (nodeId: number, newCheckStatus: CheckStatus) => void;
}

export default function ComboboxList({ nodes, onClick }: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'combobox-list';

  function render() {
    nodes.forEach(node => {
      const childToBeAppended = node.children.length > 0
        ? ComboboxList({
          nodes: node.children,
          onClick: () => {
            /**
             * @todo
             * Implement this method
             */
          },
        }) : Combobox({
          node,
          onClick: () => {
            switch (node.checkStatus) {
              case CheckStatus.FULL:
                onClick(node.id, CheckStatus.NONE);
                break;
              case CheckStatus.PARTIAL:
              case CheckStatus.NONE:
                onClick(node.id, CheckStatus.FULL);
                break;
              default:
                break;
            }
          },
        });
      rootElement.appendChild(childToBeAppended);
    });
  }

  render();
  return rootElement;
}
