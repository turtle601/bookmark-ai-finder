export interface IQueryState {
  [key: string]: {
    data: unknown;
    isLoading: boolean;
    isError: boolean;
    retryCount: number;
  };
}

export type QueryAction =
  | { type: 'SET_ISLOADING'; queryKey: string; isLoading: boolean }
  | { type: 'SET_ISERROR'; queryKey: string; isError: boolean }
  | { type: 'SET_FETCH_DATA'; queryKey: string; data: unknown }
  | { type: 'REFETCH'; queryKey: string };

export interface IQueryParameter<T> {
  queryKey: string;
  queryFn: () => Promise<T>;
}

export interface IMutationParameter<T> {
  queryKeys: string[];
  mutationFn: (parameter?: unknown) => Promise<T>;
}
