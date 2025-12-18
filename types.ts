
export enum AreaType {
  MACRO = 'MACRO',
  STRATEGIC = 'STRATEGIC',
  COMMITTEE = 'COMMITTEE'
}

export interface OrgArea {
  id: string;
  name: string;
  description: string;
  type: AreaType;
  color: string;
  icon?: string;
}

export interface Committee {
  id: string;
  name: string;
  description: string;
  membersRole?: string;
}
