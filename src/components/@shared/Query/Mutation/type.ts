import { ReactElement, ReactNode } from 'react';

export interface IMutationProps<T> {
  queryKeys: string[];
  mutationFn: (parameter?: unknown) => Promise<T>;
  suspense: ReactNode | string;
  errorBoundary: ReactNode | string;
  children: ReactElement[] | ReactNode;
}
