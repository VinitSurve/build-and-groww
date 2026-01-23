declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default content;
}

declare module 'meshline' {
  import { BufferGeometry, Material } from 'three';
  
  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: any[]): void;
  }
  
  export class MeshLineMaterial extends Material {
    constructor(params?: any);
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

export {};
