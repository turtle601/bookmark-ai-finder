import { CSSProperties } from 'react';

export type SpacerType = 'vertical' | 'horizontal';

export interface SpacerProps<T extends SpacerType> {
  direction: T;
  space: CSSProperties[T extends 'vertical' ? 'width' : 'height'];
}
