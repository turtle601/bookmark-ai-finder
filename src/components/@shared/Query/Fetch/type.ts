import { ReactElement, ReactNode } from 'react';

export interface FetchProps<T> {
  queryKey: string;
  queryFn: () => Promise<T>;
  suspense: ReactNode | string;
  errorBoundary: ReactNode | string;
  children: ReactElement[] | ReactNode;
}
