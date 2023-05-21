import { useFunctionComponentHooks } from '^/hooks/useFunctionComponentHooks';
import {
  CheckStatus,
  ComponentStatus,
  DepthFirstSearchParameter,
} from '^/types';
import { initComponentData } from '^/mock';
import ComboboxList from '^/components/molecules/ComboboxList';

export default function Main() {
  const rootElement = document.createElement('div');

  function getInitCheckStatus({
    nodeArray, nodeId, newCheckStatuses,
  }: DepthFirstSearchParameter) {
    newCheckStatuses[nodeId] = CheckStatus.NONE;
    const nodeData = nodeArray[nodeArray.findIndex(node => node.id === nodeId)];
    nodeData.children.forEach(childNode => {
      getInitCheckStatus({
        nodeArray: nodeData.children,
        nodeId: childNode.id,
        newCheckStatuses,
      });
    });
  }

  const { useState } = useFunctionComponentHooks({ rootElement, render });
  const [getCheckStatuses, setCheckStatuses] = useState<ComponentStatus>(
    (() => {
      const initCheckStatus: ComponentStatus = {};
      initComponentData.forEach(topNode => {
        getInitCheckStatus({
          nodeArray: initComponentData,
          nodeId: topNode.id,
          newCheckStatuses: initCheckStatus,
        });
      });
      return initCheckStatus;
    })()
  );

  function render() {
    rootElement.appendChild(
      ComboboxList({
        depth: 0,
        nodes: initComponentData,
        checkStatuses: getCheckStatuses(),
        onClick: newCheckStatus => {
          setCheckStatuses(newCheckStatus);
        },
      })
    );
  }

  render();
  return rootElement;
}
