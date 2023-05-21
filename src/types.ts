export enum CheckStatus {
  NONE = 'none',
  PARTIAL = 'partial',
  FULL = 'full',
}

export interface ComponentDataType {
  id: number;
  title: string;
  children: ComponentDataType[];
}

export type ComponentStatus = Record<ComponentDataType['id'], CheckStatus>;
export type ExpandStatus = Record<ComponentDataType['id'], boolean>;

export interface DepthFirstSearchParameter {
  nodeArray: ComponentDataType[];
  nodeId: number;
  newCheckStatuses: ComponentStatus;
  newCheckStatus?: CheckStatus;
}

export interface DepthFirstSearchExpandParameter {
  nodeArray: ComponentDataType[];
  nodeId: number;
  newExpandStatuses: ExpandStatus;
}
