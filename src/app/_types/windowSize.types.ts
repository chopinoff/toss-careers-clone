export type Device = 'desktop' | 'mobile';

export interface WindowSize {
  width: number;
  height: number;
  device: Device | undefined;
}
