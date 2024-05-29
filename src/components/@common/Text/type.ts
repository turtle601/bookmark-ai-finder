import { fontWeight } from '@/styles/fontWeight';
import { typography } from '@/styles/typography';
import { CSSObject } from '@emotion/react';

export interface TextProps {
  label: string;
  fontType?: keyof typeof typography;
  fontWeightType?: keyof typeof fontWeight;
  color?: string;
  etcStyles?: CSSObject;
}
