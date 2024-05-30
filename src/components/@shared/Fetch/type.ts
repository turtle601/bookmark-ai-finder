import { ReactElement, ReactNode } from 'react';

export interface FetchProps<T> {
  promiseFn: () => Promise<T>;
  suspense: ReactNode | string;
  errorBoundary: ReactNode | string;
  children: ReactElement[] | ReactNode;
}
