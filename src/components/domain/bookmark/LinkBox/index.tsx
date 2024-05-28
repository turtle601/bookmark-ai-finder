import { color, spacer } from '@/styles/theme';

import XIcon from '@/assets/x.svg';
import Text from '@/components/@common/Text';

import Flex from '@/components/@common/layout/Flex';
import Center from '@/components/@common/layout/Center';
import Spacer from '@/components/@common/layout/Spacer';

import { getFaviconUrl } from '@/components/domain/bookmark/LinkBox/util';

import type { LinkBoxProps } from '@/components/domain/bookmark/LinkBox/type';

function LinkBox({ url, title, size }: LinkBoxProps) {
  const openLink = () => {
    if (url) {
      const newWindow = window.open('about:blank') as Window;
      newWindow.location.href = url;
    } else {
      alert('지정된 url이 없습니다');
    }
  };

  return (
    <Flex direction="column" align="center" onDoubleClick={openLink}>
      {url ? (
        <Center
          etcStyles={{
            width: `${size + 12}px`,
            height: `${size + 12}px`,
            backgroundColor: color.white,
            borderRadius: '50%',
          }}
        >
          <img
            width={`${size}px`}
            height={`${size}px`}
            src={getFaviconUrl(url)}
            alt={`${title}링크 아이콘`}
          />
        </Center>
      ) : (
        <XIcon />
      )}
      <Spacer direction="vertical" space={spacer.spacing2} />
      <Text color={color.white} label={title} />
    </Flex>
  );
}

export default LinkBox;
