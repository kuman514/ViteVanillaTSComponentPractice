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

export interface DepthFirstSearchParameter {
  nodeArray: ComponentDataType[];
  nodeId: number;
  newCheckStatuses: ComponentStatus;
  newCheckStatus?: CheckStatus;
}
