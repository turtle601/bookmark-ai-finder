import { useRef } from 'react';

import Flex from '@/components/@common/layout/Flex';
import Folder from '@/components/domain/bookmark/Folder';
import LinkBox from '@/components/domain/bookmark/LinkBox';
import RightClick from '@/components/@shared/RightClick';
import Text from '@/components/@common/Text';
import Mutation from '@/components/@shared/Query/Mutation';

import { spacer } from '@/styles/theme';

import {
  getBookmarksData,
  isLinkBox,
} from '@/components/domain/bookmark/BookmarkList/util';
import { sendMessageForChrome } from '@/utils/chrome';

import type {
  BookmarkListProps,
  MutationReturnType,
} from '@/components/domain/bookmark/BookmarkList/type';

function BookmarkList({ folder, data }: BookmarkListProps) {
  const triggerRefs = useRef<Record<string, HTMLButtonElement>>({});
  const bookmarksData = getBookmarksData(folder, data || []);

  const deleteBookmark =
    (bookmarkId: string): MutationReturnType =>
    async () => {
      return await sendMessageForChrome({
        action: 'deleteBookmark',
        options: {
          bookmarkId,
        },
      });
    };

  return (
    <Flex gap={spacer.spacing4}>
      {bookmarksData.map((bookmark) => {
        return (
          <RightClick.Trigger
            key={bookmark.id}
            id={bookmark.id}
            ref={(el: HTMLButtonElement) =>
              (triggerRefs.current[bookmark.id] = el)
            }
            showMenu={
              <RightClick.Menu
                id={bookmark.id}
                etcStyles={{
                  width: '100px',
                  borderRadius: spacer.spacing2,
                  padding: spacer['spacing2.5'],
                }}
              >
                <Mutation
                  queryKeys={['bookmarks']}
                  mutationFn={deleteBookmark(bookmark.id)}
                  suspense={'로딩 중'}
                  errorBoundary={'에러 발생'}
                >
                  <RightClick.Item>
                    <Text label="삭제" />
                  </RightClick.Item>
                </Mutation>
              </RightClick.Menu>
            }
          >
            {isLinkBox(bookmark) ? (
              <LinkBox url={bookmark.url} title={bookmark.title} size={32} />
            ) : (
              <Folder title={bookmark.title} />
            )}
          </RightClick.Trigger>
        );
      })}
    </Flex>
  );
}

export default BookmarkList;
