import { ReactElement, ReactNode } from 'react';

export interface MutationProps<T> {
  queryKeys: string[];
  mutationFn: () => Promise<T>;
  suspense: ReactNode | string;
  errorBoundary: ReactNode | string;
  children: ReactElement[] | ReactNode;
}
