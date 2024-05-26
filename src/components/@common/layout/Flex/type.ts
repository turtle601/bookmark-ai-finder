import { CSSProperties } from 'react';

export interface FlexProps {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
  etcStyles?: CSSProperties;
}
