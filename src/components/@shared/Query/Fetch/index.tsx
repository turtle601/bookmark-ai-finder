import { useQuery } from '@/components/@shared/Query/hooks/useQuery';
import { givePropsToChildren } from '@/components/@shared/Query/util';

import type { IFetchProps } from '@/components/@shared/Query/Fetch/type';

function Fetch<T>({
  queryKey,
  queryFn,
  suspense,
  errorBoundary,
  children,
}: IFetchProps<T>) {
  const state = useQuery({ queryKey, queryFn });

  if (!state[queryKey]) return null;
  if (state[queryKey].isLoading) return <>{suspense}</>;
  if (state[queryKey].isError) return <>{errorBoundary}</>;

  return <>{givePropsToChildren(state[queryKey].data, children)}</>;
}

export default Fetch;
