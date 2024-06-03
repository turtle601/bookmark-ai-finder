import { QueryAction, QueryState } from '@/components/@shared/Query/type';

export const initailState: QueryState = {};

export function reducer(state: QueryState, action: QueryAction): QueryState {
  switch (action.type) {
    case 'SET_ISLOADING':
      return {
        ...state,
        [action.queryKey]: {
          ...state[action.queryKey],
          isLoading: action.isLoading,
        },
      };
    case 'SET_ISERROR':
      return {
        ...state,
        [action.queryKey]: {
          ...state[action.queryKey],
          isError: action.isError,
        },
      };
    case 'SET_FETCH_DATA':
      return {
        ...state,
        [action.queryKey]: {
          ...state[action.queryKey],
          data: action.data,
        },
      };
    case 'REFETCH':
      if (!state[action.queryKey])
        throw new Error('queryKey에 할당된 Fetch 함수가 없습니다');

      return {
        ...state,
        [action.queryKey]: {
          ...state[action.queryKey],
          retryCount: (state[action.queryKey].retryCount || 0) + 1,
        },
      };
    default:
      throw new Error('지정된 액션이 없습니다!!');
  }
}
