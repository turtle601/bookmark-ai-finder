import { useEffect, useState } from 'react';

import { givePropsToChildren } from '@/components/@shared/Fetch/util';

import type { FetchProps } from '@/components/@shared/Fetch/type';

function Fetch<T>({
  promiseFn,
  suspense,
  errorBoundary,
  children,
}: FetchProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await promiseFn();
        if (!response) throw new Error(`데이터를 불러오지 못했습니다`);
        setData(response);
      } catch (err) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [promiseFn]);

  if (loading) return <>{suspense}</>;
  if (isError) return <>{errorBoundary}</>;

  return <>{givePropsToChildren(data, children)}</>;
}

export default Fetch;
