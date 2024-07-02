import { Global } from '@emotion/react';

import { globalStyle } from '@/shared/config/styles';

const Provider = () => {
  return (
    <>
      <Global styles={globalStyle} />
    </>
  );
};

export default Provider;
