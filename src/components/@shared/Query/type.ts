type MutationFnType<T> = () => Promise<T>;

export interface QueryState {
  [key: string]: {
    data: any;
    isLoading: boolean;
    isError: boolean;
    retryCount: number;
  };
}

export type QueryAction =
  | { type: 'SET_ISLOADING'; queryKey: string; isLoading: boolean }
  | { type: 'SET_ISERROR'; queryKey: string; isError: boolean }
  | { type: 'SET_FETCH_DATA'; queryKey: string; data: any }
  | { type: 'REFETCH'; queryKey: string };

export interface QueryParameter<T> {
  queryKey: string;
  queryFn: MutationFnType<T>;
}

export interface MutationParameter<T> {
  queryKeys: string[];
  mutationFn: (parameter?: any) => Promise<T>;
}
