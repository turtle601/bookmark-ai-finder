import { CSSObject } from '@emotion/react';

export type SpacerType = 'vertical' | 'horizontal';

export interface SpacerProps<T extends SpacerType> {
  direction: T;
  space: CSSObject[T extends 'vertical' ? 'width' : 'height'];
}
