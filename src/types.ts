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

export interface ComponentStatus {
  id: ComponentDataType['id'];
  checkStatus: CheckStatus;
}
