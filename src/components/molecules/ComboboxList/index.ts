import Combobox from '^/components/molecules/Combobox';
import {
  CheckStatus,
  ComponentDataType,
  ComponentStatus,
  DepthFirstSearchParameter,
  ExpandStatus,
} from '^/types';
import './style.scss';

interface Props {
  depth: number;
  nodes: ComponentDataType[];
  checkStatuses: ComponentStatus;
  expandStatuses: ExpandStatus;
  onClick: (newCheckStatus: ComponentStatus) => void;
  onExpand: (newExpandStatus: ExpandStatus) => void;
}

export default function ComboboxList({
  depth, nodes, checkStatuses, expandStatuses, onClick, onExpand,
}: Props) {
  const rootElement = document.createElement('div');
  rootElement.className = 'combobox-list';

  rootElement.setAttribute('style', `
    margin-left: ${depth * 20}px;
  `);

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
            onClick(newCheckStatuses);
          },
          onChangeExpand: () => {
            const newExpandStatus = {
              ...expandStatuses,
            };
            newExpandStatus[node.id] = !newExpandStatus[node.id];
            onExpand(newExpandStatus);
          },
        })
      );

      if (!expandStatuses[node.id] || node.children.length <= 0) {
        return;
      }

      rootElement.appendChild(
        ComboboxList({
          depth: depth + 1,
          nodes: node.children,
          checkStatuses,
          expandStatuses,
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
          onExpand,
        })
      );
    });
  }

  render();
  return rootElement;
}
