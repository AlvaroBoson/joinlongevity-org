export interface Node {
  id: string;
  group: string;
  val: number;
  color: string;
  level?: number;
  x?: number;
  y?: number;
  cluster?: string;
  isClusterCenter?: boolean;
  isIndependent?: boolean;
}

export interface Link {
  source: string;
  target: string;
  type: string;
}

export interface NodeDetail {
  fullName: string;
  description: string;
  website?: string;
  type: string;
}
