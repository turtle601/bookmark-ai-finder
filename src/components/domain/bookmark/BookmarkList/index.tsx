import { MouseEventHandler, useRef } from 'react';

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
import { useRightClickContext } from '@/components/@shared/RightClick/context';

function BookmarkList({ folder, data }: BookmarkListProps) {
  const triggerRefs = useRef<Record<string, HTMLButtonElement>>({});
  const bookmarksData = getBookmarksData(folder, data || []);

  const { setMenuLocation, setSelectedId } = useRightClickContext();

  const handleRightClick =
    (idx: string): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.preventDefault();

      const triggerRef = triggerRefs.current[idx];

      if (triggerRef) {
        setMenuLocation({
          mouseX: event.clientX - triggerRef.getBoundingClientRect().left,
          mouseY: event.clientY - triggerRef.getBoundingClientRect().top,
        });

        setSelectedId(idx);
      }
    };

  if (bookmarksData.length === 0) {
    return <div>등록한 북마크가 없습니다!!</div>;
  }

  return (
    <Flex gap={spacer.spacing4}>
      {bookmarksData.map((bookmark) => {
        return (
          <RightClick.Trigger
            key={bookmark.id}
            ref={(el: HTMLButtonElement) =>
              (triggerRefs.current[bookmark.id] = el)
            }
            showMenu={
              <RightClick.Menu id={bookmark.id}>
                <RightClick.Item>hi</RightClick.Item>
                <RightClick.Item>bye</RightClick.Item>
              </RightClick.Menu>
            }
            onContextMenu={handleRightClick(bookmark.id)}
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
