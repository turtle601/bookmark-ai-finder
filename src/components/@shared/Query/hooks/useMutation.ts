import { useState, useEffect } from 'react';

import { useQueryDispatch } from '@/components/@shared/Query/context/hooks';

import type { MutationParameter } from '@/components/@shared/Query/type';

export const useMutation = <T>({
  queryKeys,
  mutationFn,
}: MutationParameter<T>) => {
  const dispatch = useQueryDispatch();

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const refetchQuerys = () => {
    queryKeys.forEach((queryKey) => {
      dispatch({ type: 'REFETCH', queryKey });
    });
  };

  const mutationData = async () => {
    setIsLoading(true);
    try {
      const response = await mutationFn();
      if (!response) throw new Error('데이터를 불러오지 못했습니다');
      setData(response);
      refetchQuerys();
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, mutationData };
};
