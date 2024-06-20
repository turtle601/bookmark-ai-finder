import { CSSObject } from '@emotion/react';

export interface IFlexProps {
  direction?: CSSObject['flexDirection'];
  justify?: CSSObject['justifyContent'];
  align?: CSSObject['alignItems'];
  gap?: CSSObject['gap'];
  etcStyles?: CSSObject;
}
