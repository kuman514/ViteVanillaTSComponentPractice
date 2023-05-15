export enum CheckStatus {
  NONE = 'none',
  PARTIAL = 'partial',
  FULL = 'full',
}

export interface ComponentDataType {
  id: number;
  title: string;
  checkStatus: CheckStatus;
  children: ComponentDataType[];
}
