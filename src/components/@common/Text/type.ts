import { CSSProperties } from 'react';
import { fontWeight } from '@/styles/fontWeight';
import { typography } from '@/styles/typography';

export interface TextProps {
  label: string;
  fontType?: keyof typeof typography;
  fontWeightType?: keyof typeof fontWeight;
  color?: string;
  etcStyles?: CSSProperties;
}
