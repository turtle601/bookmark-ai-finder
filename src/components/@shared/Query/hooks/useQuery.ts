import { useCallback, useEffect } from 'react';
import {
  useQueryDispatch,
  useQueryState,
} from '@/components/@shared/Query/context/hooks';
import type { IQueryParameter } from '@/components/@shared/Query/type';

export const useQuery = <T>({ queryKey, queryFn }: IQueryParameter<T>) => {
  const state = useQueryState();
  const retry = state[queryKey]?.retryCount;
  const dispatch = useQueryDispatch();

  const setIsLoading = useCallback(
    (isLoading: boolean) =>
      dispatch({ type: 'SET_ISLOADING', queryKey, isLoading }),
    [dispatch, queryKey],
  );

  const setIsError = useCallback(
    (isError: boolean) => dispatch({ type: 'SET_ISERROR', queryKey, isError }),
    [dispatch, queryKey],
  );

  const setData = useCallback(
    (data: T) => dispatch({ type: 'SET_FETCH_DATA', queryKey, data }),
    [dispatch, queryKey],
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await queryFn();
        if (!response) throw new Error('데이터를 불러오지 못했습니다');
        setData(response);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryFn, retry, setData, setIsError, setIsLoading]);

  return state;
};
