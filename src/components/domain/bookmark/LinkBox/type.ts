export type LinkBoxProps = Pick<
  chrome.bookmarks.BookmarkTreeNode,
  'url' | 'title'
> & { size: number };
