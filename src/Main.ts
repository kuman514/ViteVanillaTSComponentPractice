import { useFunctionComponentHooks } from '^/hooks/useFunctionComponentHooks';
import {
  CheckStatus,
  ComponentStatus,
  DepthFirstSearchExpandParameter,
  DepthFirstSearchParameter,
  ExpandStatus,
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

  function getInitExpandStatus({
    nodeArray, nodeId, newExpandStatuses,
  }: DepthFirstSearchExpandParameter) {
    newExpandStatuses[nodeId] = false;
    const nodeData = nodeArray[nodeArray.findIndex(node => node.id === nodeId)];
    nodeData.children.forEach(childNode => {
      getInitExpandStatus({
        nodeArray: nodeData.children,
        nodeId: childNode.id,
        newExpandStatuses,
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
  const [getExpandStatuses, setExpandStatuses] = useState<ExpandStatus>(
    (() => {
      const initExpandStatus: ExpandStatus = {};
      initComponentData.forEach(topNode => {
        getInitExpandStatus({
          nodeArray: initComponentData,
          nodeId: topNode.id,
          newExpandStatuses: initExpandStatus,
        });
      });
      return initExpandStatus;
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
        expandStatuses: getExpandStatuses(),
        onExpand: newExapndStatus => {
          setExpandStatuses(newExapndStatus);
        },
      })
    );
  }

  render();
  return rootElement;
}
