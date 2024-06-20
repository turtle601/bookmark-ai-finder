import { ReactElement, ReactNode } from 'react';

export interface IFetchProps<T> {
  queryKey: string;
  queryFn: () => Promise<T>;
  suspense: ReactNode | string;
  errorBoundary: ReactNode | string;
  children: ReactElement[] | ReactNode;
}
