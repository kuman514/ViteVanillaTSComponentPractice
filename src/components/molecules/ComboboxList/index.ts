import Combobox from '^/components/molecules/Combobox';
import {
  CheckStatus,
  ComponentDataType,
  ComponentStatus,
  DepthFirstSearchParameter,
} from '^/types';
import './style.scss';

interface Props {
  depth: number;
  nodes: ComponentDataType[];
  checkStatuses: ComponentStatus;
  onClick: (newCheckStatus: ComponentStatus) => void;
}

export default function ComboboxList({
  depth, nodes, checkStatuses, onClick,
}: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'combobox-list';

  function handleOnClickCheckbox({
    nodeArray, nodeId, newCheckStatuses, newCheckStatus,
  }: DepthFirstSearchParameter) {
    if (newCheckStatus !== undefined) {
      newCheckStatuses[nodeId] = newCheckStatus;
    }
    const nodeData = nodeArray[nodeArray.findIndex(node => node.id === nodeId)];
    nodeData.children.forEach(childNode => {
      handleOnClickCheckbox({
        nodeArray: nodeData.children,
        nodeId: childNode.id,
        newCheckStatuses,
        newCheckStatus,
      });
    });
  }

  function render() {
    nodes.forEach(node => {
      rootElement.appendChild(
        Combobox({
          checkStatus: checkStatuses[node.id],
          node,
          onClick: () => {
            const newCheckStatuses: ComponentStatus = {
              ...checkStatuses,
            };
            const newCheckStatus: CheckStatus =
              newCheckStatuses[node.id] === CheckStatus.FULL ? CheckStatus.NONE : CheckStatus.FULL;
            handleOnClickCheckbox({
              nodeArray: nodes,
              nodeId: node.id,
              newCheckStatuses,
              newCheckStatus,
            });
            // Set State
            onClick(newCheckStatuses);
          },
        })
      );
      rootElement.appendChild(
        ComboboxList({
          depth: depth + 1,
          nodes: node.children,
          checkStatuses,
          onClick: newCheckStatus => {
            const isAllFull: boolean = node.children.every(
              childNode => newCheckStatus[childNode.id] === CheckStatus.FULL
            );
            const isAllNone: boolean = node.children.every(
              childNode => newCheckStatus[childNode.id] === CheckStatus.NONE
            );

            if (isAllFull) {
              newCheckStatus[node.id] = CheckStatus.FULL;
            } else if (isAllNone) {
              newCheckStatus[node.id] = CheckStatus.NONE;
            } else {
              newCheckStatus[node.id] = CheckStatus.PARTIAL;
            }

            onClick(newCheckStatus);
          },
        })
      );
    });
  }

  render();
  return rootElement;
}
