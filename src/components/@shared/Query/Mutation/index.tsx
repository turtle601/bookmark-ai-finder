import { giveEventToChildren } from '@/components/@shared/Query/util';
import { useMutation } from '@/components/@shared/Query/hooks/useMutation';

import type { MutationProps } from '@/components/@shared/Query/Mutation/type';

function Mutation<T>({
  queryKeys,
  mutationFn,
  suspense,
  errorBoundary,
  children,
}: MutationProps<T>) {
  const { isLoading, isError, mutationData } = useMutation({
    queryKeys,
    mutationFn,
  });

  if (isLoading) return <>{suspense}</>;
  if (isError) return <>{errorBoundary}</>;

  return <>{giveEventToChildren(mutationData, children)}</>;
}

export default Mutation;
