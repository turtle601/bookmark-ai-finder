import { CSSObject } from '@emotion/react';

export interface FlexProps {
  direction?: CSSObject['flexDirection'];
  justify?: CSSObject['justifyContent'];
  align?: CSSObject['alignItems'];
  gap?: CSSObject['gap'];
  etcStyles?: CSSObject;
}
