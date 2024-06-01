import { useRef } from 'react';

import Flex from '@/components/@common/layout/Flex';
import Folder from '@/components/domain/bookmark/Folder';
import LinkBox from '@/components/domain/bookmark/LinkBox';
import RightClick from '@/components/@shared/RightClick';

import { spacer } from '@/styles/theme';

import {
  getBookmarksData,
  isLinkBox,
} from '@/components/domain/bookmark/BookmarkList/util';

import type { BookmarkListProps } from '@/components/domain/bookmark/BookmarkList/type';

function BookmarkList({ folder, data }: BookmarkListProps) {
  const triggerRefs = useRef<Record<string, HTMLButtonElement>>({});
  const bookmarksData = getBookmarksData(folder, data || []);

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
              <RightClick.Menu id={bookmark.id}>
                <RightClick.Item>hi</RightClick.Item>
                <RightClick.Item>bye</RightClick.Item>
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
